import { createHash } from "node:crypto";
import blockedEmailDomains from "./email-domain-blocklist.json";
import { emailDomain, isBlockedDomain, isCommonPersonalEmail, isKnownPersonalMailbox, workEmailMessage } from "./work-email";
import { sampleReports, sampleEdition, sampleScopes } from "./sample-reports";

const blockedDomains = new Set(blockedEmailDomains);

const MAX_BYTES = 16_384;
const emailPattern = /^[^\s@<>\r\n]+@[^\s@<>\r\n]+\.[^\s@<>\r\n]+$/;
const limits = { name: 100, email: 254, company: 150, interest: 200, market: 150, deadline: 10, question: 2500, website: 200, token: 2048, requestId: 36, kind: 20, reportId: 100, segmentYear: 4, consent: 30 };
const required = new Set(["name", "email", "company", "token", "requestId"]);
const unavailable = "We could not confirm your inquiry. Your details are still in the form. Please try again shortly.";

function reply(status: number, message: string, ok = false) {
  return Response.json({ ok, message }, { status, headers: { "Cache-Control": "no-store" } });
}

export async function handleContact(request: Request, env: NodeJS.ProcessEnv = process.env, send: typeof fetch = fetch) {
  const origins = new Set(["https://www.syntheticmarketresearch.com", "https://syntheticmarketresearch.com"]);
  if (env.NODE_ENV === "development") {
    origins.add("http://127.0.0.1:3005");
    origins.add("http://localhost:3005");
  }
  const origin = request.headers.get("origin") || "";
  if (!origins.has(origin)) return reply(403, "Please send your inquiry from our contact page.");
  if (request.headers.get("content-type")?.split(";")[0].trim() !== "application/json") return reply(415, "Please use the inquiry form.");
  if (Number(request.headers.get("content-length")) > MAX_BYTES) return reply(413, "Please shorten your inquiry.");

  let data: Record<string, string>;
  try {
    // Bound streamed bodies too; Content-Length is not a trustworthy size limit.
    const reader = request.body?.getReader();
    if (!reader) return reply(400, "Please complete the inquiry form.");
    const chunks: Uint8Array[] = [];
    let size = 0;
    while (true) {
      const chunk = await reader.read();
      if (chunk.done) break;
      size += chunk.value.length;
      if (size > MAX_BYTES) { await reader.cancel(); return reply(413, "Please shorten your inquiry."); }
      chunks.push(chunk.value);
    }
    const parsed: unknown = JSON.parse(Buffer.concat(chunks).toString("utf8"));
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return reply(400, "Please check the inquiry fields.");
    const input = parsed as Record<string, unknown>;
    if (Object.keys(input).some(key => !Object.hasOwn(limits, key))) return reply(400, "Please use the inquiry form.");
    data = {};
    for (const [key, max] of Object.entries(limits)) {
      const value = input[key] ?? "";
      if (typeof value !== "string" || value.length > max) return reply(400, "Please check the inquiry fields.");
      const trimmed = value.trim();
      if (required.has(key) && !(key === "company" && (input.kind === "newsletter" || input.kind === "publication")) && !trimmed) return reply(400, "Please complete all required fields.");
      if (key !== "question" && /[\r\n\u0000-\u001f\u007f]/.test(trimmed)) return reply(400, "Please check the inquiry fields.");
      data[key] = trimmed;
    }
    if (data.kind && !["report-sample", "publication", "newsletter"].includes(data.kind)) return reply(400, "Please use the inquiry form.");
    if (data.kind === "newsletter") {
      if (data.consent !== "newsletter-v1" || data.reportId || data.segmentYear || data.question || data.interest || data.company || data.market || data.deadline) return reply(400, "Please confirm your newsletter request using the signup form.");
      if (!isKnownPersonalMailbox(data.email) && isBlockedDomain(emailDomain(data.email), blockedDomains)) return reply(400, "Please use an email address that can receive your newsletter.");
    } else if (data.consent) return reply(400, "Please use the appropriate form.");
    if (data.kind === "report-sample") {
      if (!Object.hasOwn(sampleReports, data.reportId)) return reply(400, "Please choose a report from our catalogue.");
      if (data.segmentYear && !['2027', '2028', '2029', '2030', '2031'].includes(data.segmentYear)) return reply(400, "Please choose a year from the report.");
      if (isCommonPersonalEmail(data.email) || isBlockedDomain(emailDomain(data.email), blockedDomains)) return reply(400, workEmailMessage);
    } else if (data.kind !== "newsletter" && (data.reportId || data.segmentYear || data.question.length < 10)) return reply(400, "Please check your email and message.");
    if (!emailPattern.test(data.email) || !emailDomain(data.email) || /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(data.question)) return reply(400, "Please check your email and research question.");
    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(data.requestId)) return reply(400, "Please refresh the page and try again.");
    if (data.deadline && (!/^\d{4}-\d{2}-\d{2}$/.test(data.deadline) || !Number.isFinite(Date.parse(data.deadline)) || new Date(data.deadline).toISOString().slice(0, 10) !== data.deadline)) return reply(400, "Please check the decision deadline.");
  } catch { return reply(400, "Please check the inquiry fields."); }

  if (data.website) return reply(400, "We could not verify this inquiry. Please try again.");
  const { RESEND_API_KEY: apiKey, CONTACT_TO_EMAIL: recipient, CONTACT_FROM_EMAIL: sender, TURNSTILE_SECRET_KEY: secret } = env;
  if (!apiKey || !recipient || !sender || !secret || !emailPattern.test(recipient) || !emailPattern.test(sender)) return reply(503, unavailable);

  try {
    const validation = await send("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret, response: data.token }), signal: AbortSignal.timeout(10_000),
    });
    if (!validation.ok) return reply(503, unavailable);
    const result = await validation.json();
    if (result.success !== true || result.action !== "contact" || result.hostname !== new URL(origin).hostname) return reply(403, "Please complete the security check again.");

    const { name, email, company, interest, market, deadline, question } = data;
    const sampleTitle = data.kind === "report-sample" ? sampleReports[data.reportId] : "";
    const reportContext = sampleTitle ? [`Sample report: ${sampleTitle}`, `Edition: ${sampleEdition}`, `Overview scope: ${sampleScopes[data.reportId] || 'US perspective'}`, `Report page: https://www.syntheticmarketresearch.com/reports/${data.reportId}`, ...(data.segmentYear ? [`Requested segment year: ${data.segmentYear}`] : [])] : [];
    const isNewsletter = data.kind === "newsletter";
    const text = isNewsletter
      ? ["New SMR newsletter signup request", "", `Name: ${name}`, `Email: ${email}`, "Consent version: newsletter-v1", "Consent: I would like to receive The Synthetic Brief by email. I can withdraw my request or unsubscribe at any time.", `Request ID: ${data.requestId}`, "Capture page: https://www.syntheticmarketresearch.com/newsletter"].join("\n")
      : data.kind === "publication"
        ? ["New SMR publication inquiry", "", `Name: ${name}`, `Email: ${email}`, `Organisation: ${company}`, `Topic: ${interest || "General inquiry"}`, "", question].join("\n")
        : [sampleTitle ? "New SMR sample request" : "New SMR research inquiry", "", ...reportContext, `Name: ${name}`, `Work email: ${email}`, `Organisation: ${company}`, `Research interest: ${sampleTitle || interest || "To discuss"}`, `Market / geography: ${market || "To discuss"}`, `Decision deadline: ${deadline || "To discuss"}`, "", "Business question:", question || "Sample overview requested."].join("\n");
    // Same inquiry retries share a provider key, without storing contact data locally.
    const fingerprint = createHash("sha256").update(text).digest("hex");
    const delivery = await send("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json", "Idempotency-Key": `smr-${data.requestId}-${fingerprint}` },
      body: JSON.stringify({ from: `SMR Inquiries <${sender}>`, to: [recipient], reply_to: email, subject: isNewsletter ? "SMR newsletter signup request" : data.kind === "publication" ? `SMR publication inquiry: ${interest || "General inquiry"}` : sampleTitle ? `SMR sample request: ${sampleTitle}` : `SMR research inquiry: ${interest || "New brief"}`, text }),
      signal: AbortSignal.timeout(12_000),
    });
    if (!delivery.ok) return reply(503, unavailable);
    const receipt = await delivery.json();
    if (typeof receipt.id !== "string" || !receipt.id) return reply(503, unavailable);
    return reply(200, isNewsletter ? "Your newsletter signup request has been received." : "Your inquiry has been sent to our team.", true);
  } catch { return reply(503, unavailable); }
}

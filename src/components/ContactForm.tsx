"use client";
import { useRef, useState } from "react";
import { ArrowUpRight, CheckCircle2, LoaderCircle } from "lucide-react";
import Link from "next/link";
import FormSecurity from "./FormSecurity";

export default function ContactForm({ interest, siteKey }: { interest: string; siteKey: string }) {
  const [token, setToken] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [resetVersion, setResetVersion] = useState(0);
  const requestId = useRef("");
  const submitting = useRef(false);

  if (sent) return <div className="smr-inquiry-confirmation" role="status" tabIndex={-1} ref={node => { node?.focus(); }}>
    <CheckCircle2 size={30} aria-hidden="true" />
    <h2>Thank you for your inquiry.</h2>
    <p>Your message has been sent to our research team. We will reply to the email address you provided.</p>
    <Link className="smr-text-link" href="/reports">Explore our research <ArrowUpRight size={17} /></Link>
  </div>;

  return <form className="smr-contact-form" onSubmit={async event => {
    event.preventDefault();
    if (submitting.current || !token) return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const fields = Object.fromEntries(new FormData(form));
    if (!requestId.current) requestId.current = crypto.randomUUID();
    submitting.current = true;
    setSending(true); setError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, token, requestId: requestId.current }),
        signal: AbortSignal.timeout(35_000),
      });
      const result = await response.json();
      if (response.ok && result.ok === true) { setSent(true); return; }
      setError(typeof result.message === "string" ? result.message : "We could not confirm your inquiry. Please try again.");
    } catch { setError("We could not confirm your inquiry. Your details are still in the form. Please try again shortly."); }
    finally { submitting.current = false; setSending(false); setToken(""); setResetVersion(version => version + 1); }
  }}>
    <fieldset className="smr-inquiry-fields" disabled={sending}>
      <label>Your name<input name="name" required maxLength={100} autoComplete="name" pattern=".*\S.*" /></label>
      <label>Work email<input name="email" type="email" required maxLength={254} autoComplete="email" /></label>
      <label className="smr-form-full">Organisation<input name="company" required maxLength={150} autoComplete="organization" pattern=".*\S.*" /></label>
      <label className="smr-form-full">Research interest<input name="interest" defaultValue={interest} placeholder="Syndicated report or custom research" maxLength={200} /></label>
      <label>Market / geography<input name="market" maxLength={150} placeholder="e.g. United States" /></label>
      <label>Decision deadline<input name="deadline" type="date" /></label>
      <label className="smr-form-full">What decision should the research support?<textarea name="question" required maxLength={2500} minLength={10} /></label>
      <div className="smr-form-trap" aria-hidden="true"><label>Website<input name="website" type="text" tabIndex={-1} autoComplete="off" maxLength={200} /></label></div>
    </fieldset>
    <FormSecurity siteKey={siteKey} onToken={setToken} resetVersion={resetVersion} />
    {error && <p className="smr-form-full smr-inquiry-error" role="alert">{error}</p>}
    <button className="smr-button" type="submit" disabled={!token || sending}>
      {sending ? <>Sending inquiry <LoaderCircle size={17} className="smr-sending-icon" /></> : <>Send inquiry <ArrowUpRight size={17} /></>}
    </button>
    <small className="smr-form-full">We use your details to respond to your inquiry. Read our <Link href="/privacy">privacy information</Link>.</small>
  </form>;
}

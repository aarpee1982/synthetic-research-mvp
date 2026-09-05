"use client";
import { useState } from "react";
import { ArrowUpRight, Copy, Check, Mail } from "lucide-react";
import Link from "next/link";
export default function ContactForm({ interest }: { interest: string }) {
  const [draft, setDraft] = useState<{ subject: string; body: string } | null>(
    null,
  );
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  return (
    <form
      className="smr-contact-form"
      onChange={() => {
        setDraft(null);
        setCopied(false);
        setCopyError(false);
      }}
      onSubmit={(e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = String(form.get("name") || "").trim();
        const email = String(form.get("email") || "").trim();
        const question = String(form.get("question") || "").trim();
        if (!name || !email || !question) {
          e.currentTarget.reportValidity();
          return;
        }
        setDraft({
          subject: `Research inquiry: ${String(form.get("interest") || "New brief")}`,
          body: `Hello SMR,\n\nName: ${name}\nWork email: ${email}\nOrganisation: ${form.get("company")}\nResearch interest: ${form.get("interest")}\nMarket / geography: ${form.get("market")}\nDeadline: ${form.get("deadline") || "To discuss"}\n\nBusiness question:\n${question}\n\nPlease contact me to discuss scope, feasibility and commercial terms.`,
        });
      }}
    >
      <label>
        Your name
        <input
          name="name"
          required
          maxLength={100}
          autoComplete="name"
          pattern=".*\S.*"
        />
      </label>
      <label>
        Work email
        <input
          name="email"
          type="email"
          required
          maxLength={254}
          autoComplete="email"
        />
      </label>
      <label className="smr-form-full">
        Organisation
        <input
          name="company"
          required
          maxLength={150}
          autoComplete="organization"
        />
      </label>
      <label className="smr-form-full">
        Research interest
        <input
          name="interest"
          defaultValue={interest}
          placeholder="Syndicated report or custom research"
          maxLength={200}
        />
      </label>
      <label>
        Market / geography
        <input name="market" maxLength={150} placeholder="e.g. United States" />
      </label>
      <label>
        Decision deadline
        <input name="deadline" type="date" />
      </label>
      <label className="smr-form-full">
        What decision should the research support?
        <textarea name="question" required maxLength={2500} minLength={10} />
      </label>
      <p className="smr-form-full smr-note">
        This prepares an email draft. Nothing is sent or stored by this form.
        You review and send it from your email application.
      </p>
      <button className="smr-button" type="submit">
        Prepare your inquiry <ArrowUpRight size={17} />
      </button>
      <small className="smr-form-full">
        Please read our <Link href="/privacy">privacy information</Link> before
        sharing personal information.
      </small>
      {draft && (
        <div className="smr-email-preview" aria-live="polite">
          <h3>Your inquiry is ready to review.</h3>
          <p>
            Send it to hello@syntheticmarketresearch.com. No message has been
            sent yet.
          </p>
          <pre>{draft.body}</pre>
          <div className="smr-actions">
            <a
              className="smr-button"
              href={`mailto:hello@syntheticmarketresearch.com?subject=${encodeURIComponent(draft.subject)}&body=${encodeURIComponent(draft.body)}`}
            >
              <Mail size={17} /> Open email draft
            </a>
            <button
              type="button"
              className="smr-button outline"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(
                    `To: hello@syntheticmarketresearch.com\nSubject: ${draft.subject}\n\n${draft.body}`,
                  );
                  setCopied(true);
                  setCopyError(false);
                } catch {
                  setCopyError(true);
                }
              }}
            >
              {copied ? <Check size={17} /> : <Copy size={17} />}
              {copied ? "Copied" : "Copy inquiry"}
            </button>
          </div>
          {copyError && (
            <p role="alert">
              Clipboard access is unavailable. Select the draft above and copy
              it into your email application.
            </p>
          )}
        </div>
      )}
    </form>
  );
}

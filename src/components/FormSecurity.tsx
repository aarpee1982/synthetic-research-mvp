"use client";
import Script from "next/script";
import { useCallback, useEffect, useRef, useState } from "react";
import { RotateCcw } from "lucide-react";

type Turnstile = {
  render: (element: HTMLElement, options: Record<string, unknown>) => string;
  remove: (id: string) => void;
  reset: (id: string) => void;
};
declare global { interface Window { turnstile?: Turnstile } }

export default function FormSecurity({ siteKey, onToken, resetVersion }: { siteKey: string; onToken: (token: string) => void; resetVersion: number }) {
  const container = useRef<HTMLDivElement>(null);
  const widget = useRef<string | null>(null);
  const [error, setError] = useState(false);
  const render = useCallback(() => {
    if (!siteKey || !container.current || !window.turnstile || widget.current !== null) return;
    widget.current = window.turnstile.render(container.current, {
      sitekey: siteKey, action: "contact", theme: "light", size: "flexible", "response-field": false,
      callback: (token: string) => { setError(false); onToken(token); },
      "expired-callback": () => onToken(""),
      "error-callback": () => { onToken(""); setError(true); },
      "timeout-callback": () => { onToken(""); setError(true); },
    });
  }, [siteKey, onToken]);
  useEffect(() => {
    render();
    return () => { if (widget.current !== null) window.turnstile?.remove(widget.current); widget.current = null; };
  }, [render]);
  useEffect(() => {
    if (resetVersion && widget.current !== null) window.turnstile?.reset(widget.current);
  }, [resetVersion]);
  return <div className="smr-form-full smr-form-security">
    {siteKey && <Script id="smr-turnstile" src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" onReady={render} onError={() => { onToken(""); setError(true); }} />}
    <div ref={container} />
    {error && <p role="alert">The security check could not load. Please check your connection or browser settings.
      <button type="button" className="smr-security-retry" onClick={() => {
        onToken(""); setError(false);
        if (widget.current !== null) window.turnstile?.reset(widget.current);
        else window.location.reload();
      }}><RotateCcw size={15} /> Retry security check</button>
    </p>}
    {!siteKey && <p role="status">Inquiries are temporarily unavailable. Please try again shortly.</p>}
    <noscript>Please enable JavaScript to complete the security check and send your inquiry.</noscript>
  </div>;
}

"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { CONSENT_KEY, analyticsAllowed, cleanVercelUrl, pageView, readConsent, saveConsent, stopAnalytics, trackOutbound, trackScroll } from "@/lib/analytics";

export function PrivacyChoices() {
  return <button className="smr-privacy-choice" type="button" onClick={() => window.dispatchEvent(new Event("smr-privacy-open"))}>Privacy choices</button>;
}
export default function AnalyticsConsent() {
  const pathname = usePathname();
  const [choice, setChoice] = useState<"granted" | "denied" | null>(null);
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const panel = useRef<HTMLElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const loaded = useRef(false);
  useEffect(() => {
    const stored = readConsent();
    setChoice(stored); setOpen(stored === null); setReady(true);
    const show = () => { returnFocus.current = document.activeElement as HTMLElement; setOpen(true); requestAnimationFrame(() => panel.current?.focus()); };
    const sync = (event: StorageEvent) => { if (event.key === CONSENT_KEY && readConsent() !== "granted") { stopAnalytics(); location.reload(); } };
    window.addEventListener("smr-privacy-open", show);
    window.addEventListener("storage", sync);
    return () => { window.removeEventListener("smr-privacy-open", show); window.removeEventListener("storage", sync); };
  }, []);
  useEffect(() => {
    if (!ready || choice !== "granted") return;
    pageView(); loaded.current = loaded.current || analyticsAllowed();
    let scrolled = false;
    const onScroll = () => { const distance = document.documentElement.scrollHeight - innerHeight; if (!scrolled && distance > 0 && scrollY / distance >= 0.9) { scrolled = true; trackScroll(); } };
    const onClick = (event: MouseEvent) => { if (event.target instanceof Element) { const anchor = event.target.closest("a"); if (anchor) trackOutbound(anchor.href); } };
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onClick);
    return () => { window.removeEventListener("scroll", onScroll); document.removeEventListener("click", onClick); };
  }, [pathname, choice, ready]);
  function choose(value: "granted" | "denied") {
    saveConsent(value); setChoice(value); setOpen(false);
    returnFocus.current?.focus();
    if (value === "denied") { stopAnalytics(); if (loaded.current) location.reload(); }
  }
  return <>
    {ready && choice === "granted" && analyticsAllowed() && <>
      <Analytics beforeSend={event => { const url = cleanVercelUrl(event.url); return url ? { ...event, url } : null; }} />
      <SpeedInsights beforeSend={event => { const url = cleanVercelUrl(event.url); return url ? { ...event, url } : null; }} />
    </>}
    {ready && open && <section className="smr-consent" role="region" aria-labelledby="smr-consent-title" ref={panel} tabIndex={-1}>
      <div><h2 id="smr-consent-title">Your privacy choices</h2><p>Allow optional analytics to help us improve SMR. Google Analytics uses cookies to measure visits and inquiries. You can change your choice at any time. <Link href="/privacy">Privacy information</Link></p></div>
      <div className="smr-consent-actions"><button type="button" onClick={() => choose("granted")}>Allow analytics</button><button type="button" onClick={() => choose("denied")}>Reject analytics</button></div>
    </section>}
  </>;
}

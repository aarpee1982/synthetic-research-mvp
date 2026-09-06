"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
const links = [
  ["Directory", "/directory"],
  ["Compare", "/compare"],
  ["Insights", "/insights"],
  ["About", "/about"],
];
export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="smr-nav">
      <a href="#main" className="smr-skip">
        Skip to content
      </a>
      <div className="smr-wrap smr-nav-inner">
        <Link
          href="/"
          className="smr-brand"
          aria-label="Synthetic Market Research home"
        >
          <span className="smr-monogram">
            s<span>.</span>
          </span>
          <span>
            Synthetic<span className="smr-brand-sub">MARKET RESEARCH</span>
          </span>
        </Link>
        <nav className="smr-desktop-links" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname.startsWith(href) ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link href="/newsletter" className="smr-nav-contact">
          The Synthetic Brief <ArrowUpRight size={16} />
        </Link>
        <button
          className="smr-menu"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-controls="mobile-navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="smr-mobile-links"
          aria-label="Mobile navigation"
        >
          {[...links, ["Newsletter", "/newsletter"], ["Contact", "/contact"]].map(([label, href]) => (
            <Link href={href} key={href} onClick={() => setOpen(false)}>
              {label}
              <ArrowUpRight size={18} />
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

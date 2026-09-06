"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X, Plus } from "lucide-react";
const links = [
  ["Providers", "/providers"],
  ["News", "/news"],
  ["Guidance", "/guidance"],
  ["Guides", "/insights"],
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
          <span className="smr-monogram smr-industry-mark" aria-hidden="true" />
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
        <Link href="/submit" className="smr-nav-contact">
          <Plus size={16} /> Add a tool
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

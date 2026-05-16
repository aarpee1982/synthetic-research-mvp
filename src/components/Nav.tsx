import Link from "next/link";

export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link className="brand" href="/">
          Synthetic Market Research
        </Link>
        <nav className="links" aria-label="Main navigation">
          <Link href="/methodology">Methodology</Link>
          <Link href="/blog">Insights</Link>
          <Link href="/privacy">Privacy</Link>
          <a className="button secondary" href="/#cta">
            Scope a Study
          </a>
        </nav>
      </div>
    </header>
  );
}

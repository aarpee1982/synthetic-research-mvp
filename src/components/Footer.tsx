import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          <strong>Synthetic Market Research</strong>
          <br />
          Market research built on real human decisions, then extended by AI at
          scale.
        </p>
        <p>
          <Link href="/privacy">Privacy</Link> | <Link href="/terms">Terms</Link>
        </p>
      </div>
    </footer>
  );
}

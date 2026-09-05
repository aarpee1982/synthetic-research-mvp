import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="smr-footer">
      <div className="smr-wrap">
        <div className="smr-footer-top">
          <div>
            <Link className="smr-footer-brand" href="/">
              Synthetic<span>.</span>
            </Link>
            <p>
              Human-led research.
              <br />
              AI-assisted production.
            </p>
          </div>
          <div>
            <span className="smr-label">RESEARCH</span>
            <Link href="/reports">Syndicated Reports</Link>
            <Link href="/custom-research">Custom Research</Link>
            <Link href="/methodology">Methodology</Link>
          </div>
          <div>
            <span className="smr-label">COMPANY</span>
            <Link href="/about">About SMR</Link>
            <Link href="/blog">Research archive</Link>
            <Link href="/contact">
              Contact <ArrowUpRight size={14} />
            </Link>
          </div>
          <div>
            <span className="smr-label">OUR LOCATIONS</span>
            <p>
              Bangalore, India
              <br />
              <span>Headquarters</span>
            </p>
            <p>
              Singapore
              <br />
              <span>Offices</span>
            </p>
          </div>
        </div>
        <div className="smr-footer-bottom">
          <span>
            &copy; {new Date().getFullYear()} Synthetic Market Research
          </span>
          <div>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

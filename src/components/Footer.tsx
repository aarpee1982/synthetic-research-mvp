import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PrivacyChoices } from "./AnalyticsConsent";

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
              Find your next research tool.
              <br />
              Get to know the industry.
            </p>
          </div>
          <div>
            <span className="smr-label">EXPLORE</span>
            <Link href="/directory">Product directory</Link>
            <Link href="/providers">All providers</Link>
            <Link href="/news">News & company updates</Link>
            <Link href="/guidance">Institutional guidance</Link>
            <Link href="/compare">Compare products</Link>
            <Link href="/insights">Insights & guides</Link>
            <Link href="/newsletter">The Synthetic Brief</Link>
          </div>
          <div>
            <span className="smr-label">COMPANY</span>
            <Link href="/about">About SMR</Link>
            <Link href="/methodology">Editorial standards</Link>
            <Link href="/submit">Submit a listing</Link>
            <Link href="/advertise">Advertise with SMR</Link>
            <Link href="/contact">
              Contact <ArrowUpRight size={14} />
            </Link>
          </div>
          <div>
            <span className="smr-label">LOCATION</span>
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
            <PrivacyChoices />
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

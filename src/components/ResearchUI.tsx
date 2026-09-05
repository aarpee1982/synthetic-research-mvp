import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  FileText,
  Table2,
  MessagesSquare,
} from "lucide-react";
import Nav from "./Nav";
import Footer from "./Footer";
import { featuredReports, type Report } from "@/lib/reports";
export function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="smr-site">
      <Nav />
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
}
export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="smr-page-intro">
      <div className="smr-wrap">
        <p className="smr-eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <div className="smr-lead">{children}</div>
      </div>
    </section>
  );
}
export function ReportCover({ report }: { report: Report }) {
  return (
    <div className={`smr-report-cover ${report.color}`} aria-hidden="true">
      <span className="cover-brand">
        Synthetic<span>.</span>
      </span>
      <span className="cover-category">{report.category}</span>
      <strong>{report.title}</strong>
      <div className="cover-rules">
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
      <span className="cover-foot">
        MARKET INTELLIGENCE <span>{report.number}</span>
      </span>
    </div>
  );
}
export function ReportGrid({ items = featuredReports }: { items?: Report[] }) {
  return (
    <div className="smr-report-grid">
      {items.map((report) => (
        <article className="smr-report-item" key={report.slug}>
          <Link
            className="smr-cover-link"
            href={`/reports/${report.slug}`}
            aria-label={`Explore ${report.title}`}
          >
            <ReportCover report={report} />
            <ArrowUpRight className="cover-arrow" size={21} />
          </Link>
          <div className="smr-report-meta">
            <span>{report.category}</span>
            <span className="smr-status">{report.region}</span>
          </div>
          <h3>
            <Link href={`/reports/${report.slug}`}>{report.title}</Link>
          </h3>
          <p>{report.focus}</p>
          <Link className="smr-text-link" href={`/reports/${report.slug}`}>
            Explore the report <ArrowRight size={16} />
          </Link>
        </article>
      ))}
    </div>
  );
}
export function Deliverables() {
  const items = [
    {
      Icon: FileText,
      title: "The report",
      body: "A concise analysis of the market, the implications and the limits of the evidence.",
    },
    {
      Icon: Table2,
      title: "The evidence workbook",
      body: "Supporting data, source references and assumptions behind the agreed analysis.",
    },
    {
      Icon: MessagesSquare,
      title: "The analyst briefing",
      body: "A conversation about the findings and what they mean for your decision.",
    },
  ];
  return (
    <div className="smr-deliverables">
      {items.map(({ Icon, title, body }) => (
        <article key={title}>
          <Icon size={25} strokeWidth={1.4} />
          <h3>{title}</h3>
          <p>{body}</p>
        </article>
      ))}
    </div>
  );
}
export function ContactBand() {
  return (
    <section className="smr-contact-band">
      <div className="smr-wrap">
        <div>
          <p className="smr-eyebrow">LET&apos;S START WITH YOUR QUESTION</p>
          <h2>What decision comes next?</h2>
          <p>
            Tell us the market, the question and the deadline. We will discuss
            the scope and evidence it needs.
          </p>
        </div>
        <Link className="smr-button light" href="/contact">
          Discuss your research brief <ArrowUpRight size={18} />
        </Link>
      </div>
    </section>
  );
}

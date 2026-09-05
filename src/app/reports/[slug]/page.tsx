import type { Metadata } from "next";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { reports, reportAliases } from "@/lib/reports";
import { reportContent } from "@/lib/report-content";
import { PageFrame, PageIntro, ReportGrid } from "@/components/ResearchUI";
import { ScenarioMatrix, DecisionPathways } from "@/components/ScenarioMatrix";
import ProteinBarsReport from "@/components/ProteinBarsReport";
export function generateStaticParams() {
  return [...reports.map(({ slug }) => ({ slug })), ...Object.keys(reportAliases).map((slug) => ({ slug }))];
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const report = reports.find((r) => r.slug === (reportAliases[slug] || slug));
  return {
    title: report?.slug === "protein-bars" ? "Protein Bars: US Prices and Formulation | SMR" : report ? `${report.title} Market Research & Scenarios | SMR` : "Report not found | SMR",
    description: report?.slug === "protein-bars" ? "Compare selected US protein bar prices, labelled nutrition and matched brand-direct and retailer packs. Source-linked analysis from SMR." : report ? `${report.title}: ${report.focus}. Explore market scope, scenario conditions and the drivers behind your decision.` : undefined,
    alternates: { canonical: `/reports/${report?.slug || slug}` },
    robots: { index: true, follow: true, googleBot: { index: false, follow: true } },
  };
}
export default async function ReportPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (reportAliases[slug]) permanentRedirect(`/reports/${reportAliases[slug]}`);
  const report = reports.find((r) => r.slug === slug);
  if (!report) notFound();
  if (slug === "protein-bars") return <ProteinBarsReport />;
  const sections = reportContent(report);
  const related = reports.filter((r) => r.category === report.category && r.slug !== slug).slice(0, 3);
  const schema = {
    "@context": "https://schema.org", "@type": "WebPage",
    name: `${report.title} Market Research`,
    description: sections[0].body,
    url: `https://www.syntheticmarketresearch.com/reports/${slug}`,
    inLanguage: "en",
    about: { "@type": "Thing", name: report.title },
    publisher: { "@type": "Organization", name: "Synthetic Market Research", url: "https://www.syntheticmarketresearch.com" },
  };
  return <PageFrame>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <PageIntro eyebrow={`${report.category.toUpperCase()} / MARKET RESEARCH`} title={`${report.title} Market`}>
      <p>{report.focus}</p>
    </PageIntro>
    <section className="smr-section smr-report-overview">
      <div className="smr-wrap">
        <div className="smr-report-overview-bar"><Link className="smr-text-link" href="/reports"><ArrowLeft size={16} />All reports</Link>
          <span>{report.region} / Research overview</span></div>
        <article className="smr-report-editorial" aria-label={`${report.title} research overview`}>
          <div className="smr-overview-opening">
            <div><h2>{sections[0].title}</h2><p data-editorial-copy>{sections[0].body}</p></div>
            <aside className="smr-commission">
              <span className="smr-eyebrow">COMMISSION THIS RESEARCH</span>
              <h3>A clear brief.<br />A considered answer.</h3>
              <p>Request scope, pricing, delivery and licence details.</p>
              <Link className="smr-button" href={`/contact?interest=${encodeURIComponent(report.title)}`}>Discuss this report <ArrowUpRight size={17} /></Link>
            </aside>
          </div>
          <div className="smr-overview-copy"><h2>{sections[1].title}</h2><p data-editorial-copy>{sections[1].body}</p></div>
          <div className="smr-report-exhibit"><span className="smr-exhibit-number">01 / CONDITIONS TO TEST</span>
            <ScenarioMatrix signals={report.signals} conditions={report.sector.conditions} />
          </div>
          <div className="smr-overview-copy"><h2>{sections[2].title}</h2><p data-editorial-copy>{sections[2].body}</p></div>
          <div className="smr-report-exhibit"><span className="smr-exhibit-number">02 / DECISION PATHWAYS</span><DecisionPathways /></div>
          <div className="smr-overview-columns">{sections.slice(3).map((section) => <section key={section.title}><h2>{section.title}</h2><p data-editorial-copy>{section.body}</p></section>)}</div>
          <div className="smr-overview-links"><Link className="smr-text-link" href="/methodology">Research methodology <ArrowUpRight size={16} /></Link><Link className="smr-text-link" href={`/contact?interest=${encodeURIComponent(report.title)}`}>Request scope and pricing <ArrowUpRight size={16} /></Link></div>
        </article>
      </div>
    </section>
    <section className="smr-section smr-tinted"><div className="smr-wrap"><div className="smr-section-heading"><div><p className="smr-eyebrow">RELATED MARKETS</p><h2>A wider perspective.</h2></div><p>Adjacent categories to consider, not market totals to add together.</p></div><ReportGrid items={related} /></div></section>
  </PageFrame>;
}

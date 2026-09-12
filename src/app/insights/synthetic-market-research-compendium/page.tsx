import Link from "next/link";
import type { Metadata } from "next";
import { readFileSync } from "node:fs";
import path from "node:path";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PublicationFrame } from "@/components/PublicationUI";

const title = "Synthetic Market Research: 2026 Research Compendium | SMR";
const description = "A source-linked 2026 guide to synthetic market research, synthetic respondents, consumer personas, synthetic data and digital twins, covering research, privacy and governance.";
const canonical = "https://www.syntheticmarketresearch.com/insights/synthetic-market-research-compendium";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/insights/synthetic-market-research-compendium" },
  openGraph: { type: "article", title, description, url: canonical, publishedTime: "2026-09-12T00:00:00.000Z", modifiedTime: "2026-09-12T00:00:00.000Z", authors: ["SMR Editorial Team"] },
  twitter: { card: "summary", title, description }
};

const headingIds = [
  ["Our summary (300 words)", "summary"], ["What the year looks like, in numbers", "evidence-map"],
  ["A. Synthetic respondents (AI-simulated survey participants)", "synthetic-respondents"], ["B. Simulated consumers, personas and generative agents", "simulated-consumers"],
  ["C. Synthetic market research, conjoint and choice experiments", "synthetic-market-research"], ["D. Synthetic data: methods, privacy and official statistics", "synthetic-data"],
  ["E. Digital twins (consumer, human, urban, industrial)", "digital-twins"], ["F. Governance, regulation and privacy-enhancing technology", "governance"],
  ["Method, exclusions and limitations", "method"]
] as const;

async function articleHtml() {
  const file = path.join(process.cwd(), "src", "content", "guides", "synthetic-market-research-compendium-2026-09.md");
  let html = String(await remark().use(remarkGfm).use(remarkHtml).process(readFileSync(file, "utf8")));
  for (const [heading, id] of headingIds) html = html.replace(`<h2>${heading}</h2>`, `<h2 id="${id}">${heading}</h2>`);
  return html;
}

export default async function SyntheticMarketResearchCompendium() {
  const content = await articleHtml();
  const articleJsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Synthetic market research: 2026 research compendium", description, author: { "@type": "Organization", name: "SMR Editorial Team" }, publisher: { "@type": "Organization", name: "SMR" }, datePublished: "2026-09-12", dateModified: "2026-09-12", mainEntityOfPage: canonical };
  return <PublicationFrame><article className="compendium"><header className="compendium-hero pub-wrap"><p className="pub-eyebrow">RESEARCH COMPENDIUM <span>/ 2026 EDITION</span></p><h1>Synthetic market research: a 2026 compendium</h1><p className="compendium-dek">A source-linked guide to synthetic respondents, simulated consumers, synthetic data and digital twins, built from a one-year research and public-evidence review.</p><div className="compendium-byline"><span>By SMR Editorial Team</span><time dateTime="2026-09-12">12 September 2026</time><span>56,000-word guide</span></div><div className="compendium-actions"><Link className="pub-button" href="#summary">Read the compendium <ArrowRight size={17} /></Link><Link href="/providers">Browse companies <ArrowUpRight size={16} /></Link></div></header><section className="compendium-context pub-wrap" aria-label="Compendium scope"><div><strong>5,513</strong><span>works reviewed</span></div><div><strong>1,877</strong><span>institutions represented</span></div><div><strong>200</strong><span>public media items</span></div><div><strong>12 months</strong><span>ending 12 September 2026</span></div></section><div className="compendium-layout pub-wrap"><aside className="compendium-nav" aria-label="On this page"><p>ON THIS PAGE</p><a href="#summary">Summary</a><a href="#evidence-map">Evidence map</a><a href="#synthetic-respondents">Synthetic respondents</a><a href="#simulated-consumers">Simulated consumers</a><a href="#synthetic-market-research">Market research</a><a href="#synthetic-data">Synthetic data</a><a href="#digital-twins">Digital twins</a><a href="#governance">Governance</a><a href="#method">Method and limitations</a></aside><div className="compendium-prose" dangerouslySetInnerHTML={{ __html: content }} /></div><section className="compendium-next pub-wrap"><p className="pub-eyebrow">CONTINUE EXPLORING</p><h2>Put the evidence in context.</h2><div><Link href="/providers">Explore synthetic market research companies <ArrowRight size={16} /></Link><Link href="/guidance">Read institutional guidance <ArrowRight size={16} /></Link><Link href="/insights">Browse all guides <ArrowRight size={16} /></Link></div></section></article><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} /></PublicationFrame>;
}

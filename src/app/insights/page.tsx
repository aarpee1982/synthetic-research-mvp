import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PublicationFrame, Intro, StoryCard, BriefingBand } from "@/components/PublicationUI";
import { stories } from "@/lib/publication";

export const metadata: Metadata = { title: "Synthetic Market Research Guides & Insights | SMR", description: "Practical guides, product analysis and briefings for evaluating synthetic market research companies and methods.", alternates: { canonical: "/insights" } };

export default function InsightsPage() {
  return <PublicationFrame><Intro eyebrow="GUIDES & EXPLAINERS" title="Get to know synthetic research"><p>What the tools do, how they differ, and what to ask before you buy.</p></Intro><section className="pub-wrap pub-section pub-story-grid"><article className="pub-story-card"><span className="pub-story-number" aria-hidden="true">01</span><p className="pub-eyebrow">INDUSTRY GUIDE <span>/ 2026 EDITION</span></p><h3><Link href="/insights/synthetic-market-research-compendium">Synthetic Market Research 101: State of Industry</Link></h3><p>An industry guide to synthetic respondents, consumer simulations, synthetic data, digital twins and governance.</p><Link className="pub-text-link" href="/insights/synthetic-market-research-compendium">Read the guide <ArrowRight size={16} /></Link></article>{stories.map((s, i) => <StoryCard key={s.slug} story={s} number={i + 2} />)}</section><BriefingBand /></PublicationFrame>;
}
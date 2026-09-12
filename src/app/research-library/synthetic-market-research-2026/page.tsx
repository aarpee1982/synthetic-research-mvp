import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PublicationFrame, Intro } from "@/components/PublicationUI";
import { researchLibraryTopics } from "@/lib/research-library";

const canonical = "/research-library/synthetic-market-research-2026";

export const metadata: Metadata = {
  title: "Synthetic Market Research Research Library | SMR",
  description: "Browse the published research and sources behind SMR's guide to synthetic respondents, synthetic data, digital twins and governance.",
  alternates: { canonical }
};

export default function SyntheticMarketResearchLibrary() {
  return <PublicationFrame><Intro eyebrow="RESEARCH LIBRARY" title="Explore the evidence by topic."><p>Published research supporting SMR's guide to synthetic market research, organised for deeper reading.</p></Intro><section className="pub-wrap pub-section"><div className="library-topic-grid">{researchLibraryTopics.map((topic, index) => <article className="library-topic-card" key={topic.slug}><span className="pub-story-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><h2>{topic.title}</h2><p>{topic.description}</p><Link href={`${canonical}/${topic.slug}`}>Open research library <ArrowRight size={16} /></Link></article>)}</div><div className="industry-profile-context"><h2>Start with the guide.</h2><p>The guide explains what the evidence means for research buyers, teams and decision-makers.</p><Link href="/insights/synthetic-market-research-compendium">Read Synthetic Market Research 101 <ArrowRight size={16} /></Link></div></section></PublicationFrame>;
}
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { readFileSync } from "node:fs";
import path from "node:path";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PublicationFrame } from "@/components/PublicationUI";
import { findResearchLibraryTopic, researchLibraryTopics } from "@/lib/research-library";

const basePath = "/research-library/synthetic-market-research-2026";

export const dynamicParams = false;

export function generateStaticParams() {
  return researchLibraryTopics.map((topic) => ({ topic: topic.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ topic: string }> }): Promise<Metadata> {
  const { topic: slug } = await params;
  const topic = findResearchLibraryTopic(slug);
  if (!topic) return {};
  const title = `${topic.title} Research Library | SMR`;
  const description = `Published research and source material on ${topic.title.toLowerCase()} for readers of SMR's Synthetic Market Research 101 guide.`;
  return { title, description, alternates: { canonical: `${basePath}/${topic.slug}` } };
}

async function libraryHtml(slug: string) {
  const file = path.join(process.cwd(), "src", "content", "research-library", `${slug}.md`);
  return String(await remark().use(remarkGfm).use(remarkHtml).process(readFileSync(file, "utf8")));
}

export default async function ResearchLibraryTopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic: slug } = await params;
  const topic = findResearchLibraryTopic(slug);
  if (!topic) notFound();
  const content = await libraryHtml(topic.slug);
  return <PublicationFrame><article className="research-library"><header className="compendium-hero pub-wrap"><p className="pub-eyebrow">RESEARCH LIBRARY <span>/ SYNTHETIC MARKET RESEARCH</span></p><h1>{topic.title}</h1><p className="compendium-dek">Published research and source material for readers who want to explore this topic in depth.</p><div className="compendium-actions"><Link className="pub-button" href={`/insights/synthetic-market-research-compendium#${topic.guideAnchor}`}>Read the guide section <ArrowRight size={17} /></Link><Link href={basePath}><ArrowLeft size={16} />All research topics</Link></div></header><div className="compendium-layout pub-wrap"><aside className="compendium-nav" aria-label="Research library topics"><p>EXPLORE TOPICS</p>{researchLibraryTopics.map((item) => <Link href={`${basePath}/${item.slug}`} key={item.slug}>{item.title}</Link>)}</aside><div className="compendium-prose" dangerouslySetInnerHTML={{ __html: content }} /></div><section className="compendium-next pub-wrap"><p className="pub-eyebrow">CONTINUE EXPLORING</p><h2>Put the research in context.</h2><div><Link href="/insights/synthetic-market-research-compendium">Read the industry guide <ArrowRight size={16} /></Link><Link href="/providers">Explore companies <ArrowRight size={16} /></Link><Link href="/guidance">Read institutional guidance <ArrowRight size={16} /></Link></div></section></article></PublicationFrame>;
}
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { PublicationFrame, RelatedProducts, BriefingBand } from "@/components/PublicationUI";
import { stories, getStory } from "@/lib/publication";
export function generateStaticParams() { return stories.map(s => ({ slug: s.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const s = getStory(slug); return s ? { title: `${s.title} | SMR`, description: s.dek, alternates: { canonical: `/insights/${slug}` }, openGraph: { type: "article", title: s.title, description: s.dek } } : { title: "Article not found | SMR" }; }
export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const s = getStory(slug); if (!s) notFound();
  return <PublicationFrame><article className="pub-wrap pub-article"><Link className="pub-text-link" href="/insights"><ArrowLeft size={16} /> All insights</Link><header><p className="pub-eyebrow">{s.type}</p><h1>{s.title}</h1><p className="pub-dek">{s.dek}</p><p className="pub-byline">SMR Editorial <span>6 September 2026</span><span>{s.minutes} min read</span></p></header><div className="pub-article-layout"><aside className="pub-article-toc"><strong>In this article</strong>{s.sections.map((section, i) => <a href={`#section-${i}`} key={section.title}>{section.title}</a>)}</aside><div className="pub-prose">{s.sections.map((section, i) => <section key={section.title} id={`section-${i}`}><h2>{section.title}</h2><p>{section.text}</p></section>)}<section className="pub-references"><h2>Sources & further reading</h2><ol>{s.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.title} <ArrowUpRight size={14} /></a></li>)}</ol><p className="pub-caption">Provider statements are attributed to their original publications. Recommendations and buying questions are SMR&apos;s editorial perspective.</p></section></div></div><RelatedProducts ids={s.related} /></article><BriefingBand /></PublicationFrame>;
}

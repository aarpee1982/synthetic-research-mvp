import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { PublicationFrame, Intro, RelatedProducts } from "@/components/PublicationUI";
import { providers, getProvider } from "@/lib/providers";
import { news } from "@/lib/industry-news";
import { NewsCard, ProviderCard } from "@/components/IndustryUI";
type Props = { params: Promise<{slug: string}> };
export function generateStaticParams() { return providers.map(p => ({slug:p.slug})); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const p = getProvider((await params).slug); return p ? {title: `${p.name}: Synthetic Research | SMR`, description:p.summary, alternates:{canonical:`/providers/${p.slug}`}} : {}; }
export default async function ProviderPage({ params }: Props) {
  const p = getProvider((await params).slug); if (!p) notFound(); const updates = news.filter(n => n.provider === p.slug).slice(0, 6); const related = providers.filter(x => x.category === p.category && x.slug !== p.slug).slice(0, 3);
  return <PublicationFrame><Intro eyebrow={p.category.toUpperCase()} title={p.name}><p>{p.summary}</p></Intro><div className="industry-wrap pub-wrap"><div className="industry-profile-actions"><span>{p.kind}</span><a className="pub-button" href={p.source} target="_blank" rel="noopener noreferrer">Visit provider <ArrowUpRight size={17}/></a><Link href="/providers">All providers</Link><Link href="/submit">Suggest an update</Link></div>{p.productIds.length > 0 && <RelatedProducts ids={p.productIds}/>}<section className="industry-profile-context"><h2>Explore {p.category.toLowerCase()}</h2><p>Compare the available tools, work through the buying questions, and find relevant professional guidance.</p><div><Link href={`/providers?category=${encodeURIComponent(p.category)}`}>Companies in this category <ArrowUpRight size={15}/></Link><Link href="/insights/synthetic-research-demo-checklist">Prepare for a product demo <ArrowUpRight size={15}/></Link><Link href="/guidance">Institutional guidance <ArrowUpRight size={15}/></Link></div><small>Product information: <a href={p.source} target="_blank" rel="noopener noreferrer">{p.name}</a> · Reviewed 6 September 2026</small></section>{updates.length > 0 && <section className="industry-section"><div className="industry-section-heading"><h2>From {p.name}</h2><Link href={`/news?provider=${p.slug}`}>All updates <ArrowUpRight size={16}/></Link></div><div className="industry-news-grid">{updates.map(n => <NewsCard key={n.id} item={n}/>)}</div></section>}{related.length > 0 && <section className="industry-section"><h2>More providers to explore</h2><div className="industry-provider-grid">{related.map(r => <ProviderCard key={r.slug} provider={r}/>)}</div></section>}</div></PublicationFrame>;
}

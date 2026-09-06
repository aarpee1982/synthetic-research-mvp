import Link from "next/link";
import { ArrowUpRight, ArrowRight, Search, SlidersHorizontal } from "lucide-react";
import { Provider, getProvider } from "@/lib/providers";
import { NewsItem, dateLabel } from "@/lib/industry-news";
import SourceImage from "./SourceImage";

export function ProviderCard({ provider: p }: { provider: Provider }) {
  return <article className="industry-provider"><div className="industry-provider-top"><span className="industry-letter" aria-hidden="true">{p.name.slice(0, 2).toUpperCase()}</span><div><h2><Link href={`/providers/${p.slug}`}>{p.name}</Link></h2><span>{p.kind}</span></div><ArrowUpRight size={18} /></div><p>{p.summary}</p><div className="industry-card-bottom"><span className="industry-tag">{p.category}</span><Link href={`/providers/${p.slug}`} aria-label={`Explore ${p.name}`}>Explore <ArrowRight size={15}/></Link></div></article>;
}
export function NewsCard({ item }: { item: NewsItem }) {
  const provider = getProvider(item.provider);
  return <article className="industry-news-card" id={item.id}><a className="industry-news-image" href={item.source} target="_blank" rel="noopener noreferrer" aria-label={`Read ${item.title} at the source`}><SourceImage src={item.image} alt={`${item.imageCredit} source image`} label={item.imageCredit}/><span>{item.type}</span></a><div className="industry-news-copy"><div className="industry-meta"><time dateTime={item.date}>{dateLabel(item.date)}</time>{provider && <Link href={`/providers/${provider.slug}`}>{provider.name}</Link>}</div><h2><a href={item.source} target="_blank" rel="noopener noreferrer">{item.title}</a></h2><p>{item.summary}</p><div className="industry-card-bottom"><a href={item.source} target="_blank" rel="noopener noreferrer">Read more <ArrowUpRight size={15}/></a><small>Image: {item.imageCredit}</small></div></div></article>;
}
export function BrowseFilters({ action, query, selects, hidden = {} }: { action: string; query: string; hidden?: Record<string, string>; selects: { name: string; label: string; value: string; options: string[] }[] }) {
  return <form action={action} method="get" role="search" className="industry-filters">
    {Object.entries(hidden).filter(([,value])=>value).map(([name,value])=><input key={name} type="hidden" name={name} value={value}/>)}
    <label className="industry-search"><Search size={18}/><span className="sr-only">Search</span><input type="search" name="q" defaultValue={query} placeholder="Search by name or topic" maxLength={150}/></label>
    {selects.map(s => <label key={s.name}><span>{s.label}</span><select name={s.name} defaultValue={s.value}><option value="">All {s.label.toLowerCase()}</option>{s.options.map(o => <option key={o}>{o}</option>)}</select></label>)}
    <button type="submit"><SlidersHorizontal size={16}/> Apply</button><Link href={action}>Reset</Link>
  </form>;
}
export function Pagination({ page, total, href }: { page: number; total: number; href: (page: number) => string }) {
  if (total < 2) return null;
  return <nav className="industry-pagination" aria-label="Pagination">{page > 1 && <Link href={href(page - 1)} rel="prev">Previous</Link>}{Array.from({length: total}, (_, i) => i + 1).filter(p => p === 1 || p === total || Math.abs(p - page) < 2).map((p, i, a) => <span key={p}>{i > 0 && p - a[i - 1] > 1 && <span aria-hidden="true">...</span>}<Link href={href(p)} aria-current={p === page ? "page" : undefined}>{p}</Link></span>)}{page < total && <Link href={href(page + 1)} rel="next">Next <ArrowRight size={15}/></Link>}</nav>;
}
export function IndustryPromo() { return <aside className="industry-promo"><div><span className="hub-kicker">REACH THE RIGHT READERS</span><h2>Building in synthetic research?</h2><p>Introduce your company to the people exploring it.</p></div><div><Link href="/submit">Add your company <ArrowUpRight size={16}/></Link><Link href="/advertise">Explore sponsorship <ArrowUpRight size={16}/></Link></div></aside>; }
export function queryValue(value: string | string[] | undefined) { return typeof value === "string" ? value.slice(0, 150) : ""; }
export function pageNumber(value: string | string[] | undefined, max: number) { return Math.min(Math.max(Number.parseInt(queryValue(value), 10) || 1, 1), Math.max(1, max)); }
export function queryHref(path: string, params: Record<string, string>, page: number) { const q = new URLSearchParams(Object.entries(params).filter(([, v]) => v)); if (page > 1) q.set("page", String(page)); return path + (q.size ? `?${q}` : ""); }

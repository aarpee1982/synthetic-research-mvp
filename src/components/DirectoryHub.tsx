import Link from "next/link";
import { ArrowUpRight, BookOpen, Mail, Plus, Building2, Boxes } from "lucide-react";
import DirectoryExplorer from "./DirectoryExplorer";
import { PublicationFrame, ProductVisual } from "./PublicationUI";
import { categories, products, providerCount, uses } from "@/lib/directory";
import { stories } from "@/lib/publication";
import { news } from "@/lib/industry-news";
import { guidance } from "@/lib/guidance";
import { NewsCard } from "./IndustryUI";

export type DirectoryParams = { q?: string; category?: string; use?: string; saved?: string; view?: string };
export default function DirectoryHub({ params, home = false }: { params: DirectoryParams; home?: boolean }) {
  return <PublicationFrame>
    <header className="hub-heading pub-wrap">
      <div><p className="hub-kicker">THE SYNTHETIC RESEARCH DIRECTORY</p><h1>{home ? "Synthetic market research" : "Explore synthetic research tools"}</h1><p>Find the companies, compare their tools, and see what you can do with them.</p></div>
      <div className="hub-counts"><span><Boxes size={17} /><strong>{products.length}</strong> tools</span><span><Building2 size={17} /><strong>{providerCount}</strong> companies</span></div>
    </header>
    <DirectoryExplorer
      initialQuery={typeof params.q === "string" ? params.q.slice(0, 200) : ""}
      initialCategory={categories.includes(params.category as typeof categories[number]) ? params.category : ""}
      initialUse={uses.includes(params.use || "") ? params.use : ""}
      initialSavedOnly={params.saved === "1"} initialView={params.view}
      rail={<aside className="hub-rail" aria-label="Around the industry">
        <section className="hub-guide-links"><h2><BookOpen size={17} /> Get up to speed</h2>{stories.slice(0, 3).map(s => <Link href={`/insights/${s.slug}`} key={s.slug}><span>{s.type} <span>{s.minutes} min</span></span><strong>{s.title}</strong><ArrowUpRight size={15} /></Link>)}</section>
        <section className="hub-product-peek"><h2>Inside a research tool</h2><ProductVisual /><Link href="/directory/fairgen-twins">Meet Fairgen Twins <ArrowUpRight size={15} /></Link></section>
        <section className="hub-brief"><Mail size={22} /><h2>The Synthetic Brief</h2><p>New tools, company updates, and research explained simply.</p><Link href="/newsletter">Get the newsletter <ArrowUpRight size={16} /></Link></section>
        <Link href="/submit" className="hub-add-link"><Plus size={17} /> Add your tool. It&apos;s free.</Link>
      </aside>}
    />
    <div className="pub-wrap industry-full-list"><Link href="/providers" target="_blank" rel="noopener noreferrer">See the full list of synthetic providers <ArrowUpRight size={18}/><span className="sr-only"> (opens in a new tab)</span></Link></div>
    {home && <div className="pub-wrap industry-home-sections"><section className="industry-section"><div className="industry-section-heading"><div><p className="hub-kicker">FROM AROUND THE INDUSTRY</p><h2>News & company updates</h2></div><Link href="/news">See all news <ArrowUpRight size={18}/></Link></div><div className="industry-news-grid">{news.slice(0,6).map(n=><NewsCard item={n} key={n.id}/>)}</div></section><section className="industry-section"><div className="industry-section-heading"><div><p className="hub-kicker">START WITH GOOD PRACTICE</p><h2>Guidance from the institutions</h2></div><Link href="/guidance">Explore guidance <ArrowUpRight size={18}/></Link></div><div className="industry-guidance-preview">{guidance.slice(0,3).map(g=><Link href={`/guidance#${g.id}`} key={g.id}><span>{g.institution}</span><strong>{g.title}</strong><ArrowUpRight size={18}/></Link>)}</div></section></div>}
  </PublicationFrame>;
}

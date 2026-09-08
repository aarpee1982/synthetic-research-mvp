import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import DirectoryExplorer from "./DirectoryExplorer";
import { PublicationFrame } from "./PublicationUI";
import { categories, uses } from "@/lib/directory";
import { news } from "@/lib/industry-news";
import { guidance } from "@/lib/guidance";
import { NewsCard } from "./IndustryUI";

export type DirectoryParams = { q?: string; category?: string; use?: string; saved?: string; view?: string };
export default function DirectoryHub({ params, home = false }: { params: DirectoryParams; home?: boolean }) {
  return <PublicationFrame>
    <header className="hub-heading pub-wrap">
      <div><p className="hub-kicker">THE SYNTHETIC RESEARCH DIRECTORY</p><h1>{home ? "Synthetic market research" : "Explore synthetic research tools"}</h1><p>Find the companies, compare their tools, and see what you can do with them.</p></div>
    </header>
    <DirectoryExplorer
      initialQuery={typeof params.q === "string" ? params.q.slice(0, 200) : ""}
      initialCategory={categories.includes(params.category as typeof categories[number]) ? params.category : ""}
      initialUse={uses.includes(params.use || "") ? params.use : ""}
      initialSavedOnly={params.saved === "1"} initialView={params.view}
    />
    {home && <div className="pub-wrap industry-home-sections"><section className="industry-section"><div className="industry-section-heading"><div><p className="hub-kicker">FROM AROUND THE INDUSTRY</p><h2>News & company updates</h2></div><Link href="/news">See all news <ArrowUpRight size={18}/></Link></div><div className="industry-news-grid">{news.slice(0,6).map(n=><NewsCard item={n} key={n.id}/>)}</div></section><section className="industry-section"><div className="industry-section-heading"><div><p className="hub-kicker">START WITH GOOD PRACTICE</p><h2>Guidance from the institutions</h2></div><Link href="/guidance">Explore guidance <ArrowUpRight size={18}/></Link></div><div className="industry-guidance-preview">{guidance.slice(0,3).map(g=><Link href={`/guidance#${g.id}`} key={g.id}><span>{g.institution}</span><strong>{g.title}</strong><ArrowUpRight size={18}/></Link>)}</div></section></div>}
  </PublicationFrame>;
}

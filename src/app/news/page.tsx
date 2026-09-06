import type { Metadata } from "next";
import Link from "next/link";
import { PublicationFrame, Intro } from "@/components/PublicationUI";
import { BrowseFilters, Pagination, NewsCard, IndustryPromo, queryValue, pageNumber, queryHref } from "@/components/IndustryUI";
import { news } from "@/lib/industry-news";
import { getProvider } from "@/lib/providers";
type Search = Record<string, string | string[] | undefined>;
type Props = { searchParams: Promise<Search> };
function selection(s: Search) {
  const q=queryValue(s.q), type=queryValue(s.type), month=queryValue(s.month), provider=queryValue(s.provider);
  const matched=news.filter(n=>(!q||`${n.title} ${n.summary} ${getProvider(n.provider)?.name}`.toLowerCase().includes(q.toLowerCase()))&&(!type||n.type===type)&&(!month||n.date.startsWith(month))&&(!provider||n.provider===provider));
  const total=Math.ceil(matched.length/12);
  return {q,type,month,provider,matched,total,page:pageNumber(s.page,total)};
}
export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const {q,type,month,provider,page}=selection(await searchParams);
  const filtered=!!(q||type||month||provider);
  return {
    title:`Synthetic Research News & Company Updates${page>1?` | Page ${page}`:""} | SMR`,
    description:"New products, company announcements and ideas shaping synthetic market research. Short summaries with links to the original sources.",
    alternates:{canonical:filtered?"/news":queryHref("/news",{},page),types:{"application/rss+xml":"/news/feed.xml"}},
    robots:filtered?{index:false,follow:true}:undefined
  };
}
export default async function News({ searchParams }: Props) {
  const {q,type,month,provider,matched,total,page}=selection(await searchParams);
  return <PublicationFrame>
    <Intro eyebrow="NEWS & COMPANY UPDATES" title="What's happening in synthetic research."><p>Product moves, new research and useful ideas. The short version here, the full story at the source.</p></Intro>
    <section className="industry-wrap pub-wrap">
      {provider&&<p className="industry-provider-filter">From {getProvider(provider)?.name||provider} · <Link href="/news">Show all companies</Link></p>}
      <BrowseFilters action="/news" query={q} hidden={{provider}} selects={[
        {name:"type",label:"Story types",value:type,options:["Announcement","Company perspective","Research"]},
        {name:"month",label:"Months",value:month,options:[...new Set(news.map(n=>n.date.slice(0,7)))].sort().reverse()}
      ]}/>
      <div className="industry-results"><strong>{matched.length} updates</strong><span>Newest first · July to September 2026</span></div>
      <div className="industry-news-grid">{matched.slice((page-1)*12,page*12).map(n=><NewsCard key={n.id} item={n}/>)}</div>
      {!matched.length&&<p className="industry-empty">No matching updates. Try another topic or reset the filters.</p>}
      <Pagination page={page} total={total} href={n=>queryHref("/news",{q,type,month,provider},n)}/>
      <IndustryPromo/>
    </section>
  </PublicationFrame>;
}

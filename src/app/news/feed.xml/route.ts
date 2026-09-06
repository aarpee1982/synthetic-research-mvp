import { news } from "@/lib/industry-news";
const xml = (s: string) => s.replace(/[<>&'\"]/g, c => ({"<":"&lt;",">":"&gt;","&":"&amp;","'":"&apos;",'"':"&quot;"}[c]!));
export function GET() {
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>SMR: Synthetic Research News</title><link>https://www.syntheticmarketresearch.com/news</link><description>Company updates and research perspectives, summarized by SMR.</description><language>en</language>${news.slice(0,50).map(n=>`<item><title>${xml(n.title)}</title><description>${xml(n.summary)}</description><link>${xml(n.source)}</link><guid isPermaLink="false">smr:${n.id}</guid><pubDate>${new Date(n.date+"T12:00:00Z").toUTCString()}</pubDate></item>`).join("")}</channel></rss>`,{headers:{"Content-Type":"application/rss+xml; charset=utf-8","Cache-Control":"public, max-age=3600"}});
}

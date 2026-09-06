import type { MetadataRoute } from "next";
import { products } from "@/lib/directory";
import { stories } from "@/lib/publication";
import { providers } from "@/lib/providers";
import { news } from "@/lib/industry-news";

const baseUrl = "https://www.syntheticmarketresearch.com";
const lastModified = new Date("2026-05-17T00:00:00.000Z");

const stableUrls = [
  "",
  "/methodology",
  "/blog",
  "/blog/ai-market-research-future",
  "/blog/glp1-obesity-cost-global-analysis",
  "/blog/the-say-do-gap-ai-research",
  "/blog/why-stated-preference-research-can-misread-launch-demand",
  "/privacy",
  "/terms"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const preserved = stableUrls.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified
  }));
  const paths = ["", "/directory", "/compare", "/insights", "/newsletter", "/submit", "/advertise", "/about", "/contact", "/methodology", "/privacy", "/terms", ...products.map(p => `/directory/${p.slug}`), ...stories.map(s => `/insights/${s.slug}`)];
  paths.push("/providers", "/news", "/guidance", ...providers.map(p => `/providers/${p.slug}`));
  for (let page=2; page<=Math.ceil(providers.length/24); page++) paths.push(`/providers?page=${page}`);
  for (let page=2; page<=Math.ceil(news.length/12); page++) paths.push(`/news?page=${page}`);
  return [...preserved.filter(entry => !paths.some(path => entry.url === `${baseUrl}${path}`)), ...paths.map(path => ({ url: `${baseUrl}${path}`, lastModified: new Date("2026-09-06T00:00:00.000Z") }))];
}

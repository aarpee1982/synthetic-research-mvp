import type { MetadataRoute } from "next";

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
  return [...preserved, ...["/custom-research", "/about", "/contact"].map(path => ({ url: `${baseUrl}${path}`, lastModified: new Date("2026-09-05T00:00:00.000Z") }))];
}

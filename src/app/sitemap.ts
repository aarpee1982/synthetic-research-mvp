import type { MetadataRoute } from "next";

const baseUrl = "https://www.syntheticmarketresearch.com";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/methodology", "/privacy", "/terms"].map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date() }));
}

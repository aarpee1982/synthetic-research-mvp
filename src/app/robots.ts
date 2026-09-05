import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: ["Google-Extended", "GoogleOther"], disallow: "/reports" },
    ],
    sitemap: "https://www.syntheticmarketresearch.com/sitemap.xml",
  };
}

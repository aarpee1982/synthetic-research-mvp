import type { Metadata } from "next";
import { Suspense } from "react";
import AnalyticsConsent from "@/components/AnalyticsConsent";
import "./analytics-consent.css";
import "./globals.css";
import "./smr.css";
import "./editorial.css";
import "./protein-bars.css";
import "./contact.css";
import "./report-dossier.css";
import "./publication.css";
import "./hub.css";
import "./industry.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.syntheticmarketresearch.com"),
  icons: { icon: [{ url: "/smr-mark.svg", type: "image/svg+xml" }, { url: "/smr-icon.png", type: "image/png", sizes: "32x32" }], shortcut: "/favicon.ico", apple: "/smr-apple-icon.png" },
  title: "Synthetic Market Research Companies & Directory | SMR",
  description:
    "Find synthetic market research companies, compare their tools, and explore sources, news and practical guidance in the SMR directory.",
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Suspense fallback={null}><AnalyticsConsent /></Suspense>
      </body>
    </html>
  );
}

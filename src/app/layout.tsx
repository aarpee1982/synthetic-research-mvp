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
  icons: { icon: "/smr-mark.svg" },
  title: "Synthetic Market Research | Tools, Companies & Guides",
  description:
    "Find synthetic research companies, compare their tools, and get clear answers to your questions about the industry.",
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

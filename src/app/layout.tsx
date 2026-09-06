import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import "./smr.css";
import "./editorial.css";
import "./protein-bars.css";
import "./contact.css";
import "./report-dossier.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.syntheticmarketresearch.com"),
  title: "Synthetic Market Research | Human-led Market Intelligence",
  description:
    "Syndicated reports and custom market intelligence. Human-led research, transparent methods and AI-assisted production. Offices in Singapore.",
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.syntheticmarketresearch.com"),
  title: "Synthetic Market Research - Human-Anchored AI Research",
  description:
    "A premium AI market research platform built around human behavioral signal, global synthetic agents, and fast executive-ready insight.",
  alternates: {
    canonical: "/"
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

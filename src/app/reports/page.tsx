import type { Metadata } from "next";
import ReportCatalogue from "@/components/ReportCatalogue";
import {
  PageFrame,
  PageIntro,
  ContactBand,
} from "@/components/ResearchUI";
export const metadata: Metadata = {
  title: "Syndicated Reports | Synthetic Market Research",
  description:
    "Explore 96 food, beverage, nutrition and ingredients report titles. Defined market coverage, scenario frameworks and human-led research.",
  alternates: { canonical: "/reports" },
  robots: { index: true, follow: true, googleBot: { index: false, follow: true } },
};
export default function ReportsPage() {
  return (
    <PageFrame>
      <PageIntro
        eyebrow="SYNDICATED RESEARCH"
        title="Syndicated market research."
      >
        <p>
          Food, beverages and ingredients. Focused market coverage, explicit
          assumptions and scenarios for the decisions ahead.
        </p>
      </PageIntro>
      <section className="smr-section">
        <div className="smr-wrap">
          <ReportCatalogue />
        </div>
      </section>
      <ContactBand />
    </PageFrame>
  );
}

import type { Metadata } from "next";
import { PageFrame, PageIntro, ContactBand } from "@/components/ResearchUI";
export const metadata: Metadata = {
  title: "About SMR | Synthetic Market Research",
  description:
    "Human-led market intelligence with AI-assisted production. Offices in Singapore, serving domestic and international research needs.",
  alternates: { canonical: "/about" },
};
export default function AboutPage() {
  return (
    <PageFrame>
      <PageIntro
        eyebrow="ABOUT SYNTHETIC MARKET RESEARCH"
        title="Research expertise. A modern way to produce it."
      >
        <p>
          SMR is built around a simple expectation: a client should be
          able to question a conclusion and examine the work behind it.
        </p>
      </PageIntro>
      <section className="smr-section">
        <div className="smr-wrap smr-prose">
          <h2>The people own the judgment.</h2>
          <p>
            Our founding team combines market research and consulting
            experience with AI expertise. Team backgrounds include more than
            five years in market research and prior experience at ZS Associates.
          </p>
          <p>
            Our approach centres on clearly scoped work, inspectable evidence
            and accountable delivery. Meet the researchers assigned to your
            engagement and discuss their relevant experience before commissioning.
          </p>
          <h2>What AI does. What researchers own.</h2>
          <p>
            AI assists with organising source material, preparing tables and
            drafts, and formatting reports and presentations. Researchers remain
            responsible for source evaluation, methodology, assumptions,
            forecasts, due diligence and final approval.
          </p>
          <p>
            Automation reduces repetitive production tasks so researchers can
            concentrate on source evaluation, analysis and the client&apos;s decision.
          </p>
          <h2>Why Synthetic?</h2>
          <p>
            Our current offer combines human-led research with AI-assisted
            production. The name reflects that combination. SMR has evolved from
            its earlier synthetic-audience focus; synthetic respondents are not
            the evidence base for this report offer.
          </p>
          <h2>Singapore offices. International perspectives.</h2>
          <p>
            With offices in Singapore, we welcome research briefs from
            organisations evaluating domestic and
            international markets.
          </p>
        </div>
      </section>
      <ContactBand />
    </PageFrame>
  );
}

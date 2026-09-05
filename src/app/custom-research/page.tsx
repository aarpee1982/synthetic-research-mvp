import type { Metadata } from "next";
import {
  PageFrame,
  PageIntro,
  ContactBand,
  Deliverables,
} from "@/components/ResearchUI";
export const metadata: Metadata = {
  title: "Custom Research | Synthetic Market Research",
  description:
    "Commission market-entry, competitive landscape and market-sizing research around your specific business decision.",
  alternates: { canonical: "/custom-research" },
};
const services = [
  [
    "Market entry & category assessment",
    "Define the opportunity, the competitive set and the evidence needed before committing resources.",
  ],
  [
    "Competitive & pricing intelligence",
    "Compare products, claims, business models and observed pricing within clearly defined channels and dates.",
  ],
  [
    "Market sizing: TAM, SAM & SOM",
    "Define the total market, the serviceable portion and a realistically obtainable share using explicit units, boundaries and assumptions. A revenue forecast is a separate modelling question.",
  ],
  [
    "Primary research, where it is needed",
    "Scope interviews or surveys when the decision cannot be answered responsibly from existing evidence. Recruitment, sample design, analysis and limitations form part of that proposal.",
  ],
];
export default function CustomResearchPage() {
  return (
    <PageFrame>
      <PageIntro
        eyebrow="CUSTOM RESEARCH"
        title="Your decision. Your research scope."
      >
        <p>
          A company-specific question deserves a study designed around its
          market, constraints and consequences.
        </p>
      </PageIntro>
      <section className="smr-section">
        <div className="smr-wrap">
          <div className="smr-prose">
            <h2>What do you need to understand?</h2>
            <ol className="smr-numbered">
              {services.map(([title, body]) => (
                <li key={title}>
                  <div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <h2>From question to agreed brief</h2>
            <p>
              We begin by discussing the decision, target market, current
              knowledge and deadline. We then propose the research questions,
              source plan, deliverables, exclusions and commercial terms. Work
              begins only after those details are agreed.
            </p>
            <p>
              Confidentiality, data handling, ownership and any exclusivity
              requirements are addressed in the engagement terms. Do not send
              confidential datasets through an initial inquiry.
            </p>
            <p className="smr-note">
              A custom engagement is distinct from a syndicated edition. We
              agree which outputs are client-specific and which rights are
              included before research begins.
            </p>
          </div>
          <Deliverables />
        </div>
      </section>
      <ContactBand />
    </PageFrame>
  );
}

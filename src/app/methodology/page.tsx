import type { Metadata } from "next";
import { PageFrame, PageIntro, ContactBand } from "@/components/ResearchUI";
export const metadata: Metadata = {
  title: "Research Methodology | Synthetic Market Research",
  description:
    "SMR's approach to market definitions, source evaluation, transparent calculations, scenario analysis and accountable human review.",
  alternates: { canonical: "/methodology" },
};
const stages = [
  [
    "Define the decision and the market",
    "Agree the business question, geography, category inclusions and exclusions, units, reference period and deliverables. Define what the evidence must support before selecting a method.",
  ],
  [
    "Build an evidence plan",
    "Identify relevant official statistics, regulatory publications, company filings, trade sources and other material. Evaluate definitions, dates, coverage and incentives. Record access limitations and whether sources are genuinely independent.",
  ],
  [
    "Collect and document",
    "Keep a source register with document titles, URLs or publication identifiers, dates, relevant pages and the claim each source supports. Primary interviews or surveys are included only when scoped and actually conducted.",
  ],
  [
    "Analyse and reconcile",
    "Make calculations reproducible. Explain unit conversions, geographic boundaries, double-counting controls and material discrepancies between sources. Where independent approaches are feasible, compare their results instead of averaging away disagreement.",
  ],
  [
    "Test assumptions and uncertainty",
    "Distinguish observations from estimates and scenarios. When forecasting is in scope, document drivers, base periods and sensitivity to assumptions. Avoid precision unsupported by the inputs; scenario ranges are not automatically confidence intervals.",
  ],
  [
    "Review, disclose and deliver",
    "A researcher checks material claims, calculations and consistency before approval. The deliverable identifies its scope, source base, assumptions and limitations. Material corrections should be documented and communicated to affected clients.",
  ],
];
export default function MethodologyPage() {
  return (
    <PageFrame>
      <PageIntro
        eyebrow="OUR RESEARCH METHODOLOGY"
        title="An answer you can examine."
      >
        <p>
          Human-led research. Explicit assumptions. A clear distinction between
          what the evidence shows and what the researcher infers.
        </p>
      </PageIntro>
      <section className="smr-section">
        <div className="smr-wrap smr-prose">
          <p className="smr-note">
            Each engagement starts with a defined decision and ends with a
            documented method, traceable evidence and accountable review.
          </p>
          <ol className="smr-numbered">
            {stages.map(([title, body]) => (
              <li key={title}>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </li>
            ))}
          </ol>
          <h2>Market sizing is a model, with boundaries.</h2>
          <p>
            TAM describes a defined total addressable market. SAM narrows that
            market to what the business can serve. SOM depends on realistic
            reach, capacity, competition and a specified period. These are not
            interchangeable labels for the same revenue estimate.
          </p>
          <p>
            Bottom-up and top-down approaches are useful only when their inputs
            and boundaries fit the question. We document those choices and
            identify where evidence is insufficient for a defensible estimate.
          </p>
          <h2>Primary research is a design choice.</h2>
          <p>
            There is no universal respondent count across our studies. Survey
            design starts from the target population, recruitment frame,
            decision and desired precision. Reporting should disclose
            recruitment, sample size, exclusions, weighting and limitations.
            Non-probability samples should not borrow a classical sampling
            margin of error without a defensible basis.
          </p>
          <p>
            Interviews can add depth and context; they do not automatically
            establish market prevalence. AI-generated responses are not counted
            as independent human observations.
          </p>
          <h2>AI assists production. Researchers approve the work.</h2>
          <p>
            AI can help organise material, draft text, assemble tables and
            format deliverables. Its output is not treated as a source. Material
            claims must be checked against underlying evidence, and calculations
            must be verified. Researchers own the methodology, judgment,
            diligence and final approval.
          </p>
          <p>
            Confidential client data and third-party materials require agreed
            handling and appropriate usage rights before being placed in any AI
            workflow.
          </p>
          <h2>What a client should receive</h2>
          <ul>
            <li>A defined scope, reference period and research question.</li>
            <li>
              The source register and supporting data permitted by source
              licences.
            </li>
            <li>Material calculation methods and assumptions.</li>
            <li>Clear labels for facts, estimates and scenarios.</li>
            <li>
              The methods actually used, evidence gaps and relevant limitations.
            </li>
            <li>
              An identified research contact for questions about the work.
            </li>
          </ul>
        </div>
      </section>
      <ContactBand />
    </PageFrame>
  );
}

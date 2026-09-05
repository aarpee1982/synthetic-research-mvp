import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Plus } from "lucide-react";
import { PageFrame, ReportGrid, Deliverables, ContactBand } from "./ResearchUI";
import ResearchScene from "./ResearchScene";
import ReportPreview from "./ReportPreview";
import MarketExhibit from "./MarketExhibit";
import EditorialMotion from "./EditorialMotion";
const faqs = [
  [
    "Why the name Synthetic Market Research?",
    "Our approach combines human research expertise with AI-assisted production. Researchers remain responsible for evidence, methodology, forecasts and final conclusions. AI helps organise information, prepare drafts and produce deliverables, leaving researchers focused on the work that requires judgment.",
  ],
  [
    "Do you offer syndicated reports or custom research?",
    "Both. Explore defined market coverage in our syndicated report catalogue, or commission custom research around your specific decision. Contact us for the scope, delivery schedule, pricing and licence that fit your team.",
  ],
  [
    "Does every report include interviews or surveys?",
    "No. The method depends on the question and available evidence. A desk-research study is identified as such. Interviews or surveys are included only where agreed and actually conducted, with the recruitment approach and limitations disclosed.",
  ],
  [
    "What will my team receive?",
    "A concise report, supporting evidence workbook and analyst briefing, as agreed in your scope. The emphasis is on decision-relevant analysis, traceable sources and the assumptions behind each scenario.",
  ],
  [
    "How do you handle forecasts and uncertainty?",
    "We distinguish observed facts, estimates and forward-looking scenarios. Forecasts depend on assumptions that must be stated and tested. Scenario ranges are not presented as statistical confidence intervals unless the method supports that interpretation.",
  ],
];
export default function ResearchHome() {
  return (
    <PageFrame>
      <EditorialMotion />
      <section className="smr-hero">
        <ResearchScene />
        <div className="smr-wrap smr-hero-inner">
          <div className="smr-hero-copy">
            <p className="smr-eyebrow">
              HUMAN-LED RESEARCH. AI-ASSISTED PRODUCTION.
            </p>
            <h1>
              Market intelligence
              <br />
              and research reports.
            </h1>
            <p className="smr-hero-description">
              Syndicated reports and custom research for market entry, product
              strategy and competitive decisions.
            </p>
            <p className="smr-hero-promise">
              Trace the evidence. Examine the assumptions. Make your next move.
            </p>
            <div className="smr-actions">
              <Link className="smr-button" href="/reports">
                Explore syndicated reports <ArrowUpRight size={18} />
              </Link>
              <Link className="smr-text-link" href="#inside">
                Inside an SMR report <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="smr-location-strip">
        <div className="smr-wrap">
          <span>
            <span className="smr-dot" /> Singapore <b>Offices</b>
          </span>
          <span className="smr-strip-end">
            A clear view. A considered decision.
          </span>
        </div>
      </div>
      <MarketExhibit />
      <section className="smr-section" id="inside">
        <div className="smr-wrap">
          <div className="smr-section-heading">
            <div>
              <p className="smr-eyebrow">02 / INSIDE THE RESEARCH</p>
              <h2>
                The conclusion matters.
                <br />
                <em>So does how you get there.</em>
              </h2>
            </div>
            <p>
              A useful report lets you examine the evidence, question the
              assumptions and understand what the findings mean for your
              business.
            </p>
          </div>
          <ReportPreview />
          <Deliverables />
        </div>
      </section>
      <section className="smr-section smr-tinted" id="reports">
        <div className="smr-wrap">
          <div className="smr-section-heading">
            <div>
              <p className="smr-eyebrow">03 / SYNDICATED REPORTS</p>
              <h2>
                Focused markets.
                <br />
                <em>Specific questions.</em>
              </h2>
            </div>
            <div>
              <p>
                Explore food, beverages, nutrition and ingredients through
                focused market questions and scenario-led research.
              </p>
              <Link href="/reports" className="smr-text-link">
                Explore all 96 report titles <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
          <ReportGrid />
        </div>
      </section>
      <section className="smr-section">
        <div className="smr-wrap smr-method-section">
          <div>
            <p className="smr-eyebrow">04 / OUR RESEARCH STANDARD</p>
            <h2>
              Evidence you can trace.
              <br />
              <em>Judgment you can question.</em>
            </h2>
            <p className="smr-section-copy">
              The researchers own the methodology, the diligence and the final
              conclusions. AI assists with production, with human verification
              of material outputs.
            </p>
            <Link className="smr-button outline" href="/methodology">
              Read our methodology <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="smr-principles">
            {[
              [
                "01",
                "Defined before researched",
                "An explicit market boundary, business question and scope.",
              ],
              [
                "02",
                "Sources behind the statements",
                "Dated references and a clear distinction between evidence and inference.",
              ],
              [
                "03",
                "Assumptions in the open",
                "Documented calculations, scenario drivers and limitations.",
              ],
              [
                "04",
                "Human accountability",
                "A researcher responsible for review and the final deliverable.",
              ],
            ].map(([n, title, body]) => (
              <article key={n}>
                <span>{n}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
                <Check size={19} />
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="smr-custom-band">
        <div className="smr-wrap">
          <div>
            <p className="smr-eyebrow">05 / CUSTOM RESEARCH</p>
            <h2>
              Your question deserves
              <br />
              <em>its own research brief.</em>
            </h2>
          </div>
          <div>
            <p>
              Entering a market? Assessing a category? Comparing competitors?
              Commission a study around the decision you actually need to make.
            </p>
            <Link className="smr-button" href="/custom-research">
              Explore custom research <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      <section className="smr-section">
        <div className="smr-wrap smr-faq-layout">
          <div>
            <p className="smr-eyebrow">BEFORE WE BEGIN</p>
            <h2>
              Good research
              <br />
              starts with
              <br />
              <em>good questions.</em>
            </h2>
            <Link href="/about" className="smr-text-link">
              About Synthetic <ArrowRight size={17} />
            </Link>
          </div>
          <div className="smr-faqs">
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary>
                  {q}
                  <Plus size={20} />
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <ContactBand />
    </PageFrame>
  );
}

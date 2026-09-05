"use client";
import { useState } from "react";
import { ArrowUpRight, FileCheck2, FileText, Table2 } from "lucide-react";
import Link from "next/link";
const tabs = ["Decision brief", "Evidence register", "Assumptions & limits"];
export default function ReportPreview() {
  const [active, setActive] = useState(0);
  return (
    <div className="smr-report-preview">
      <div className="smr-preview-sidebar">
        <span className="smr-label">THE REPORT, OPENED UP</span>
        <div
          role="tablist"
          aria-label="Report format sections"
          aria-orientation="vertical"
        >
          {tabs.map((tab, index) => {
            const Icon = [FileText, Table2, FileCheck2][index];
            return (
              <button
                type="button"
                id={`preview-tab-${index}`}
                role="tab"
                aria-selected={index === active}
                aria-controls="preview-panel"
                tabIndex={index === active ? 0 : -1}
                key={tab}
                onClick={() => setActive(index)}
                onKeyDown={(e) => {
                  if (["ArrowDown", "ArrowUp", "Home", "End"].includes(e.key)) {
                    e.preventDefault();
                    const next =
                      e.key === "Home"
                        ? 0
                        : e.key === "End"
                          ? 2
                          : (active + (e.key === "ArrowDown" ? 1 : 2)) % 3;
                    setActive(next);
                    document.getElementById(`preview-tab-${next}`)?.focus();
                  }
                }}
              >
                <Icon size={18} />
                {tab}
                <ArrowUpRight size={16} />
              </button>
            );
          })}
        </div>
        <p>
          Clear conclusions. Traceable sources. Assumptions you can examine.
        </p>
        <Link
          className="smr-text-link"
          href="/contact?interest=Report%20sample"
        >
          Discuss your report <ArrowUpRight size={16} />
        </Link>
      </div>
      <div
        className="smr-preview-paper"
        id="preview-panel"
        role="tabpanel"
        aria-labelledby={`preview-tab-${active}`}
        tabIndex={0}
      >
        <div className="smr-paper-header">
          <strong>
            Synthetic<span>.</span>
          </strong>
          <span>RESEARCH STANDARD / 0{active + 1}</span>
        </div>
        {active === 0 && (
          <>
            <p className="smr-eyebrow">DECISION BRIEF</p>
            <h3>
              Start with the decision.
              <br />
              Make the evidence useful.
            </h3>
            <div className="smr-paper-grid">
              <div>
                <span className="smr-paper-label">THE QUESTION</span>
                <p>Which competitive positions warrant a closer look?</p>
              </div>
              <div>
                <span className="smr-paper-label">THE BOUNDARY</span>
                <p>
                  Define the category, geography, channels and observation
                  period.
                </p>
              </div>
            </div>
            <div className="smr-paper-rule" />
            <div className="smr-evidence-line">
              <b>Evidence</b>
              <span>What the source establishes</span>
            </div>
            <div className="smr-evidence-line">
              <b>Interpretation</b>
              <span>What the researcher concludes</span>
            </div>
            <div className="smr-evidence-line">
              <b>Implication</b>
              <span>What to consider before acting</span>
            </div>
          </>
        )}
        {active === 1 && (
          <>
            <p className="smr-eyebrow">EVIDENCE REGISTER</p>
            <h3>
              A claim should have
              <br />
              somewhere to lead.
            </h3>
            <div className="smr-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Source type</th>
                    <th>Record</th>
                    <th>Important limit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Official statistics</td>
                    <td>Definition, period, table</td>
                    <td>Category fit</td>
                  </tr>
                  <tr>
                    <td>Company filing</td>
                    <td>Document, date, page</td>
                    <td>Reporting boundary</td>
                  </tr>
                  <tr>
                    <td>Product listing</td>
                    <td>URL, access date, SKU</td>
                    <td>Not sales evidence</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="smr-paper-note">
              Source records connect each material statement to its definition,
              observation period and evidence boundary.
            </p>
          </>
        )}
        {active === 2 && (
          <>
            <p className="smr-eyebrow">ASSUMPTIONS & LIMITS</p>
            <h3>
              Separate what is known
              <br />
              from what is modelled.
            </h3>
            <div className="smr-assumption-row">
              <span>01</span>
              <div>
                <strong>Observed fact</strong>
                <p>
                  A directly sourced observation with its date and boundary.
                </p>
              </div>
            </div>
            <div className="smr-assumption-row">
              <span>02</span>
              <div>
                <strong>Estimate</strong>
                <p>
                  A calculation with inputs, method and uncertainty explained.
                </p>
              </div>
            </div>
            <div className="smr-assumption-row">
              <span>03</span>
              <div>
                <strong>Scenario</strong>
                <p>A conditional outcome, dependent on stated assumptions.</p>
              </div>
            </div>
          </>
        )}
        <div className="smr-paper-footer">
          <span>HUMAN-LED RESEARCH. AI-ASSISTED PRODUCTION.</span>
          <span>0{active + 1}</span>
        </div>
      </div>
    </div>
  );
}

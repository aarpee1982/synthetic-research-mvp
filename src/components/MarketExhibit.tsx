"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ScenarioMatrix, DecisionPathways } from "./ScenarioMatrix";
const views = [
  { name: "Market entry", signals: ["Customer adoption", "Unit economics", "Route to market"],
    conditions: [["Adoption slows", "Adoption holds", "Repeat adoption grows"], ["Cost pressure rises", "Economics stabilise", "Economics improve"], ["Access narrows", "Access holds", "Access broadens"]] },
  { name: "Product strategy", signals: ["Repeat purchase", "Product economics", "Distribution"],
    conditions: [["Repeat purchase weakens", "Repeat purchase holds", "Repeat purchase strengthens"], ["Contribution contracts", "Contribution holds", "Contribution improves"], ["Listings contract", "Listings hold", "Listings expand"]] },
  { name: "Investment", signals: ["Commercial milestones", "Cash requirements", "Execution capacity"],
    conditions: [["Milestones slip", "Milestones stay on track", "Milestones accelerate"], ["Funding needs increase", "Funding needs hold", "Funding needs ease"], ["Execution constraints rise", "Capacity meets plan", "Capacity supports expansion"]] },
];
export default function MarketExhibit() {
  const [active, setActive] = useState(0);
  return <section className="smr-section smr-exhibit-section" id="exhibit">
    <div className="smr-wrap">
      <div className="smr-section-heading">
        <div><p className="smr-eyebrow">01 / SCENARIO-LED INTELLIGENCE</p><h2>One market.<br /><em>More than one future.</em></h2></div>
        <p>Examine the conditions behind a decision. Understand what changes under pressure, what holds steady and what would support expansion.</p>
      </div>
      <div className="smr-exhibit">
        <div className="smr-exhibit-header"><div><span className="smr-exhibit-number">THE SCENARIO FRAMEWORK</span><h3>What would need to be true?</h3><p>Conditions, signposts and decision options.</p></div>
          <div className="smr-scenario-modes" role="group" aria-label="Decision context">{views.map((view, i) => <button type="button" aria-pressed={active === i} onClick={() => setActive(i)} key={view.name}>{view.name}</button>)}</div>
        </div>
        <ScenarioMatrix signals={views[active].signals} conditions={views[active].conditions} />
        <DecisionPathways />
        <div className="smr-exhibit-source"><p>SMR scenario framework. Pathways describe conditional assumptions, not probabilities or measured market outcomes.</p><Link className="smr-text-link" href="/methodology">Explore the methodology <ArrowUpRight size={16} /></Link></div>
      </div>
    </div>
  </section>;
}

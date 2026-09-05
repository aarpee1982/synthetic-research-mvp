import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";

export const scenarioNames = ["Downside", "Reference", "Upside"];
export function ScenarioMatrix({ signals, conditions }: {
  signals: readonly string[];
  conditions: readonly (readonly string[])[];
}) {
  return (
    <figure className="smr-scenario-matrix">
      <figcaption>Scenario conditions <span>Qualitative comparison</span></figcaption>
      <div className="smr-matrix-scroll" tabIndex={0} role="region" aria-label="Scenario conditions table">
        <table>
          <thead><tr><th scope="col">Decision variable</th>{scenarioNames.map((name, i) => {
            const Icon = [ArrowDownRight, ArrowRight, ArrowUpRight][i];
            return <th scope="col" className={`scenario-${i}`} key={name}><Icon size={19} />{name}</th>;
          })}</tr></thead>
          <tbody>{signals.map((signal, row) => <tr key={signal}>
            <th scope="row">{signal}</th>
            {conditions[row].map((condition, col) => <td className={`scenario-${col}`} key={condition}><span className="smr-condition-marker" />{condition}</td>)}
          </tr>)}</tbody>
        </table>
      </div>
    </figure>
  );
}
export function DecisionPathways() {
  const paths = [
    ["Downside", "Economics under pressure", "Protect", "Reassess exposure, cost and commitments."],
    ["Reference", "Repeatability evidenced", "Validate", "Test the proposition before scaling."],
    ["Upside", "Expansion milestones met", "Expand", "Release investment against evidence."],
  ];
  return (
    <figure className="smr-decision-pathways">
      <figcaption>From conditions to a decision <span>Actions to evaluate</span></figcaption>
      <div>{paths.map(([scenario, condition, action, implication], i) =>
        <div className={`smr-pathway scenario-${i}`} key={scenario}>
          <span className="smr-pathway-name">{scenario}</span>
          <p>{condition}</p><ArrowRight aria-hidden="true" size={25} />
          <strong>{action}</strong><p>{implication}</p>
        </div>
      )}</div>
    </figure>
  );
}

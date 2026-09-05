import type { Report } from "./reports";

// Editorial copy stays below 600 words. Exhibit labels, navigation and commercial
// terms are separate so adding a control cannot silently truncate a paragraph.
export function reportContent(report: Report) {
  return [
    {
      title: "What does this research cover?",
      body: `The ${report.title} research brief covers ${report.scope}. Geographic coverage: ${report.region}. The scope combines ${report.focus.toLowerCase()} with downside, reference and upside conditions. The question: where to compete, and what evidence would justify investment?`,
    },
    {
      title: "Where does the market begin and end?",
      body: `${report.distinction} The analytical lens is ${report.sector.lens.toLowerCase()}. A commissioned scope fixes product inclusions, customer groups, countries, sales channels and the reference period before sizing begins. Value and volume measures remain separate. Where categories overlap, the model records the relationship rather than adding the same activity twice. Global coverage requires explicit country coverage and does not imply equally detailed evidence everywhere.`,
    },
    {
      title: "Which conditions change the decision?",
      body: `The scenario matrix follows three decision variables: ${report.signals.join(", ").toLowerCase()}. Downside conditions test resilience when adoption or access weakens and economics become less favourable. The reference pathway holds the stated operating conditions steady; it is not a claim about the most probable outcome. Upside conditions examine what additional adoption, access or efficiency would need to occur. The matrix defines conditions to investigate, not measured market movements or assigned probabilities.`,
    },
    {
      title: "What would support a market estimate?",
      body: `The evidence plan prioritises ${report.sector.sources}. Every material input needs a date, definition, geographic boundary and a record of what it establishes. Independent source types should be reconciled where possible; repeating the same underlying estimate does not create independent confirmation. ${report.sector.checks} Any numerical forecast needs a documented starting point and a reproducible calculation before it belongs in a client deliverable.`,
    },
    {
      title: "How should scenarios inform action?",
      body: "The decision pathways connect conditions to actions: protect economics under pressure, validate repeatability under reference conditions, and release expansion investment when upside milestones are evidenced. These are options to evaluate, not automatic recommendations. A market-entry decision also needs company-specific capabilities, economics and risk tolerances. The useful question is which observation would change the decision, how soon it can be collected, and whether the cost of waiting is greater than the cost of acting.",
    },
    {
      title: "What is included in an engagement?",
      body: "Agree the geography, research questions, evidence requirements, delivery date and licence before commissioning. The engagement can combine a concise report, an evidence workbook and an analyst briefing. Researchers own the methodology, assumptions, source evaluation and final review; AI assists organisation and production. Interviews, surveys and licensed datasets are scoped separately where needed.",
    },
  ];
}
export function editorialWordCount(report: Report) {
  return reportContent(report).map((section) => section.body).join(" ").trim().split(/\s+/).length;
}

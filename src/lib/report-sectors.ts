export type SectorFramework = {
  lens: string;
  sources: string;
  checks: string;
  conditions: [string, string, string][];
};
export const sectorFrameworks: Record<string, SectorFramework> = {
  "Dairy & infant nutrition": {
    lens: "Product stage, formulation, household occasion and channel",
    sources: "official production and trade series, company category disclosures, dated retail assortments and product specifications",
    checks: "Product definitions, age stages where relevant, cold-chain requirements and pack sizes need consistent treatment. Brand presence cannot establish category share, and household interest cannot substitute for purchase evidence.",
    conditions: [["Repeat adoption weakens", "Repeat adoption holds", "Repeat adoption strengthens"], ["Input pressure rises", "Input pressure stabilises", "Input pressure eases"], ["Shelf access contracts", "Shelf access holds", "Shelf access broadens"]],
  },
  "Bakery, snacks & confectionery": {
    lens: "Consumption occasion, price per serving, format and channel",
    sources: "manufacturer disclosures, dated retail product observations, relevant production statistics and ingredient cost series",
    checks: "Pack weight, serving size, promotional timing and fresh versus packaged formats need consistent treatment. A shelf listing is evidence of availability at a particular point, not proof of sales velocity.",
    conditions: [["Purchase frequency falls", "Purchase frequency holds", "Purchase frequency rises"], ["Cost pressure intensifies", "Cost pressure stabilises", "Cost pressure eases"], ["Listings become harder", "Listings remain stable", "Listings broaden"]],
  },
  "Beverages": {
    lens: "Consumption occasion, formulation, pack format and channel",
    sources: "producer disclosures, official production and trade statistics, dated retailer observations and distributor product information",
    checks: "Pack volume, serving price, product classification and retail versus hospitality coverage require alignment. Tax treatment and currency conversions must be documented when comparing countries or value-chain stages.",
    conditions: [["Repeat occasions decline", "Repeat occasions hold", "Repeat occasions expand"], ["Cost pressure rises", "Cost pressure stabilises", "Cost pressure eases"], ["Channel access narrows", "Channel access holds", "Channel access broadens"]],
  },
  "Foodservice & delivery": {
    lens: "Transactions, spend per order, outlet format and contribution",
    sources: "operator filings, official service-sector statistics, dated menu observations and disclosed platform operating metrics",
    checks: "Same-store activity and new outlet additions answer different questions. Order value, restaurant receipts, franchise revenue and platform fees require separate definitions before any reconciliation across the value chain.",
    conditions: [["Visits and orders soften", "Visits and orders hold", "Visits and orders strengthen"], ["Contribution comes under pressure", "Contribution remains stable", "Contribution economics improve"], ["Outlet reach contracts", "Outlet reach holds", "Outlet reach expands"]],
  },
  "Staples, oils & pantry": {
    lens: "Product grade, application, processing stage and route to market",
    sources: "official agricultural and trade statistics, processor disclosures, commodity publications and dated buyer or retailer specifications",
    checks: "Raw, processed and branded products represent different stages. Harvest changes, inventories, trade flows and conversion yields need reconciliation before a supply measure can inform a demand estimate.",
    conditions: [["End-use demand softens", "End-use demand holds", "End-use demand strengthens"], ["Sourcing costs increase", "Sourcing costs stabilise", "Sourcing costs ease"], ["Supply access tightens", "Supply access holds", "Supply access improves"]],
  },
  "Nutrition & alternative protein": {
    lens: "Application, product performance, evidence and commercial adoption",
    sources: "supplier specifications, dated company disclosures, relevant official publications and documented buyer qualification requirements",
    checks: "Technical performance, claimed benefits and repeat commercial orders are separate evidence questions. Announced production capacity is not equivalent to qualified output, recurring revenue or demonstrated customer adoption.",
    conditions: [["Adoption milestones slip", "Adoption remains steady", "Repeat adoption accelerates"], ["Unit economics deteriorate", "Unit economics hold", "Unit economics improve"], ["Qualification takes longer", "Qualification stays on track", "Qualified access expands"]],
  },
  "Ingredients & formulation": {
    lens: "Technical function, application, cost-in-use and qualification",
    sources: "supplier technical documents, manufacturer disclosures, relevant trade statistics and dated application or procurement specifications",
    checks: "Functional performance and use level must accompany ingredient prices. A lower price per kilogram does not necessarily mean a lower cost per finished unit, and qualification requirements can constrain substitution.",
    conditions: [["Formulation wins slow", "Formulation wins continue", "Formulation wins accelerate"], ["Cost-in-use worsens", "Cost-in-use holds", "Cost-in-use improves"], ["Qualification cycles lengthen", "Qualification proceeds steadily", "Qualified applications expand"]],
  },
  "Prepared food & animal protein": {
    lens: "Product format, preparation level, supply chain and channel",
    sources: "official production and trade series, processor disclosures, dated retail or foodservice observations and product specifications",
    checks: "Raw inputs and finished products require separate boundaries. Weight conventions, processing yields, storage requirements and channel margins must be documented before drawing conclusions across different supply-chain stages.",
    conditions: [["End-use demand weakens", "End-use demand holds", "End-use demand strengthens"], ["Supply-chain costs rise", "Supply-chain costs stabilise", "Supply-chain costs ease"], ["Distribution becomes constrained", "Distribution holds steady", "Distribution reach improves"]],
  },
};

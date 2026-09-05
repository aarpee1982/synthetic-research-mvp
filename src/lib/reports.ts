import inventory from "./report-inventory.json";
import { topicDetails } from "./report-topics";
import { sectorFrameworks } from "./report-sectors";

export const reports = inventory.map((item) => {
  const detail = topicDetails[item.title];
  if (!detail) throw new Error(`Missing topic detail: ${item.title}`);
  const sector = sectorFrameworks[item.category];
  if (!sector) throw new Error(`Missing sector: ${item.category}`);
  return { ...item, ...detail, sector, focus: detail.focus };
});
export type Report = (typeof reports)[number];
export const featuredReports = ["protein-bars", "functional-beverages", "food-ingredients"]
  .map((slug) => reports.find((report) => report.slug === slug)!);
export const reportAliases: Record<string, string> = {
  "us-protein-snack-bars": "protein-bars",
  "specialty-food-ingredients": "food-ingredients",
};

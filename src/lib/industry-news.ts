export type NewsItem = { id: string; title: string; summary: string; date: string; provider: string; type: "Announcement" | "Company perspective" | "Research"; source: string; image: string; imageCredit: string };
// Source publication dates, not SMR discovery dates.
import items from "./industry-news-data.json";
export const news: NewsItem[] = items as NewsItem[];
export function dateLabel(date: string) { return new Date(date + "T12:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }); }

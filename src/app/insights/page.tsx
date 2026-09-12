import type { Metadata } from "next";
import { PublicationFrame, Intro, StoryCard, BriefingBand } from "@/components/PublicationUI";
import { stories } from "@/lib/publication";
export const metadata: Metadata = { title: "Synthetic Market Research Guides & Insights | SMR", description: "Practical guides, product analysis and briefings for evaluating synthetic market research companies and methods.", alternates: { canonical: "/insights" } };
export default function InsightsPage() { return <PublicationFrame><Intro eyebrow="GUIDES & EXPLAINERS" title="Get to know synthetic research"><p>What the tools do, how they differ, and what to ask before you buy.</p></Intro><section className="pub-wrap pub-section pub-story-grid">{stories.map((s, i) => <StoryCard key={s.slug} story={s} number={i + 1} />)}</section><BriefingBand /></PublicationFrame>; }

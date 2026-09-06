import type { Metadata } from "next";
import DirectoryExplorer from "@/components/DirectoryExplorer";
import { PublicationFrame, Intro, BriefingBand } from "@/components/PublicationUI";
import { categories, uses } from "@/lib/directory";
export const metadata: Metadata = { title: "Synthetic Research Product Directory | SMR", description: "Compare synthetic respondents, digital twins, audience simulations and sample augmentation products using provider-original documentation.", alternates: { canonical: "/directory" } };
export default async function DirectoryPage({ searchParams }: { searchParams: Promise<{ q?: string; category?: string; use?: string }> }) {
  const params = await searchParams;
  return <PublicationFrame><Intro eyebrow="THE DIRECTORY" title="A better-informed shortlist."><p>Explore the products shaping synthetic research, from specialist platforms to established research firms.</p></Intro><DirectoryExplorer initialQuery={typeof params.q === "string" ? params.q.slice(0, 200) : ""} initialCategory={categories.includes(params.category as typeof categories[number]) ? params.category : ""} initialUse={uses.includes(params.use || "") ? params.use : ""} /><BriefingBand /></PublicationFrame>;
}

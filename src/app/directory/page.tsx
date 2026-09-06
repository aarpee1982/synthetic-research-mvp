import type { Metadata } from "next";
import DirectoryHub, { type DirectoryParams } from "@/components/DirectoryHub";
export const metadata: Metadata = { title: "Synthetic Research Tools & Companies | SMR", description: "Browse synthetic research companies, filter by what you need, save tools and compare products side by side.", alternates: { canonical: "/directory" } };
export default async function DirectoryPage({ searchParams }: { searchParams: Promise<DirectoryParams> }) {
  return <DirectoryHub params={await searchParams} />;
}

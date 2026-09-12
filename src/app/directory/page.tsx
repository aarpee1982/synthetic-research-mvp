import type { Metadata } from "next";
import DirectoryHub, { type DirectoryParams } from "@/components/DirectoryHub";
export const metadata: Metadata = { title: "Synthetic Market Research Tools Directory | SMR", description: "Browse synthetic market research tools, compare product details and find the companies behind synthetic audiences, digital twins and related research methods.", alternates: { canonical: "/directory" } };
export default async function DirectoryPage({ searchParams }: { searchParams: Promise<DirectoryParams> }) {
  return <DirectoryHub params={await searchParams} />;
}

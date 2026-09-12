import type { Metadata } from "next";
import DirectoryHub, { type DirectoryParams } from "@/components/DirectoryHub";
export const metadata: Metadata = { title: "Synthetic Market Research Companies & Directory | SMR", description: "Find synthetic market research companies, compare their tools, and explore synthetic respondents, audience simulation and digital twins.", alternates: { canonical: "/" } };
export default async function Home({ searchParams }: { searchParams: Promise<DirectoryParams> }) {
  return <DirectoryHub home params={await searchParams} />;
}

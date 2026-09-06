import type { Metadata } from "next";
import DirectoryHub, { type DirectoryParams } from "@/components/DirectoryHub";
export const metadata: Metadata = { title: "Synthetic Market Research | Tools, Companies & Guides", description: "Find and compare synthetic research tools. Explore companies, save products and get simple guides to synthetic audiences, digital twins and more.", alternates: { canonical: "/" } };
export default async function Home({ searchParams }: { searchParams: Promise<DirectoryParams> }) {
  return <DirectoryHub home params={await searchParams} />;
}

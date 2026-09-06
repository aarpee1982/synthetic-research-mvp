import type { Metadata } from "next";
import { PublicationFrame, Intro } from "@/components/PublicationUI";
import ProductCompare from "@/components/ProductCompare";
import { getProduct } from "@/lib/directory";
export const metadata: Metadata = { title: "Compare Synthetic Research Products | SMR", description: "Build a side-by-side comparison of product scope, data grounding, access and buying questions.", alternates: { canonical: "/compare" } };
export default async function ComparePage({ searchParams }: { searchParams: Promise<{ products?: string }> }) { const params = await searchParams; const ids = typeof params.products === "string" ? [...new Set(params.products.split(","))].filter(id => getProduct(id)).slice(0, 3) : []; return <PublicationFrame><Intro eyebrow="PRODUCT COMPARISON" title="Look beyond the label."><p>Compare the product, the grounding and the questions worth asking.</p></Intro><ProductCompare initial={ids} /></PublicationFrame>; }

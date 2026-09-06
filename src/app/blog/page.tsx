import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PublicationFrame, Intro } from "@/components/PublicationUI";
import { researchNotes } from "@/lib/research-notes";
export const metadata: Metadata = { title: "Market Research Basics | SMR", description: "Short, simple explanations of customer research, AI testing and the questions behind a product launch.", alternates: { canonical: "/blog" } };
export default function BlogPage() {
  return <PublicationFrame><Intro eyebrow="RESEARCH BASICS" title="Better questions. More useful answers."><p>Simple ways to think about customers, new products and AI research.</p></Intro><section className="pub-wrap hub-blog-list">{Object.entries(researchNotes).map(([slug, post]) => <article key={slug}><h2>{post.title}</h2><p>{post.description}</p><Link className="pub-text-link" href={`/blog/${slug}`}>Read the guide <ArrowRight size={16} /></Link></article>)}</section></PublicationFrame>;
}

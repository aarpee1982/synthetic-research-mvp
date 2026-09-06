import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PublicationFrame } from "@/components/PublicationUI";
import { researchNotes } from "@/lib/research-notes";
export function generateStaticParams() { return Object.keys(researchNotes).map(slug => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = researchNotes[slug];
  return post ? { title: `${post.title} | SMR`, description: post.description, alternates: { canonical: `/blog/${slug}` } } : { title: "Guide not found | SMR" };
}
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = researchNotes[slug];
  if (!post) notFound();
  return <PublicationFrame><div className="pub-wrap pub-article"><article className="hub-blog-prose"><Link className="pub-text-link" href="/blog">Research basics</Link><h1>{post.title}</h1><p className="hub-blog-dek">{post.description}</p>{post.body.map(text => <p key={text}>{text.split(/(\[\d+\])/g).map((part, i) => /^\[\d+\]$/.test(part) ? <a key={i} href={`#source-${part.slice(1, -1)}`}>{part}</a> : part)}</p>)}{post.sources && <section className="pub-references"><h2>Sources</h2><ol>{post.sources.map((s, i) => <li key={s.url} id={`source-${i + 1}`}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.title}</a></li>)}</ol></section>}<Link className="pub-text-link" href="/directory">Explore synthetic research tools</Link></article></div></PublicationFrame>;
}

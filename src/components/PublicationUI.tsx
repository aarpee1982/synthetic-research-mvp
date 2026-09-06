import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Nav from "./Nav";
import Footer from "./Footer";
import { Product, products } from "@/lib/directory";
import { Story } from "@/lib/publication";

export function PublicationFrame({ children }: { children: React.ReactNode }) {
  return <div className="publication"><Nav /><main id="main">{children}</main><Footer /></div>;
}
export function Intro({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return <header className="pub-intro pub-wrap"><p className="pub-eyebrow">{eyebrow}</p><h1>{title}</h1>{children && <div className="pub-dek">{children}</div>}</header>;
}
export function ProductMark({ product }: { product: Product }) {
  return <span className="pub-product-mark" style={{ backgroundColor: product.color }} aria-hidden="true">{product.company === "Qualtrics" ? "XM" : product.company.slice(0, 1)}</span>;
}
export function ProductLink({ product }: { product: Product }) {
  return <Link className="pub-product-link" href={`/directory/${product.slug}`}><ProductMark product={product} /><span><strong>{product.company}</strong><small>{product.name}</small></span><ArrowUpRight size={18} /></Link>;
}
export function StoryCard({ story, number }: { story: Story; number: number }) {
  return <article className="pub-story-card"><span className="pub-story-number" aria-hidden="true">0{number}</span><p className="pub-eyebrow">{story.type} <span>/ {story.minutes} min read</span></p><h3><Link href={`/insights/${story.slug}`}>{story.title}</Link></h3><p>{story.dek}</p><Link className="pub-text-link" href={`/insights/${story.slug}`}>Read the story <ArrowRight size={16} /></Link></article>;
}
export function RelatedProducts({ ids }: { ids: string[] }) {
  return <section className="pub-related"><h2>Explore the products</h2><div className="pub-related-grid">{products.filter(p => ids.includes(p.slug)).map(p => <ProductLink key={p.slug} product={p} />)}</div></section>;
}
export function BriefingBand() {
  return <section className="pub-newsletter-band"><div className="pub-wrap"><div><p className="pub-eyebrow">THE SYNTHETIC BRIEF</p><h2>A clearer view of a changing industry.</h2><p>Product developments, research worth reading, and sharper buying questions.</p></div><Link className="pub-button" href="/newsletter">Join the newsletter <ArrowRight size={18} /></Link></div></section>;
}
export function ProductVisual() {
  return <figure className="pub-product-visual"><Link href="/directory/fairgen-twins"><Image unoptimized src="/fairgen-audience-product.webp" width={960} height={580} alt="Fairgen's published audience-selection interface with study categories" /></Link><figcaption>Product view: Fairgen. <a href="https://www.fairgen.ai/" target="_blank" rel="noopener noreferrer">Provider-supplied illustration <ArrowUpRight size={12} /></a></figcaption></figure>;
}

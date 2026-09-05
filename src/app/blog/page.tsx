import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights - Synthetic Market Research",
  description:
    "Notes on AI market research, human calibration, the say-do gap, launch demand, and applied synthetic research.",
  alternates: {
    canonical: "/blog"
  }
};

const posts = [
  {
    slug: "ai-market-research-future",
    title: "AI market research is useful only when it is grounded in humans.",
    excerpt:
      "Synthetic research has promise, but calibration and validation decide whether it becomes insight or theatre."
  },
  {
    slug: "glp1-obesity-cost-global-analysis",
    title: "GLP-1, obesity, and the global cost curve.",
    excerpt:
      "A human-anchored view of how weight-loss drugs may reshape health systems, employers, insurers, and consumer behaviour."
  },
  {
    slug: "the-say-do-gap-ai-research",
    title: "The say-do gap is the real enemy.",
    excerpt:
      "Research improves when it starts from decisions people actually made, not predictions about what they might do."
  },
  {
    slug: "why-stated-preference-research-can-misread-launch-demand",
    title: "Why stated preference research can misread launch demand.",
    excerpt:
      "Concept testing needs realistic alternatives, trade-offs, and behavioural context to avoid false confidence."
  }
];

export default function BlogPage() {
  return (
    <>
      <Nav />
      <main className="page" id="main">
        <div className="container">
          <p className="eyebrow">Insights</p>
          <h1>Research archive.</h1>
          <p className="smr-archive-notice">These earlier articles reflect SMR&apos;s previous synthetic-audience focus. Our current offer is syndicated reports and custom market intelligence. <Link href="/methodology">Read the current methodology.</Link></p>
          <div className="blog-list">
            {posts.map((post) => (
              <article className="blog-card" key={post.slug}>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <Link className="button secondary" href={`/blog/${post.slug}`}>
                  Read insight
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

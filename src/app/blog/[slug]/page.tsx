import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const posts: Record<string, { title: string; description: string; body: string[] }> = {
  "ai-market-research-future": {
    title: "AI market research is useful only when it is grounded in humans.",
    description:
      "Why useful synthetic research starts with real human calibration, validation, and expert review.",
    body: [
      "Synthetic research is not a shortcut around human understanding. It is a way to extend a human signal once that signal has been collected, checked, and structured.",
      "The most useful studies begin with real participants and use AI to identify patterns, pressure-test segments, and scale the analysis. Without that calibration layer, synthetic output can sound fluent while drifting away from the market.",
      "The discipline is in the validation: held-out human responses, parity checks, minority-viewpoint coverage, and expert review before any recommendation reaches a client."
    ]
  },
  "glp1-obesity-cost-global-analysis": {
    title: "GLP-1, obesity, and the global cost curve.",
    description:
      "A human-anchored market research view of GLP-1 adoption, obesity costs, health systems, employers, insurers, and consumer behaviour.",
    body: [
      "GLP-1 medicines are changing more than a pharmaceutical category. They are changing how health systems, employers, insurers, food companies, and consumers think about obesity, prevention, adherence, and long-term cost.",
      "The commercial question is not only whether demand exists. It is who sustains usage, who pays, which trade-offs matter, and how behaviour changes once early curiosity meets real constraints.",
      "A human-anchored synthetic research design can test those trade-offs across markets: affordability, side effects, provider trust, stigma, perceived efficacy, and willingness to change adjacent consumption patterns.",
      "The useful signal comes from grounding the simulation in real decision context before scaling it. That is what separates market insight from category noise."
    ]
  },
  "the-say-do-gap-ai-research": {
    title: "The say-do gap is the real enemy.",
    description:
      "Why research should start from decisions people actually made rather than predicted behaviour.",
    body: [
      "Customers are often sincere when they describe what they would do. They are also often wrong. The distance between stated intent and revealed behaviour is where research risk lives.",
      "A stronger research design starts with decisions that already happened: purchases, switches, renewals, cancellations, trade-offs, and moments of regret.",
      "AI can then extend patterns from those real events, but the anchor remains behavioural. That is what keeps the output useful for commercial decisions."
    ]
  },
  "why-stated-preference-research-can-misread-launch-demand": {
    title: "Why stated preference research can misread launch demand.",
    description:
      "How launch research can avoid inflated confidence by recreating trade-offs and category context.",
    body: [
      "Launch demand is rarely decided in isolation. Buyers compare price, risk, timing, brand trust, switching cost, and the alternative of doing nothing.",
      "When research asks only whether people like an idea, it removes the friction that will shape the real market. The result is often inflated confidence.",
      "Better launch research recreates trade-offs and asks people to reason from real category behaviour. Synthetic extensions are useful only after that decision context is clear."
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return {
      title: "Insight Not Found - Synthetic Market Research"
    };
  }

  return {
    title: `${post.title} - Synthetic Market Research`,
    description: post.description,
    alternates: {
      canonical: `/blog/${slug}`
    }
  };
}

export default async function BlogPostPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    notFound();
  }

  return (
    <>
      <Nav />
      <main className="page">
        <article className="container article">
          <p className="eyebrow">Insight</p>
          <h1>{post.title}</h1>
          {post.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>
      </main>
      <Footer />
    </>
  );
}

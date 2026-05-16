import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Methodology - Synthetic Market Research",
  description:
    "How Synthetic Market Research uses real human calibration, AI synthesis, parity validation, and expert review to scale market research.",
  alternates: {
    canonical: "/methodology"
  }
};

const stages = [
  [
    "Research Brief & Scope Definition",
    "Every study begins with a structured brief. We define the target population, geographic scope, research objectives, and the specific decisions the findings must support."
  ],
  [
    "Human Panel Design",
    "We select 200-300 real participants from a pre-screened global pool. Selection is behavioural first, with archetypes built around category engagement and decision context."
  ],
  [
    "Structured Data Collection",
    "Each participant completes a multi-phase session combining quantitative survey work with open-ended depth questions that capture language, emotion, and motivation."
  ],
  [
    "AI Calibration",
    "Human responses form the calibration layer before any AI synthesis begins. Verbatim responses are indexed and retrieved during synthesis."
  ],
  [
    "Population-Scale AI Synthesis",
    "Calibrated persona clusters extend the human signal across broader demographic and geographic diversity while preserving traceability back to the original data."
  ],
  [
    "Parity Validation",
    "A held-out subset of real responses is compared against AI-generated responses across thematic overlap, depth, comprehensiveness, and qualitative alignment."
  ],
  [
    "Expert Review & Delivery",
    "Every output is reviewed by a domain expert before delivery, with a methodology appendix suitable for research teams and procurement."
  ]
];

const principles = [
  [
    "Real Humans Are the Calibration Signal",
    "Our panel participants are the specific human data that tells the AI how consumers in this category, in this market, at this moment, think and speak."
  ],
  [
    "Behavioural Archetypes, Not Demographics",
    "Purchase decisions are driven by behaviour, attitude, and context. We design every panel around how people actually engage with a category."
  ],
  [
    "Multi-Model Architecture",
    "We route inference across multiple large language models to improve response diversity and reduce model-specific linguistic patterns."
  ],
  [
    "Clear Scope, Honest Limits",
    "The methodology is strongest for attitudinal and behavioural research: concept testing, brand perception, segmentation, message testing, and category mapping."
  ]
];

export default function MethodologyPage() {
  return (
    <>
      <Nav />
      <main className="page">
        <div className="container method-body">
          <p className="eyebrow">Our Methodology</p>
          <h1>Real humans set the direction. AI scales it to population size.</h1>
          <p className="lead">
            Our methodology is built on a single premise: AI synthesis is only
            as good as the human signal it is grounded in. Every study begins
            with real participants whose responses calibrate the AI before any
            scaling occurs.
          </p>
          <h2>Why calibration is the foundation of everything we do.</h2>
          <p>
            AI models are trained on vast amounts of general text. That training
            gives them language fluency and broad world knowledge, but it does
            not give them knowledge of how consumers in your specific category,
            in your specific market, actually think.
          </p>
          <p>
            Before the AI synthesises anything, it is given verbatim responses,
            emotional language, decision rationale, and behavioural patterns from
            real people in the target market. The AI scales the volume. The
            humans define the signal.
          </p>
          <h2>The seven-stage process.</h2>
          <div className="steps">
            {stages.map(([title, body], index) => (
              <article className="step" key={title}>
                <strong>{String(index + 1).padStart(2, "0")}</strong>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </article>
            ))}
          </div>
          <h2>How we measure whether the synthesis is accurate.</h2>
          <p>
            Every study includes an internal parity check before delivery. A
            held-out subset of real human responses is compared against
            AI-synthesised outputs across four weighted dimensions: thematic
            overlap, depth and specificity, comprehensiveness, and qualitative
            alignment.
          </p>
          <h2>The decisions behind how we work.</h2>
          <div className="grid">
            {principles.map(([title, body]) => (
              <article className="cell" key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
          <h2>Where this methodology applies, and where it does not.</h2>
          <p>
            Precision about scope is a mark of methodological rigour. We are
            clear with every client about where our approach delivers its
            highest value, and where a different research method would serve
            better.
          </p>
          <p>
            Crisis and trauma research, ultra-niche populations, behavioural
            observation, and legal or regulatory evidence require different
            research designs.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

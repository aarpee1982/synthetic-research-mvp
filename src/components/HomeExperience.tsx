"use client";

import { useMemo, useState } from "react";

const words = [
  "SIGNAL",
  "INSIGHT",
  "SCALE",
  "PREDICT",
  "AGENT",
  "MODEL",
  "DATA",
  "RESEARCH",
  "SYNTHETIC",
  "PANEL",
  "BEHAVIOR",
  "VALIDATE"
];

const capabilities = [
  ["Market Research", "Market Research & Audiences", "Identify market opportunities, validate concepts, and understand customer needs with fast synthetic and human-calibrated signal.", "/methodology"],
  ["Brand Research", "Brand & Communication Research", "Track brand health, test creative, and validate messaging before your team invests behind the wrong story.", "#features"],
  ["UX Research", "User Experience Research", "Catch usability issues before launch through moderated, unmoderated, and AI-assisted feedback loops.", "#features"],
  ["Product Research", "Product & Innovation Research", "Pressure-test concepts, features, pricing, and launch assumptions with realistic alternatives and trade-offs.", "/blog/why-stated-preference-research-can-misread-launch-demand"],
  ["AI Panels", "AI Synthetic Panels", "Research-grade synthetic respondents trained against real behavioural data and validated against human response patterns.", "/blog/ai-market-research-future"],
  ["Automation", "Agentic Research", "AI helps shape the study, synthesize the results, and surface the decisions your team can act on next.", "#cta"]
] as const;

const tabs = [
  {
    label: "Listen",
    image: "/images/slide-07.jpg",
    title: "Capture what matters, when it matters",
    body: "Run studies across your own customers, global respondents, or AI synthetic panels. Recruitment delays shrink and decision context stays intact.",
    bullets: ["Customer research communities", "Global panels and synthetic respondents", "Quantitative, qualitative, and hybrid studies"]
  },
  {
    label: "Analyze",
    image: "/images/slide-17.jpg",
    title: "AI-powered analysis at the speed of thought",
    body: "Surface patterns across thousands of responses quickly, from open-text coding to statistical modelling and cross-study trend detection.",
    bullets: ["Automated theme extraction", "Statistical checks and segmentation", "Cross-study pattern detection"]
  },
  {
    label: "Act",
    image: "/images/slide-28.jpg",
    title: "Insights that drive action",
    body: "Move from evidence to stakeholder-ready action with executive summaries, research repositories, and clear next steps.",
    bullets: ["Decision-ready summaries", "CRM and dashboard-ready outputs", "A searchable insight repository"]
  }
];

const resources = [
  ["/images/slide-03.jpg", "Report", "AI market research is useful only when it is grounded in humans.", "/blog/ai-market-research-future"],
  ["/images/slide-11.jpg", "Analysis", "GLP-1, obesity, and the global cost curve.", "/blog/glp1-obesity-cost-global-analysis"],
  ["/images/slide-20.jpg", "Guide", "Why stated preference research can misread launch demand.", "/blog/why-stated-preference-research-can-misread-launch-demand"]
] as const;

const faqs = [
  ["What makes Synthetic different from traditional research tools?", "We combine AI-synthetic respondents with human validation in one research workflow, so early-stage questions move quickly while high-stakes decisions still have evidence behind them."],
  ["How do synthetic AI respondents work?", "Synthetic respondents are calibrated against real behavioural and survey data. The useful part is not generic AI opinion; it is pattern extension from validated human signal."],
  ["Can we use our own customer data?", "Yes. First-party data can be blended with human panels and synthetic respondents so your research reflects your actual category, customers, and constraints."],
  ["What methodologies can we run?", "The platform supports surveys, concept tests, conjoint, MaxDiff, UX feedback, brand tracking, pricing research, segmentation, and hybrid studies."],
  ["How is quality protected?", "Every study is designed around calibration, consistency checks, outlier detection, and human review where the decision risk justifies it."],
  ["What happens to our research data?", "Your data remains your data. Proprietary studies are not used to train models for other customers."]
] as const;

function ArrowIcon() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function Sphere() {
  const nodes = useMemo(() => {
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    return Array.from({ length: 84 }, (_, index) => {
      const y = 1 - (index / 83) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = goldenAngle * index;
      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;
      const azimuth = (Math.atan2(x, z) * 180) / Math.PI;
      const elevation = (Math.asin(y) * 180) / Math.PI;

      return {
        word: words[index % words.length],
        tone: index % 4,
        transform: `translate3d(-50%, -50%, 0) rotateY(${azimuth}deg) rotateX(${elevation}deg) translateZ(210px)`
      };
    });
  }, []);

  return (
    <div className="smr2-sphere-wrap" aria-hidden="true">
      <div className="smr2-sphere">
        {nodes.map((node, index) => (
          <span className={`smr2-sphere-word tone-${node.tone}`} key={`${node.word}-${index}`} style={{ transform: node.transform }}>
            {node.word}
          </span>
        ))}
      </div>
    </div>
  );
}

function Navigation() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Platform", "#capabilities"],
    ["Methodology", "/methodology"],
    ["Insights", "/blog"],
    ["Resources", "#resources"]
  ] as const;

  return (
    <header className="smr2-nav">
      <a className="smr2-brand" href="/">Synthetic</a>
      <nav className="smr2-nav-links" aria-label="Main navigation">
        {links.map(([label, href]) => (
          <a key={href} href={href}>{label}</a>
        ))}
      </nav>
      <a className="smr2-nav-cta" href="#cta">Book a Call</a>
      <button className="smr2-menu-button" type="button" aria-expanded={open} aria-label="Open menu" onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </button>
      {open ? (
        <div className="smr2-mobile-panel">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a href="#cta" onClick={() => setOpen(false)}>Book a Call</a>
        </div>
      ) : null}
    </header>
  );
}

function Hero() {
  return (
    <section className="smr2-hero" id="hero">
      <div className="smr2-hero-copy">
        <p className="smr2-eyebrow">Market & Audience Research</p>
        <h1>Every signal. One platform. Decisions with confidence.</h1>
        <p>
          Synthetic combines real consumer behaviour with research-grade AI to spot opportunities,
          validate direction, and move with certainty.
        </p>
        <div className="smr2-actions">
          <a className="smr2-button light" href="#cta">Book a Call</a>
          <a className="smr2-button ghost" href="#features">Watch How It Works <ArrowIcon /></a>
        </div>
      </div>
      <Sphere />
      <div className="smr2-trust-strip">
        <span>Built for forward-thinking teams</span>
        {["Healthcare", "Retail", "Financial Services", "Technology", "Consumer Goods"].map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="smr2-split smr2-stone" id="stats">
      <div>
        <p className="smr2-eyebrow dark">Market & Audience Understanding</p>
        <h2>Get strategic insights in hours instead of months</h2>
        <p>
          Combine AI-synthetic respondents with targeted human validation. Design, field, and
          analyze studies at the speed your business demands.
        </p>
        <div className="smr2-stats-row">
          {[
            ["98%", "Faster than traditional panels"],
            ["50%", "Reduced research costs"],
            ["12x", "More accurate than general AI"]
          ].map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <a className="smr2-text-link" href="#features">See how it works <ArrowIcon /></a>
      </div>
      <img src="/images/slide-07.jpg" alt="Synthetic research dashboard and signal map" loading="lazy" decoding="async" />
    </section>
  );
}

function Capabilities() {
  return (
    <section className="smr2-section" id="capabilities">
      <p className="smr2-eyebrow dark">All Capabilities</p>
      <h2>Built for every research discipline</h2>
      <div className="smr2-card-grid">
        {capabilities.map(([category, title, description, href]) => (
          <a className="smr2-capability-card" href={href} key={title}>
            <span>{category}</span>
            <h3>{title}</h3>
            <p>{description}</p>
            <strong>Learn more <ArrowIcon /></strong>
          </a>
        ))}
      </div>
    </section>
  );
}

function TabbedFeatures() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section className="smr2-section smr2-stone" id="features">
      <p className="smr2-eyebrow dark">Platform</p>
      <h2>From signal to decision</h2>
      <div className="smr2-tabs">
        <div className="smr2-tab-list" role="tablist" aria-label="Platform stages">
          {tabs.map((item, index) => (
            <button className={active === index ? "active" : ""} key={item.label} type="button" onClick={() => setActive(index)}>
              <span>{item.label}</span>
              <small>{item.body.slice(0, 82)}...</small>
            </button>
          ))}
        </div>
        <div className="smr2-tab-panel">
          <div>
            <h3>{tab.title}</h3>
            <p>{tab.body}</p>
            <ul>
              {tab.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
          </div>
          <img src={tab.image} alt={tab.title} loading="lazy" decoding="async" />
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="smr2-quote">
      <p className="smr2-eyebrow">Real Results</p>
      <blockquote>
        "Synthetic data became our cultural radar, cutting research timelines from a week to hours
        while giving us confidence to test messaging against emerging trends."
      </blockquote>
      <p>Garred Sheppard<br /><span>Marketing Research Director</span></p>
      <div className="smr2-proof-row">
        {[
          ["98%", "Faster time to insight"],
          ["50%", "Lower cost"],
          ["10x", "More confident decisions"]
        ].map(([value, label]) => (
          <div key={label}><strong>{value}</strong><span>{label}</span></div>
        ))}
      </div>
    </section>
  );
}

function Resources() {
  return (
    <section className="smr2-section" id="resources">
      <p className="smr2-eyebrow dark">Resources</p>
      <h2>Learn from the research leaders</h2>
      <div className="smr2-resource-grid">
        {resources.map(([image, category, title, href]) => (
          <a className="smr2-resource-card" href={href} key={href}>
            <img src={image} alt={title} loading="lazy" decoding="async" />
            <span>{category}</span>
            <h3>{title}</h3>
            <strong>Read more <ArrowIcon /></strong>
          </a>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="smr2-section smr2-stone" id="faq">
      <div className="smr2-faq-head">
        <p className="smr2-eyebrow dark">FAQ</p>
        <h2>Questions? We have answers.</h2>
      </div>
      <div className="smr2-faq-list">
        {faqs.map(([question, answer], index) => (
          <div className="smr2-faq-item" key={question}>
            <button type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? -1 : index)}>
              <span>{question}</span>
              <b>{open === index ? "-" : "+"}</b>
            </button>
            {open === index ? <p>{answer}</p> : null}
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="smr2-cta" id="cta">
      <h2>Ready to make research your competitive advantage?</h2>
      <p>See how insight-driven companies turn faster research into clearer product, brand, and market decisions.</p>
      <div className="smr2-actions center">
        <a className="smr2-button light" href="mailto:hello@syntheticmarketresearch.com">Book a Call</a>
        <a className="smr2-button ghost" href="/methodology">View Methodology <ArrowIcon /></a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="smr2-footer">
      <div>
        <strong>Synthetic</strong>
        <p>Market research built on real human decisions, then extended by AI at scale.</p>
      </div>
      <nav aria-label="Footer navigation">
        <a href="/methodology">Methodology</a>
        <a href="/blog">Insights</a>
        <a href="/privacy">Privacy</a>
        <a href="/terms">Terms</a>
      </nav>
    </footer>
  );
}

export default function HomeExperience() {
  return (
    <div className="smr2-home">
      <Navigation />
      <Hero />
      <Stats />
      <Capabilities />
      <TabbedFeatures />
      <Testimonial />
      <Resources />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sphereWords = [
  "SYNTHETIC",
  "AI",
  "RESEARCH",
  "MODELS",
  "SCALE",
  "PREDICT",
  "INSIGHT",
  "GLOBAL",
  "AGENTS",
  "DATA"
];
const sphereColors = ["#374151", "#A3837B", "#1F2937", "#6B7280"];
const layersPerRing = 30;
const ringCount = 6;
const allImages = Array.from(
  { length: 30 },
  (_, i) => `https://picsum.photos/seed/synthetic-market-research-${i + 1}/900/650`
);
const platformChips: Array<{
  top: string;
  left?: string;
  right?: string;
  text: string;
  sub: string;
}> = [
  { top: "8%", left: "5%", text: "360,000", sub: "Hyper-Realistic Agents" },
  { top: "42%", right: "8%", text: "Real-Time", sub: "Dashboards" },
  { top: "78%", left: "12%", text: "Global", sub: "Market Coverage" }
];

const processText =
  "We begin with a deep understanding of your research objectives. Our team works with you to define the key questions, target demographics, and behavioral signals that matter most. Every engagement is scoped to your specific decision context. We deploy hyper-realistic AI agents across our global simulation network. These agents mirror real consumer behavior by training on actual behavioral data points. They compare, hesitate, choose, and explain the way real buyers do. As agents interact within our simulated marketplace, we capture every signal: every comparison, constraint, trade-off, and decision trigger. Our models analyze the behavioral data, identify patterns, segment audiences, and surface executive-ready insights you can act on.";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function createRing(ringIndex: number) {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < layersPerRing; i += 1) {
    const word = sphereWords[(ringIndex + i) % sphereWords.length];
    const color = sphereColors[i % sphereColors.length];
    const angle = (360 / layersPerRing) * i;
    const baseTransform = `translate3d(-50%, -50%, 0) rotateY(${angle}deg) translateZ(250px)`;

    if (i === 0) {
      const clone = document.createElement("span");
      clone.textContent = word;
      clone.className = "sphere-layer sphere-layer-clone";
      clone.style.color = "transparent";
      clone.style.transform = baseTransform;
      fragment.appendChild(clone);
    }

    const span = document.createElement("span");
    span.textContent = word;
    span.className = "sphere-layer";
    span.style.color = color;
    span.style.transform = baseTransform;
    fragment.appendChild(span);
  }

  return fragment;
}

function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`site-nav ${scrolled ? "site-nav-scrolled" : ""}`}>
      <button className="brand-mark" onClick={() => scrollToSection("hero")}>
        Synthetic
      </button>
      <div className="nav-menu" aria-label="Homepage sections">
        {[
          ["Platform", "platform"],
          ["Process", "process"],
          ["Global Scale", "global-scale"],
          ["Contact", "video-footer"]
        ].map(([label, target]) => (
          <button className="nav-link" key={target} onClick={() => scrollToSection(target)}>
            {label}
          </button>
        ))}
      </div>
      <button className="nav-cta" onClick={() => scrollToSection("video-footer")}>
        Request a Demo
      </button>
    </nav>
  );
}

function Hero() {
  const timeRef = useRef({ prevTime: 0, prevScrollY: 0, scrollVelocity: 0 });

  useEffect(() => {
    const sphere = document.getElementById("text-sphere");
    if (!sphere) return;

    timeRef.current.prevTime = performance.now();
    sphere.innerHTML = "";
    const ringsData: Array<{ ring: HTMLDivElement; baseSpeed: number }> = [];

    for (let ringIndex = 0; ringIndex < ringCount; ringIndex += 1) {
      const ring = document.createElement("div");
      ring.className = "sphere-ring";
      ring.style.animation = `ring-spin-${ringIndex + 1} ${10 + ringIndex * 4}s linear infinite`;
      ring.appendChild(createRing(ringIndex));
      sphere.appendChild(ring);
      ringsData.push({ ring, baseSpeed: 10 + ringIndex * 4 });
    }

    const allLayers = sphere.querySelectorAll(".sphere-layer:not(.sphere-layer-clone)");
    allLayers.forEach((layer) => {
      const parent = layer.parentElement;
      if (!parent) return;
      const ringIndex = Array.from(sphere.children).indexOf(parent);
      const siblings = Array.from(parent.children).filter(
        (child) => !child.classList.contains("sphere-layer-clone")
      );
      const layerIndex = siblings.indexOf(layer);
      const theta = (layerIndex / layersPerRing) * Math.PI * 2;
      const z = Math.cos(theta) * 120 * (ringIndex % 2 === 0 ? 1 : -1);
      const element = layer as HTMLElement;
      element.style.transform = `${element.style.transform} translateZ(${z}px)`;
    });

    sphere.querySelectorAll(".sphere-ring").forEach((ring) => {
      const clone = ring.querySelector(".sphere-layer-clone") as HTMLElement | null;
      const visibleLayers = Array.from(
        ring.querySelectorAll(".sphere-layer:not(.sphere-layer-clone)")
      );
      const lastLayer = visibleLayers.at(-1) as HTMLElement | undefined;
      if (clone && lastLayer) clone.style.transform = lastLayer.style.transform;
    });

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const delta = scrollY - timeRef.current.prevScrollY;
      timeRef.current.prevScrollY = scrollY;
      timeRef.current.scrollVelocity = Math.abs(delta) > 1 ? delta * 0.05 : 0;
    };

    let rafId = 0;
    const tick = () => {
      const now = performance.now();
      const dt = Math.min((now - timeRef.current.prevTime) / 1000, 0.1);
      timeRef.current.prevTime = now;
      timeRef.current.scrollVelocity *= Math.pow(0.95, dt * 60);
      const currentSpeed = Math.max(0.25, 1 + timeRef.current.scrollVelocity * 0.05);
      ringsData.forEach(({ ring, baseSpeed }) => {
        ring.style.animationDuration = `${baseSpeed / currentSpeed}s`;
      });
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">( AI-POWERED MARKET RESEARCH )</p>
        <h1>
          Research built on what people actually <em>do</em>.
        </h1>
        <p className="hero-lede">
          We replace legacy panels and biased questionnaires with hyper-realistic AI
          agents that mirror real consumer behavior.
        </p>
        <button className="text-button" onClick={() => scrollToSection("platform")}>
          Learn How
          <svg
            aria-hidden="true"
            className="text-button-icon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="hero-sphere" aria-hidden="true">
        <div className="text-sphere-wrapper">
          <div id="text-sphere" />
        </div>
      </div>
    </section>
  );
}

function Platform() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      sectionRef.current?.querySelectorAll(".slider-row").forEach((row, index) => {
        const wrapper = row.querySelector(".slider-wrapper");
        const inner = row.querySelector(".slider-inner");
        if (!wrapper || !inner) return;

        const clone = inner.cloneNode(true) as HTMLElement;
        wrapper.appendChild(clone);
        const targets = [inner, clone];

        if (index % 2 !== 0) gsap.set(targets, { x: "-50%" });

        gsap.fromTo(
          targets,
          { x: index % 2 === 0 ? "0%" : "-50%" },
          {
            x: index % 2 === 0 ? "-50%" : "0%",
            ease: "none",
            scrollTrigger: {
              trigger: wrapper,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.5
            }
          }
        );
      });
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section id="platform" className="platform-section" ref={sectionRef}>
      <div className="glass-line" />
      <div className="section-pad">
        <p className="eyebrow">( PLATFORM )</p>
        <h2>See the platform in action</h2>
      </div>
      <div className="slider-stage">
        {platformChips.map(({ top, left, right, text, sub }) => (
          <div className="data-chip" style={{ top, left, right }} key={sub}>
            <p>{text}</p>
            <span>{sub}</span>
          </div>
        ))}
        {[0, 1, 2].map((row) => (
          <div className="slider-row" key={row}>
            <div className={`slider-wrapper ${row % 2 === 0 ? "perspective-left" : "perspective-right"}`}>
              <div className="slider-inner">
                {allImages.slice(row * 10, row * 10 + 10).map((src) => (
                  <div className="slide" style={{ backgroundImage: `url(${src})` }} key={src} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="glass-line bottom" />
    </section>
  );
}

function Process() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;
    const section = textRef.current;
    section.innerHTML = "";
    const spans: HTMLSpanElement[] = [];

    processText.split(" ").forEach((word, index, arr) => {
      const span = document.createElement("span");
      span.textContent = word;
      span.className = "reveal-word";
      section.appendChild(span);
      spans.push(span);
      if (index < arr.length - 1) section.appendChild(document.createTextNode(" "));
    });

    const tween = gsap.fromTo(
      spans,
      { opacity: 0.1, filter: "blur(12px) brightness(60%)" },
      {
        opacity: 1,
        filter: "blur(0px) brightness(100%)",
        stagger: 0.05,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 40%",
          scrub: true
        }
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section id="process" className="process-section">
      <div className="section-center">
        <p className="eyebrow">( PROCESS )</p>
        <h2>How it works</h2>
      </div>
      <div ref={textRef} className="reveal-section" />
    </section>
  );
}

function GlobalScale() {
  const logo = <span className="reflection-logo">Synthetic</span>;

  return (
    <section id="global-scale" className="global-section">
      <div className="section-center">
        <p className="eyebrow">( GLOBAL SCALE )</p>
        <h2>Research without boundaries</h2>
        <p>
          Deploy AI agents across 180+ markets to understand consumer behavior at
          global scale.
        </p>
      </div>
      <div className="global-stats">
        {[
          ["180+", "Markets"],
          ["360K", "AI Agents"],
          ["Human", "Calibration"],
          ["< 48h", "Turnaround"]
        ].map(([value, label]) => (
          <div className="global-stat" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
      <div className="reflection-wrapper">
        <div className="logo-top">{logo}</div>
        <div className="logo-bottom">{logo}</div>
      </div>
    </section>
  );
}

function VideoFooter() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <section id="video-footer" className="video-footer">
      <div className="glass-line" />
      <video ref={videoRef} autoPlay muted loop playsInline className="footer-video">
        <source
          src="https://videos.pexels.com/video-files/854149/854149-hd_1920_1080_30fps.mp4"
          type="video/mp4"
        />
      </video>
      <div className="video-overlay" />
      <div className="footer-cta">
        <h2>Data is the new oil. The question is how to refine it.</h2>
        <a href="mailto:hello@syntheticmarketresearch.com">Request a Demo</a>
      </div>
      <footer className="footer-bar">
        <p>&copy; {new Date().getFullYear()} Synthetic Market Research. All rights reserved.</p>
        <div>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="mailto:hello@syntheticmarketresearch.com">Contact</a>
        </div>
      </footer>
    </section>
  );
}

export default function HomeExperience() {
  return (
    <div className="home-experience">
      <Navigation />
      <Hero />
      <Platform />
      <Process />
      <GlobalScale />
      <VideoFooter />
    </div>
  );
}

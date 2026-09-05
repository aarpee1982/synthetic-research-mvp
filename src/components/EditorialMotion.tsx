"use client";
import { useEffect } from "react";
import { gsap } from "gsap";

export default function EditorialMotion() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches) return;
    const animations: gsap.core.Tween[] = [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          animations.push(
            gsap.fromTo(
              entry.target,
              { y: 28, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.85,
                ease: "power2.out",
                clearProps: "transform,opacity",
              },
            ),
          );
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 },
    );
    document
      .querySelectorAll(
        ".smr-section-heading,.smr-report-item,.smr-deliverables article,.smr-principles article,.smr-contact-band .smr-wrap",
      )
      .forEach((el) => observer.observe(el));
    const stop = () => {
      if (preference.matches) {
        observer.disconnect();
        animations.forEach((a) => a.progress(1).kill());
      }
    };
    preference.addEventListener("change", stop);
    return () => {
      observer.disconnect();
      animations.forEach((a) => a.progress(1).kill());
      preference.removeEventListener("change", stop);
    };
  }, []);
  return null;
}

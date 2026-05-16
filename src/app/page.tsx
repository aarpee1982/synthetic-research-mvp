import HomeExperience from "@/components/HomeExperience";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Synthetic Market Research - Human-Anchored AI Research",
  description:
    "AI-powered market research built on real human behavioural signal, calibrated synthetic agents, and executive-ready insight.",
  alternates: {
    canonical: "/"
  }
};

export default function HomePage() {
  return <HomeExperience />;
}

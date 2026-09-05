import HomeExperience from "@/components/ResearchHome";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Synthetic Market Research | Reports & Custom Research",
  description:
    "Market intelligence for your next business decision. Explore syndicated research and commission custom studies, with transparent evidence and human review.",
  alternates: {
    canonical: "/"
  }
};

export default function HomePage() {
  return <HomeExperience />;
}

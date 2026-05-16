import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use - Synthetic Market Research",
  description:
    "Terms of use for the Synthetic Market Research website and research service information.",
  alternates: {
    canonical: "/terms"
  }
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="page">
        <div className="container legal">
          <h1>Terms of Use</h1>
          <p>
            This website provides general information about Synthetic Market
            Research services. It does not create a client engagement or
            professional services agreement.
          </p>
          <h2>Use of Content</h2>
          <p>
            Website content may not be copied, republished, or represented as
            your own without permission.
          </p>
          <h2>Research Engagements</h2>
          <p>
            Research scope, deliverables, timelines, and commercial terms are
            agreed separately for each engagement.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

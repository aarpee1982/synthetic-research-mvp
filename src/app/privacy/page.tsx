import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Synthetic Market Research",
  description:
    "Privacy policy for Synthetic Market Research, including enquiry data collection and contact information.",
  alternates: {
    canonical: "/privacy"
  }
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="page">
        <div className="container legal">
          <h1>Privacy Policy</h1>
          <p>
            Synthetic Market Research collects only the information required to
            respond to enquiries and deliver research services.
          </p>
          <h2>Information We Collect</h2>
          <p>
            Contact form submissions may include your email address,
            organisation, research topic, and any additional context you choose
            to provide.
          </p>
          <h2>How We Use Information</h2>
          <p>
            We use enquiry information to respond to scoping requests, prepare
            methodology recommendations, and maintain client communication.
          </p>
          <h2>Contact</h2>
          <p>
            For privacy questions, contact the site owner through the scoping
            form on the homepage.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

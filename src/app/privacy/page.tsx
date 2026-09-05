import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Link from "next/link";
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
      <main className="page" id="main">
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
            For privacy questions, <Link href="/contact?interest=Privacy%20inquiry">contact our team</Link>.
            The inquiry form prepares an email on your device;
            it does not submit or store your draft on our server. Sending the
            draft uses your email provider.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

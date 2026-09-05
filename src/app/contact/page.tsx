import type { Metadata } from "next";
import { PageFrame, PageIntro } from "@/components/ResearchUI";
import ContactForm from "@/components/ContactForm";
export const metadata: Metadata = {
  title: "Discuss Your Research Brief | SMR",
  description:
    "Contact Synthetic Market Research about syndicated reports and custom studies. Bangalore headquarters and Singapore offices.",
  alternates: { canonical: "/contact" },
};
export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ interest?: string }>;
}) {
  const { interest } = await searchParams;
  return (
    <PageFrame>
      <PageIntro eyebrow="CONTACT" title="Let's start with your question.">
        <p>
          Tell us what you need to decide. We will discuss what a useful
          research brief should cover.
        </p>
      </PageIntro>
      <section className="smr-section">
        <div className="smr-wrap smr-form-layout">
          <div>
            <h2>
              A little context
              <br />
              <em>goes a long way.</em>
            </h2>
            <p className="smr-section-copy">
              The market, the decision and your deadline help us assess scope
              and feasibility.
            </p>
            <a
              className="smr-text-link"
              href="mailto:hello@syntheticmarketresearch.com"
            >
              hello@syntheticmarketresearch.com
            </a>
            <p className="smr-section-copy">
              Bangalore, India
              <br />
              Headquarters
              <br />
              <br />
              Singapore
              <br />
              Offices
            </p>
            <p className="smr-note">
              Please keep the initial brief non-confidential. Data access,
              confidentiality and engagement terms are agreed separately.
            </p>
          </div>
          <ContactForm
            interest={
              typeof interest === "string" ? interest.slice(0, 200) : ""
            }
          />
        </div>
      </section>
    </PageFrame>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PublicationFrame, Intro } from "@/components/PublicationUI";
import { countryDirectories } from "@/lib/provider-locations";

export const metadata: Metadata = {
  title: "Synthetic Market Research Companies | Global Directory | SMR",
  description: "Explore synthetic market research companies by headquarters country. Find provider profiles, product categories and original sources in the SMR directory.",
  alternates: { canonical: "/synthetic-market-research-companies" }
};

export default function SyntheticMarketResearchCompaniesPage() {
  return <PublicationFrame>
    <Intro eyebrow="COMPANIES BY HEADQUARTERS" title="Synthetic market research companies.">
      <p>Find providers by the country where they are headquartered, then open each profile for product detail and sources.</p>
    </Intro>
    <section className="industry-wrap pub-wrap country-directory">
      <div className="country-directory-intro">
        <h2>A location-led way to explore the directory.</h2>
        <p>These pages cover headquarters, not service coverage or regional sales offices. They link directly to the relevant company profile, where the research category and original source are available.</p>
      </div>
      <div className="country-directory-grid">
        {countryDirectories.map((country) => <article key={country.slug} className="country-directory-card">
          <h2>{country.name}</h2>
          <p>{country.intro}</p>
          <Link href={`/synthetic-market-research-companies/${country.slug}`}>Explore companies in {country.name} <ArrowRight size={16} /></Link>
        </article>)}
      </div>
      <div className="industry-profile-context">
        <h2>Looking beyond a location?</h2>
        <p>Browse the complete directory by company name, research category or type of offering.</p>
        <Link href="/providers">Explore all providers <ArrowRight size={16} /></Link>
      </div>
    </section>
  </PublicationFrame>;
}

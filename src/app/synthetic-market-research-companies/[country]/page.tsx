import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { PublicationFrame, Intro } from "@/components/PublicationUI";
import { ProviderCard } from "@/components/IndustryUI";
import { getProvider } from "@/lib/providers";
import { countryDirectories, getCountryDirectory, providerHeadquarters } from "@/lib/provider-locations";

type Props = { params: Promise<{ country: string }> };

export function generateStaticParams() {
  return countryDirectories.map((country) => ({ country: country.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const country = getCountryDirectory((await params).country);
  return country ? {
    title: country.title,
    description: country.description,
    alternates: { canonical: `/synthetic-market-research-companies/${country.slug}` }
  } : {};
}

export default async function CountryDirectoryPage({ params }: Props) {
  const country = getCountryDirectory((await params).country);
  if (!country) notFound();
  const entries = country.providerSlugs.flatMap((slug) => {
    const provider = getProvider(slug);
    const headquarters = providerHeadquarters[slug];
    return provider && headquarters ? [{ provider, headquarters }] : [];
  });
  const otherCountries = countryDirectories.filter((entry) => entry.slug !== country.slug);

  return <PublicationFrame>
    <Intro eyebrow="COMPANIES BY HEADQUARTERS" title={`Synthetic market research companies in ${country.name}.`}>
      <p>{country.intro}</p>
    </Intro>
    <section className="industry-wrap pub-wrap country-directory">
      <Link className="pub-text-link" href="/synthetic-market-research-companies"><ArrowLeft size={16} /> All headquarters locations</Link>
      <div className="country-directory-intro">
        <h2>Providers headquartered in {country.name}.</h2>
        <p>Each listing is linked to its SMR company profile. Companies that only serve this market or maintain a local office are excluded from this page.</p>
      </div>
      <div className="industry-provider-grid">
        {entries.map(({ provider, headquarters }) => <div key={provider.slug} className="country-provider">
          <ProviderCard provider={provider} />
          <p><strong>Headquarters:</strong> {headquarters.location} · <a href={headquarters.source} target="_blank" rel="noopener noreferrer">{headquarters.sourceTitle} <ArrowUpRight size={14} /></a></p>
        </div>)}
      </div>
      <div className="country-directory-related">
        <h2>Explore other headquarters locations</h2>
        <div>{otherCountries.map((entry) => <Link key={entry.slug} href={`/synthetic-market-research-companies/${entry.slug}`}>{entry.name} <ArrowRight size={15} /></Link>)}</div>
      </div>
      <div className="industry-profile-context">
        <h2>Find a provider by what it does.</h2>
        <p>Use the complete directory to compare categories including synthetic respondents, audience simulation and digital twins.</p>
        <Link href="/providers">Explore all providers <ArrowRight size={16} /></Link>
      </div>
    </section>
  </PublicationFrame>;
}

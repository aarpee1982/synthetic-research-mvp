import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { PageFrame } from "./ResearchUI";
import ProteinBarExhibit from "./ProteinBarExhibit";
import evidence from "@/lib/protein-bars.json";

export default function ProteinBarsReport() {
  const quest = evidence.pairs.find(pair => pair.id === "Q-CD-12")!;
  const difference = Math.round((1 - quest.retail / quest.direct) * 100);
  const schema = {
    "@context": "https://schema.org", "@type": "WebPage",
    name: "Protein Bars: US Prices and Formulation",
    description: "Selected US protein bar prices, labelled nutrition and matched brand-direct and retailer pack comparisons.",
    url: "https://www.syntheticmarketresearch.com/reports/protein-bars",
    publisher: { "@type": "Organization", name: "Synthetic Market Research" },
  };
  return <PageFrame>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}}/>
    <div className="smr-wrap pb-report">
      <header className="pb-intro">
        <Link className="smr-text-link" href="/reports"><ArrowLeft size={15}/>All reports</Link>
        <p className="smr-eyebrow">FOOD AND NUTRITION / UNITED STATES</p>
        <h1>Protein Bars</h1>
        <p>Prices, formulations and the economics of channel choice.</p>
      </header>
      <article className="smr-report-editorial" aria-label="Protein Bars US pricing research">
        <ProteinBarExhibit/>
        <section className="pb-implications" aria-labelledby="pb-implications-title">
          <h2 id="pb-implications-title">Two decisions behind the price.</h2>
          <div><section><h3>Define the comparison.</h3><p>Price per bar captures the purchase unit. Price per 20 g of labelled protein captures a different formulation trade-off. Neither alone measures taste, consumer preference or nutritional quality.</p></section>
            <section><h3>Account for the channel.</h3><p>Target&apos;s listed Quest Cookie Dough 12-pack price is {difference}% below the matched brand-direct offer, before excluded charges and promotions. That difference applies to this observation, not every retailer or purchase occasion. <a href={quest.source} target="_blank" rel="noopener noreferrer">Target listing <ArrowUpRight size={13}/></a></p></section></div>
        </section>
        <section className="pb-contact"><div><p className="smr-eyebrow">RESEARCH FOR YOUR DECISION</p><h2>Where should your product compete?</h2><p>Discuss target countries, channels, formulations and the commercial question behind your research.</p></div><Link className="smr-button" href="/contact?interest=Protein%20Bars%20pricing%20and%20positioning">Discuss this research <ArrowUpRight size={17}/></Link></section>
      </article>
    </div>
  </PageFrame>;
}

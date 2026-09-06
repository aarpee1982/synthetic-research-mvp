import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { PageFrame } from './ResearchUI';
import ProteinBarExhibit from './ProteinBarExhibit';
import { CompetitiveExhibit, ForecastExhibit, PriceExhibit, ReportInteractionProvider, RequestSampleButton, SegmentExhibit } from './ReportInteractions';
import { dossierEdition, type Dossier } from '@/lib/report-dossiers';
import { sampleReports } from '@/lib/sample-reports';

function CitedCopy({ text }: { text: string }) {
  return <p data-editorial-copy>{text.split(/(\[\d+\])/).map((part, index) => /^\[\d+\]$/.test(part) ? <a className="rd-citation" href={`#source-${part.slice(1, -1)}`} key={index} aria-label={`Source ${part.slice(1, -1)}`}>{part}</a> : part)}</p>;
}

export default function ReportDossier({ dossier }: { dossier: Dossier }) {
  const schema = {
    '@context': 'https://schema.org', '@type': 'Article', headline: `${dossier.title}: US Market Perspective`,
    description: dossier.scope, datePublished: '2026-09-06', dateModified: '2026-09-06',
    mainEntityOfPage: `https://www.syntheticmarketresearch.com/reports/${dossier.slug}`,
    author: { '@type': 'Organization', name: 'Synthetic Market Research' }, publisher: { '@type': 'Organization', name: 'Synthetic Market Research', url: 'https://www.syntheticmarketresearch.com' },
    citation: dossier.sources.map(source => source.url),
  };
  return <PageFrame><ReportInteractionProvider key={dossier.slug} title={dossier.title} slug={dossier.slug} siteKey={process.env.TURNSTILE_SITE_KEY || ''}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <article className="rd-report smr-wrap" aria-label={`${dossier.title} market perspective`}>
      <header className="rd-header"><Link className="smr-text-link rd-back" href="/reports"><ArrowLeft size={16} />All reports</Link><div className="rd-header-top"><div><p className="smr-eyebrow">FOOD & NUTRITION / US MARKET PERSPECTIVE</p><h1>{dossier.title}</h1><p className="rd-strapline">{dossier.strapline}</p></div><RequestSampleButton /></div><p className="rd-scope">{dossier.scope}</p><p className="rd-edition">{dossierEdition} <span>/</span> Source-linked analysis <span>/</span> 2026-2031</p></header>
      <nav className="rd-jump-nav" aria-label="Report sections"><a href="#segments">Segments</a><a href="#pricing">Pricing</a><a href="#forecast">Scenarios</a><a href="#competition">Companies</a><a href="#contents">Contents</a></nav>
      <section id="segments" className="rd-section"><SegmentExhibit title={dossier.title} segments={dossier.segments} channels={dossier.channels} references={dossier.slug === 'protein-bars' ? [1, 2, 3] : dossier.slug === 'breakfast-cereals' ? [3, 5] : [3, 4]} /><div className="rd-analysis"><CitedCopy text={dossier.segmentInsight} /></div></section>
      <section id="pricing" className="rd-section">{dossier.slug === 'protein-bars' ? <ProteinBarExhibit number="02" /> : <PriceExhibit title={dossier.priceTitle} rows={dossier.prices} />}<div className="rd-analysis"><CitedCopy text={dossier.priceInsight} /></div></section>
      <section id="forecast" className="rd-section"><ForecastExhibit title={dossier.title} scenarios={dossier.scenarios} /><div className="rd-analysis"><CitedCopy text={dossier.scenarioIntro} /></div></section>
      <section id="competition" className="rd-section"><CompetitiveExhibit peers={dossier.peers} family={dossier.peerFamily} sources={dossier.sources} /><div className="rd-analysis"><CitedCopy text={dossier.peerInsight} /></div></section>
      <section id="trade" className="rd-trade"><p className="smr-eyebrow">MARKET-ENTRY CONSIDERATIONS</p><h2>Product boundaries come before trade totals.</h2><CitedCopy text={dossier.trade} /><Link className="smr-text-link" href="/methodology">Our research methodology <ArrowUpRight size={16} /></Link></section>
      <section id="contents" className="rd-contents"><div><p className="smr-eyebrow">CONTENTS / THIS MARKET PERSPECTIVE</p><h2>{dossier.title}, in focus.</h2><ol>{dossier.contents.map(item => <li key={item.title}><a href={`#${item.anchor}`}>{item.title}<ArrowUpRight size={16} aria-hidden="true" /></a></li>)}</ol></div><aside><h3>Put the evidence to work.</h3><p>Request a sample overview and discuss your geography, decision and research priorities.</p><RequestSampleButton /><small>Work email required.</small></aside></section>
      <section id="sources" className="rd-sources"><details><summary>Sources and attribution <span>{dossier.sources.length} original references</span></summary><ol>{dossier.sources.map((source, index) => <li id={`source-${index + 1}`} key={`${source.url}-${index}`}><a href={source.url} target="_blank" rel="noreferrer">[{index + 1}] {source.title} <ArrowUpRight size={14} /></a><p>{source.locator}</p></li>)}</ol><p className="rd-source-note">Source review: 6 September 2026. Company sources describe their own operations. Forecast inputs are SMR planning assumptions, not forecasts attributed to these publishers.</p></details></section>
      <section className="rd-related"><p className="smr-eyebrow">CONNECTED MARKETS</p><div>{dossier.related.map(slug => <Link href={`/reports/${slug}`} key={slug}><span>{sampleReports[slug]}</span><ArrowUpRight size={22} /></Link>)}</div></section>
    </article>
  </ReportInteractionProvider></PageFrame>;
}

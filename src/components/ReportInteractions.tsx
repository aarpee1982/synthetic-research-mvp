"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { ArrowUpRight, CheckCircle2, Download, LockKeyhole, X } from 'lucide-react';
import { Area, CartesianGrid, ComposedChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import ContactForm from './ContactForm';
import type { Dossier, Peer, Segment, Source } from '@/lib/report-dossiers';
import { forecastMethod, scenarioPath } from '@/lib/report-dossiers';

const SampleContext = createContext<(trigger: HTMLButtonElement, year?: string) => void>(() => {});
export function RequestSampleButton({ children = 'Request sample', className = 'smr-button', year }: { children?: ReactNode; className?: string; year?: string }) {
  const open = useContext(SampleContext);
  return <button type="button" className={className} onClick={event => open(event.currentTarget, year)}>{children}<ArrowUpRight size={17} aria-hidden="true" /></button>;
}

export function ReportInteractionProvider({ children, title, slug, siteKey }: { children: ReactNode; title: string; slug: string; siteKey: string }) {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [segmentYear, setSegmentYear] = useState<string>();
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (!open) return;
    const element = dialog.current;
    element?.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { element?.close(); document.body.style.overflow = overflow; trigger.current?.focus(); };
  }, [open]);
  return <SampleContext.Provider value={(button, year) => { trigger.current = button; setSegmentYear(year); setSent(false); setOpen(true); }}>
    {children}
    <div className={`rd-confirmation${sent ? ' is-visible' : ''}`} role="status" aria-live="polite" aria-atomic="true">
      {sent && <><CheckCircle2 size={22} aria-hidden="true" /><p><strong>Thank you.</strong> Your {title.toLowerCase()} sample request has been received.</p><button type="button" aria-label="Dismiss confirmation" onClick={() => setSent(false)}><X size={18} /></button></>}
    </div>
    {open && <dialog ref={dialog} className="rd-dialog" aria-labelledby="sample-title" aria-describedby="sample-description" onCancel={event => { event.preventDefault(); if (!sending) setOpen(false); }}>
      <div className="rd-dialog-head"><p className="smr-eyebrow">RESEARCH SAMPLE</p><button type="button" title="Close sample request" aria-label="Close sample request" disabled={sending} onClick={() => setOpen(false)}><X size={22} /></button></div>
      <h2 id="sample-title">{title}</h2><p id="sample-description">Request the source-linked overview and discuss the research scope with our team.</p>
      <ContactForm interest={title} reportId={slug} segmentYear={segmentYear} siteKey={siteKey} onSending={setSending} onSuccess={() => { setOpen(false); setSent(true); }} />
      <p className="rd-form-exception">Need a different way to reach us? <a href={`/contact?interest=${encodeURIComponent(title)}`}>Contact the research team</a>.</p>
    </dialog>}
  </SampleContext.Provider>;
}

export function FigureFooter({ note, references = [] }: { note: string; references?: number[] }) {
  return <figcaption className="rd-figure-footer"><div className="rd-figure-source"><p>{note} {references.map(reference => <a key={reference} href={`#source-${reference}`} aria-label={`Source ${reference}`}>[{reference}] </a>)}</p><span>SMR / September 2026 / v1.0</span></div><div className="rd-brand" aria-label="Synthetic Market Research"><b>s<span>.</span></b><span>Synthetic<small>MARKET RESEARCH</small></span></div></figcaption>;
}

export function SegmentExhibit({ title, segments, channels, references }: { title: string; segments: Segment[]; channels: Segment[]; references: number[] }) {
  const [year, setYear] = useState('2026');
  const [dimension, setDimension] = useState('Product formats');
  const rows = dimension === 'Product formats' ? segments : channels;
  return <figure className="rd-figure rd-segments">
    <div className="rd-figure-heading"><div><p className="smr-eyebrow">01 / SEGMENT ARCHITECTURE</p><h2>Segment-wise breakdown of {title.toLowerCase()}</h2></div><label className="rd-year">Edition<select aria-label="Segment year" value={year} onChange={event => setYear(event.target.value)}>{['2026', '2027', '2028', '2029', '2030', '2031'].map(item => <option key={item}>{item}</option>)}</select></label></div>
    <div className="rd-controls" role="group" aria-label="Segmentation dimension">{['Product formats', 'Routes to market'].map(item => <button key={item} type="button" aria-pressed={dimension === item} onClick={() => setDimension(item)}>{item}</button>)}</div>
    {year === '2026' ? <div className="rd-segment-grid">
      <div className="rd-segment-table-head"><span>{dimension === 'Product formats' ? 'Segment' : 'Channel'}</span><span>Boundary</span><span>Commercial lever</span></div>
      {rows.map((row, index) => <div className="rd-segment-row" key={row.name}><h3><span aria-hidden="true">0{index + 1}</span>{row.name}</h3><p>{row.definition}</p><strong>{row.lever}</strong></div>)}
    </div> : <div className="rd-restricted" data-restricted-year={year}>
      <div className="rd-lock-pattern" aria-hidden="true"><i /><i /><i /><i /></div>
      <div><LockKeyhole size={26} aria-hidden="true" /><h3>{year} segment analysis</h3><p>Discuss the forward-year scope with our research team.</p><RequestSampleButton year={year} /></div>
    </div>}
    <FigureFooter note={`${year} / ${dimension}. ${year === '2026' ? 'SMR category taxonomy; not a sales-share chart. Format attributes can overlap.' : 'Forward-year research enquiries.'}`} references={year === '2026' ? references : []} />
  </figure>;
}

export function PriceExhibit({ title, rows }: { title: string; rows: Dossier['prices'] }) {
  const [sort, setSort] = useState('Category order');
  const ordered = sort === 'Price growth' ? [...rows].sort((a, b) => b.value - a.value) : rows;
  const min = -2; const max = 5; const zero = (0 - min) / (max - min) * 100;
  return <figure className="rd-figure">
    <div className="rd-figure-heading"><div><p className="smr-eyebrow">02 / PRICE SIGNALS</p><h2>{title}</h2><p className="rd-unit">US city average / July 2026 / year-on-year price change, %</p></div><label className="rd-sort">Order<select aria-label="Price chart order" value={sort} onChange={event => setSort(event.target.value)}><option>Category order</option><option>Price growth</option></select></label></div>
    <div className="rd-price-chart" role="img" aria-label={rows.map(row => `${row.name}: ${row.value}%`).join('; ')}>
      <div className="rd-price-scale"><span /><div>{[-2, 0, 2, 4].map(tick => <span key={tick} style={{ left: `${(tick - min) / (max - min) * 100}%` }}>{tick}%</span>)}</div><span /></div>
      {ordered.map(row => <div className="rd-price-row" key={row.name}><strong>{row.name}</strong><div className="rd-price-track"><i className="rd-zero" style={{ left: `${zero}%` }} /><span className={`rd-price-bar ${row.value < 0 ? 'negative' : ''}`} style={{ left: `${(Math.min(0, row.value) - min) / (max - min) * 100}%`, width: `${Math.abs(row.value) / (max - min) * 100}%` }} /></div><b>{row.value > 0 ? '+' : ''}{row.value.toFixed(1)}%</b></div>)}
    </div>
    <details className="rd-details"><summary>Underlying observations</summary><table><caption>BLS CPI-U, July 2025-July 2026. Unadjusted percentage changes.</caption><thead><tr><th>Category</th><th>Change</th></tr></thead><tbody>{rows.map(row => <tr key={row.name}><th scope="row">{row.name}</th><td>{row.value.toFixed(1)}%</td></tr>)}</tbody></table></details>
    <FigureFooter note="Observed CPI changes, not market revenue, unit demand or segment shares. Broader comparator categories retain their stated boundaries." references={[1]} />
  </figure>;
}

function escapeXml(value: string) { return value.replace(/[<>&"']/g, character => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' })[character]!); }
function wrapped(value: string, limit: number) {
  const lines: string[] = []; let line = '';
  for (const word of value.split(/\s+/)) { if (line.length + word.length > limit) { lines.push(line); line = ''; } line += `${line ? ' ' : ''}${word}`; }
  if (line) lines.push(line);
  return lines;
}

export function ForecastExhibit({ title, scenarios }: { title: string; scenarios: Dossier['scenarios'] }) {
  const [selected, setSelected] = useState('Neutral');
  const [downloadMessage, setDownloadMessage] = useState('');
  const active = scenarios.find(scenario => scenario.name === selected)!;
  const lower = scenarioPath(active, -1); const upper = scenarioPath(active, 1);
  const paths = scenarios.map(scenario => ({ name: scenario.name, points: scenarioPath(scenario) }));
  const data = lower.map((point, index) => ({ year: point.year, band: [point.value, upper[index].value], ...Object.fromEntries(paths.map(path => [path.name, path.points[index].value])) }));
  const colours = { Conservative: '#59646b', Neutral: '#2855c5', Optimistic: '#167568' };
  const endpoint = `${Math.round(lower[5].value)}-${Math.round(upper[5].value)}`;
  const assumptions = `2027-2028: units ${active.volume}%, price/mix ${active.price}% annually. 2029-2031: units ${active.laterVolume}%, price/mix ${active.laterPrice}% annually.`;
  function exportChart() {
    const notes = wrapped(`${selected}. ${assumptions} ${forecastMethod}`, 112);
    const sourceHeight = notes.length * 22;
    const y = 520;
    const drawText = (x: number, baseline: number, text: string, size = 15) => `<text x="${x}" y="${baseline}" font-family="Arial,sans-serif" font-size="${size}" fill="#263238">${escapeXml(text)}</text>`;
    // Fixed export coordinates keep type and chart proportions identical on mobile and desktop.
    const xFor = (index: number) => 80 + index * 190;
    const yFor = (value: number) => 455 - (value - 75) / 80 * 300;
    const points = (values: { value: number }[]) => values.map((point, index) => `${xFor(index)},${yFor(point.value)}`).join(' ');
    const envelope = `${points(lower)} ${upper.map((point, index) => `${xFor(index)},${yFor(point.value)}`).reverse().join(' ')}`;
    const drawing = `<polygon points="${envelope}" fill="${colours[active.name]}" fill-opacity="0.1"/>${[80,100,120,140].map(tick => `<line x1="80" y1="${yFor(tick)}" x2="1030" y2="${yFor(tick)}" stroke="#e1e6e9"/>${drawText(42, yFor(tick) + 5, String(tick), 13)}`).join('')}${paths.map(path => `<polyline points="${points(path.points)}" fill="none" stroke="${colours[path.name]}" stroke-width="${path.name === selected ? 3 : 1.5}" ${path.name === selected ? '' : 'stroke-dasharray="5 5"'}/>`).join('')}${lower.map((point, index) => drawText(xFor(index) - 17, 480, String(point.year), 13)).join('')}${scenarios.map((scenario, index) => `<line x1="${80 + index * 260}" y1="115" x2="${115 + index * 260}" y2="115" stroke="${colours[scenario.name]}" stroke-width="${scenario.name === selected ? 3 : 1.5}" ${scenario.name === selected ? '' : 'stroke-dasharray="5 5"'}/>${drawText(125 + index * 260, 120, scenario.name, 14)}`).join('')}`;
    const exported = `<svg xmlns="http://www.w3.org/2000/svg" width="1100" height="${y + sourceHeight + 150}" viewBox="0 0 1100 ${y + sourceHeight + 150}"><title>${escapeXml(`${title}: ${selected} revenue scenario`)}</title><desc>${escapeXml(forecastMethod)}</desc><rect width="100%" height="100%" fill="white"/>${drawText(40, 48, `${title}: ${selected.toLowerCase()} revenue scenario`, 27)}${drawText(40, 80, 'United States | 2026 = 100 | Conditional 2027-2031 outlook', 16)}${drawing}${notes.map((line, index) => drawText(40, y + index * 22, line)).join('')}<line x1="40" y1="${y + sourceHeight + 15}" x2="1060" y2="${y + sourceHeight + 15}" stroke="#adb8c0"/>${drawText(40, y + sourceHeight + 65, 's.', 40)}${drawText(93, y + sourceHeight + 50, 'Synthetic', 18)}${drawText(93, y + sourceHeight + 70, 'MARKET RESEARCH', 11)}${drawText(760, y + sourceHeight + 55, 'September 2026 | SMR v1.0')}${drawText(40, y + sourceHeight + 110, 'Source: SMR planning assumptions and the disclosed compound-growth model; not a measured market total.')}</svg>`;
    const url = URL.createObjectURL(new Blob([exported], { type: 'image/svg+xml' }));
    const link = document.createElement('a'); link.href = url; link.download = `SMR-${title.toLowerCase().replaceAll(' ', '-')}-${selected.toLowerCase()}-2026.svg`; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 10000); setDownloadMessage('Chart download prepared.');
  }
  return <figure className="rd-figure rd-forecast" data-scenario={selected}>
    <div className="rd-figure-heading"><div><p className="smr-eyebrow">03 / CONDITIONAL REVENUE OUTLOOK</p><h2>Three paths. Different commercial conditions.</h2><p className="rd-unit">United States / 2026 = 100 / indexed revenue, not a dollar market size</p></div><button type="button" className="rd-icon-button" title="Download selected scenario chart (SVG)" aria-label="Download selected scenario chart" onClick={exportChart}><Download size={20} /></button></div>
    <div className="rd-controls rd-scenario-tabs" role="group" aria-label="Forecast scenario">{scenarios.map(scenario => <button key={scenario.name} type="button" aria-pressed={selected === scenario.name} onClick={() => { setSelected(scenario.name); setDownloadMessage(''); }}><i style={{ background: colours[scenario.name] }} aria-hidden="true" />{scenario.name}</button>)}</div>
    <div className="rd-forecast-grid"><div className="rd-line-chart" role="img" aria-label={`${selected} scenario: 2031 revenue index sensitivity range ${endpoint}; 2026 equals 100.`}>
      <ResponsiveContainer width="100%" height={330}><ComposedChart data={data} margin={{ top: 20, right: 20, bottom: 10, left: 0 }} accessibilityLayer>
        <CartesianGrid vertical={false} stroke="#e1e6e9" /><XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#536069' }} padding={{ left: 6, right: 6 }} /><YAxis domain={[75, 155]} ticks={[80, 100, 120, 140]} axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#536069' }} width={36} />
        <Tooltip formatter={(value, name) => name === 'Sensitivity' && Array.isArray(value) ? [`${Math.round(Number(value[0]))}-${Math.round(Number(value[1]))}`, name] : [Math.round(Number(value)), `${name} index`]} contentStyle={{ border: '1px solid #cfd8dd', borderRadius: 0, fontSize: 12 }} />
        <Area dataKey="band" name="Sensitivity" fill={colours[active.name]} fillOpacity={0.10} stroke="none" isAnimationActive={false} />
        {scenarios.map(scenario => <Line key={scenario.name} type="linear" dataKey={scenario.name} stroke={colours[scenario.name]} strokeWidth={scenario.name === selected ? 3 : 1.5} strokeDasharray={scenario.name === selected ? undefined : '5 5'} dot={false} isAnimationActive={false} />)}
      </ComposedChart></ResponsiveContainer>
    </div><div className="rd-scenario-reading" aria-live="polite" aria-atomic="true"><span>{selected} / 2031 index range</span><strong>{endpoint}</strong><p>{active.rationale}</p><dl><div><dt>2027-2028 unit growth</dt><dd>{active.volume}% / year</dd></div><div><dt>2027-2028 price/mix</dt><dd>{active.price}% / year</dd></div><div><dt>2029-2031 unit growth</dt><dd>{active.laterVolume}% / year</dd></div><div><dt>2029-2031 price/mix</dt><dd>{active.laterPrice}% / year</dd></div></dl></div></div>
    <details className="rd-details"><summary>Model, assumptions and annual values</summary><p>{forecastMethod}</p><p>Formula: next-year index = prior-year index x (1 + unit growth) x (1 + price/mix growth). The neutral case is a planning reference, not a probability-weighted expected value. Unit assumptions are analyst-selected business conditions, not estimates inferred from CPI or company market shares.</p><table><caption>{selected}: rounded index values and price/mix sensitivity</caption><thead><tr><th>Year</th><th>Lower</th><th>Selected path</th><th>Upper</th></tr></thead><tbody>{scenarioPath(active).map((point, index) => <tr key={point.year}><th scope="row">{point.year}</th><td>{Math.round(lower[index].value)}</td><td>{Math.round(point.value)}</td><td>{Math.round(upper[index].value)}</td></tr>)}</tbody></table></details>
    <span role="status" className="rd-download-status">{downloadMessage}</span>
    <FigureFooter note="SMR planning scenarios; 2026 is a normalised base. Shading tests price/mix +/-1 percentage point annually, not statistical confidence. Dashed lines retain the other two cases." />
  </figure>;
}

export function CompetitiveExhibit({ peers, family, sources }: { peers: Peer[]; family: string; sources: Source[] }) {
  const [selected, setSelected] = useState(peers[0].name);
  const peer = peers.find(item => item.name === selected)!;
  const quadrants = [
    { specialist: true, professional: true, title: 'Specialist supply platforms' },
    { specialist: false, professional: true, title: 'Diversified supply platforms' },
    { specialist: true, professional: false, title: 'Specialist brand portfolios' },
    { specialist: false, professional: false, title: 'Diversified brand portfolios' },
  ];
  return <figure className="rd-figure">
    <div className="rd-figure-heading"><div><p className="smr-eyebrow">04 / COMPETITIVE BUSINESS MODELS</p><h2>Different portfolios. Different routes to value.</h2><p className="rd-unit">Selected companies / disclosed operating models / qualitative SMR classification</p></div></div>
    <div className="rd-map-top"><span>Professional-supply platform</span><span>Portfolio breadth</span></div>
    <div className="rd-quadrants">{quadrants.map(quadrant => <section key={quadrant.title} className="rd-quadrant"><h3>{quadrant.title}</h3><div>{peers.filter(item => item.specialist === quadrant.specialist && (item.professional === 'both' || item.professional === quadrant.professional)).map(item => <button key={item.name} type="button" aria-pressed={item.name === selected} onClick={() => setSelected(item.name)}><span aria-hidden="true" />{item.name}</button>)}</div></section>)}</div>
    <div className="rd-map-bottom"><span>{family} specialist</span><span>Broader portfolio</span></div><p className="rd-map-direction">Lower row: consumer brands. Companies appear in both rows where both activities are documented.</p>
    <div className="rd-peer-detail" aria-live="polite"><strong>{peer.name}</strong><p>{peer.evidence} <a href={`#source-${peer.source}`}>[{peer.source}]</a></p><a className="smr-text-link" href={sources[peer.source - 1].url} target="_blank" rel="noreferrer">Company source <ArrowUpRight size={15} /></a></div>
    <details className="rd-details"><summary>Classification rules and company evidence</summary><p>Columns distinguish an explicit {family.toLowerCase()} specialism from a wider group portfolio. Rows record consumer-brand and professional-supply activities evidenced in the cited sources; a company may appear in both. These are qualitative SMR classifications, not scored coordinates, exhaustive channel audits or market-share estimates. A listing in one row does not rule out other activities. Positions within a cell carry no meaning, and unoccupied cells describe only this selected evidence set.</p><table><thead><tr><th>Company</th><th>Portfolio</th><th>Documented activities</th><th>Evidence</th></tr></thead><tbody>{peers.map(item => <tr key={item.name}><th scope="row">{item.name}</th><td>{item.specialist ? 'Specialist' : 'Diversified'}</td><td>{item.professional === 'both' ? 'Consumer brands and professional supply' : item.professional ? 'Professional supply' : 'Consumer brands'}</td><td>{item.evidence} <a href={`#source-${item.source}`}>[{item.source}]</a></td></tr>)}</tbody></table></details>
    <FigureFooter note="Company-level operating-model comparison, including identified value-chain or international peers. Categories are not quality awards or quantitative rankings." references={[...new Set(peers.map(item => item.source))]} />
  </figure>;
}

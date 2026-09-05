"use client";

import { useState, useSyncExternalStore } from "react";
import { ArrowUpRight, Download, FileSpreadsheet, RotateCcw } from "lucide-react";
import evidence from "@/lib/protein-bars.json";

type Metric = "bar" | "protein" | "weight";
type View = "products" | "retailers";
type Product = typeof evidence.products[number];
type Row = { id: string; product: Product; bars: number; price: number; seller: string; source: string; value: number };
const metrics: Record<Metric, { label: string; unit: string; maximum: number }> = {
  bar: { label: "Per bar", unit: "USD per bar", maximum: 4 },
  protein: { label: "Per 20 g protein", unit: "USD per 20 g labelled protein", maximum: 5 },
  weight: { label: "Per 100 g", unit: "USD per 100 g of bar", maximum: 6 },
};
const dateLabel = "5 September 2026";
const subscribe = () => () => {};
const money = (value: number) => `$${value.toFixed(2)}`;
const colour = (row: Row) => row.seller === "Target" ? "#2855c5" : row.product.formulation === "Plant-based" ? "#187568" : "#303c43";
function valueFor(price: number, bars: number, product: Product, metric: Metric) {
  const perBar = price / bars;
  return metric === "protein" ? perBar / product.protein * 20 : metric === "weight" ? perBar / product.weight * 100 : perBar;
}
function download(content: string, type: string, filename: string) {
  const url = URL.createObjectURL(new Blob([content], { type }));
  const link = document.createElement("a");
  link.href = url; link.download = filename;
  document.body.appendChild(link); link.click(); link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 10000);
}
const escapeXml = (value: string) => value.replace(/[<>&"']/g, character => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&apos;" })[character]!);

export default function ProteinBarExhibit() {
  const hydrated = useSyncExternalStore(subscribe, () => true, () => false);
  const [view, setView] = useState<View>("products");
  const [metric, setMetric] = useState<Metric>("protein");
  const [brand, setBrand] = useState("All brands");
  const [formulation, setFormulation] = useState("All formulations");
  const [message, setMessage] = useState("");
  const matches = (p: Product) => (brand === "All brands" || p.brand === brand) &&
    (formulation === "All formulations" || (formulation === "Plant-based" ? p.formulation === "Plant-based" : p.formulation !== "Plant-based"));
  const rows: Row[] = view === "products"
    ? evidence.products.filter(matches).map(product => ({ id: product.id, product, bars: 12, price: product.packPrice, seller: "Brand direct", source: product.source, value: valueFor(product.packPrice, 12, product, metric) })).sort((a, b) => a.value - b.value || a.id.localeCompare(b.id))
    : evidence.pairs.flatMap(pair => {
      const product = evidence.products.find(p => p.id === pair.productId)!;
      return matches(product) ? [
        { id: `${pair.id}-direct`, product, bars: pair.bars, price: pair.direct, seller: "Brand direct", source: product.source, value: valueFor(pair.direct, pair.bars, product, metric) },
        { id: `${pair.id}-retail`, product, bars: pair.bars, price: pair.retail, seller: pair.retailer, source: pair.source, value: valueFor(pair.retail, pair.bars, product, metric) },
      ] : [];
    });
  const current = metrics[metric];
  const stateLabel = `${view === "products" ? "Brand-direct 12-packs" : "Matched packs: brand direct and Target"}; ${brand}; ${formulation}`;
  const heading = view === "products" ? "The price of protein depends on the formulation" : "The same pack carries a different price by channel";
  const note = "One-time listed prices; excludes tax, delivery, subscriptions, coupons and multi-buy offers. Prices and availability vary by location and date.";
  const boundary = "Selected products, not a market-wide ranking. Nutrition is label-declared; cost per protein does not measure protein quality or health benefits.";
  const sources = [...new Map(rows.flatMap(row => [[row.source, `${row.product.brand} ${row.product.name}: ${row.seller}, ${row.bars} bars`], [row.product.nutritionSource, `${row.product.brand} ${row.product.name} (${row.product.line}): nutrition`]]).map(([url, label]) => [url, { url, label }])).values()];
  function reset() { setView("products"); setMetric("protein"); setBrand("All brands"); setFormulation("All formulations"); setMessage(""); }
  function exportCsv() {
    const cell = (value: string | number) => `"${String(value).replace(/"/g, '""')}"`;
    const contents = [
      ["Synthetic Market Research", "Protein bars: prices and formulation"],
      ["Observed date", evidence.date], ["View", stateLabel], ["Metric", current.unit], ["Edition", evidence.edition],
      ["Price basis", note], ["Scope", boundary],
      ["Brand", "Product", "Line", "Formulation", "Seller", "Bars per pack", "Pack price USD", "Bar weight g", "Protein per bar g", "Sugar per bar g", current.unit, "Price source", "Nutrition source"],
      ...rows.map(r => [r.product.brand, r.product.name, r.product.line, r.product.formulation, r.seller, r.bars, r.price, r.product.weight, r.product.protein, r.product.sugar, r.value.toFixed(4), r.source, r.product.nutritionSource]),
    ].map(row => row.map(cell).join(",")).join("\r\n");
    download(contents, "text/csv;charset=utf-8", `SMR-protein-bars-${view}-${metric}-${evidence.date}.csv`);
    setMessage("Data download prepared.");
  }
  function exportSvg() {
    const bottom = 180 + rows.length * 76;
    const height = bottom + 230 + sources.length * 25;
    const text = (x: number, y: number, content: string, size = 15, fill = "#303c43") => `<text x="${x}" y="${y}" font-family="Arial,sans-serif" font-size="${size}" fill="${fill}">${escapeXml(content)}</text>`;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="${height}" viewBox="0 0 1200 ${height}" role="img">
      <title>${escapeXml(heading)}</title><desc>${escapeXml(`${current.unit}. ${stateLabel}. ${dateLabel}. ${note} ${boundary}`)}</desc>
      <rect width="1200" height="${height}" fill="white"/>
      ${text(40, 45, heading, 27)}${text(40, 78, `United States | ${dateLabel} | ${current.unit}`, 16)}${text(40, 108, stateLabel, 14)}
      ${[0,1,2,3,4].map(i => { const x=480+i*155; return `<line x1="${x}" y1="152" x2="${x}" y2="${bottom}" stroke="#d9dfe3"/>${text(x,143, money(current.maximum*i/4),13)}`; }).join("")}
      ${rows.map((r,i) => {const y=176+i*76; return `${text(40,y,`${r.product.brand} ${r.product.name}`,16)}${text(40,y+22,`${r.product.line} | ${r.seller} | ${r.bars} bars`,13)}<rect x="480" y="${y-13}" width="${r.value/current.maximum*620}" height="20" fill="${colour(r)}"/>${text(1120,y+3,money(r.value),16)}`;}).join("")}
      <line x1="40" y1="${bottom+14}" x2="1160" y2="${bottom+14}" stroke="#adb8c0"/>
      <text x="40" y="${bottom+55}" font-family="Georgia,serif" font-size="40" fill="#303c43">s<tspan fill="#2855c5">.</tspan></text>${text(91,bottom+40,"Synthetic",17)}${text(91,bottom+60,"MARKET RESEARCH",10)}${text(920,bottom+50,evidence.edition,14)}
      ${text(40,bottom+96,"One-time listed prices. Tax, delivery, subscriptions, coupons and multi-buy offers excluded.",14)}
      ${text(40,bottom+120,"Prices and availability vary by location and date. Selected products, not a market-wide ranking.",14)}
      ${text(40,bottom+144,"Nutrition is label-declared. Cost per protein does not measure protein quality or health benefits.",14)}
      ${text(40,bottom+180,`Sources: original brand product pages and labels${view === "retailers" ? "; Target listings" : ""}. Calculations: SMR.`,14)}
      ${sources.map((s,i)=>`<a href="${escapeXml(s.url)}">${text(40,bottom+210+i*25,s.label,13,"#2855c5")}</a>`).join("")}</svg>`;
    download(svg, "image/svg+xml;charset=utf-8", `SMR-protein-bars-${view}-${metric}-${evidence.date}.svg`);
    setMessage("Chart download prepared.");
  }
  return <section className="smr-protein-exhibit" id="protein-prices" aria-labelledby="protein-exhibit-title" data-metric={metric}>
    <div className="pb-heading"><div><p className="smr-eyebrow">01 / PRICE AND FORMULATION</p><h2 id="protein-exhibit-title">{heading}</h2><p className="pb-dateline">United States · {dateLabel}</p></div></div>
    <div className="pb-toolbar">
      <div className="pb-segmented" role="group" aria-label="Comparison view">
        <button type="button" disabled={!hydrated} aria-pressed={view === "products"} onClick={() => setView("products")}>Products</button>
        <button type="button" disabled={!hydrated} aria-pressed={view === "retailers"} onClick={() => setView("retailers")}>Retailer comparison</button>
      </div>
      <div className="pb-tools">
        <button type="button" disabled={!hydrated} onClick={reset} aria-label="Reset comparison" title="Reset comparison"><RotateCcw size={18}/></button>
        <button type="button" disabled={!hydrated || !rows.length} onClick={exportCsv} aria-label="Download data CSV" title="Download data (CSV)"><FileSpreadsheet size={18}/></button>
        <button type="button" disabled={!hydrated || !rows.length} onClick={exportSvg} aria-label="Download chart SVG" title="Download chart (SVG)"><Download size={18}/></button>
      </div>
    </div>
    <div className="pb-filters">
      <div className="pb-segmented" role="group" aria-label="Price metric">{(Object.keys(metrics) as Metric[]).map(key => <button type="button" disabled={!hydrated} key={key} aria-pressed={metric === key} onClick={()=>setMetric(key)}>{metrics[key].label}</button>)}</div>
      <label>Brand<select aria-label="Brand" disabled={!hydrated} value={brand} onChange={event=>setBrand(event.target.value)}>{["All brands", ...new Set(evidence.products.map(p=>p.brand))].map(name=><option key={name}>{name}</option>)}</select></label>
      <label>Formulation<select aria-label="Formulation" disabled={!hydrated} value={formulation} onChange={event=>setFormulation(event.target.value)}>{["All formulations","Plant-based","Contains animal protein"].map(name=><option key={name}>{name}</option>)}</select></label>
    </div>
    <figure className="pb-figure" aria-labelledby="protein-exhibit-title" aria-describedby="protein-scope">
      <div className="pb-plot-meta"><span>{current.unit}</span><span>{view === "products" ? `${rows.length} products · 12-bar packs` : `${rows.length / 2} matched packs · Brand direct / Target`}</span></div>
      {rows.length ? <>
        <div className="pb-axis" aria-hidden="true"><span/><div>{[0,1,2,3,4].map(i=><span key={i}>{money(current.maximum*i/4)}</span>)}</div><span/></div>
        <ol className="pb-bars">{rows.map(row=><li key={row.id} className="pb-row" data-offer={row.id}>
          <div className="pb-row-name"><strong>{row.product.brand} <span>{row.product.line}</span></strong><span>{row.product.name}</span><small>{view === "retailers" ? `${row.seller} · ${row.bars}-bar pack` : `${row.product.protein} g protein · ${row.product.weight} g bar`}</small></div>
          <div className="pb-track" aria-hidden="true"><span style={{width:`${row.value/current.maximum*100}%`,background:colour(row)}}/></div>
          <span className="pb-value">{money(row.value)}<span className="pb-sr-only"> {current.unit}</span></span>
        </li>)}</ol>
      </> : <div className="pb-empty"><h3>No matching products</h3><p>No observed offers match this selection.</p><button type="button" onClick={reset}>Reset comparison</button></div>}
      <figcaption className="pb-chart-footer">
        <div className="pb-brand" aria-label="Synthetic Market Research"><span className="pb-monogram">s<span>.</span></span><span>Synthetic<small>MARKET RESEARCH</small></span></div>
        <div><p>Sources: brand product pages and labels{view === "retailers" ? "; Target listings" : ""}. Calculations: SMR.</p><p>{stateLabel}. {evidence.edition}.</p></div>
      </figcaption>
    </figure>
    <p className="pb-scope" id="protein-scope">{note} {boundary}</p>
    <details className="pb-details"><summary>Data and sources</summary>
      <p>Retailer comparisons match brand, flavour, pack count, declared bar weight and protein. Location-specific fulfilment is not assessed. Formulation groups describe declared ingredients, not certifications.</p>
      <div className="pb-table-scroll" role="region" aria-label="Product evidence table" tabIndex={0}><table><caption>{current.unit} · {dateLabel}</caption><thead><tr><th>Product</th><th>Seller / pack</th><th>Pack price</th><th>Protein / sugar</th><th>{current.unit}</th><th>Sources</th></tr></thead><tbody>{rows.map(row=><tr key={row.id}><th scope="row">{row.product.brand} {row.product.name}<small>{row.product.line} · {row.product.formulation}</small></th><td>{row.seller}<small>{row.bars} bars · {row.product.weight} g each</small></td><td>{money(row.price)}</td><td>{row.product.protein} g / {row.product.sugar} g<small>per bar</small></td><td>{money(row.value)}</td><td><a href={row.source} target="_blank" rel="noopener noreferrer">Price <ArrowUpRight size={13}/></a><a href={row.product.nutritionSource} target="_blank" rel="noopener noreferrer">Label <ArrowUpRight size={13}/></a></td></tr>)}</tbody></table></div>
      <p>Normalised cost = pack price ÷ bar count ÷ labelled grams × comparison quantity. Brand-direct comparison covers seven selected products across four brands. Sold-out offers are excluded.</p>
    </details>
    <p className="pb-sr-only" role="status">{message}</p>
  </section>;
}

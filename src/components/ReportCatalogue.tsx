"use client";
import { useState } from "react";
import Link from "next/link";
import { Search, X, ChevronLeft, ChevronRight } from "lucide-react";
import { reports } from "@/lib/reports";
import { ReportGrid } from "./ResearchUI";
const categories = [...new Set(reports.map((report) => report.category))].sort();
const pageSize = 12;
export default function ReportCatalogue() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(0);
  const filtered = reports.filter((report) => (!category || report.category === category)
    && `${report.title} ${report.region} ${report.focus}`.toLowerCase().includes(query.trim().toLowerCase()));
  const pages = Math.ceil(filtered.length / pageSize);
  const current = Math.min(page, Math.max(0, pages - 1));
  return <>
    <div className="smr-catalogue-controls">
      <div className="smr-catalogue-search"><Search size={19} aria-hidden="true" />
        <input aria-label="Search reports" placeholder="Search markets, products or countries" value={query} onChange={(e) => { setQuery(e.target.value); setPage(0); }} />
        {query && <button type="button" title="Clear search" aria-label="Clear search" onClick={() => { setQuery(""); setPage(0); }}><X size={18} /></button>}
      </div>
      <select aria-label="Filter by sector" value={category} onChange={(e) => { setCategory(e.target.value); setPage(0); }}>
        <option value="">All sectors</option>{categories.map((item) => <option key={item}>{item}</option>)}
      </select>
    </div>
    <div className="smr-filter-bar"><span>Food, beverages &amp; ingredients</span><span role="status">{filtered.length} report titles</span></div>
    {filtered.length ? <ReportGrid items={filtered.slice(current * pageSize, (current + 1) * pageSize)} /> :
      <div className="smr-no-results"><h2>No matching reports</h2><Link className="smr-text-link" href="/custom-research">Discuss a custom research brief</Link></div>}
    {pages > 1 && <nav className="smr-pagination" aria-label="Catalogue pages">
      <button type="button" title="Previous page" aria-label="Previous page" disabled={current === 0} onClick={() => setPage(current - 1)}><ChevronLeft size={20} /></button>
      <span>Page {current + 1} of {pages}</span>
      <button type="button" title="Next page" aria-label="Next page" disabled={current + 1 === pages} onClick={() => setPage(current + 1)}><ChevronRight size={20} /></button>
    </nav>}
    <details className="smr-market-directory"><summary>Browse all markets A to Z</summary>
      <ul>{[...reports].sort((a, b) => a.title.localeCompare(b.title)).map((report) => <li key={report.slug}><Link href={`/reports/${report.slug}`}>{report.title}</Link></li>)}</ul>
    </details>
  </>;
}

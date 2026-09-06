"use client";
import Link from "next/link";
import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { ArrowRight, ArrowUpRight, Check, Search, SlidersHorizontal, X } from "lucide-react";
import { categories, products, uses } from "@/lib/directory";
import { ProductMark } from "./PublicationUI";

let memoryShortlist = "[]";
function readShortlist() { try { return localStorage.getItem("smr-shortlist") || memoryShortlist; } catch { return memoryShortlist; } }
function subscribeShortlist(notify: () => void) {
  window.addEventListener("storage", notify); window.addEventListener("smr-shortlist-change", notify);
  return () => { window.removeEventListener("storage", notify); window.removeEventListener("smr-shortlist-change", notify); };
}
function emptyShortlist() { return "[]"; }
function writeShortlist(values: string[]) {
  memoryShortlist = JSON.stringify(values);
  try { localStorage.setItem("smr-shortlist", memoryShortlist); } catch {}
  window.dispatchEvent(new Event("smr-shortlist-change"));
}

export default function DirectoryExplorer({ initialQuery = "", initialCategory = "", initialUse = "" }: { initialQuery?: string; initialCategory?: string; initialUse?: string }) {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(initialCategory);
  const [use, setUse] = useState(initialUse);
  const [sort, setSort] = useState("az");
  const saved = useSyncExternalStore(subscribeShortlist, readShortlist, emptyShortlist);
  const selected = useMemo(() => { try { const parsed: unknown = JSON.parse(saved); return Array.isArray(parsed) ? [...new Set(parsed.filter((id): id is string => typeof id === "string" && products.some(p => p.slug === id)))].slice(0, 3) : []; } catch { return []; } }, [saved]);
  const setSelected = writeShortlist;
  const [notice, setNotice] = useState("");
  useEffect(() => {
    const restore = () => { const params = new URLSearchParams(location.search); setQuery(params.get("q") || ""); setCategory(params.get("category") || ""); setUse(params.get("use") || ""); };
    window.addEventListener("popstate", restore);
    return () => window.removeEventListener("popstate", restore);
  }, []);
  function filter(q: string, c: string, u: string) {
    setQuery(q); setCategory(c); setUse(u);
    const params = new URLSearchParams();
    if (q) params.set("q", q); if (c) params.set("category", c); if (u) params.set("use", u);
    window.history.replaceState(null, "", `${location.pathname}${params.size ? `?${params}` : ""}`);
  }
  const list = products.filter(p => (!category || p.category === category) && (!use || p.uses.includes(use)) && `${p.company} ${p.name} ${p.category} ${p.summary} ${p.uses.join(" ")}`.toLowerCase().includes(query.trim().toLowerCase())).sort((a, b) => sort === "category" ? a.category.localeCompare(b.category) || a.company.localeCompare(b.company) : a.company.localeCompare(b.company));
  const active = Boolean(query || category || use);
  return <section className="pub-wrap pub-directory" aria-label="Product directory">
    <div className="pub-search"><Search size={22} /><label className="pub-sr" htmlFor="directory-search">Search products and providers</label><input id="directory-search" type="search" placeholder="Search providers, products or use cases" value={query} onChange={e => filter(e.target.value, category, use)} />{query && <button aria-label="Clear search" title="Clear search" onClick={() => filter("", category, use)}><X size={20} /></button>}</div>
    <div className="pub-directory-layout"><aside className="pub-filters"><h2><SlidersHorizontal size={16} /> Refine your search</h2><fieldset><legend>Product category</legend><label><input type="radio" name="category" checked={!category} onChange={() => filter(query, "", use)} /> All products <span>{products.length}</span></label>{categories.map(c => <label key={c}><input type="radio" name="category" checked={c === category} onChange={() => filter(query, c, use)} />{c}<span>{products.filter(p => p.category === c).length}</span></label>)}</fieldset><label className="pub-select-label" htmlFor="use-case">Use case</label><select id="use-case" value={use} onChange={e => filter(query, category, e.target.value)}><option value="">All use cases</option>{uses.map(u => <option key={u}>{u}</option>)}</select>{active && <button className="pub-reset" onClick={() => filter("", "", "")}>Clear filters <X size={14} /></button>}<div className="pub-filter-note"><p>Choosing your first tool?</p><Link href="/insights/choose-the-right-synthetic-research">Start with the buyer guide <ArrowRight size={15} /></Link></div></aside>
    <div><div className="pub-results-heading"><p role="status"><strong>{list.length}</strong> {list.length === 1 ? "product" : "products"}{active ? " matching your search" : " in the directory"}</p><label>Sort <select value={sort} onChange={e => setSort(e.target.value)}><option value="az">Provider A-Z</option><option value="category">Category</option></select></label></div>
    <div className="pub-product-grid">{list.map(p => <article className="pub-product-card" key={p.slug}><div className="pub-product-card-head"><ProductMark product={p} /><span className="pub-category">{p.category}</span></div><h3><Link href={`/directory/${p.slug}`}>{p.company}<span>{p.name}</span></Link></h3><p>{p.summary}</p><div className="pub-product-uses">{p.uses.join(" / ")}</div><div className="pub-product-card-foot"><Link href={`/directory/${p.slug}`}>View profile <ArrowUpRight size={15} /></Link><button className={selected.includes(p.slug) ? "is-selected" : ""} aria-pressed={selected.includes(p.slug)} aria-label={`${selected.includes(p.slug) ? "Remove" : "Compare"} ${p.company} ${p.name}`} onClick={() => { if (selected.includes(p.slug)) { setSelected(selected.filter(id => id !== p.slug)); setNotice(""); } else if (selected.length < 3) { setSelected([...selected, p.slug]); setNotice(""); } else setNotice("Your comparison has three products. Remove one to add another."); }}><span className="pub-check">{selected.includes(p.slug) && <Check size={12} />}</span>Compare</button></div></article>)}</div>
    {list.length === 0 && <div className="pub-empty"><Search size={28} /><h3>No matching products</h3><p>Try a different name or broaden the category and use case.</p><button className="pub-button" onClick={() => filter("", "", "")}>Show all products <ArrowRight size={16} /></button></div>}
    <p className="pub-directory-note">Product descriptions reference provider documentation, checked 6 September 2026. <Link href="/methodology">How we cover the industry</Link></p></div></div>
    {selected.length > 0 && <aside className="pub-compare-tray" aria-label="Your comparison"><div><strong>Your shortlist <span>{selected.length}/3</span></strong><div className="pub-tray-products">{selected.map(id => { const p = products.find(p => p.slug === id)!; return <button key={id} title={`Remove ${p.company} ${p.name}`} onClick={() => { setSelected(selected.filter(s => s !== id)); setNotice(""); }}>{p.company}: {p.name} <X size={14} /></button>; })}</div>{notice && <p role="alert">{notice}</p>}</div><div className="pub-tray-actions"><button className="pub-reset" onClick={() => { setSelected([]); setNotice(""); }}>Clear</button>{selected.length >= 2 ? <Link className="pub-button" href={`/compare?products=${selected.join(",")}`}>Compare <ArrowRight size={16} /></Link> : <span className="pub-muted">Select one more</span>}</div></aside>}
  </section>;
}

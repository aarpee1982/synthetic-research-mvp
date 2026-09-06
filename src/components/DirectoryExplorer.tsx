"use client";
import Link from "next/link";
import { useEffect, useMemo, useState, useSyncExternalStore, type ReactNode } from "react";
import { ArrowRight, ArrowUpRight, Bookmark, Check, LayoutGrid, List, Search, SlidersHorizontal, X, Plus, MessagesSquare, UsersRound, Table2, Workflow, Boxes } from "lucide-react";
import { categories, products, uses } from "@/lib/directory";
import { bookmarkStore, shortlistStore } from "@/lib/saved-products";
import { ProductMark } from "./PublicationUI";

const categoryIcons = [MessagesSquare, UsersRound, Table2, Workflow];
function productIds(value: string, limit = Infinity): string[] {
  try {
    const parsed: unknown = JSON.parse(value);
    return Array.isArray(parsed) ? [...new Set(parsed.filter((id): id is string => typeof id === "string" && products.some(p => p.slug === id)))].slice(0, limit) : [];
  } catch { return []; }
}
type Props = { initialQuery?: string; initialCategory?: string; initialUse?: string; initialSavedOnly?: boolean; initialView?: string; rail?: ReactNode };

export default function DirectoryExplorer({ initialQuery = "", initialCategory = "", initialUse = "", initialSavedOnly = false, initialView = "list", rail }: Props) {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(initialCategory);
  const [use, setUse] = useState(initialUse);
  const [sort, setSort] = useState("az");
  const [view, setView] = useState(initialView === "grid" ? "grid" : "list");
  const [savedOnly, setSavedOnly] = useState(initialSavedOnly);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const saved = useSyncExternalStore(shortlistStore.subscribe, shortlistStore.read, shortlistStore.server);
  const bookmarks = useSyncExternalStore(bookmarkStore.subscribe, bookmarkStore.read, bookmarkStore.server);
  const selected = useMemo(() => productIds(saved, 3), [saved]);
  const bookmarked = useMemo(() => productIds(bookmarks), [bookmarks]);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    const restore = () => {
      const params = new URLSearchParams(location.search);
      setQuery(params.get("q") || ""); setCategory(params.get("category") || ""); setUse(params.get("use") || "");
      setSavedOnly(params.get("saved") === "1"); setView(params.get("view") === "grid" ? "grid" : "list");
    };
    window.addEventListener("popstate", restore);
    return () => window.removeEventListener("popstate", restore);
  }, []);

  function filter(q: string, c: string, u: string, onlySaved = savedOnly, display = view) {
    setQuery(q); setCategory(c); setUse(u); setSavedOnly(onlySaved); setView(display);
    const params = new URLSearchParams();
    if (q) params.set("q", q); if (c) params.set("category", c); if (u) params.set("use", u);
    if (onlySaved) params.set("saved", "1"); if (display === "grid") params.set("view", "grid");
    window.history.replaceState(null, "", `${location.pathname}${params.size ? `?${params}` : ""}`);
  }
  function compare(id: string) {
    if (selected.includes(id)) { shortlistStore.write(selected.filter(s => s !== id)); setNotice(""); }
    else if (selected.length < 3) { shortlistStore.write([...selected, id]); setNotice(""); }
    else setNotice("Your comparison has three products. Remove one to add another.");
  }
  const list = products.filter(p => (!category || p.category === category) && (!use || p.uses.includes(use)) && (!savedOnly || bookmarked.includes(p.slug)) && `${p.company} ${p.name} ${p.category} ${p.summary} ${p.uses.join(" ")}`.toLowerCase().includes(query.trim().toLowerCase())).sort((a, b) => sort === "category" ? a.category.localeCompare(b.category) || a.company.localeCompare(b.company) : a.company.localeCompare(b.company));
  const active = Boolean(query || category || use || savedOnly);

  return <section className={`pub-wrap pub-directory hub-directory${rail ? " has-rail" : ""}`} aria-label="Product directory">
    <div className="hub-search-row">
      <div className="pub-search"><Search size={21} /><label className="pub-sr" htmlFor="directory-search">Search products and providers</label><input id="directory-search" type="search" placeholder="Search tools and companies" value={query} onChange={e => filter(e.target.value, category, use)} />{query && <button aria-label="Clear search" title="Clear search" onClick={() => filter("", category, use)}><X size={18} /></button>}</div>
      <button className="hub-saved-toggle" aria-pressed={savedOnly} onClick={() => filter(query, category, use, !savedOnly)}><Bookmark size={17} /> Saved <span>{bookmarked.length}</span></button>
      <button className="hub-filter-toggle" aria-expanded={filtersOpen} aria-controls="directory-filters" onClick={() => setFiltersOpen(!filtersOpen)}><SlidersHorizontal size={18} /> Filters</button>
    </div>
    <div className="pub-directory-layout">
      <aside className="pub-filters" id="directory-filters" data-open={filtersOpen}>
        <h2><Boxes size={17} /> Explore tools</h2>
        <fieldset><legend>Product category</legend>
          <label className={!category ? "is-active" : ""}><input type="radio" name="category" checked={!category} onChange={() => filter(query, "", use)} /><Boxes size={15} /> All products <span>{products.length}</span></label>
          {categories.map((c, i) => { const Icon = categoryIcons[i]; return <label className={c === category ? "is-active" : ""} key={c}><input type="radio" name="category" checked={c === category} onChange={() => filter(query, c, use)} /><Icon size={15} />{c}<span>{products.filter(p => p.category === c).length}</span></label>; })}
        </fieldset>
        <label className="pub-select-label" htmlFor="use-case">What are you working on?</label><select id="use-case" value={use} onChange={e => filter(query, category, e.target.value)}><option value="">All use cases</option>{uses.map(u => <option key={u}>{u}</option>)}</select>
        {active && <button className="pub-reset" onClick={() => filter("", "", "", false)}>Clear filters <X size={14} /></button>}
        <div className="pub-filter-note"><p>Building a research tool?</p><Link href="/submit"><Plus size={15} /> Add your company</Link><Link href="/advertise">Sponsor the directory <ArrowUpRight size={15} /></Link></div>
      </aside>
      <div className="hub-results">
        <div className="pub-results-heading"><p role="status"><strong>{list.length}</strong> {list.length === 1 ? "product" : "products"}{active ? " matching your search" : " to explore"}</p><div className="hub-result-controls"><label><span className="pub-sr">Sort</span><select aria-label="Sort" value={sort} onChange={e => setSort(e.target.value)}><option value="az">Provider A-Z</option><option value="category">Category</option></select></label><div className="hub-view-toggle" role="group" aria-label="Display"><button aria-label="List view" title="List view" aria-pressed={view === "list"} onClick={() => filter(query, category, use, savedOnly, "list")}><List size={17} /></button><button aria-label="Grid view" title="Grid view" aria-pressed={view === "grid"} onClick={() => filter(query, category, use, savedOnly, "grid")}><LayoutGrid size={17} /></button></div></div></div>
        <div className={`pub-product-grid is-${view}`}>
          {list.map(p => <article className="pub-product-card" key={p.slug} data-category={categories.indexOf(p.category)}>
            <div className="pub-product-card-head"><ProductMark product={p} /></div>
            <h3><Link href={`/directory/${p.slug}`}>{p.company}<span>{p.name}</span></Link></h3>
            <button className="hub-bookmark" aria-label={`${bookmarked.includes(p.slug) ? "Unsave" : "Save"} ${p.company} ${p.name}`} title={bookmarked.includes(p.slug) ? "Remove from saved tools" : "Save tool"} aria-pressed={bookmarked.includes(p.slug)} onClick={() => bookmarkStore.write(bookmarked.includes(p.slug) ? bookmarked.filter(id => id !== p.slug) : [...bookmarked, p.slug])}><Bookmark size={18} fill={bookmarked.includes(p.slug) ? "currentColor" : "none"} /></button>
            <p>{p.summary}</p>
            <div className="pub-product-uses"><span className="pub-category">{p.category}</span>{p.uses.map(u => <button key={u} onClick={() => filter("", "", u, false)}>{u}</button>)}</div>
            <div className="pub-product-card-foot"><Link href={`/directory/${p.slug}`}>View profile <ArrowUpRight size={15} /></Link><button className={selected.includes(p.slug) ? "is-selected" : ""} aria-pressed={selected.includes(p.slug)} aria-label={`${selected.includes(p.slug) ? "Remove" : "Compare"} ${p.company} ${p.name}`} onClick={() => compare(p.slug)}><span className="pub-check">{selected.includes(p.slug) && <Check size={12} />}</span>Compare</button></div>
          </article>)}
        </div>
        {list.length === 0 && <div className="pub-empty">{savedOnly ? <Bookmark size={28} /> : <Search size={28} />}<h3>{savedOnly && bookmarked.length === 0 ? "No saved tools yet" : "No matching products"}</h3><p>{savedOnly && bookmarked.length === 0 ? "Your saved tools will appear here." : "Try another name or clear your filters."}</p><button className="pub-button" onClick={() => filter("", "", "", false)}>Show all products <ArrowRight size={16} /></button></div>}
        <p className="pub-directory-note">Updated 6 September 2026. <Link href="/submit">Suggest a tool</Link><Link href="/methodology">About the directory</Link></p>
      </div>
      {rail}
    </div>
    {selected.length > 0 && <aside className="pub-compare-tray" aria-label="Your comparison"><div><strong>Your shortlist <span>{selected.length}/3</span></strong><div className="pub-tray-products">{selected.map(id => { const p = products.find(p => p.slug === id)!; return <button key={id} title={`Remove ${p.company} ${p.name}`} onClick={() => { shortlistStore.write(selected.filter(s => s !== id)); setNotice(""); }}>{p.company}: {p.name} <X size={14} /></button>; })}</div>{notice && <p role="alert">{notice}</p>}</div><div className="pub-tray-actions"><button className="pub-reset" onClick={() => { shortlistStore.write([]); setNotice(""); }}>Clear</button>{selected.length >= 2 ? <Link className="pub-button" href={`/compare?products=${selected.join(",")}`}>Compare <ArrowRight size={16} /></Link> : <span className="pub-muted">Select one more</span>}</div></aside>}
  </section>;
}

import routes from "./analytics-routes.json";

export const MEASUREMENT_ID = "G-TJR9CD5BTD";
export const CONSENT_KEY = "smr-analytics-consent-v1";
const SITE = "https://www.syntheticmarketresearch.com";
const knownRoutes = new Set(routes);
const hosts = new Set(["syntheticmarketresearch.com", "www.syntheticmarketresearch.com"]);
type Gtag = (...args: unknown[]) => void;
declare global { interface Window { dataLayer?: unknown[]; gtag?: Gtag; } }
let active = false;
let initialized = false;
let lastPage = "";
let previousPage = "";
let consentInMemory = false;

export function readConsent(): "granted" | "denied" | null {
  try {
    const value = JSON.parse(localStorage.getItem(CONSENT_KEY) || "null");
    if (value && value.version === 1 && value.expires > Date.now() && ["granted", "denied"].includes(value.choice)) return value.choice;
  } catch {}
  return null;
}
export function saveConsent(choice: "granted" | "denied") {
  consentInMemory = choice === "granted";
  try { localStorage.setItem(CONSENT_KEY, JSON.stringify({ version: 1, choice, expires: Date.now() + 180 * 86400000 })); } catch {}
}
export function publicPath(value: string) {
  try {
    const url = new URL(value, SITE);
    const path = url.pathname.replace(/\/$/, "") || "/";
    return hosts.has(url.hostname) && knownRoutes.has(path) && !path.startsWith("/newsletter/") ? path : null;
  } catch { return null; }
}
export function cleanReferrer(value: string) {
  try { const url = new URL(value); return ["https:", "http:"].includes(url.protocol) ? (hosts.has(url.hostname) ? SITE + (publicPath(value) || "/") : url.origin + "/") : ""; } catch { return ""; }
}
export function analyticsAllowed() {
  return typeof window !== "undefined" && hosts.has(location.hostname) && (consentInMemory || readConsent() === "granted") && publicPath(location.href) !== null;
}
function disable(value: boolean) { (window as unknown as Record<string, unknown>)[`ga-disable-${MEASUREMENT_ID}`] = value; }
function context(path: string) {
  return { page_location: SITE + path, page_title: path === "/" ? "SMR | Home" : `SMR | ${path.split("/")[1]}`, page_referrer: previousPage || cleanReferrer(document.referrer), content_group: path.split("/")[1] || "home" };
}
function campaign() {
  const query = new URLSearchParams(location.search);
  const allowed = { source: ["newsletter", "linkedin", "google", "bing", "chatgpt", "perplexity"], medium: ["email", "social", "organic", "cpc", "referral"], name: ["synthetic-brief", "smr-launch"] };
  const result: Record<string, string> = {};
  for (const [key, values] of Object.entries(allowed)) {
    const value = query.get(`utm_${key === "name" ? "campaign" : key}`) || "";
    if (values.includes(value)) result[`campaign_${key}`] = value;
  }
  return result;
}
export function stopAnalytics() {
  consentInMemory = false;
  active = false;
  disable(true);
  // Do not send a consent ping after withdrawal. Reload ends all loaded analytics listeners.
  for (const cookie of document.cookie.split(";")) {
    const name = cookie.trim().split("=")[0];
    if (!/^_ga(?:_|$)/.test(name)) continue;
    for (const domain of ["", location.hostname, ".syntheticmarketresearch.com", "syntheticmarketresearch.com"]) {
      document.cookie = `${name}=; Max-Age=0; Path=/;${domain ? ` Domain=${domain};` : ""} SameSite=Lax; Secure`;
    }
  }
}
export function pageView() {
  const path = publicPath(location.href);
  if (!analyticsAllowed() || !path) { active = false; disable(true); return; }
  active = true;
  disable(false);
  if (!initialized) {
    initialized = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer!.push(arguments); };
    const gtag = window.gtag;
    gtag("consent", "default", { analytics_storage: "denied", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
    gtag("consent", "update", { analytics_storage: "granted" });
    gtag("js", new Date());
    gtag("set", { ...context(path), allow_google_signals: false, allow_ad_personalization_signals: false });
    let debug = false;
    try { debug = sessionStorage.getItem("smr-analytics-debug") === "1"; } catch {}
    gtag("config", MEASUREMENT_ID, { ...context(path), ...campaign(), ...(debug ? { debug_mode: true } : {}), send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false, cookie_expires: 180 * 86400, cookie_update: false, cookie_flags: "SameSite=Lax;Secure" });
    const script = document.createElement("script");
    script.id = "smr-google-analytics";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    document.head.appendChild(script);
  }
  if (lastPage === path) return;
  window.gtag!("set", context(path));
  window.gtag!("event", "page_view", { ...context(path), send_to: MEASUREMENT_ID });
  lastPage = path;
  previousPage = SITE + path;
}
type FormType = "newsletter" | "publication" | "research" | "report_sample";
export function trackForm(stage: "start" | "success", formType: FormType) {
  if (!active || !analyticsAllowed()) return;
  const name = stage === "start" ? "form_start" : formType === "newsletter" ? "newsletter_signup_request" : "generate_lead";
  window.gtag?.("event", name, { form_type: formType, send_to: MEASUREMENT_ID });
}
export function trackOutbound(href: string) {
  if (!active || !analyticsAllowed()) return;
  try {
    const url = new URL(href);
    if (url.protocol !== "https:" || hosts.has(url.hostname)) return;
    window.gtag?.("event", "outbound_click", { link_domain: url.hostname, send_to: MEASUREMENT_ID });
  } catch {}
}
export function trackScroll() {
  if (active && analyticsAllowed()) window.gtag?.("event", "scroll", { percent_scrolled: 90, send_to: MEASUREMENT_ID });
}
export function cleanVercelUrl(url: string) {
  const path = publicPath(url);
  return analyticsAllowed() && path ? SITE + path : null;
}

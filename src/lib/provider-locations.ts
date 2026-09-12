export type CountryDirectory = {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  providerSlugs: string[];
};

export type ProviderHeadquarters = {
  countrySlug: string;
  location: string;
  source: string;
  sourceTitle: string;
};

export const countryDirectories: CountryDirectory[] = [
  {
    slug: "united-states",
    name: "United States",
    title: "Synthetic Market Research Companies in the US | SMR",
    description: "Explore synthetic market research companies headquartered in the United States, with links to their SMR provider profiles and original sources.",
    intro: "The United States directory brings together providers headquartered in the country whose work includes synthetic respondents, audience simulation, digital twins or related research tools. Each profile explains the offering and links to the company’s own materials.",
    providerSlugs: ["qualtrics", "bellomy"]
  },
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    title: "Synthetic Market Research Companies in the UK | SMR",
    description: "Find synthetic market research companies headquartered in the United Kingdom, with provider profiles, categories and original sources.",
    intro: "The United Kingdom has established research businesses and newer teams working with simulated audiences, digital personas and synthetic research workflows. These listings are for companies headquartered in the UK, rather than providers that simply sell into the market.",
    providerSlugs: ["artificial-societies", "gwi", "verve"]
  },
  {
    slug: "france",
    name: "France",
    title: "Synthetic Market Research Companies in France | SMR",
    description: "Find synthetic market research companies headquartered in France, with links to their SMR directory profiles and original provider sources.",
    intro: "This page focuses on companies headquartered in France that appear in the SMR directory for synthetic market research. It is intended to make the location of the listed business clear while keeping the product profile and source material one click away.",
    providerSlugs: ["ipsos"]
  },
  {
    slug: "singapore",
    name: "Singapore",
    title: "Synthetic Market Research Companies in Singapore | SMR",
    description: "Explore synthetic market research companies headquartered in Singapore, with links to provider profiles and source material in the SMR directory.",
    intro: "Singapore’s entry is limited to a directory provider with a Singapore-based corporate operator. International companies with a Singapore sales office or regional hub are not included here unless their headquarters evidence supports it.",
    providerSlugs: ["crowdos"]
  },
  {
    slug: "japan",
    name: "Japan",
    title: "Synthetic Market Research Companies in Japan | SMR",
    description: "Find synthetic market research companies headquartered in Japan, with links to their SMR provider profiles and original sources.",
    intro: "This page covers Japanese-headquartered providers in the SMR directory whose products use synthetic or research-based digital personas. The provider profile gives the relevant product context and links to the original company material.",
    providerSlugs: ["dnp"]
  }
];

export const providerHeadquarters: Record<string, ProviderHeadquarters> = {
  qualtrics: {
    countrySlug: "united-states",
    location: "Provo, Utah / Seattle, Washington",
    source: "https://www.qualtrics.com/company/",
    sourceTitle: "Qualtrics company information"
  },
  bellomy: {
    countrySlug: "united-states",
    location: "Winston-Salem, North Carolina",
    source: "https://aianalytics.bellomy.com/about-us",
    sourceTitle: "Bellomy company information"
  },
  "artificial-societies": {
    countrySlug: "united-kingdom",
    location: "London, England",
    source: "https://societies.io/publications/supporter-updates/august-2026",
    sourceTitle: "Artificial Societies headquarters update"
  },
  gwi: {
    countrySlug: "united-kingdom",
    location: "London, England",
    source: "https://www.gwi.com/about-us",
    sourceTitle: "GWI company information"
  },
  verve: {
    countrySlug: "united-kingdom",
    location: "London, England",
    source: "https://www.vervevero.com/team/a-globally-based-expert-team",
    sourceTitle: "Verve company information"
  },
  ipsos: {
    countrySlug: "france",
    location: "Paris, France",
    source: "https://www.ipsos.com/en/ipsos-world",
    sourceTitle: "Ipsos headquarters"
  },
  crowdos: {
    countrySlug: "singapore",
    location: "Singapore",
    source: "https://crowdos.ai/terms",
    sourceTitle: "CrowdOS terms and company contact"
  },
  dnp: {
    countrySlug: "japan",
    location: "Tokyo, Japan",
    source: "https://www.dnp.co.jp/corporate/location/map/head_office.html",
    sourceTitle: "DNP head office"
  }
};

export function getCountryDirectory(slug: string) {
  return countryDirectories.find((country) => country.slug === slug);
}

export function getCountryForProvider(providerSlug: string) {
  const headquarters = providerHeadquarters[providerSlug];
  return headquarters ? getCountryDirectory(headquarters.countrySlug) : undefined;
}

export type ResearchLibraryTopic = {
  slug: string;
  title: string;
  description: string;
  guideAnchor: string;
};

export const researchLibraryTopics: ResearchLibraryTopic[] = [
  { slug: "synthetic-respondents", title: "Synthetic respondents", description: "AI-simulated survey participants, measurement and validation.", guideAnchor: "synthetic-respondents" },
  { slug: "simulated-consumers", title: "Simulated consumers and personas", description: "Simulated consumers, persona systems and generative agents.", guideAnchor: "simulated-consumers" },
  { slug: "synthetic-market-research", title: "Synthetic market research", description: "Conjoint analysis, choice experiments and research applications.", guideAnchor: "synthetic-market-research" },
  { slug: "synthetic-data", title: "Synthetic data", description: "Methods, privacy, disclosure control and official statistics.", guideAnchor: "synthetic-data" },
  { slug: "digital-twins", title: "Digital twins", description: "Consumer, human, urban and industrial digital twins.", guideAnchor: "digital-twins" },
  { slug: "governance", title: "Governance and privacy", description: "Regulation, governance and privacy-enhancing technology.", guideAnchor: "governance" }
];

export function findResearchLibraryTopic(slug: string) {
  return researchLibraryTopics.find((topic) => topic.slug === slug);
}
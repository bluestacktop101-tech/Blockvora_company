/** Unique artwork per case study / solution slug — no shared duplicates. */
export const caseStudyImages: Record<string, string> = {
  "rwa-marketplace": "/listings/cs-rwa-marketplace.jpg",
  "ai-healthcare-platform": "/listings/cs-ai-healthcare.jpg",
  "asset-tokenization-platform": "/listings/cs-asset-tokenization.jpg",
  "enterprise-ai-assistant": "/listings/cs-enterprise-ai.jpg",
};

export const solutionImages: Record<string, string> = {
  "ai-development": "/listings/sol-ai-development.jpg",
  "ai-agents": "/listings/sol-ai-agents.jpg",
  "healthcare-ai": "/listings/sol-healthcare-ai.jpg",
  blockchain: "/listings/sol-blockchain.jpg",
  "smart-contracts": "/listings/sol-smart-contracts.jpg",
  "rwa-tokenization": "/listings/sol-rwa-tokenization.jpg",
};

const fallback = "/listings/sol-ai-development.jpg";

export function imageForCaseStudy(slug: string): string {
  return caseStudyImages[slug] ?? fallback;
}

export function imageForSolution(slug: string): string {
  return solutionImages[slug] ?? fallback;
}

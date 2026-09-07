/**
 * Card covers matched to content domains (documentary photos, not AI renders).
 * AI → analytics/engineering desks
 * Agents → team workflow
 * Healthcare → clinical settings
 * Blockchain / contracts → finance + engineering code
 * RWA → property / commercial architecture
 */
export const caseStudyImages: Record<string, string> = {
  "rwa-marketplace": "/listings/cs-rwa-market.jpg",
  "ai-healthcare-platform": "/listings/cs-health-ai.jpg",
  "asset-tokenization-platform": "/listings/cs-asset-token.jpg",
  "enterprise-ai-assistant": "/listings/cs-enterprise-ai.jpg",
};

export const solutionImages: Record<string, string> = {
  "ai-development": "/listings/sol-ai-dev.jpg",
  "ai-agents": "/listings/sol-agents.jpg",
  "healthcare-ai": "/listings/sol-health.jpg",
  blockchain: "/listings/sol-chain.jpg",
  "smart-contracts": "/listings/sol-contracts.jpg",
  "rwa-tokenization": "/listings/sol-rwa.jpg",
};

const fallback = "/listings/sol-ai-dev.jpg";

export function imageForCaseStudy(slug: string): string {
  return caseStudyImages[slug] ?? fallback;
}

export function imageForSolution(slug: string): string {
  return solutionImages[slug] ?? fallback;
}

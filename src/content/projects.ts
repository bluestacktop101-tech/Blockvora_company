export type ProjectStatus = "prototype" | "live" | "coming-soon";

export type MainProject = {
  slug: string;
  name: string;
  /** Short category label shown on cards */
  category: string;
  summary: string;
  body: string;
  status: ProjectStatus;
  /** Primary outcome — always visible */
  outcome: string;
  highlights: string[];
  cta: string;
  href: "/solutions/$slug" | "/case-studies/$slug" | "/contact";
  hrefSlug?: string;
  image: string;
};

/** Blockvora platforms — early prototypes, not marketplace listings. */
export const mainProjects: MainProject[] = [
  {
    slug: "atlas-28",
    name: "ATLAS",
    category: "Production AI",
    summary:
      "Private LLM stack with retrieval, evaluation gates, and operator controls for regulated teams.",
    body: "Prototype platform for production AI — citation-ready answers, private serving, and eval harnesses before release.",
    status: "prototype",
    outcome: "Cited answers under private deployment",
    highlights: ["RAG & knowledge systems", "Eval + CI gates", "Private VPC serving"],
    cta: "View ATLAS",
    href: "/solutions/$slug",
    hrefSlug: "ai-development",
    image: "/projects/atlas-28-card.jpg",
  },
  {
    slug: "atlas-48",
    name: "ATLAS Agents",
    category: "AI agents",
    summary:
      "Tool-using agents with guardrails, audit trails, and human escalation for multi-step work.",
    body: "Prototype agent workflows with transparent tool calls and verifiable handoffs.",
    status: "prototype",
    outcome: "Guarded multi-step runs",
    highlights: ["Tool-using agents", "Policy + audit trails", "Human escalation"],
    cta: "View Agents",
    href: "/solutions/$slug",
    hrefSlug: "ai-agents",
    image: "/projects/atlas-48-card.jpg",
  },
  {
    slug: "clinic-88",
    name: "CLINIC",
    category: "Healthcare AI",
    summary:
      "Clinical assist with PHI boundaries, citation rails, and physician review in the loop.",
    body: "Prototype clinical intelligence for chart review — private environments and eval-gated releases.",
    status: "prototype",
    outcome: "PHI-aware clinical assist",
    highlights: ["FHIR-aware retrieval", "Citation panels", "Review workflows"],
    cta: "View CLINIC",
    href: "/solutions/$slug",
    hrefSlug: "healthcare-ai",
    image: "/projects/clinic-88-card.jpg",
  },
  {
    slug: "ledger-248",
    name: "LEDGER",
    category: "Institutional blockchain",
    summary:
      "Contracts, indexing, and custody coordination designed to clear institutional security review.",
    body: "Prototype ledger rails for settlement systems and auditor-ready design.",
    status: "prototype",
    outcome: "Auditor-ready settlement design",
    highlights: ["Smart contracts", "Indexers", "Custody integrations"],
    cta: "View LEDGER",
    href: "/solutions/$slug",
    hrefSlug: "blockchain",
    image: "/projects/ledger-248-card.jpg",
  },
  {
    slug: "nova-eden",
    name: "NOVA",
    category: "Real-world assets",
    summary:
      "Issuance, policy, and secondary-market rails for funds, property, and private markets.",
    body: "Prototype RWA platform — custody coordination and operator control planes.",
    status: "prototype",
    outcome: "Policy-enforced issuance rails",
    highlights: ["Issuance + policy", "Secondary markets", "Issuer controls"],
    cta: "View NOVA",
    href: "/solutions/$slug",
    hrefSlug: "rwa-tokenization",
    image: "/projects/nova-eden-card.jpg",
  },
];

export function getProject(slug: string) {
  return mainProjects.find((item) => item.slug === slug);
}

export function statusLabel(status: ProjectStatus) {
  switch (status) {
    case "prototype":
      return "Prototype";
    case "live":
      return "Live";
    case "coming-soon":
      return "Coming soon";
  }
}

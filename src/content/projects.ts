export type ProjectStatus = "live" | "sold-out" | "coming-soon";

export type MainProject = {
  slug: string;
  name: string;
  codename: string;
  byline: string;
  summary: string;
  body: string;
  status: ProjectStatus;
  entryLabel: string;
  entryValue: string;
  topSignalLabel: string;
  topSignal: string;
  highlights: string[];
  pool: string[];
  cta: string;
  href: "/solutions/$slug" | "/case-studies/$slug" | "/contact";
  hrefSlug?: string;
  accent: "gold" | "cyan" | "violet" | "ember" | "mint";
  /** Pack cover image under /public */
  image: string;
};

/** Homepage “main projects” — product machines in the Renaiss pack style. */
export const mainProjects: MainProject[] = [
  {
    slug: "atlas-28",
    name: "ATLAS 28",
    codename: "Production AI entry",
    byline: "By Blockvora",
    summary:
      "A new chase for enterprise AI starts here. ATLAS 28 is the accessible entry into Blockvora’s production LLM stack — retrieval, eval gates, and private deployment.",
    body: "Unlike a one-off pilot, ATLAS stays live. Its architecture pool is continuously hardened for regulated clients. Every release is backed by evaluation harnesses, citation-ready answers, and operator controls. Real production AI. A clear entry point. More ways to ship.",
    status: "live",
    entryLabel: "Engage from",
    entryValue: "$28k",
    topSignalLabel: "Top outcome",
    topSignal: "Cited answers in weeks",
    highlights: [
      "RAG & knowledge systems",
      "Eval + CI gates",
      "Private VPC serving",
      "Operator copilots",
    ],
    pool: ["OpenAI", "Anthropic", "pgvector", "Azure OpenAI", "LangChain"],
    cta: "Open ATLAS 28",
    href: "/solutions/$slug",
    hrefSlug: "ai-development",
    accent: "gold",
    image: "/projects/atlas-28.jpg",
  },
  {
    slug: "atlas-48",
    name: "ATLAS 48",
    codename: "Agent workflows",
    byline: "By Blockvora",
    summary:
      "Ready to raise autonomy? ATLAS 48 gives teams tool-using agents with guardrails, audit trails, and human oversight baked in.",
    body: "Always-on agent platforms for multi-step enterprise work. Vault-grade permissions, transparent tool calls, and verifiable handoffs — so agents execute work you can actually trust.",
    status: "live",
    entryLabel: "Engage from",
    entryValue: "$48k",
    topSignalLabel: "Top outcome",
    topSignal: "Guarded multi-step runs",
    highlights: [
      "Tool-using agents",
      "Policy + audit trails",
      "Human escalation",
      "Workflow orchestration",
    ],
    pool: ["TypeScript", "Python", "Queues", "OpenTelemetry", "IAM"],
    cta: "Open ATLAS 48",
    href: "/solutions/$slug",
    hrefSlug: "ai-agents",
    accent: "cyan",
    image: "/projects/atlas-48.jpg",
  },
  {
    slug: "clinic-88",
    name: "CLINIC 88",
    codename: "Healthcare AI",
    byline: "By Blockvora × Clinical partners",
    summary:
      "Meet the clinical AI machine built for PHI boundaries, review workflows, and measurable care-team lift.",
    body: "Unlike a demo chatbot, CLINIC 88 stays live inside private environments. Provenance, access control, and evaluation keep outputs safe enough for clinical operations.",
    status: "live",
    entryLabel: "Engage from",
    entryValue: "$88k",
    topSignalLabel: "Top outcome",
    topSignal: "HIPAA-ready delivery",
    highlights: [
      "PHI-aware retrieval",
      "Clinical review loops",
      "Private deployments",
      "Safety eval suites",
    ],
    pool: ["Azure", "HIPAA controls", "EHR APIs", "Python", "React"],
    cta: "Open CLINIC 88",
    href: "/solutions/$slug",
    hrefSlug: "healthcare-ai",
    accent: "mint",
    image: "/projects/clinic-88.jpg",
  },
  {
    slug: "ledger-248",
    name: "LEDGER 248",
    codename: "Institutional blockchain",
    byline: "By Blockvora × Capital markets",
    summary:
      "Raise the stakes with institutional ledger work — contracts, indexing, custody coordination, and auditor-ready design.",
    body: "Higher-value pools mean settlement systems, tokenization rails, and ops tooling that survive security review. Transparent mechanics. No hand-wavy trust.",
    status: "live",
    entryLabel: "Engage from",
    entryValue: "$248k",
    topSignalLabel: "Top outcome",
    topSignal: "$2.4B+ tokenized",
    highlights: [
      "Smart contracts",
      "Reorg-safe indexers",
      "Custody integrations",
      "Audit remediation",
    ],
    pool: ["Solidity", "Foundry", "Ethereum / L2", "Go", "AWS"],
    cta: "Open LEDGER 248",
    href: "/solutions/$slug",
    hrefSlug: "blockchain",
    accent: "violet",
    image: "/projects/ledger-248.jpg",
  },
  {
    slug: "nova-eden",
    name: "NOVA EDEN",
    codename: "RWA tokenization",
    byline: "By Blockvora",
    summary:
      "Enter Eden for real-world asset rails — issuance, secondary markets, and compliance-led administration.",
    body: "An Infinite RWA release: vault-secured custody coordination, verifiable ownership records, and operator control planes for funds, real estate, and private markets.",
    status: "live",
    entryLabel: "Engage from",
    entryValue: "Custom",
    topSignalLabel: "Top outcome",
    topSignal: "T+0 DvP settlement",
    highlights: [
      "Issuance + policy",
      "Secondary marketplace",
      "Issuer control plane",
      "Investor UX",
    ],
    pool: ["RWA", "Solidity", "React", "Custody APIs", "PostgreSQL"],
    cta: "Open NOVA EDEN",
    href: "/solutions/$slug",
    hrefSlug: "rwa-tokenization",
    accent: "ember",
    image: "/projects/nova-eden.jpg",
  },
];

export function getProject(slug: string) {
  return mainProjects.find((item) => item.slug === slug);
}

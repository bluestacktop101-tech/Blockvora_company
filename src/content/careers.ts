import type { JobPosting } from "./types";

const sharedBenefits = [
  "Competitive salary and meaningful equity",
  "Flexible remote-friendly work across US time zones",
  "Learning budget for courses, conferences and books",
  "Top-tier hardware and software of your choice",
  "Generous PTO and paid parental leave",
  "Work on systems that clear real security and clinical review",
];

export const jobs: JobPosting[] = [
  {
    slug: "senior-ai-engineer",
    title: "Senior AI Engineer",
    team: "AI Platform",
    location: "San Francisco / Remote (US)",
    type: "Full-time",
    summary:
      "Build production LLM systems, evaluation harnesses and retrieval platforms for regulated clients.",
    about:
      "You will own critical pieces of our AI delivery stack — from retrieval design to evaluation gates — and partner with client stakeholders who care as much about auditability as about model quality.",
    responsibilities: [
      "Design and implement RAG, agent and copilot architectures in Python/TypeScript",
      "Build evaluation suites and CI gates for quality, safety and cost",
      "Partner with security on private deployments and data boundaries",
      "Mentor engineers and write clear design docs",
      "Support discovery workshops and technical pre-sales when needed",
    ],
    requirements: [
      "5+ years software engineering with 2+ years applied ML/LLM systems",
      "Experience shipping AI features past pilot in real products",
      "Strong Python and familiarity with modern LLM tooling",
      "Comfort with cloud infra, observability and production debugging",
      "Clear written communication with technical and non-technical audiences",
    ],
    niceToHave: [
      "Healthcare, finance or other regulated-domain experience",
      "Experience with Azure OpenAI / Bedrock / VPC model serving",
      "Prior work on agent tool frameworks or eval platforms",
    ],
    benefits: sharedBenefits,
  },
  {
    slug: "blockchain-engineer",
    title: "Blockchain Engineer",
    team: "Distributed Systems",
    location: "San Francisco / Remote (US)",
    type: "Full-time",
    summary:
      "Design smart contracts, indexing pipelines and wallet infrastructure for institutional blockchain products.",
    about:
      "You will work on tokenization platforms, protocol integrations and the operational tooling that keeps on-chain systems trustworthy after launch.",
    responsibilities: [
      "Implement and test Solidity/Rust contracts with rigorous invariants",
      "Build indexers, APIs and off-chain services that product teams rely on",
      "Collaborate on custody, key management and threat models",
      "Coordinate with auditors and remediate findings",
      "Improve internal libraries, templates and launch checklists",
    ],
    requirements: [
      "4+ years engineering experience with 2+ years in blockchain systems",
      "Production experience with EVM or Solana programs",
      "Strong testing habits (unit, fuzz, integration)",
      "Familiarity with node infrastructure and reorg-safe indexing",
      "Pragmatic approach to security and operability",
    ],
    niceToHave: [
      "RWA, DeFi or payments domain experience",
      "Foundry expertise and audit experience",
      "Go services and event-driven architectures",
    ],
    benefits: sharedBenefits,
  },
  {
    slug: "product-engineer",
    title: "Product Engineer",
    team: "Delivery",
    location: "San Francisco / Hybrid",
    type: "Full-time",
    summary:
      "Ship polished web applications for complex AI and blockchain products alongside designers and domain experts.",
    about:
      "You thrive in ambiguous problem spaces, turn dense requirements into elegant interfaces and care about accessibility, performance and maintainable React architecture.",
    responsibilities: [
      "Build customer-facing and operator UIs in React/TypeScript",
      "Collaborate with design on interaction patterns for dense workflows",
      "Integrate APIs for AI, payments, identity and chain data",
      "Champion quality through tests, code review and design system contributions",
      "Participate in client workshops and demos",
    ],
    requirements: [
      "4+ years building production web applications",
      "Expert-level React and TypeScript",
      "Eye for detail in UI states, empty views and error handling",
      "Experience with design systems and component libraries",
      "Comfortable in fast, feedback-heavy delivery environments",
    ],
    niceToHave: [
      "TanStack Router/Query or similar modern React stacks",
      "Visualization experience for ops/analytics dashboards",
      "Mobile web or React Native exposure",
    ],
    benefits: sharedBenefits,
  },
  {
    slug: "security-engineer",
    title: "Security Engineer",
    team: "Trust",
    location: "Remote (US)",
    type: "Full-time",
    summary:
      "Embed security into AI and blockchain delivery — threat models, reviews and practical controls teams will actually use.",
    about:
      "You help Blockvora and our clients ship ambitious systems without hand-wavy security theater. You prefer actionable findings, clear risk language and controls that fit delivery cadence.",
    responsibilities: [
      "Lead threat modeling for AI platforms and ledger systems",
      "Review architectures, PRs and vendor integrations",
      "Improve secure defaults in our reference architectures",
      "Support incident response planning and tabletop exercises",
      "Translate security requirements for engineering and client stakeholders",
    ],
    requirements: [
      "5+ years in application or cloud security",
      "Experience with threat modeling and secure SDLC in product orgs",
      "Working knowledge of modern cloud IAM and network isolation",
      "Ability to review code at a practical level (TS/Python/Go or Solidity)",
      "Excellent risk communication skills",
    ],
    niceToHave: [
      "Smart contract security exposure",
      "HIPAA / SOC 2 program experience",
      "Prior consulting or client-facing security roles",
    ],
    benefits: sharedBenefits,
  },
];

export function getJob(slug: string) {
  return jobs.find((item) => item.slug === slug);
}

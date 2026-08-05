import type { Solution } from "./types";

const sharedProcess = [
  "Discovery & constraint mapping",
  "Architecture & threat model",
  "Design & evaluation criteria",
  "Iterative engineering",
  "Hardening & review",
  "Launch, operate, improve",
];

export const solutions: Solution[] = [
  {
    slug: "ai-development",
    title: "AI & Generative AI Development",
    shortTitle: "AI & Generative AI",
    summary:
      "Production LLM systems, retrieval pipelines and copilots designed around proprietary enterprise data.",
    overview:
      "Blockvora builds generative AI platforms that survive security review and day-two operations. Private deployments, evaluation harnesses and human-in-the-loop workflows turn copilots into measurable work — not demos that stall in pilot.",
    problem:
      "Most enterprise AI initiatives stall for the same reasons: models answer fluently but miss proprietary knowledge, evaluation is political instead of measurable, and data residency blocks public-API shortcuts. Without monitoring and rollback, pilots never become products.",
    challenges: [
      "Fluent answers that fail on proprietary knowledge and policy constraints",
      "Unclear evaluation criteria that make go/no-go decisions political",
      "Data residency, PII and audit requirements that block public API shortcuts",
      "Pilot systems with no path to monitoring, rollback or cost control",
    ],
    solution:
      "We design the full AI system boundary — retrieval, orchestration, policy, evaluation and operator UX — so releases are gated by evidence. Architecture starts from access control and threat modeling, not from a chat widget.",
    capabilities: [
      {
        title: "RAG & knowledge systems",
        description:
          "Document ingestion, hybrid retrieval and citation-backed answers grounded in your corpus with ACL-aware filtering.",
      },
      {
        title: "Private model deployment",
        description:
          "VPC and on-prem serving for open-weight and commercial models with network isolation and key management.",
      },
      {
        title: "Evaluation & red-teaming",
        description:
          "Task suites, regression gates and adversarial testing wired into CI before prompts reach production.",
      },
      {
        title: "Copilot product surfaces",
        description:
          "Embedded assistants in existing tools with permissions, audit logs and escalation to humans.",
      },
    ],
    technologies: [
      "OpenAI",
      "Anthropic",
      "Python",
      "LangChain",
      "pgvector",
      "AWS",
      "Azure OpenAI",
      "OpenTelemetry",
    ],
    process: sharedProcess,
    benefits: [
      "Answers with citations tied to approved enterprise records",
      "Release gates driven by automated evaluation suites",
      "Cost and latency visibility from the first production cohort",
      "Clear ownership between model behavior and business policy",
    ],
    outcomes: [
      { value: "weeks", label: "discovery to first production cohort" },
      { value: "cited", label: "answers on enterprise records" },
      { value: "gated", label: "releases via eval suites" },
    ],
    faqs: [
      {
        question: "Do you fine-tune models or focus on RAG?",
        answer:
          "We choose based on data rights, drift risk and evaluation cost. Many regulated programs start with retrieval and adapters; we fine-tune when the task distribution and governance model justify it.",
      },
      {
        question: "Can systems run fully private?",
        answer:
          "Yes. We regularly deploy in VPC or dedicated environments with no training on your data and strict egress controls.",
      },
      {
        question: "How do you handle hallucinations?",
        answer:
          "Through grounded retrieval, refusal policies, citation UX and evaluation suites that punish unsupported claims — not prompt folklore alone.",
      },
    ],
    relatedCaseStudies: ["enterprise-ai-assistant", "ai-healthcare-platform"],
    relatedSolutions: ["ai-agents", "healthcare-ai"],
  },
  {
    slug: "ai-agents",
    title: "AI Agents",
    shortTitle: "AI Agents",
    summary:
      "Autonomous, tool-using agents that execute multi-step workflows with guardrails, audit trails and human oversight.",
    overview:
      "We engineer agent systems for operations that span tickets, CRMs, data warehouses and internal APIs. Every tool call is permissioned, logged and interruptible — so autonomy increases throughput without surrendering control.",
    problem:
      "Unbounded agents loop, invent tool arguments and take irreversible actions. Without clear separation between model reasoning and business authority — and without replayable traces — operators cannot trust autonomy in production.",
    challenges: [
      "Agents that loop, hallucinate tool arguments or take irreversible actions",
      "No ownership boundary between model reasoning and deterministic rules",
      "Missing observability when a multi-step run fails halfway",
      "Compliance teams blocked by opaque decision paths",
    ],
    solution:
      "We separate proposal from authority. Models suggest; policy and typed tool servers decide. Durable run state, approval queues and full traces make agents operable like any other distributed system.",
    capabilities: [
      {
        title: "Tool orchestration",
        description:
          "Typed tool contracts, retries, idempotency keys and sandbox modes for destructive operations.",
      },
      {
        title: "Guardrails & policy",
        description:
          "Allowlists, spend caps, PII filters and step-up approval for high-risk actions.",
      },
      {
        title: "Memory & state",
        description:
          "Durable run state, resumable workflows and structured handoffs between agents and humans.",
      },
      {
        title: "Ops observability",
        description:
          "Trace every thought, tool call and side effect with replay for debugging and audit.",
      },
    ],
    technologies: [
      "Python",
      "TypeScript",
      "Temporal",
      "OpenAI",
      "Anthropic",
      "Redis",
      "OpenTelemetry",
    ],
    process: sharedProcess,
    benefits: [
      "Multi-step workflows with explicit human checkpoints",
      "Full audit trail on every tool invocation",
      "Bounded autonomy via policy graphs",
      "Faster exception handling without silent side effects",
    ],
    outcomes: [
      { value: "multi-step", label: "workflows with human checkpoints" },
      { value: "full", label: "audit trail on tool calls" },
      { value: "bounded", label: "autonomy via policy graphs" },
    ],
    faqs: [
      {
        question: "Will agents act without approval?",
        answer:
          "Only within explicitly allowlisted actions. High-risk tools require step-up approval. We design the policy matrix with your risk owners.",
      },
      {
        question: "How do you prevent runaway loops?",
        answer:
          "Step budgets, timeouts, idempotency keys, circuit breakers and simulation environments before production traffic.",
      },
      {
        question: "Can agents connect to our internal systems?",
        answer:
          "Yes — through a controlled connector layer with least-privilege credentials, not by giving models raw network access.",
      },
    ],
    relatedCaseStudies: ["enterprise-ai-assistant"],
    relatedSolutions: ["ai-development", "healthcare-ai"],
  },
  {
    slug: "healthcare-ai",
    title: "Healthcare AI",
    shortTitle: "Healthcare AI",
    summary:
      "Clinical-grade intelligence for providers, payers and digital health — compliant from the first commit.",
    overview:
      "Healthcare AI fails when it ignores workflow, evidence and regulation. Blockvora builds systems clinicians trust: FHIR-native data paths, explainable outputs and controls aligned with HIPAA and clinical governance.",
    problem:
      "General-purpose models miss clinical nuance. EHR integration stalls on FHIR and identity. Documentation copilots invent facts. Governance boards require traceability that consumer AI stacks were never designed to provide.",
    challenges: [
      "Models trained on general text that miss clinical nuance and coding standards",
      "EHR integration stalled on FHIR, HL7 and identity complexity",
      "Documentation tools that must reduce burden without inventing facts",
      "Governance boards that require traceability before go-live",
    ],
    solution:
      "We map clinician workflows first, then build PHI-safe pipelines, citation-backed intelligence and review UX inside existing tools — with evaluation sets clinicians help create.",
    capabilities: [
      {
        title: "Clinical NLP & decision support",
        description:
          "Encounter summarization, risk flags and guideline-aware recommendations with source attribution.",
      },
      {
        title: "Interoperability",
        description:
          "FHIR R4 resources, HL7 feeds and EHR app launch patterns with least-privilege access.",
      },
      {
        title: "Ambient & documentation AI",
        description:
          "Draft notes and coding suggestions that clinicians review before anything hits the chart.",
      },
      {
        title: "Safety & compliance",
        description:
          "BAAs, audit logging, PHI minimization and model cards suitable for clinical review.",
      },
    ],
    technologies: ["Python", "FHIR", "AWS HIPAA", "OpenAI", "React", "PostgreSQL", "HL7"],
    process: [
      "Clinical workflow discovery",
      "Privacy & safety design",
      "Data & FHIR architecture",
      "Model evaluation with clinicians",
      "Embedded UX delivery",
      "Governance package & launch",
    ],
    benefits: [
      "HIPAA-aligned architecture and operations",
      "FHIR-first interoperability patterns",
      "Reviewable outputs for clinical sign-off",
      "Measurable reduction in documentation burden",
    ],
    outcomes: [
      { value: "HIPAA", label: "aligned architecture" },
      { value: "FHIR", label: "first interoperability" },
      { value: "reviewable", label: "clinical outputs" },
    ],
    faqs: [
      {
        question: "Do you replace clinicians?",
        answer:
          "No. Our systems draft, retrieve and flag — clinicians remain accountable for charted decisions.",
      },
      {
        question: "How do you handle PHI?",
        answer:
          "Minimization, encryption, tenancy isolation, audit logging and environments covered by appropriate agreements.",
      },
      {
        question: "Can you integrate with our EHR?",
        answer:
          "We commonly integrate via FHIR APIs, SMART app launch and carefully scoped HL7 feeds depending on your vendor landscape.",
      },
    ],
    relatedCaseStudies: ["ai-healthcare-platform"],
    relatedSolutions: ["ai-development", "ai-agents"],
  },
  {
    slug: "blockchain",
    title: "Blockchain & Web3",
    shortTitle: "Blockchain & Web3",
    summary:
      "Networks, wallets and protocol integrations built for throughput, security and institutional scale.",
    overview:
      "We design blockchain infrastructure for organizations that need verifiable settlement, shared ledgers and programmable assets — without betting the business on fragile crypto UX. Security, key management and operations come first.",
    problem:
      "Public-chain assumptions collide with privacy and permissioning. Wallet models ignore enterprise IAM. Fragile indexers break SLAs. Teams cannot tell where on-chain truth ends and systems of record begin.",
    challenges: [
      "Public-chain assumptions that conflict with privacy and permissioning needs",
      "Wallet and custody models that do not fit enterprise IAM",
      "Indexer and node reliability gaps that break product SLAs",
      "Unclear boundaries between on-chain truth and off-chain systems of record",
    ],
    solution:
      "We select substrates for risk profile, design custody and policy controls first, and build the node, indexing and API layers product teams can actually rely on.",
    capabilities: [
      {
        title: "Network & node operations",
        description:
          "Managed validators, private networks and RPC layers with monitoring and failover.",
      },
      {
        title: "Wallet infrastructure",
        description:
          "MPC, HSM and policy-controlled signing for institutions and consumer products.",
      },
      {
        title: "Indexing & data",
        description:
          "Reliable event ingestion, reorg handling and APIs that product teams can trust.",
      },
      {
        title: "Protocol integration",
        description:
          "Bridges, oracles and L2 patterns selected for risk profile — not hype cycles.",
      },
    ],
    technologies: ["Ethereum", "Solana", "Go", "Rust", "Node.js", "PostgreSQL", "AWS"],
    process: sharedProcess,
    benefits: [
      "Institutional key management and policy controls",
      "SLA-backed RPC and indexing infrastructure",
      "Clear on-chain / off-chain system boundaries",
      "Security review packages stakeholders can interrogate",
    ],
    outcomes: [
      { value: "institutional", label: "key management controls" },
      { value: "SLA-backed", label: "RPC & indexing" },
      { value: "clear", label: "system boundaries" },
    ],
    faqs: [
      {
        question: "Public chain or private network?",
        answer:
          "It depends on disclosure, throughput and counterparties. We run a structured decision workshop before locking architecture.",
      },
      {
        question: "Do you operate nodes?",
        answer:
          "We can design, implement and hand over — or run managed operations with clear SLOs.",
      },
      {
        question: "How do you think about bridges?",
        answer:
          "Conservatively. We prefer minimizing bridge surface area and documenting residual risk explicitly.",
      },
    ],
    relatedCaseStudies: ["rwa-marketplace", "asset-tokenization-platform"],
    relatedSolutions: ["smart-contracts", "rwa-tokenization"],
  },
  {
    slug: "smart-contracts",
    title: "Smart Contract Development",
    shortTitle: "Smart Contracts",
    summary:
      "Audited contract systems with formal review, upgrade paths and continuous on-chain monitoring.",
    overview:
      "Smart contracts are permanent business logic. We write them like production software: precise specs, adversarial testing, upgrade strategy and monitoring after deployment — not a weekend Solidity sprint.",
    problem:
      "Contracts ship without economic threat models. Upgradeability either freezes forever or centralizes power. Gas and incident response are afterthoughts. Invariants live in slide decks instead of tests.",
    challenges: [
      "Contracts shipped without economic or access-control threat models",
      "Upgradeability that freezes forever or centralizes unchecked power",
      "Gas and UX costs ignored until mainnet pain",
      "No monitoring when invariants break in the wild",
    ],
    solution:
      "Specification-first engineering with invariant tests, fuzzing, audit coordination and post-deploy monitors. Pause and upgrade paths are designed before the war room, not during it.",
    capabilities: [
      {
        title: "Contract engineering",
        description:
          "Solidity and Rust programs with modular design, clear roles and tested edge cases.",
      },
      {
        title: "Security process",
        description:
          "Internal review, invariant tests, fuzzing and coordination with external auditors.",
      },
      {
        title: "Upgrade & governance",
        description: "Proxy patterns, timelocks and role design matched to your risk appetite.",
      },
      {
        title: "On-chain monitoring",
        description:
          "Alerting on anomalous flows, paused states and invariant violations post-deploy.",
      },
    ],
    technologies: ["Solidity", "Foundry", "Hardhat", "Rust", "OpenZeppelin", "Slither"],
    process: [
      "Specification & threat model",
      "Implementation",
      "Test, fuzz & review",
      "Audit coordination",
      "Controlled deployment",
      "Runtime monitoring",
    ],
    benefits: [
      "Invariants tested before mainnet",
      "Documented upgrade and pause procedures",
      "Monitored contracts after go-live",
      "Audit packages that accelerate external review",
    ],
    outcomes: [
      { value: "tested", label: "invariants before mainnet" },
      { value: "documented", label: "upgrade & pause procedures" },
      { value: "monitored", label: "contracts after go-live" },
    ],
    faqs: [
      {
        question: "Do you guarantee audit results?",
        answer:
          "No honest team does. We prepare rigorously, remediate findings and help you choose auditors appropriate to the risk.",
      },
      {
        question: "Upgradeable or immutable?",
        answer:
          "We recommend based on asset criticality and governance maturity — and document the tradeoffs for counsel and risk.",
      },
      {
        question: "Which chains do you support?",
        answer:
          "Primarily EVM ecosystems and Solana. We advise when a chain choice is a product risk, not a branding exercise.",
      },
    ],
    relatedCaseStudies: ["rwa-marketplace", "asset-tokenization-platform"],
    relatedSolutions: ["blockchain", "rwa-tokenization"],
  },
  {
    slug: "rwa-tokenization",
    title: "RWA Tokenization",
    shortTitle: "RWA Tokenization",
    summary:
      "End-to-end platforms that bring real estate, funds and commodities on-chain with regulatory rigor.",
    overview:
      "Tokenizing real-world assets is a product, legal and systems problem. Blockvora builds issuance rails, compliance logic and investor experiences that connect off-chain truth to on-chain ownership.",
    problem:
      "Naive tokens ignore legal wrappers and transfer restrictions. Cap tables drift from chain balances. Investor onboarding mixes KYC, accreditation and wallet friction. Secondary markets lack settlement controls.",
    challenges: [
      "Legal wrappers and transfer restrictions that naive tokens ignore",
      "Cap tables and corporate actions that must stay synchronized",
      "Investor onboarding that mixes KYC, accreditation and wallet UX",
      "Secondary markets without settlement or disclosure controls",
    ],
    solution:
      "Dual-ledger architectures with compliance in the settlement path, issuer operations tooling and investor portals that counsel and transfer agents can accept.",
    capabilities: [
      {
        title: "Issuance engines",
        description:
          "Configurable asset classes, supply controls and lifecycle events for offerings.",
      },
      {
        title: "Compliance rails",
        description:
          "KYC/AML hooks, transfer restrictions and jurisdictional rules enforced in software.",
      },
      {
        title: "Investor platforms",
        description: "Onboarding, portfolios, statements and corporate-action notifications.",
      },
      {
        title: "Marketplace readiness",
        description:
          "Primary distribution and secondary trading primitives with settlement workflows.",
      },
    ],
    technologies: ["Ethereum", "Solidity", "React", "Node.js", "PostgreSQL", "AWS"],
    process: [
      "Asset & jurisdiction discovery",
      "Legal-tech architecture",
      "Contract & registry design",
      "Compliance integration",
      "Issuer & investor apps",
      "Operations & reporting",
    ],
    benefits: [
      "Compliant transfer and identity controls",
      "Synchronized off-chain records and on-chain balances",
      "Investor-ready portals and reporting",
      "Marketplace primitives with settlement discipline",
    ],
    outcomes: [
      { value: "compliant", label: "transfer & identity controls" },
      { value: "synced", label: "books and balances" },
      { value: "investor-ready", label: "portals & reporting" },
    ],
    faqs: [
      {
        question: "Is the token the legal source of truth?",
        answer:
          "Only when counsel designs it that way. Many programs keep legal books of record with on-chain mirrors and reconciliation — we support both models.",
      },
      {
        question: "Can you support multiple jurisdictions?",
        answer:
          "Yes, via configurable eligibility and transfer rules. Cross-border offerings still require local counsel; we engineer for their constraints.",
      },
      {
        question: "Do you build secondary markets?",
        answer:
          "We build primary issuance and controlled secondary workflows, including RFQ and settlement patterns appropriate to the asset class.",
      },
    ],
    relatedCaseStudies: ["rwa-marketplace", "asset-tokenization-platform"],
    relatedSolutions: ["smart-contracts", "blockchain"],
  },
];

export function getSolution(slug: string) {
  return solutions.find((item) => item.slug === slug);
}

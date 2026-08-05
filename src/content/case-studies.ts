import type { CaseStudy } from "./types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "rwa-marketplace",
    title: "RWA Marketplace",
    industry: "Capital Markets",
    client: "Global asset manager",
    summary:
      "A compliant secondary marketplace for tokenized fund interests with automated settlement and transfer restrictions.",
    overview:
      "We replaced offline secondary transfers with a controlled marketplace that enforces eligibility, settles atomically for supported pairs and gives issuers operational visibility.",
    challenge:
      "The client had issued tokenized fund vehicles but still settled secondary transfers offline. Manual processes created multi-day delays, inconsistent compliance checks and limited investor visibility.",
    approach: [
      "Modeled legal transfer restrictions as enforceable on-chain and off-chain policy",
      "Built issuer ops consoles for whitelists, corporate actions and disclosures",
      "Integrated custody and banking partners for cash and asset legs of settlement",
      "Delivered investor UX for browse, request-for-quote and post-trade reporting",
      "Instrumented monitoring for anomalous transfers and paused markets",
    ],
    architecture: [
      {
        title: "Policy engine",
        description:
          "Eligibility, lockups and jurisdiction rules evaluated before any transfer settles.",
      },
      {
        title: "Settlement fabric",
        description:
          "Orchestration across custody, banking rails and on-chain settlement for DvP pairs.",
      },
      {
        title: "Issuer control plane",
        description: "Whitelists, disclosures, pause controls and corporate-action tooling.",
      },
      {
        title: "Investor application",
        description: "Discovery, RFQ, holdings and reporting with institutional-grade auth.",
      },
    ],
    stack: ["Ethereum", "Solidity", "React", "Node.js", "AWS", "PostgreSQL", "OpenTelemetry"],
    keyFeatures: [
      {
        title: "Compliant transfers",
        description: "Every secondary movement passes identity and restriction checks.",
      },
      {
        title: "RFQ workflow",
        description: "Negotiated liquidity with clear states from quote to settle.",
      },
      {
        title: "Atomic DvP",
        description: "Supported pairs settle without lingering cash/asset mismatch.",
      },
      {
        title: "Market controls",
        description: "Pause, resume and incident monitors for operators.",
      },
    ],
    results: [
      { value: "4.2×", label: "faster average settlement" },
      { value: "100%", label: "transfers through compliance gates" },
      { value: "T+0", label: "atomic DvP for supported pairs" },
    ],
    gallery: [
      {
        title: "Issuer control plane",
        caption: "Whitelist, disclosure and pause operations",
        accent: "primary",
      },
      {
        title: "Investor marketplace",
        caption: "Browse, RFQ and holdings in one surface",
        accent: "cyan",
      },
      {
        title: "Settlement timeline",
        caption: "Cash and asset legs with status fidelity",
        accent: "violet",
      },
      { title: "Monitoring wall", caption: "Anomaly alerts and market health", accent: "primary" },
    ],
    faqs: [
      {
        question: "Was this a public permissionless market?",
        answer:
          "No. Participation was controlled; transfer restrictions remained enforceable throughout.",
      },
      {
        question: "How long to first production trade?",
        answer:
          "After architecture lock and partner integrations, the first production corridor launched in a staged rollout measured in months — not years of platform science projects.",
      },
    ],
    relatedSolutions: ["rwa-tokenization", "smart-contracts", "blockchain"],
    relatedCaseStudies: ["asset-tokenization-platform"],
  },
  {
    slug: "ai-healthcare-platform",
    title: "AI Healthcare Platform",
    industry: "Healthcare",
    client: "Regional health system",
    summary:
      "Clinical intelligence that cuts chart review time while keeping physicians in control of every note and recommendation.",
    overview:
      "A FHIR-native clinical intelligence layer embedded in existing tools — summarization and risk flags with mandatory citations and physician review.",
    challenge:
      "Care teams were drowning in inbox and chart review. Prior AI vendors produced fluent summaries clinicians did not trust because sources were opaque and PHI controls were unclear.",
    approach: [
      "Mapped high-friction clinician workflows with medical informatics stakeholders",
      "Built FHIR-native retrieval over encounters, labs and notes with strict tenancy",
      "Shipped summarization and risk flags with mandatory citation panels",
      "Embedded review UX into existing clinical web tools rather than a new portal",
      "Created evaluation sets with physicians and gated releases on quality metrics",
    ],
    architecture: [
      {
        title: "PHI-safe data plane",
        description: "Tenant-isolated pipelines with encryption, minimization and audit logging.",
      },
      {
        title: "Clinical retrieval",
        description: "FHIR-indexed corpus with encounter-aware ranking and ACL filters.",
      },
      {
        title: "Inference services",
        description: "Private model endpoints with versioning and eval gates in CI.",
      },
      {
        title: "Clinician surfaces",
        description: "Embedded panels for summary, citations, accept/edit/reject.",
      },
    ],
    stack: ["Python", "FHIR", "React", "AWS HIPAA", "PostgreSQL", "OpenAI", "OpenTelemetry"],
    keyFeatures: [
      {
        title: "Citation-first summaries",
        description: "Every clinical claim links back to source encounters or notes.",
      },
      {
        title: "Risk flags",
        description: "Priority cues for chart review with override workflows.",
      },
      {
        title: "Eval harness",
        description: "Physician-labeled sets gate each model/prompt release.",
      },
      {
        title: "EHR-adjacent UX",
        description: "No new app religion — assist inside existing tools.",
      },
    ],
    results: [
      { value: "72%", label: "less chart review time" },
      { value: "96.4%", label: "triage accuracy on eval set" },
      { value: "18.2M", label: "records processed securely" },
    ],
    gallery: [
      { title: "Chart review assist", caption: "Summary with citation rail", accent: "cyan" },
      { title: "Risk board", caption: "Cohort flags for care teams", accent: "primary" },
      { title: "Eval dashboard", caption: "Quality gates before release", accent: "violet" },
      { title: "Access audit", caption: "Who saw what, when", accent: "primary" },
    ],
    faqs: [
      {
        question: "Did physicians approve of the UX?",
        answer:
          "Adoption tracked accept/edit rates. Citation rails and in-tool embedding were decisive versus prior portal-based tools.",
      },
      {
        question: "How was PHI handled?",
        answer:
          "HIPAA-aligned environment, BAAs where required, tenant isolation and minimization of data sent to model endpoints.",
      },
    ],
    relatedSolutions: ["healthcare-ai", "ai-development"],
    relatedCaseStudies: ["enterprise-ai-assistant"],
  },
  {
    slug: "asset-tokenization-platform",
    title: "Asset Tokenization Platform",
    industry: "Real Estate",
    client: "Real estate investment platform",
    summary:
      "Issuance rails for commercial real estate interests with investor onboarding, cap table sync and distribution automation.",
    overview:
      "A dual-ledger tokenization platform that kept legal books authoritative while giving sponsors on-chain controls, investor portals and automated distributions.",
    challenge:
      "Sponsors wanted fractional ownership at scale, but counsel rejected consumer-wallet prototypes and finance refused to abandon the system of record for a spreadsheet on-chain.",
    approach: [
      "Designed dual-ledger architecture: legal books of record with on-chain mirrors",
      "Implemented accreditation, KYC and jurisdiction rules in the subscription flow",
      "Automated distribution waterfalls with reconciliation reports for finance",
      "Delivered sponsor dashboards for offerings across a multi-asset portfolio",
      "Prepared audit packages for outside counsel and transfer agent partners",
    ],
    architecture: [
      {
        title: "Legal ledger",
        description: "System of record for ownership, subscriptions and corporate actions.",
      },
      {
        title: "On-chain registry",
        description: "Mirrored balances and transfer restrictions with event emission.",
      },
      {
        title: "Compliance gateway",
        description: "KYC, accreditation and eligibility checks in the critical path.",
      },
      {
        title: "Finance ops",
        description: "Waterfalls, statements and reconciliation exports.",
      },
    ],
    stack: ["Solidity", "React", "Node.js", "PostgreSQL", "AWS", "Ethereum"],
    keyFeatures: [
      {
        title: "Offering builder",
        description: "Configurable terms, documents and eligibility per asset.",
      },
      {
        title: "Investor onboarding",
        description: "Guided KYC/accreditation with clear pending states.",
      },
      {
        title: "Distribution engine",
        description: "Automated waterfalls with finance-ready reports.",
      },
      {
        title: "Sponsor cockpit",
        description: "Portfolio view across offerings and investor activity.",
      },
    ],
    results: [
      { value: "$180M", label: "assets tokenized" },
      { value: "60%", label: "faster investor onboarding" },
      { value: "0", label: "manual cap-table mismatches at audit" },
    ],
    gallery: [
      {
        title: "Offering workspace",
        caption: "Configure terms and disclosures",
        accent: "primary",
      },
      {
        title: "Onboarding funnel",
        caption: "Eligibility states without guesswork",
        accent: "cyan",
      },
      { title: "Cap table sync", caption: "Legal and chain views reconciled", accent: "violet" },
      { title: "Distribution run", caption: "Waterfall preview before execute", accent: "primary" },
    ],
    faqs: [
      {
        question: "Did tokens replace the legal register?",
        answer:
          "In this program, legal books remained authoritative with on-chain mirrors and continuous reconciliation.",
      },
      {
        question: "How were secondary transfers handled?",
        answer:
          "Restricted and issuer-mediated in v1, with marketplace patterns planned as a later phase.",
      },
    ],
    relatedSolutions: ["rwa-tokenization", "smart-contracts"],
    relatedCaseStudies: ["rwa-marketplace"],
  },
  {
    slug: "enterprise-ai-assistant",
    title: "Enterprise AI Assistant",
    industry: "Enterprise",
    client: "Fortune 500 operations org",
    summary:
      "A secure copilot on proprietary procedures that improved ops efficiency without leaking sensitive knowledge.",
    overview:
      "A private, ACL-aware assistant embedded in the internal ops portal — citations, escalation paths and metrics from day one.",
    challenge:
      "Employees pasted confidential procedures into public chat tools. Leadership wanted assistance for frontline ops, but security blocked unsanctioned LLM use and knowledge lived in sprawling wikis.",
    approach: [
      "Stood up private retrieval over approved knowledge bases with ACL propagation",
      "Built role-aware assistants embedded in the internal ops portal",
      "Added citation, confidence and escalate-to-human patterns for risky answers",
      "Instrumented cost, deflection and satisfaction metrics from day one",
      "Trained champions and created a change program for procedure owners",
    ],
    architecture: [
      {
        title: "ACL-aware index",
        description: "Document permissions propagate into retrieval filters.",
      },
      {
        title: "Private inference",
        description: "VPC-hosted model endpoints with no training on client data.",
      },
      {
        title: "Portal embed",
        description: "Assistant surfaces inside tools operators already use.",
      },
      {
        title: "Telemetry",
        description: "Cost, deflection, citation validity and escalation rates.",
      },
    ],
    stack: ["Python", "TypeScript", "Azure OpenAI", "pgvector", "React", "OpenTelemetry"],
    keyFeatures: [
      {
        title: "Role-aware answers",
        description: "Responses respect what the employee is allowed to see.",
      },
      {
        title: "Citation UX",
        description: "Deep links back to approved procedures and versions.",
      },
      {
        title: "Escalation",
        description: "Clear path to humans when confidence or policy requires it.",
      },
      {
        title: "Ops metrics",
        description: "Leaders see efficiency and risk signals, not vanity chat counts.",
      },
    ],
    results: [
      { value: "38%", label: "ops efficiency gain" },
      { value: "91%", label: "answers with valid citations" },
      { value: "private", label: "deployment — no public LLM training use" },
    ],
    gallery: [
      { title: "Ops portal embed", caption: "Assistant beside the ticket queue", accent: "cyan" },
      { title: "Citation drawer", caption: "Procedure versions one click away", accent: "primary" },
      { title: "Admin ACL map", caption: "Who can retrieve what", accent: "violet" },
      { title: "Efficiency dashboard", caption: "Deflection and time saved", accent: "primary" },
    ],
    faqs: [
      {
        question: "Did this replace the knowledge base?",
        answer:
          "No — it made the knowledge base usable. Procedure owners still maintain canonical content.",
      },
      {
        question: "How did security approve it?",
        answer:
          "Private deployment, ACL propagation, audit logs and a clear data-flow diagram reviewed with the security architecture board.",
      },
    ],
    relatedSolutions: ["ai-development", "ai-agents"],
    relatedCaseStudies: ["ai-healthcare-platform"],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((item) => item.slug === slug);
}

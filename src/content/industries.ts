import type { Industry } from "./types";

export const industries: Industry[] = [
  {
    slug: "healthcare",
    title: "Healthcare",
    summary:
      "AI and data platforms for providers, payers and digital health companies that operate under clinical and privacy scrutiny.",
    overview:
      "We help healthcare organizations modernize documentation, decision support and patient experiences without compromising PHI, interoperability or clinical trust.",
    problem:
      "Clinician burnout, fragmented data and AI pilots that cannot clear privacy or clinical validation gates keep healthcare digital transformation stuck in perpetual proof-of-concept.",
    challenges: [
      "Clinician burnout driven by documentation and prior-auth overhead",
      "Fragmented EHR, claims and device data that never become usable features",
      "AI pilots that cannot clear privacy, safety or clinical validation gates",
      "Patient apps that fail because they ignore real care pathways",
    ],
    solution:
      "FHIR-centered platforms, clinical intelligence with explainable outputs and assistants embedded in real care workflows — designed for governance boards as much as end users.",
    capabilities: [
      {
        title: "Clinical intelligence",
        description:
          "Risk stratification, summarization and decision support with explainable outputs.",
      },
      {
        title: "Care operations AI",
        description:
          "Assistants for coding, intake, triage and care coordination with human approval.",
      },
      {
        title: "Interoperable platforms",
        description: "FHIR-centered products that sit alongside existing EHR investments.",
      },
      {
        title: "Patient engagement",
        description: "Care-navigation and adherence experiences grounded in clinical reality.",
      },
    ],
    useCases: [
      "Ambient clinical documentation with physician review",
      "Prior authorization packet assembly and status tracking",
      "Population health risk models for value-based care",
      "Patient engagement with care-plan adherence support",
    ],
    technologies: ["Python", "FHIR", "HL7", "React", "AWS HIPAA", "PostgreSQL", "OpenAI"],
    process: [
      "Clinical & ops discovery",
      "Privacy impact design",
      "Architecture & interoperability",
      "Build with clinician feedback",
      "Validation & governance pack",
      "Controlled rollout",
    ],
    benefits: [
      "Reduced documentation and inbox burden",
      "AI outputs suitable for clinical review",
      "Interoperability that reuses EHR investment",
      "Audit-ready logging and access controls",
    ],
    compliance: ["HIPAA", "HITRUST-ready patterns", "FHIR R4", "SOC 2 practices"],
    faqs: [
      {
        question: "Will this work with our EHR?",
        answer:
          "We integrate through FHIR and vendor-supported app patterns whenever possible, avoiding brittle UI automation.",
      },
      {
        question: "How do you validate clinical quality?",
        answer:
          "With specialty-informed gold sets, human review loops and release gates tied to quality metrics — not demo anecdotes.",
      },
      {
        question: "Can you support payer and provider use cases?",
        answer:
          "Yes. Workflows differ, but the compliance, interoperability and evaluation discipline is shared.",
      },
    ],
    relatedSolutions: ["healthcare-ai", "ai-development", "ai-agents"],
  },
  {
    slug: "finance",
    title: "Finance",
    summary:
      "AI automation and blockchain infrastructure for banks, asset managers and fintechs that cannot trade control for speed.",
    overview:
      "Financial institutions need systems that are fast, explainable and examinable. We build copilots, risk workflows and tokenization platforms with controls regulators expect.",
    problem:
      "Manual middle-office work resists brittle RPA, model risk management blocks naive AI, and tokenization ambitions stall on custody and compliance design.",
    challenges: [
      "Manual middle- and back-office processes that resist brittle RPA",
      "Model risk management requirements for anything labeled AI",
      "Legacy cores that must coexist with modern event-driven services",
      "Tokenization ambitions blocked by custody and compliance design",
    ],
    solution:
      "Role-aware assistants, policy-bound agents and digital-asset rails that coexist with cores — with documentation suitable for model risk and operational resilience reviews.",
    capabilities: [
      {
        title: "Enterprise AI assistants",
        description: "Role-aware copilots for analysts, ops and relationship managers.",
      },
      {
        title: "Risk & ops agents",
        description: "Multi-step agents that gather evidence and draft actions under policy.",
      },
      {
        title: "Digital asset rails",
        description: "Issuance, custody integration and settlement for funds and deposits.",
      },
      {
        title: "Examination-ready design",
        description: "Audit trails, model docs and control evidence built into delivery.",
      },
    ],
    useCases: [
      "Research and memo drafting with citation to internal sources",
      "KYC refresh and case management assistance",
      "Fund tokenization with transfer restrictions",
      "Fraud investigation workbenches with full audit trails",
    ],
    technologies: ["Python", "TypeScript", "Ethereum", "AWS", "PostgreSQL", "Kafka", "OpenAI"],
    process: [
      "Risk & control discovery",
      "Target architecture",
      "Pilot with evaluation gates",
      "Hardened production build",
      "Model & ops documentation",
      "Scale & optimize",
    ],
    benefits: [
      "Automation that clears model risk conversations",
      "Explainable AI actions with audit trails",
      "Tokenization paths counsel can accept",
      "Incremental modernization without big-bang core replacement",
    ],
    compliance: ["SOC 2", "Model risk practices", "KYC/AML hooks", "Data residency controls"],
    faqs: [
      {
        question: "How do you handle model risk management?",
        answer:
          "We document intended use, limitations, monitoring and human oversight — and design systems that produce the evidence MRM teams request.",
      },
      {
        question: "Can you work inside our private cloud?",
        answer:
          "Yes. Most finance engagements deploy into client-controlled accounts with strict egress.",
      },
      {
        question: "Do you build customer-facing banking apps?",
        answer:
          "We focus on intelligence, ops platforms and digital-asset infrastructure; we partner cleanly with existing channel teams.",
      },
    ],
    relatedSolutions: ["ai-development", "ai-agents", "rwa-tokenization", "blockchain"],
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    summary:
      "Tokenization, investor platforms and operational software for sponsors, funds and marketplace operators.",
    overview:
      "Real estate is capital intensive and operationally fragmented. We digitize ownership, streamline investor relations and connect asset data to products investors will use.",
    problem:
      "Cap tables live in spreadsheets, onboarding mixes legal and wallet friction, and secondary liquidity lacks compliant transfer mechanics.",
    challenges: [
      "Cap tables and distributions managed in spreadsheets",
      "Investor onboarding that mixes legal, banking and wallet friction",
      "Asset data trapped in property systems with no product surface",
      "Secondary liquidity that lacks compliant transfer mechanics",
    ],
    solution:
      "Issuance platforms with dual-ledger discipline, investor portals and marketplace workflows that keep sponsors, counsel and finance aligned.",
    capabilities: [
      {
        title: "Asset tokenization",
        description: "On-chain representations tied to legal entities and transfer rules.",
      },
      {
        title: "Investor portals",
        description: "Subscriptions, documents, distributions and performance reporting.",
      },
      {
        title: "Marketplace infrastructure",
        description: "Primary issuance and controlled secondary trading workflows.",
      },
      {
        title: "Sponsor operations",
        description: "Multi-asset dashboards for offerings, waterfalls and reporting.",
      },
    ],
    useCases: [
      "Fractional ownership offerings for commercial assets",
      "Automated distribution waterfalls and statements",
      "Sponsor dashboards across multi-asset portfolios",
      "Accredited investor marketplaces with compliance gates",
    ],
    technologies: ["Solidity", "Ethereum", "React", "Node.js", "PostgreSQL", "AWS"],
    process: [
      "Offering & jurisdiction design",
      "Legal-tech architecture",
      "Platform build",
      "Compliance integrations",
      "Investor UX hardening",
      "Launch operations",
    ],
    benefits: [
      "Investor onboarding that completes instead of stalling",
      "Synchronized ownership records",
      "Distribution automation finance can reconcile",
      "Secondary pathways with compliance gates",
    ],
    compliance: [
      "Accreditation checks",
      "Transfer restrictions",
      "Document retention",
      "Audit trails",
    ],
    faqs: [
      {
        question: "Do you replace our transfer agent?",
        answer:
          "Not necessarily. We often integrate with existing agents and counsel workflows rather than forcing a rip-and-replace.",
      },
      {
        question: "Can retail investors participate?",
        answer:
          "Only where the legal structure allows. We engineer eligibility controls to match the offering — we do not invent exemptions.",
      },
      {
        question: "What assets have you seen tokenize well?",
        answer:
          "Income-producing commercial interests, fund vehicles and carefully structured private offerings with clear cashflow waterfalls.",
      },
    ],
    relatedSolutions: ["rwa-tokenization", "smart-contracts", "blockchain"],
  },
  {
    slug: "insurance",
    title: "Insurance",
    summary:
      "Claims, underwriting and customer intelligence systems that reduce cycle time while preserving actuarial rigor.",
    overview:
      "Insurers win on accuracy, speed and trust. We deliver AI for FNOL, claims triage and underwriting support with explainability required in supervised environments.",
    problem:
      "Claims backlogs, opaque underwriting tools and siloed fraud signals slow cycle time while legacy cores throttle product experiments.",
    challenges: [
      "Claims backlogs driven by document-heavy intake",
      "Underwriting tools that cannot explain recommendations",
      "Fraud signals scattered across siloed systems",
      "Legacy policy admin cores that slow product experiments",
    ],
    solution:
      "Document intelligence, guideline-aware copilots and customer-ops assistants with strict action boundaries and evidence packs adjusters and underwriters can defend.",
    capabilities: [
      {
        title: "Claims intelligence",
        description: "Document extraction, severity hints and next-best-action for adjusters.",
      },
      {
        title: "Underwriting copilots",
        description: "Evidence gathering and guideline-aware draft decisions for review.",
      },
      {
        title: "Customer operations",
        description: "Assistants for policy servicing with strict action boundaries.",
      },
      {
        title: "Fraud workbenches",
        description: "Signal aggregation with investigator-friendly audit trails.",
      },
    ],
    useCases: [
      "FNOL packet assembly from photos and forms",
      "Subrogation opportunity detection",
      "Broker and agent enablement copilots",
      "Compliance review of outbound customer communications",
    ],
    technologies: ["Python", "TypeScript", "React", "PostgreSQL", "AWS", "OpenAI"],
    process: [
      "Line-of-business discovery",
      "Data & model risk design",
      "Workflow prototyping",
      "Production integration",
      "Evaluation & oversight",
      "Scale across products",
    ],
    benefits: [
      "Shorter claims cycle times",
      "Explainable underwriting assistance",
      "Lower manual document handling",
      "Controls that satisfy oversight functions",
    ],
    compliance: [
      "Data minimization",
      "Model documentation",
      "Audit logging",
      "Vendor risk patterns",
    ],
    faqs: [
      {
        question: "Will AI auto-approve claims?",
        answer:
          "Only if you explicitly design that authority. Default patterns keep humans accountable for material decisions.",
      },
      {
        question: "How do you avoid biased outcomes?",
        answer:
          "Through careful feature selection, evaluation across segments and documentation of limitations — plus human review on sensitive paths.",
      },
      {
        question: "Can you work with our core systems?",
        answer:
          "Yes. We integrate via APIs and event streams, wrapping legacy cores rather than pretending they vanish.",
      },
    ],
    relatedSolutions: ["ai-development", "ai-agents", "healthcare-ai"],
  },
  {
    slug: "supply-chain",
    title: "Supply Chain",
    summary:
      "Traceability, tokenization and operational AI for manufacturers, logistics providers and commodity traders.",
    overview:
      "Supply chains need shared truth across partners who do not share databases. We build traceability ledgers, exception agents and inventory intelligence that improve visibility without a single global ERP.",
    problem:
      "Provenance claims cannot be verified, exceptions drown in email, and inventory signals lag the real movement of goods across partners.",
    challenges: [
      "Provenance claims that cannot be verified across borders",
      "Exception handling drowned in email and phone calls",
      "Inventory and demand signals lagging real movement of goods",
      "Partner onboarding that never reaches useful data exchange",
    ],
    solution:
      "Event-sourced traceability with selective disclosure, ops agents for exceptions and tokenized inventory primitives for financing and settlement.",
    capabilities: [
      {
        title: "Traceability networks",
        description: "Event-sourced provenance with selective disclosure between parties.",
      },
      {
        title: "Ops agents",
        description: "Agents that monitor shipments, open cases and draft resolutions.",
      },
      {
        title: "Tokenized commodities",
        description: "Digital representations of inventory for financing and settlement.",
      },
      {
        title: "Partner exchange",
        description: "Onboarding and data contracts that make multi-party systems usable.",
      },
    ],
    useCases: [
      "Farm-to-shelf provenance for regulated goods",
      "Detention and demurrage exception automation",
      "Inventory-backed financing with shared state",
      "Supplier risk monitoring with actionable alerts",
    ],
    technologies: ["Go", "TypeScript", "Ethereum", "Kafka", "PostgreSQL", "AWS", "React"],
    process: [
      "Network & partner discovery",
      "Data contract design",
      "Pilot corridor build",
      "Agent & exception workflows",
      "Security & disclosure controls",
      "Expand network coverage",
    ],
    benefits: [
      "Verifiable provenance across partners",
      "Faster exception resolution",
      "Financing options backed by shared state",
      "Less reliance on email as the system of record",
    ],
    compliance: ["Selective disclosure", "Partner IAM", "Trade document integrity", "Auditability"],
    faqs: [
      {
        question: "Do all partners need to be on-chain?",
        answer:
          "No. Many programs use a hybrid: critical events attested on a ledger, with partners joining via APIs and progressive onboarding.",
      },
      {
        question: "How do you handle commercially sensitive data?",
        answer:
          "Selective disclosure, permissioned views and careful event design so competitors do not see what they should not.",
      },
      {
        question: "Where do projects usually start?",
        answer:
          "A single high-pain corridor — one product line or lane — with measurable exception or provenance outcomes.",
      },
    ],
    relatedSolutions: ["blockchain", "ai-agents", "rwa-tokenization"],
  },
];

export function getIndustry(slug: string) {
  return industries.find((item) => item.slug === slug);
}

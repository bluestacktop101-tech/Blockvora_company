import type { Service } from "./types";

export const services: Service[] = [
  {
    slug: "ai-development",
    title: "AI Development",
    summary: "Models, retrieval systems and copilots engineered for production.",
    description:
      "From problem framing through evaluation and rollout, we build AI features that operators can trust — with cost controls, monitoring and clear ownership.",
    offerings: [
      {
        title: "Discovery & opportunity sizing",
        description: "Map workflows where AI creates durable advantage.",
      },
      {
        title: "Prototype to production",
        description: "Ship gated releases with evals, not endless pilots.",
      },
      {
        title: "Platform enablement",
        description: "Shared retrieval, prompt and observability foundations.",
      },
    ],
    process: [
      "Workflow discovery",
      "Data readiness",
      "Architecture",
      "Build & evaluate",
      "Hardening",
      "Operate",
    ],
  },
  {
    slug: "blockchain-development",
    title: "Blockchain Development",
    summary: "Networks, wallets and integrations for institutional use.",
    description:
      "We design ledger systems around custody, permissions and operational reality — so blockchain is infrastructure, not a science project.",
    offerings: [
      {
        title: "Architecture & chain selection",
        description: "Match trust, privacy and throughput to the right substrate.",
      },
      {
        title: "Wallet & custody design",
        description: "MPC, HSM and policy engines for real organizations.",
      },
      {
        title: "Indexing & APIs",
        description: "Reliable chain data for products and back offices.",
      },
    ],
    process: [
      "Requirements",
      "Threat model",
      "Protocol design",
      "Implementation",
      "Security review",
      "Launch ops",
    ],
  },
  {
    slug: "smart-contract-development",
    title: "Smart Contract Development",
    summary: "Secure on-chain logic with tests, audits and monitoring.",
    description:
      "Contracts encode irreversible value transfer. Our process treats them as critical software with specs, fuzzing and post-deploy vigilance.",
    offerings: [
      {
        title: "Specification & modeling",
        description: "State machines and economic assumptions made explicit.",
      },
      {
        title: "Implementation & testing",
        description: "Foundry/Hardhat suites, fuzzing and invariant checks.",
      },
      {
        title: "Audit coordination",
        description: "Prep packages and remediation with external reviewers.",
      },
    ],
    process: ["Spec", "Implement", "Test & fuzz", "Review", "Deploy", "Monitor"],
  },
  {
    slug: "custom-software",
    title: "Custom Software",
    summary: "Platforms tailored to regulated workflows and complex domains.",
    description:
      "When off-the-shelf tools force workarounds, we build systems of record and orchestration layers that fit how your teams actually operate.",
    offerings: [
      {
        title: "Domain platforms",
        description: "Multi-tenant products with roles, audit and reporting.",
      },
      {
        title: "Integration hubs",
        description: "Event-driven glue across ERPs, CRMs and data lakes.",
      },
      {
        title: "Modernization",
        description: "Strangle legacy cores with safe, incremental cutovers.",
      },
    ],
    process: ["Discover", "Architect", "Deliver iteratively", "Integrate", "Harden", "Hand over"],
  },
  {
    slug: "web-mobile",
    title: "Web & Mobile",
    summary: "Product experiences that make complex systems usable.",
    description:
      "Enterprise software fails when nobody can use it. We craft web and mobile interfaces that expose power without drowning users in noise.",
    offerings: [
      {
        title: "Product UX engineering",
        description: "Design systems and flows for dense professional tools.",
      },
      {
        title: "Customer portals",
        description: "Secure self-serve for investors, patients and partners.",
      },
      {
        title: "Design systems",
        description: "Shared components that keep multi-squad delivery coherent.",
      },
    ],
    process: ["Research", "IA & design", "Build", "Accessibility", "Perf pass", "Ship"],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    summary: "Hardened infrastructure and delivery pipelines.",
    description:
      "We stand up environments that security teams approve and engineering teams enjoy — with IaC, observability and promotion paths that reduce drama.",
    offerings: [
      {
        title: "Cloud architecture",
        description: "AWS/GCP/Azure patterns for isolation and scale.",
      },
      { title: "CI/CD & environments", description: "Repeatable promotion with policy checks." },
      { title: "Observability", description: "Metrics, traces and alerts tied to user journeys." },
    ],
    process: ["Assess", "IaC foundation", "Pipelines", "Security baselines", "Observe", "Optimize"],
  },
  {
    slug: "ui-ux",
    title: "UI/UX",
    summary: "Interfaces for complex enterprise systems.",
    description:
      "Our design practice sits next to engineering. We prototype against real data shapes and validate with the people who will live in the product.",
    offerings: [
      { title: "Experience strategy", description: "Journey maps for operators, not just buyers." },
      { title: "Interaction design", description: "Dense UIs that stay legible under pressure." },
      { title: "Design ops", description: "Tokens, libraries and contribution models that scale." },
    ],
    process: [
      "Stakeholder interviews",
      "Flows",
      "Prototypes",
      "Usability",
      "Systemize",
      "Support build",
    ],
  },
  {
    slug: "qa-security",
    title: "QA & Security",
    summary: "Verification, audits and continuous assurance.",
    description:
      "Quality and security are not phases at the end. We embed testing, threat modeling and review into delivery so releases stay boring — in a good way.",
    offerings: [
      {
        title: "Quality engineering",
        description: "Automated suites, exploratory charters and release gates.",
      },
      {
        title: "Application security",
        description: "Threat models, reviews and remediation tracking.",
      },
      { title: "Smart contract assurance", description: "Invariant testing and audit readiness." },
    ],
    process: [
      "Risk assess",
      "Test strategy",
      "Automate",
      "Review",
      "Pen/fuzz as needed",
      "Monitor",
    ],
  },
];

import type { TechCategory } from "./types";

export const technologyCategories: TechCategory[] = [
  {
    title: "AI & Machine Learning",
    description: "Models, orchestration and evaluation for production intelligence.",
    items: [
      "OpenAI",
      "Anthropic",
      "Azure OpenAI",
      "Amazon Bedrock",
      "LangChain",
      "LlamaIndex",
      "pgvector",
      "PyTorch",
    ],
  },
  {
    title: "Blockchain & Web3",
    description: "Contracts, networks and institutional custody patterns.",
    items: [
      "Ethereum",
      "Solana",
      "Solidity",
      "Foundry",
      "Hardhat",
      "Rust",
      "OpenZeppelin",
      "The Graph",
    ],
  },
  {
    title: "Application Platforms",
    description: "Modern stacks for dense enterprise products.",
    items: ["React", "TypeScript", "Node.js", "Python", "Go", "TanStack", "GraphQL", "gRPC"],
  },
  {
    title: "Data & Integration",
    description: "Pipelines and interoperability for regulated domains.",
    items: ["PostgreSQL", "Kafka", "Redis", "FHIR", "HL7", "dbt", "Snowflake", "Elastic"],
  },
  {
    title: "Cloud & DevOps",
    description: "Infrastructure that clears security review.",
    items: [
      "AWS",
      "GCP",
      "Azure",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "OpenTelemetry",
      "Datadog",
    ],
  },
  {
    title: "Security & Assurance",
    description: "Controls woven through delivery, not bolted on after.",
    items: [
      "SOC 2 practices",
      "Threat modeling",
      "SAST/DAST",
      "Secret management",
      "HSM/MPC",
      "SIEM integrations",
    ],
  },
];

export const trustedTechnologies = [
  "Ethereum",
  "Solana",
  "AWS",
  "OpenAI",
  "Anthropic",
  "React",
  "Node.js",
  "Python",
  "Go",
  "Rust",
] as const;

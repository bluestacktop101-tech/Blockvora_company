import type { BlogPost } from "./types";

export const blogPosts: BlogPost[] = [
  {
    slug: "production-rag-for-regulated-data",
    title: "Production RAG for Regulated Data",
    excerpt:
      "How to design retrieval systems that respect ACLs, cite sources and survive security review.",
    category: "AI Engineering",
    date: "2026-05-12",
    readTime: "8 min",
    author: "Maya Chen",
    authorRole: "Principal AI Engineer",
    relatedPosts: [
      "agent-guardrails-that-operators-trust",
      "clinical-ai-needs-workflow-not-just-models",
    ],
    sections: [
      {
        heading: "Start from access control, not embeddings",
        body: "Most RAG failures in enterprises are permission failures. If your index flattens documents without propagating ACLs, you will eventually answer a question with a document the user should never see. Design retrieval as a query filtered by identity before ranking — not after. That means your chunk store carries principal attributes, your retriever accepts a subject context and your evaluation suite includes negative permission cases.",
      },
      {
        heading: "Citations are a product feature",
        body: "Regulated users do not want vibes; they want receipts. Persist chunk IDs, document versions and deep links. Show them in the UI even when the model is confident. If you cannot cite it, do not claim it. Product teams that hide citations to look “magical” pay for it in trust debt during security and compliance review.",
      },
      {
        heading: "Evaluation beats prompt folklore",
        body: "Build a golden set from real tickets and measure faithfulness, refusal quality and latency. Gate releases on regressions. Prompt tweaks without evals are just redeploying hope. Include adversarial prompts that try to exfiltrate restricted content — those tests belong in CI beside unit tests.",
      },
      {
        heading: "Operate it like a service",
        body: "Track cost per answer, retrieval hit rates, citation click-through and human override frequency. When quality drifts, you need telemetry that points to data, retrieval or model changes — not a war room of screenshots.",
      },
    ],
  },
  {
    slug: "tokenizing-funds-without-breaking-compliance",
    title: "Tokenizing Funds Without Breaking Compliance",
    excerpt: "A practical architecture for aligning on-chain balances with legal books of record.",
    category: "RWA",
    date: "2026-04-02",
    readTime: "10 min",
    author: "Jordan Hale",
    authorRole: "Lead Blockchain Architect",
    relatedPosts: ["smart-contract-invariants-before-mainnet", "production-rag-for-regulated-data"],
    sections: [
      {
        heading: "The ledger is not the legal source of truth — until counsel says so",
        body: "Successful fund tokenization projects treat smart contracts as enforcement and synchronization layers. Cap tables, subscription docs and transfer agency rules still matter. Design for dual control and reconciliation from day one, with explicit owners for mismatches.",
      },
      {
        heading: "Encode transfer restrictions explicitly",
        body: "Whitelists, lockups and investor eligibility should be first-class. If compliance happens only in a UI, someone will bypass it with a raw transaction. Policy belongs in the settlement path, with tests that prove blocked transfers stay blocked.",
      },
      {
        heading: "Investor UX is part of the control environment",
        body: "Confusion creates support risk and operational exceptions. Clear statuses for pending KYC, settled trades and corporate actions reduce the chance humans invent parallel processes in email.",
      },
      {
        heading: "Plan corporate actions early",
        body: "Distributions, splits and forced transfers are where naive token models break. Model lifecycle events in the same sprint as issuance — not as a phase-two surprise after investors are onboard.",
      },
    ],
  },
  {
    slug: "agent-guardrails-that-operators-trust",
    title: "Agent Guardrails That Operators Trust",
    excerpt:
      "Autonomy is useful only when side effects are permissioned, observable and interruptible.",
    category: "AI Agents",
    date: "2026-03-18",
    readTime: "7 min",
    author: "Samir Okonkwo",
    authorRole: "Staff Platform Engineer",
    relatedPosts: [
      "production-rag-for-regulated-data",
      "clinical-ai-needs-workflow-not-just-models",
    ],
    sections: [
      {
        heading: "Separate reasoning from authority",
        body: "Let the model propose; let policy decide. Tool servers should enforce allowlists, argument schemas and approval requirements regardless of what the prompt says. If a prompt can widen permissions, you do not have a control — you have a suggestion box.",
      },
      {
        heading: "Make every run replayable",
        body: "Store inputs, tool calls, outputs and human decisions. When something goes wrong — and it will — you need forensics, not a vibes-based postmortem. Replay is also how you build regression suites from production incidents.",
      },
      {
        heading: "Prefer narrow agents with clear jobs",
        body: "A sprawling “do anything” agent is hard to evaluate and harder to secure. Compose specialist agents with explicit handoffs and shared audit context. Narrow jobs produce clearer SLOs and cleaner on-call ownership.",
      },
    ],
  },
  {
    slug: "smart-contract-invariants-before-mainnet",
    title: "Smart Contract Invariants Before Mainnet",
    excerpt:
      "Why invariant tests and economic threat models belong in the same sprint as feature work.",
    category: "Blockchain",
    date: "2026-02-09",
    readTime: "9 min",
    author: "Jordan Hale",
    authorRole: "Lead Blockchain Architect",
    relatedPosts: [
      "tokenizing-funds-without-breaking-compliance",
      "agent-guardrails-that-operators-trust",
    ],
    sections: [
      {
        heading: "Write the properties you refuse to violate",
        body: "Supply caps, access roles, pause behavior and solvency conditions should be encoded as tests that run on every commit. If an invariant only lives in a slide deck, it will not save you on mainnet.",
      },
      {
        heading: "Fuzz the edges humans will not imagine",
        body: "Hand-written unit tests catch the paths you already fear. Fuzzing and invariant suites explore the combinations attackers will find for free. Budget time for failing fuzz campaigns — they are the point.",
      },
      {
        heading: "Plan the pause",
        body: "Incident response for contracts includes who can pause, how upgrades are timelocked and how users are notified. Design that before the war room, not during it. Document it so ops is not guessing under pressure.",
      },
    ],
  },
  {
    slug: "clinical-ai-needs-workflow-not-just-models",
    title: "Clinical AI Needs Workflow, Not Just Models",
    excerpt:
      "Accuracy metrics mean little if the output does not fit how clinicians actually work.",
    category: "Healthcare",
    date: "2026-01-21",
    readTime: "6 min",
    author: "Dr. Priya Nair",
    authorRole: "Clinical Advisor",
    relatedPosts: ["production-rag-for-regulated-data", "agent-guardrails-that-operators-trust"],
    sections: [
      {
        heading: "Fit the note, don't invent a new app religion",
        body: "Clinicians already have too many tabs. The winning pattern is assistive surfaces inside existing EHR workflows with clear accept/edit/reject paths. If your product requires a new login ritual, expect adoption theater.",
      },
      {
        heading: "Gold sets need clinicians",
        body: "Outsourcing evaluation labels to generalists underestimates specialty nuance. Budget attending time for dataset creation — it is cheaper than a failed rollout and the only way to measure what “good” means in context.",
      },
      {
        heading: "Safety is operational",
        body: "Logging, break-glass access, model versioning and feedback loops are part of clinical safety. Treat them as product requirements, not IT backlog. Governance boards will ask; have answers with evidence.",
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((item) => item.slug === slug);
}

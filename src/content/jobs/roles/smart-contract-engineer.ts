import { defineJob } from "../shared";

export default defineJob({
  open: false,
  order: 34,
  slug: "smart-contract-engineer",
  title: "Smart Contract Engineer (Rust / Solana)",
  department: "Engineering",
  team: "Blockchain",
  location: "Remote (Global)",
  type: "Full-time / Part-time",
  techStack: [
    "Rust",
    "Solana",
    "Anchor",
    "TypeScript clients",
    "RPC · Indexers",
  ],
  sourceUrl: "https://rwa-jd.notion.site/Smart-Contract-Engineer-Rust-Solana-3b203938ce42801a9c47f7c63ba19aae",
  summary: "Build Solana programs and Rust-based on-chain systems for product workloads.",
  about: "We are hiring a Smart Contract Engineer focused on Rust and Solana. You will design, implement, and ship on-chain programs with strong testing and operational discipline. This is a hands-on role working closely with backend and product teams.",
  responsibilities: [
    "Design and implement Solana programs in Rust",
    "Build account models, instructions, and client integrations",
    "Write comprehensive tests and deployment tooling",
    "Optimize compute, rent, and transaction UX",
    "Collaborate on indexing, monitoring, and operational runbooks",
    "Participate in security reviews and incident response",
  ],
  requirements: [
    "Strong Rust proficiency",
    "Hands-on Solana program development experience",
    "Understanding of Solana runtime, accounts, and PDAs",
    "Experience shipping production on-chain code",
    "Strong testing and debugging habits",
    "Ability to work with TypeScript/JS client integrations",
  ],
  niceToHave: [
    "Anchor framework experience",
    "Prior security audits or formal review work",
    "Indexer / geyser / RPC operational experience",
    "EVM background",
  ],
});

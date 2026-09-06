import { defineJob } from "../shared";

export default defineJob({
  open: false,
  order: 36,
  slug: "smart-contract-auditor",
  title: "Smart Contract Auditor",
  department: "Trust",
  team: "Trust",
  location: "Remote (Global)",
  type: "Full-time / Part-time",
  techStack: [
    "Solidity",
    "Foundry / Hardhat",
    "Slither · static analysis",
    "EVM tooling",
  ],
  hiringProcess: [
    "Application review",
    "Technical review (audit case discussion)",
    "Final discussion",
  ],
  howToApply: [
    "Resume or LinkedIn",
    "Audit samples or public findings (required)",
    "GitHub or research links",
  ],
  sourceUrl: "https://rwa-jd.notion.site/Smart-Contract-Auditor-35303938ce4281dabd14fc4891dd03c3",
  summary: "Review smart contracts for security, correctness, and operational risk.",
  about: "We are hiring a Smart Contract Auditor to assess on-chain systems for vulnerabilities and design flaws. You will review contracts, write findings, and partner with engineering to remediate risk before production. This is a specialized trust role requiring deep protocol fluency.",
  responsibilities: [
    "Audit smart contracts for security and correctness issues",
    "Produce clear findings with severity and remediation guidance",
    "Partner with engineers during design and pre-release reviews",
    "Build checklists, tooling, and reusable audit artifacts",
    "Track remediation and retest critical paths",
    "Contribute to secure-by-default engineering standards",
  ],
  requirements: [
    "Proven smart contract audit experience",
    "Deep Solidity / EVM knowledge (or Solana/Rust equivalent)",
    "Ability to explain complex vulnerabilities clearly",
    "Strong threat modeling and adversarial thinking",
    "Experience with Foundry / Hardhat and static analysis tools",
    "High attention to detail and written communication quality",
  ],
  niceToHave: [
    "Published audits or public research",
    "Formal verification exposure",
    "Bug bounty experience",
    "RWA / DeFi protocol domain knowledge",
  ],
});

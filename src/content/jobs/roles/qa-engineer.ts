import { defineJob } from "../shared";

export default defineJob({
  open: true,
  order: 54,
  slug: "qa-engineer",
  title: "QA Engineer",
  department: "Engineering",
  team: "Quality",
  location: "Remote (Global)",
  type: "Full-time / Part-time",
  techStack: [
    "Playwright / Cypress",
    "Postman / API testing",
    "CI pipelines",
    "Browser / mobile tooling",
  ],
  sourceUrl: "https://rwa-jd.notion.site/QA-Engineer-37703938ce42809b9c95f27f4e60ae63",
  summary: "Raise product quality through manual, automated, and release testing.",
  about: "We are hiring a QA Engineer to own quality across web, mobile, and blockchain-integrated products. You will design test plans, automate critical flows, and partner with engineers before release. This is a hands-on quality role focused on risk reduction.",
  
responsibilities: [
  "Create test plans, test cases, and regression suites for blockchain-based applications",
  "Perform functional, integration, API, and exploratory testing",
  "Validate smart contract interactions, blockchain integrations, and on-chain workflows",
  "Test wallet connections, authentication, transaction signing, and transaction lifecycle scenarios",
  "Verify token transfers, asset ownership, and blockchain event processing",
  "Automate high-value UI, API, and blockchain integration tests",
  "Test edge cases including failed transactions, network errors, gas issues, and wallet rejection",
  "Track defects, investigate root causes, and verify fixes before release",
  "Collaborate with blockchain, backend, frontend, and product teams",
  "Improve release checklists, test coverage, and engineering quality standards",
],

requirements: [
  "3+ years of QA experience on software products",
  "Hands-on experience testing blockchain or Web3 applications",
  "Strong understanding of blockchain architecture, transactions, and smart contract interactions",
  "Experience testing Ethereum or EVM-compatible networks",
  "Understanding of wallet connectivity, transaction signing, and on-chain events",
  "Strong test design, regression testing, and bug-reporting skills",
  "Experience with API testing and browser automation",
  "Ability to test complex multi-step workflows and distributed systems",
  "Understanding of functional, integration, and end-to-end testing",
  "Strong analytical skills and attention to detail",
  "Clear communication with engineering and product teams",
],

niceToHave: [
  "Playwright, Cypress, or Selenium experience",
  "Experience testing Solidity smart contracts",
  "Familiarity with Hardhat, Foundry, or other blockchain testing frameworks",
  "Experience with Web3 libraries such as ethers.js or viem",
  "Experience with RWA, DeFi, NFT, or fintech applications",
  "Mobile application testing experience",
  "Basic scripting ability in JavaScript, TypeScript, or Python",
  "Knowledge of blockchain security testing",
],

});

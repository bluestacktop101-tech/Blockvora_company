import { defineJob } from "../shared";

export default defineJob({
  open: true,
  order: 52,
  slug: "devops-engineer",
  title: "DevOps Engineer",
  department: "Engineering",
  team: "Infrastructure",
  location: "Remote (Global)",
  type: "Full-time / Part-time",
  techStack: [
    "AWS / GCP",
    "Docker",
    "Kubernetes",
    "Terraform",
    "GitHub Actions",
    "Prometheus / Grafana",
  ],
  sourceUrl: "https://rwa-jd.notion.site/DevOps-Engineer-35f03938ce42801da78ed5a2184a8645",
  summary: "Own CI/CD, cloud infrastructure, and reliability for production systems.",
  about: "We are hiring a DevOps Engineer to build and operate cloud infrastructure, CI/CD, and reliability tooling. You will help engineering teams ship safely and keep production systems observable. This is a hands-on infrastructure role.",
  
  responsibilities: [
    "Design and maintain CI/CD pipelines for blockchain-based applications",
    "Deploy, configure, and maintain blockchain nodes and network infrastructure",
    "Manage cloud infrastructure and environments for Web3 applications",
    "Automate smart contract build, testing, and deployment workflows",
    "Monitor blockchain nodes, network health, transactions, and service performance",
    "Improve observability, alerting, and incident response",
    "Harden infrastructure security, access controls, and secrets management",
    "Support containerized deployments and scalable blockchain infrastructure",
    "Collaborate with blockchain and backend engineers on releases and reliability",
  ],

  requirements: [
    "3+ years of DevOps / Platform Engineering experience",
    "Hands-on experience with blockchain infrastructure and Web3 projects",
    "Experience deploying, configuring, or maintaining blockchain nodes",
    "Strong experience with AWS or GCP",
    "Hands-on Docker and Kubernetes experience",
    "Solid CI/CD knowledge (GitHub Actions, GitLab CI, or equivalent)",
    "Understanding of Ethereum, EVM-compatible networks, and blockchain architecture",
    "Experience with blockchain RPC endpoints, node connectivity, and network monitoring",
    "Scripting proficiency (Bash, Python, or TypeScript)",
    "Understanding of networking, IAM, infrastructure security, and monitoring",
  ],

  niceToHave: [
    "Ethereum validator or execution/consensus client operations",
    "Terraform or other Infrastructure as Code tools",
    "Experience with blockchain testnets, mainnets, and private networks",
    "Smart contract deployment automation",
    "Cross-chain infrastructure experience",
    "Security, compliance, and SRE practices",
    "SLO design and incident management",
  ],

});

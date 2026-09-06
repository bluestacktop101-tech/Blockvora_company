import { defineJob } from "../shared";

export default defineJob({
  open: true,
  order: 40,
  slug: "backend-engineer",
  title: "Backend Engineer",
  department: "Engineering",
  team: "Platform",
  location: "Remote (Global)",
  type: "Full-time / Part-time",
  techStack: [
    "Node.js · TypeScript",
    "Rust",
    "Go",
    "Java",
    "Python",
    "Ruby",
    "PostgreSQL · Redis",
    "Docker · AWS / GCP",
  ],
  successLooksLike: [
    "Stable APIs in production",
    "Clear data models and service boundaries",
    "Reliable integrations with blockchain and third-party systems",
    "Low operational noise and strong code quality",
  ],
  hiringProcess: [
    "Application review",
    "Technical discussion (backend + system design)",
    "Final discussion",
  ],
  howToApply: [
    "Resume or LinkedIn",
    "GitHub profile (required)",
    "Examples of backend systems shipped",
  ],
  sourceUrl: "https://rwa-jd.notion.site/Backend-Engineer-35303938ce4281e3a102d0e9c33b5280",
  summary:
    "Design and ship scalable backend services — Node, Rust, Go, Java, Python, or Ruby.",
  about:
    "We are hiring a Backend Engineer to design, build, and maintain scalable backend services. You will own APIs, data models, and integrations with blockchain and third-party systems. Stack is not limited to Node — strong engineers in Rust, Go, Java, Python, or Ruby are welcome. This is a hands-on role focused on reliability, security, and production readiness.",
  responsibilities: [
    "Build and maintain backend services in one or more of: Node.js, Rust, Go, Java, Python, Ruby",
    "Design REST and/or GraphQL APIs",
    "Model data and own PostgreSQL / Redis (or equivalent) usage",
    "Integrate blockchain APIs, wallets, and external services",
    "Implement auth, permissions, and operational controls",
    "Write tests, improve observability, and participate in reviews",
    "Ship production-ready services with CI/CD",
  ],
  requirements: [
    "3+ years of backend engineering experience",
    "Strong proficiency in at least one of: Node.js/TypeScript, Rust, Go, Java, Python, or Ruby",
    "Experience with relational databases (PostgreSQL preferred) and caching",
    "Solid understanding of REST APIs and system design basics",
    "Experience integrating external APIs or microservices",
    "Strong coding fundamentals and production debugging skills",
  ],
  niceToHave: [
    "Proficiency across multiple backend languages",
    "Web3 integrations (ethers.js, smart contract APIs, chain clients)",
    "Event-driven or distributed systems experience",
    "AWS / GCP familiarity",
    "Fintech or consulting experience",
  ],
});

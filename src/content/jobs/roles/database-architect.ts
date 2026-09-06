import { defineJob } from "../shared";

export default defineJob({
  open: false,
  order: 74,
  slug: "database-architect",
  title: "Database Architect",
  department: "Data",
  team: "Data",
  location: "Remote (Global)",
  type: "Full-time / Part-time",
  techStack: [
    "PostgreSQL",
    "Redis",
    "MongoDB",
    "SQL modeling",
    "Migration tooling",
    "AWS / GCP",
  ],
  sourceUrl: "https://rwa-jd.notion.site/DataBase-Architect-36c03938ce4280b59632f1d298037876",
  summary: "Design resilient data models and database architectures for production systems.",
  about: "We are hiring a Database Architect to design and evolve database architecture across products. You will own modeling, performance, and operational patterns for critical data stores. This is a specialized role focused on reliability and long-term data design.",
  responsibilities: [
    "Design relational and complementary data architectures",
    "Lead schema design and migration strategies",
    "Optimize query performance and indexing",
    "Define backup, replication, and recovery standards",
    "Partner with engineers on data access patterns",
    "Document models and operational playbooks",
  ],
  requirements: [
    "5+ years database engineering / architecture experience",
    "Expert PostgreSQL (or equivalent RDBMS) skills",
    "Strong data modeling and performance tuning expertise",
    "Experience with migrations in production systems",
    "Ability to communicate tradeoffs to engineering leaders",
  ],
  niceToHave: [
    "Distributed SQL / NoSQL architecture experience",
    "Data warehouse design",
    "Fintech / high-consistency systems",
    "Cloud managed database platforms",
  ],
});

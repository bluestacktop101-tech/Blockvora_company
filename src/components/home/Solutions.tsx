import {
  Bot,
  Boxes,
  BrainCircuit,
  FileCode2,
  HeartPulse,
  Landmark,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";

type Solution = {
  title: string;
  description: string;
  icon: LucideIcon;
  slug: string;
};

const solutions: Solution[] = [
  {
    title: "AI & Generative AI",
    description:
      "Production-grade LLM systems, retrieval pipelines and copilots designed around proprietary data.",
    icon: BrainCircuit,
    slug: "ai-development",
  },
  {
    title: "AI Agents",
    description:
      "Autonomous, tool-using agents that execute multi-step workflows with human oversight.",
    icon: Bot,
    slug: "ai-agents",
  },
  {
    title: "Healthcare AI",
    description:
      "Clinical-grade intelligence for providers and payers, compliant from the first commit.",
    icon: HeartPulse,
    slug: "healthcare-ai",
  },
  {
    title: "Blockchain & Web3",
    description:
      "Networks, wallets and protocol integrations built for throughput and institutional scale.",
    icon: Boxes,
    slug: "blockchain",
  },
  {
    title: "RWA Tokenization",
    description: "End-to-end platforms that bring real estate, funds and commodities on-chain.",
    icon: Landmark,
    slug: "rwa-tokenization",
  },
  {
    title: "Smart Contracts",
    description:
      "Audited contract systems with formal review, upgrade paths and on-chain monitoring.",
    icon: FileCode2,
    slug: "smart-contracts",
  },
];

export function Solutions() {
  return (
    <Section id="solutions" tone="dark">
      <div className="relative grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow="Solutions"
            title="Technology that solves real problems"
            description="Applied AI, distributed ledgers and disciplined engineering — systems that ship and stay operable."
          />
          <Reveal delay={0.05} className="mt-6">
            <Link
              to="/solutions"
              className="text-foreground group inline-flex items-center gap-2 text-sm font-medium"
            >
              Explore all solutions
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>

        <ol className="relative border-t border-border">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Reveal as="li" key={solution.title} delay={index * 0.03}>
                <Link
                  to="/solutions/$slug"
                  params={{ slug: solution.slug }}
                  className="group border-border grid gap-4 border-b py-6 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center sm:gap-6"
                >
                  <span className="text-muted-foreground font-mono text-[0.7rem] tracking-[0.16em]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex items-start gap-4 sm:items-center">
                    <span className="border-border bg-card text-foreground flex size-10 shrink-0 items-center justify-center rounded-md border">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                        {solution.title}
                      </h3>
                      <p className="text-muted-foreground mt-1.5 max-w-md text-sm leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="text-muted-foreground group-hover:text-foreground hidden size-4 sm:block" />
                </Link>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}

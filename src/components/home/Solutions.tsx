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
    <Section id="solutions" tone="dark" className="overflow-hidden">
      <div
        className="glow-orb -top-20 left-1/3 size-[32rem]"
        style={{ background: "var(--gradient-glow)" }}
        aria-hidden="true"
      />

      <div className="relative grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow="Solutions"
            title="Technology That Solves Real Problems"
            description="Applied AI, distributed ledgers and disciplined engineering — systems that ship to production and stay there."
          />
          <Reveal delay={0.12} className="mt-8">
            <Link
              to="/solutions"
              className="text-foreground group inline-flex items-center gap-2 text-sm font-medium"
            >
              Explore all solutions
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        <ol className="relative border-t border-border/70">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Reveal as="li" key={solution.title} delay={index * 0.05}>
                <Link
                  to="/solutions/$slug"
                  params={{ slug: solution.slug }}
                  className="group border-border/70 grid gap-4 border-b py-7 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center sm:gap-8 sm:py-8"
                >
                  <span className="text-muted-foreground font-mono text-[0.7rem] tracking-[0.2em]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex items-start gap-4 sm:items-center">
                    <span className="border-border bg-card/50 text-primary flex size-11 shrink-0 items-center justify-center rounded-xl border transition-colors duration-500 group-hover:border-[color-mix(in_oklab,var(--primary)_45%,transparent)]">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                        {solution.title}
                      </h3>
                      <p className="text-muted-foreground mt-2 max-w-md text-sm leading-relaxed sm:text-[0.95rem]">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                  <span
                    className="hidden h-px w-12 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 sm:block"
                    style={{ backgroundImage: "var(--gradient-brand)" }}
                    aria-hidden="true"
                  />
                </Link>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}

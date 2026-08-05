import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";

const studies = [
  {
    slug: "rwa-marketplace",
    title: "RWA Marketplace",
    industry: "Capital Markets",
    result: "Secondary liquidity for tokenized funds",
    metric: "4.2×",
    metricLabel: "faster settlement",
    featured: true,
  },
  {
    slug: "ai-healthcare-platform",
    title: "AI Healthcare Platform",
    industry: "Healthcare",
    result: "Clinical decision support at scale",
    metric: "72%",
    metricLabel: "less chart review time",
    featured: false,
  },
  {
    slug: "asset-tokenization-platform",
    title: "Asset Tokenization Platform",
    industry: "Real Estate",
    result: "Compliant on-chain issuance rails",
    metric: "$180M",
    metricLabel: "assets tokenized",
    featured: false,
  },
  {
    slug: "enterprise-ai-assistant",
    title: "Enterprise AI Assistant",
    industry: "Enterprise",
    result: "Secure copilots on proprietary data",
    metric: "38%",
    metricLabel: "ops efficiency gain",
    featured: false,
  },
] as const;

export function CaseStudies() {
  const [featured, ...rest] = studies;

  return (
    <Section id="case-studies" tone="dark" className="overflow-hidden">
      <div
        className="glow-orb -top-24 right-0 size-[28rem] opacity-40"
        style={{ background: "var(--gradient-glow)" }}
        aria-hidden="true"
      />

      <div className="relative flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          align="left"
          eyebrow="Featured Case Studies"
          title="Proof in Production"
          description="Systems shipped for regulated industries — measured by outcomes, not slides."
        />
        <Reveal delay={0.1} className="shrink-0">
          <Link
            to="/case-studies"
            className="text-foreground group inline-flex items-center gap-2 text-sm font-medium"
          >
            All case studies
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </div>

      <div className="relative mt-14 grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-6">
        <Reveal>
          <Link
            to="/case-studies/$slug"
            params={{ slug: featured.slug }}
            className="glass glass-hover group relative flex h-full min-h-[22rem] flex-col justify-between overflow-hidden rounded-3xl p-8 sm:min-h-[26rem] sm:p-10"
          >
            <div
              className="grid-lines pointer-events-none absolute inset-0 opacity-25"
              aria-hidden="true"
            />
            <span
              className="pointer-events-none absolute -right-16 -bottom-20 size-64 rounded-full opacity-50 blur-3xl transition-opacity duration-700 group-hover:opacity-80"
              style={{ background: "var(--gradient-brand)" }}
              aria-hidden="true"
            />
            <div className="relative">
              <span className="text-muted-foreground font-mono text-[0.65rem] tracking-[0.22em] uppercase">
                {featured.industry}
              </span>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                {featured.title}
              </h3>
              <p className="text-muted-foreground mt-4 max-w-md text-base leading-relaxed">
                {featured.result}
              </p>
            </div>
            <div className="relative mt-10 flex items-end justify-between gap-4 border-t border-border/70 pt-6">
              <div>
                <p className="text-gradient text-4xl font-semibold tracking-tight sm:text-5xl">
                  {featured.metric}
                </p>
                <p className="text-muted-foreground mt-1 font-mono text-[0.65rem] tracking-[0.18em] uppercase">
                  {featured.metricLabel}
                </p>
              </div>
              <ArrowUpRight className="text-muted-foreground group-hover:text-foreground size-5 transition-colors" />
            </div>
          </Link>
        </Reveal>

        <ul className="flex flex-col gap-5">
          {rest.map((study, index) => (
            <Reveal as="li" key={study.title} delay={0.08 + index * 0.06} className="flex-1">
              <Link
                to="/case-studies/$slug"
                params={{ slug: study.slug }}
                className="border-border/70 bg-card/40 hover:border-primary/40 hover:bg-card group flex h-full flex-col justify-between rounded-3xl border p-6 transition-colors duration-500 sm:flex-row sm:items-center sm:gap-6"
              >
                <div className="min-w-0">
                  <span className="text-muted-foreground font-mono text-[0.65rem] tracking-[0.2em] uppercase">
                    {study.industry}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight">{study.title}</h3>
                  <p className="text-muted-foreground mt-1.5 text-sm leading-relaxed">
                    {study.result}
                  </p>
                </div>
                <div className="mt-5 shrink-0 border-t border-border/60 pt-4 sm:mt-0 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-6">
                  <p className="text-2xl font-semibold tracking-tight">{study.metric}</p>
                  <p className="text-muted-foreground mt-1 font-mono text-[0.6rem] tracking-[0.16em] uppercase">
                    {study.metricLabel}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}

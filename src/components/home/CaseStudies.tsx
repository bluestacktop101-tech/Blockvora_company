import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { caseStudies } from "@/content/case-studies";

export function CaseStudies() {
  const [featured, ...rest] = caseStudies;
  if (!featured) return null;

  return (
    <Section id="case-studies" tone="dark">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          align="left"
          eyebrow="Work"
          title="Selected projects"
          description="Problem, what we built, technology, and status — written for engineers."
        />
        <Reveal delay={0.05} className="shrink-0">
          <Link
            to="/case-studies"
            className="text-foreground group inline-flex items-center gap-2 text-sm font-medium"
          >
            All projects
            <ArrowUpRight className="size-4" />
          </Link>
        </Reveal>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <Reveal>
          <Link
            to="/case-studies/$slug"
            params={{ slug: featured.slug }}
            className="border-border bg-card hover:border-foreground/20 group flex h-full min-h-[18rem] flex-col justify-between rounded-xl border p-6 sm:p-8"
          >
            <div>
              <span className="text-muted-foreground font-mono text-[0.65rem] tracking-[0.14em] uppercase">
                {featured.industry}
              </span>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                {featured.title}
              </h3>
              <p className="text-muted-foreground mt-3 max-w-md text-sm leading-relaxed">
                {featured.summary}
              </p>
            </div>
            <div className="border-border mt-8 flex items-end justify-between gap-4 border-t pt-5">
              <p className="text-muted-foreground text-sm">{featured.summary}</p>
              <ArrowUpRight className="text-muted-foreground group-hover:text-foreground size-5 shrink-0" />
            </div>
          </Link>
        </Reveal>

        <ul className="flex flex-col gap-4">
          {rest.map((study, index) => (
            <Reveal as="li" key={study.slug} delay={0.04 + index * 0.03} className="flex-1">
              <Link
                to="/case-studies/$slug"
                params={{ slug: study.slug }}
                className="border-border bg-card hover:border-foreground/20 group flex h-full flex-col justify-between rounded-xl border p-5 sm:flex-row sm:items-center sm:gap-5"
              >
                <div className="min-w-0">
                  <span className="text-muted-foreground font-mono text-[0.65rem] tracking-[0.14em] uppercase">
                    {study.industry}
                  </span>
                  <h3 className="mt-1.5 text-lg font-semibold tracking-tight">{study.title}</h3>
                  <p className="text-muted-foreground mt-1 line-clamp-2 text-sm leading-relaxed">
                    {study.summary}
                  </p>
                </div>
                <p className="text-muted-foreground mt-4 shrink-0 font-mono text-[0.65rem] sm:mt-0">
                  {study.industry}
                </p>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}

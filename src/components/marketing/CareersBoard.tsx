import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import type { JobDepartment, JobPosting } from "@/content/types";
import { cn } from "@/lib/utils";

const FILTER_ORDER: Array<"All" | JobDepartment> = [
  "All",
  "Engineering",
  "Product",
  "Design",
  "Data",
  "Operations",
  "Trust",
];

export function CareersBoard({ jobs }: { jobs: JobPosting[] }) {
  const [filter, setFilter] = useState<"All" | JobDepartment>("All");

  const counts = useMemo(() => {
    const next: Record<string, number> = { All: jobs.length };
    for (const job of jobs) {
      next[job.department] = (next[job.department] ?? 0) + 1;
    }
    return next;
  }, [jobs]);

  const filters = FILTER_ORDER.filter((key) => key === "All" || (counts[key] ?? 0) > 0);

  const visible = filter === "All" ? jobs : jobs.filter((job) => job.department === filter);

  if (jobs.length === 0) {
    return (
      <p className="text-muted-foreground max-w-xl">
        No open roles right now. We still love hearing from strong builders —{" "}
        <Link to="/apply" className="text-foreground underline-offset-4 hover:underline">
          introduce yourself
        </Link>
        .
      </p>
    );
  }

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filter open roles by department"
      >
        {filters.map((key) => {
          const active = filter === key;
          return (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(key)}
              className={cn(
                "rounded-md px-3 py-1.5 text-xs transition-colors",
                active
                  ? "bg-foreground text-background"
                  : "bg-secondary text-muted-foreground hover:text-foreground",
              )}
            >
              {key}
              <span className="ml-1.5 tabular-nums opacity-70">({counts[key] ?? 0})</span>
            </button>
          );
        })}
      </div>

      <ul className="mt-8 divide-y divide-border/60 border-y border-border/60">
        {visible.map((job, index) => (
          <Reveal as="li" key={job.slug} delay={Math.min(index, 8) * 0.03}>
            <Link
              to="/careers/$slug"
              params={{ slug: job.slug }}
              className="group hover:bg-card/40 focus-visible:bg-card/40 -mx-4 flex flex-col gap-4 px-4 py-7 transition-colors sm:mx-0 sm:flex-row sm:items-start sm:justify-between sm:gap-8 sm:px-2 sm:py-8"
            >
              <div className="min-w-0 flex-1">
                <div className="text-muted-foreground flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.65rem] tracking-[0.16em] uppercase">
                  <span>{job.department}</span>
                  <span className="text-border" aria-hidden="true">
                    /
                  </span>
                  <span>{job.type}</span>
                </div>
                <h3 className="group-hover:text-primary mt-3 text-2xl font-semibold tracking-tight transition-colors">
                  {job.title}
                </h3>
                <div className="text-muted-foreground mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="size-3.5 shrink-0 opacity-70" aria-hidden="true" />
                    {job.location}
                  </span>
                  {job.stage ? (
                    <span className="border-border/80 rounded-full border px-2.5 py-0.5 text-xs">
                      {job.stage}
                    </span>
                  ) : null}
                </div>
                <p className="text-muted-foreground mt-4 max-w-2xl text-sm leading-relaxed sm:text-base">
                  {job.summary}
                </p>
              </div>
              <span className="text-muted-foreground group-hover:text-foreground inline-flex shrink-0 items-center gap-1.5 text-sm font-medium transition-colors sm:mt-8">
                View full JD
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </span>
            </Link>
          </Reveal>
        ))}
      </ul>

      {visible.length === 0 ? (
        <p className="text-muted-foreground mt-8 text-sm">No open roles in this department.</p>
      ) : null}
    </div>
  );
}

import { Link } from "@tanstack/react-router";
import { caseStudies } from "@/content/case-studies";
import { jobs } from "@/content/careers";
import { imageForCaseStudy } from "@/content/media";
import { Briefcase, Layers } from "lucide-react";

export function ActivityFeed() {
  const caseActivities = caseStudies.slice(0, 10).map((item, index) => ({
    kind: index % 3 === 0 ? "SELL" : "SHIP",
    title: item.title,
    meta: item.industry,
    when: index < 4 ? "a few minutes ago" : index < 7 ? "1 hour ago" : "today",
    value: item.results[0]?.value ?? "—",
    slug: item.slug,
    type: "case" as const,
    image: imageForCaseStudy(item.slug),
  }));

  const jobActivities = jobs.slice(0, 3).map((job) => ({
    kind: "HIRE",
    title: job.title,
    meta: job.department,
    when: "today",
    value: job.type,
    slug: job.slug,
    type: "job" as const,
    image: null as string | null,
  }));

  const activities = [...caseActivities, ...jobActivities];

  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="mb-4">
        <h2 className="text-lg font-semibold tracking-tight sm:text-xl">Latest activities</h2>
      </div>
      <ul className="border-border divide-y divide-border overflow-hidden rounded-xl border bg-card">
        {activities.map((item) => (
          <li key={`${item.type}-${item.slug}`}>
            {item.type === "case" ? (
              <Link
                to="/case-studies/$slug"
                params={{ slug: item.slug }}
                className="hover:bg-secondary/60 flex items-center gap-3 px-4 py-3 transition-colors sm:gap-4"
              >
                <ActivityRow item={item} />
              </Link>
            ) : (
              <Link
                to="/careers/$slug"
                params={{ slug: item.slug }}
                className="hover:bg-secondary/60 flex items-center gap-3 px-4 py-3 transition-colors sm:gap-4"
              >
                <ActivityRow item={item} />
              </Link>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

function ActivityRow({
  item,
}: {
  item: {
    kind: string;
    title: string;
    meta: string;
    when: string;
    value: string;
    image: string | null;
    type: "case" | "job";
  };
}) {
  return (
    <>
      {item.image ? (
        <img
          src={item.image}
          alt=""
          className="size-10 shrink-0 rounded-md object-cover"
          loading="lazy"
        />
      ) : (
        <span className="bg-secondary text-muted-foreground grid size-10 shrink-0 place-items-center rounded-md">
          {item.type === "job" ? (
            <Briefcase className="size-4" aria-hidden="true" />
          ) : (
            <Layers className="size-4" aria-hidden="true" />
          )}
        </span>
      )}
      <span className="text-muted-foreground w-10 shrink-0 text-xs font-medium">{item.kind}</span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm">{item.title}</p>
        <p className="text-muted-foreground truncate text-xs">
          {item.when} · {item.meta}
        </p>
      </div>
      <span className="shrink-0 text-sm font-medium tabular-nums">{item.value}</span>
    </>
  );
}

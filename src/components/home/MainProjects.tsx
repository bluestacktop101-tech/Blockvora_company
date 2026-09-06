import { Link } from "@tanstack/react-router";
import { mainProjects, type MainProject } from "@/content/projects";
import { cn } from "@/lib/utils";

function ProjectCard({ project }: { project: MainProject }) {
  const soldOut = project.status === "sold-out";
  const soon = project.status === "coming-soon";
  const disabled = soldOut || soon;

  const body = (
    <>
      <div className="border-border relative aspect-[3/4] overflow-hidden border-b bg-[#0d0d0d]">
        <img
          src={project.image}
          alt=""
          className="absolute inset-0 size-full object-cover"
          loading="lazy"
        />
        <span
          className={cn(
            "absolute top-3 left-3 rounded px-2 py-0.5 text-[0.7rem]",
            disabled ? "bg-secondary text-muted-foreground" : "bg-foreground text-background",
          )}
        >
          {soldOut ? "Sold out" : soon ? "Coming soon" : "Live"}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-muted-foreground text-xs">{project.byline}</p>
        <h3 className="mt-1 text-lg font-semibold tracking-tight">{project.name}</h3>
        <p className="text-muted-foreground mt-2 line-clamp-3 flex-1 text-sm leading-relaxed">
          {project.summary}
        </p>
        <div className="mt-4 flex items-end justify-between gap-3">
          <div>
            <p className="text-muted-foreground text-[0.7rem]">{project.topSignalLabel}</p>
            <p className="text-sm font-medium">{project.topSignal}</p>
          </div>
          <p className="text-sm font-semibold">{project.entryValue}</p>
        </div>
        <span
          className={cn(
            "mt-4 inline-flex min-h-9 items-center justify-center rounded-md text-sm font-medium",
            disabled
              ? "border-border text-muted-foreground border"
              : "bg-foreground text-background",
          )}
        >
          {disabled ? (soldOut ? "Sold out" : "Coming soon") : project.cta}
        </span>
      </div>
    </>
  );

  const className =
    "border-border bg-card hover:border-white/20 flex min-w-[17.5rem] snap-start flex-col overflow-hidden rounded-xl border transition-colors sm:min-w-[19rem]";

  if (project.href === "/solutions/$slug" && project.hrefSlug && !disabled) {
    return (
      <Link to="/solutions/$slug" params={{ slug: project.hrefSlug }} className={className}>
        {body}
      </Link>
    );
  }

  if (project.href === "/case-studies/$slug" && project.hrefSlug && !disabled) {
    return (
      <Link to="/case-studies/$slug" params={{ slug: project.hrefSlug }} className={className}>
        {body}
      </Link>
    );
  }

  return (
    <Link to="/contact" className={className}>
      {body}
    </Link>
  );
}

export function MainProjects({
  title = "Platforms",
  description = "Live machines on the network — open a pack to see the full stack.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold tracking-tight sm:text-xl">{title}</h2>
          <p className="text-muted-foreground mt-1 max-w-2xl text-sm">{description}</p>
        </div>
        <Link to="/platforms" className="text-muted-foreground hover:text-foreground text-sm">
          View all
        </Link>
      </div>

      <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-1 snap-x snap-mandatory sm:mx-0 sm:px-0">
        {mainProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}

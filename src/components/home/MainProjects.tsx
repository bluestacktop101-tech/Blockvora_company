import { Link } from "@tanstack/react-router";
import { mainProjects, statusLabel, type MainProject } from "@/content/projects";
import { cn } from "@/lib/utils";

function ProjectCard({ project }: { project: MainProject }) {
  const body = (
    <>
      <div className="border-border relative aspect-[3/4] overflow-hidden border-b bg-muted">
        <img
          src={project.image}
          alt=""
          className="absolute inset-0 size-full object-cover"
          loading="lazy"
        />
        <span className="border-border bg-card absolute top-3 left-3 rounded-md border px-2 py-0.5 text-[0.7rem] font-medium">
          {statusLabel(project.status)}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-muted-foreground text-xs">{project.category}</p>
        <h3 className="mt-1 text-lg font-semibold tracking-tight">{project.name}</h3>
        <p className="text-muted-foreground mt-2 line-clamp-3 flex-1 text-sm leading-relaxed">
          {project.summary}
        </p>
        <div className="mt-4">
          <p className="text-muted-foreground text-[0.7rem]">Intended outcome</p>
          <p className="text-sm font-medium">{project.outcome}</p>
        </div>
        <span
          className={cn(
            "border-border mt-4 inline-flex min-h-9 items-center justify-center rounded-md border text-sm font-medium",
          )}
        >
          {project.cta}
        </span>
      </div>
    </>
  );

  const className =
    "border-border bg-card hover:border-foreground/20 flex min-w-[17.5rem] snap-start flex-col overflow-hidden rounded-xl border transition-colors sm:min-w-[19rem]";

  if (project.href === "/solutions/$slug" && project.hrefSlug) {
    return (
      <Link to="/solutions/$slug" params={{ slug: project.hrefSlug }} className={className}>
        {body}
      </Link>
    );
  }

  if (project.href === "/case-studies/$slug" && project.hrefSlug) {
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
  description = "Prototype products across AI, blockchain, and real-world assets.",
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

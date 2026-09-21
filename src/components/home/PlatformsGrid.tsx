import { Link } from "@tanstack/react-router";
import { mainProjects, statusLabel } from "@/content/projects";

/** Clean platform grid — prototype platforms, all info visible. */
export function PlatformsGrid({
  showHeader = true,
}: {
  showHeader?: boolean;
} = {}) {
  return (
    <section id="platforms" className={showHeader ? "border-border border-t" : undefined}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {showHeader ? (
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-muted-foreground font-mono text-[0.7rem] tracking-[0.16em] uppercase">
                Platforms
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Product prototypes across AI, chain, and RWA
              </h2>
              <p className="text-muted-foreground mt-3 max-w-2xl text-base leading-relaxed">
                Early platforms we are building — clear category, purpose, and intended outcome. Not
                marketplace listings.
              </p>
            </div>
            <Link
              to="/platforms"
              className="text-foreground text-sm font-medium underline-offset-4 hover:underline"
            >
              View all platforms
            </Link>
          </div>
        ) : null}

        <ul
          className={
            showHeader
              ? "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
              : "grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          }
        >
          {mainProjects.map((project) => (
            <li key={project.slug}>
              <article className="border-border bg-card hover:border-foreground/20 flex h-full flex-col overflow-hidden rounded-xl border">
                <div className="border-border bg-muted relative aspect-[16/10] overflow-hidden border-b">
                  <img
                    src={project.image}
                    alt=""
                    className="absolute inset-0 size-full object-cover"
                    loading="lazy"
                  />
                  <span className="border-border bg-card/95 absolute top-3 left-3 rounded-md border px-2 py-0.5 text-[0.7rem] font-medium">
                    {statusLabel(project.status)}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-muted-foreground text-xs">{project.category}</p>
                  <h3 className="mt-1 text-lg font-semibold tracking-tight">{project.name}</h3>
                  <p className="text-muted-foreground mt-2 flex-1 text-sm leading-relaxed">
                    {project.summary}
                  </p>
                  <div className="border-border mt-4 border-t pt-4">
                    <p className="text-muted-foreground text-[0.7rem]">Intended outcome</p>
                    <p className="mt-0.5 text-sm font-medium">{project.outcome}</p>
                  </div>
                  {project.hrefSlug ? (
                    <Link
                      to={project.href}
                      params={{ slug: project.hrefSlug }}
                      className="border-border text-foreground hover:bg-secondary mt-4 inline-flex min-h-10 items-center justify-center rounded-md border text-sm font-medium"
                    >
                      {project.cta}
                    </Link>
                  ) : (
                    <Link
                      to="/contact"
                      className="border-border text-foreground hover:bg-secondary mt-4 inline-flex min-h-10 items-center justify-center rounded-md border text-sm font-medium"
                    >
                      {project.cta}
                    </Link>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

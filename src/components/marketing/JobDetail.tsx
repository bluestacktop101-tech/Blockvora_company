import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowLeft, ArrowUpRight, CheckCircle2, MapPin } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { PageCta } from "./PageCta";
import { jobs } from "@/content/careers";
import type { JobPosting } from "@/content/types";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

function applySearch(job: JobPosting) {
  return {
    role: job.title,
  } as const;
}

const toc = [
  { id: "about", label: "The role" },
  { id: "responsibilities", label: "What you'll do" },
  { id: "requirements", label: "Requirements" },
  { id: "nice-to-have", label: "Nice to have" },
  { id: "tech-stack", label: "Tech stack" },
  { id: "benefits", label: "Why join" },
  { id: "success", label: "Success looks like" },
  { id: "hiring", label: "Hiring process" },
  { id: "apply", label: "How to apply" },
] as const;

function ApplyCard({ job }: { job: JobPosting }) {
  return (
    <div className="border-border bg-card rounded-xl border p-5 sm:p-6">
      <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">Apply</p>
      <h2 className="mt-2 text-lg font-semibold tracking-tight">{job.title}</h2>
      <dl className="mt-5 space-y-3 text-sm">
        <div className="flex justify-between gap-3">
          <dt className="text-muted-foreground">Location</dt>
          <dd className="text-right font-medium">{job.location}</dd>
        </div>
        <div className="flex justify-between gap-3">
          <dt className="text-muted-foreground">Department</dt>
          <dd className="text-right font-medium">{job.department}</dd>
        </div>
        <div className="flex justify-between gap-3">
          <dt className="text-muted-foreground">Team</dt>
          <dd className="text-right font-medium">{job.team}</dd>
        </div>
        <div className="flex justify-between gap-3">
          <dt className="text-muted-foreground">Type</dt>
          <dd className="text-right font-medium">{job.type}</dd>
        </div>
      </dl>
      <div className="mt-6 flex flex-col gap-2">
        <Link
          to="/apply"
          search={applySearch(job)}
          className="bg-foreground text-background inline-flex min-h-10 items-center justify-center rounded-md px-4 text-sm font-medium"
        >
          Apply for this role
        </Link>
        <a
          href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(`Application: ${job.title}`)}`}
          className="border-border hover:bg-secondary inline-flex min-h-10 items-center justify-center rounded-md border px-4 text-sm font-medium"
        >
          Email your CV
        </a>
      </div>
      <a
        href="#requirements"
        className="text-muted-foreground hover:text-foreground mt-4 inline-flex text-xs underline-offset-4 hover:underline"
      >
        Jump to requirements
      </a>
    </div>
  );
}

function JdSection({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="border-border scroll-mt-24 border-t pt-8">
      <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      {description ? (
        <p className="text-muted-foreground mt-1 text-sm">{description}</p>
      ) : null}
      <div className="mt-5">{children}</div>
    </section>
  );
}

function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="space-y-3">
      {items.map((item, index) => (
        <li key={item} className="flex gap-3">
          <span className="text-muted-foreground mt-0.5 w-6 shrink-0 text-xs tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
          <p className="text-muted-foreground text-sm leading-relaxed sm:text-[0.95rem]">{item}</p>
        </li>
      ))}
    </ol>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="bg-foreground/50 mt-2 size-1.5 shrink-0 rounded-full" aria-hidden="true" />
          <p className="text-muted-foreground text-sm leading-relaxed sm:text-[0.95rem]">{item}</p>
        </li>
      ))}
    </ul>
  );
}

export function JobDetail({ job }: { job: JobPosting }) {
  const related = jobs
    .filter((item) => item.slug !== job.slug)
    .filter((item) => item.department === job.department)
    .slice(0, 3);
  const relatedFallback =
    related.length > 0
      ? related
      : jobs.filter((item) => item.slug !== job.slug).slice(0, 3);

  const sections = toc.filter((item) => {
    if (item.id === "nice-to-have") return job.niceToHave.length > 0;
    if (item.id === "benefits") return job.benefits.length > 0;
    if (item.id === "tech-stack") return Boolean(job.techStack?.length);
    if (item.id === "success") return Boolean(job.successLooksLike?.length);
    if (item.id === "hiring") return Boolean(job.hiringProcess?.length);
    return true;
  });

  return (
    <>
      <header className="border-border border-b pt-8 pb-10 sm:pt-10 sm:pb-12">
        <Container>
          <Link
            to="/careers"
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            All open roles
          </Link>

          <p className="text-muted-foreground mt-6 text-xs font-medium tracking-wide uppercase">
            Full JD · {job.department}
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {job.title}
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl text-sm leading-relaxed sm:text-base">
            {job.summary}
          </p>

          <div className="text-muted-foreground mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5 shrink-0 opacity-70" aria-hidden="true" />
              {job.location}
            </span>
            <span className="text-border" aria-hidden="true">
              /
            </span>
            <span>{job.type}</span>
            <span className="text-border" aria-hidden="true">
              /
            </span>
            <span>{job.team}</span>
            {job.stage ? (
              <>
                <span className="text-border" aria-hidden="true">
                  /
                </span>
                <span>{job.stage}</span>
              </>
            ) : null}
          </div>

          <nav aria-label="Job description sections" className="mt-6 flex flex-wrap gap-1.5">
            {sections.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "rounded-md px-2.5 py-1 text-xs transition-colors",
                  item.id === "requirements"
                    ? "bg-foreground text-background"
                    : "bg-secondary text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-6 flex flex-wrap gap-3 lg:hidden">
            <Link
              to="/apply"
              search={applySearch(job)}
              className="bg-foreground text-background inline-flex min-h-10 items-center rounded-md px-4 text-sm font-medium"
            >
              Apply for this role
            </Link>
            <Link
              to="/careers"
              className="border-border hover:bg-secondary inline-flex min-h-10 items-center rounded-md border px-4 text-sm font-medium"
            >
              All roles
            </Link>
          </div>
        </Container>
      </header>

      <Section tone="surface" className="pt-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.6fr)] lg:items-start lg:gap-12">
          <article className="space-y-2">
            <JdSection id="about" title="The role">
              <p className="text-muted-foreground max-w-3xl text-sm leading-relaxed sm:text-base">
                {job.about}
              </p>
            </JdSection>

            <JdSection id="responsibilities" title="What you'll do">
              <NumberedList items={job.responsibilities} />
            </JdSection>

            <JdSection
              id="requirements"
              title="What we're looking for"
              description="Must-have experience and skills for this role."
            >
              <div className="border-border bg-card rounded-xl border p-5 sm:p-6">
                <NumberedList items={job.requirements} />
              </div>
            </JdSection>

            {job.niceToHave.length > 0 ? (
              <JdSection id="nice-to-have" title="Nice to have">
                <BulletList items={job.niceToHave} />
              </JdSection>
            ) : null}

            {job.techStack?.length ? (
              <JdSection id="tech-stack" title="Tech stack">
                <ul className="flex flex-wrap gap-2">
                  {job.techStack.map((item) => (
                    <li
                      key={item}
                      className="bg-secondary text-muted-foreground rounded-md px-2.5 py-1 text-xs"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </JdSection>
            ) : null}

            {job.benefits.length > 0 ? (
              <JdSection id="benefits" title="Why join">
                <BulletList items={job.benefits} />
              </JdSection>
            ) : null}

            {job.successLooksLike?.length ? (
              <JdSection id="success" title="What success looks like">
                <NumberedList items={job.successLooksLike} />
              </JdSection>
            ) : null}

            {job.hiringProcess?.length ? (
              <JdSection id="hiring" title="Hiring process">
                <NumberedList items={job.hiringProcess} />
              </JdSection>
            ) : null}

            <JdSection
              id="apply"
              title="How to apply"
              description="We review every relevant profile. Keep it concise and concrete."
            >
              <ul className="space-y-3">
                {(job.howToApply ?? []).map((item) => (
                  <li key={item} className="flex gap-3 text-sm">
                    <CheckCircle2
                      className="text-foreground mt-0.5 size-4 shrink-0 opacity-70"
                      aria-hidden="true"
                    />
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/apply"
                  search={applySearch(job)}
                  className="bg-foreground text-background inline-flex min-h-10 items-center rounded-md px-4 text-sm font-medium"
                >
                  Apply for {job.title}
                </Link>
                <a
                  href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(`Application: ${job.title}`)}`}
                  className="border-border hover:bg-secondary inline-flex min-h-10 items-center rounded-md border px-4 text-sm font-medium"
                >
                  {siteConfig.email}
                </a>
              </div>
            </JdSection>
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-3">
              <ApplyCard job={job} />
              <div className="border-border rounded-xl border p-5">
                <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
                  On this page
                </p>
                <ul className="mt-3 space-y-2">
                  {sections.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className={cn(
                          "text-muted-foreground hover:text-foreground text-sm transition-colors",
                          item.id === "requirements" && "text-foreground font-medium",
                        )}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {relatedFallback.length > 0 ? (
        <Section tone="surface" id="more-roles" className="pt-4">
          <div className="mb-4 flex items-end justify-between gap-3">
            <h2 className="text-lg font-semibold tracking-tight">Other roles</h2>
            <Link to="/careers" className="text-muted-foreground hover:text-foreground text-xs">
              View all
            </Link>
          </div>
          <ul className="border-border divide-y divide-border rounded-xl border">
            {relatedFallback.map((item) => (
              <li key={item.slug}>
                <Link
                  to="/careers/$slug"
                  params={{ slug: item.slug }}
                  className="hover:bg-secondary/50 flex flex-col gap-2 px-4 py-5 transition-colors sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-5"
                >
                  <div>
                    <p className="text-muted-foreground text-xs">
                      {item.department} · {item.type}
                    </p>
                    <h3 className="mt-1 text-base font-semibold tracking-tight">{item.title}</h3>
                    <p className="text-muted-foreground mt-1 max-w-xl text-sm">{item.summary}</p>
                  </div>
                  <span className="text-muted-foreground inline-flex shrink-0 items-center gap-1.5 text-sm">
                    Full JD
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      <PageCta
        eyebrow="Application"
        title={`Apply for ${job.title}`}
        description="Include links to work you're proud of and a short note on what you want to build next. We read every message."
        primary={{
          label: "Submit application",
          to: "/apply",
          search: { ...applySearch(job) },
        }}
        secondary={{ label: "All roles", to: "/careers" }}
      />
    </>
  );
}

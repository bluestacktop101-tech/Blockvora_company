import { Link, createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { Section } from "@/components/common/Section";
import { CareersBoard } from "@/components/marketing/CareersBoard";
import { PageCta } from "@/components/marketing/PageCta";
import { jobs } from "@/content/careers";
import { pageHead } from "@/lib/seo";

const description =
  "Blockvora builds enterprise AI and blockchain systems for regulated industries. We're hiring across engineering, product, design, and operations.";

export const Route = createFileRoute("/careers/")({
  head: () => pageHead({ title: "Careers", description, path: "/careers" }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Join the team shipping production systems"
        description={description}
        meta={
          <>
            <span>{jobs.length} open roles</span>
            <span className="text-border" aria-hidden="true">
              /
            </span>
            <span>Remote (Global) · Full-time / Part-time</span>
          </>
        }
        actions={
          <>
            <a
              href="#open-roles"
              className="bg-foreground text-background inline-flex min-h-10 items-center rounded-md px-4 text-sm font-medium"
            >
              Browse open roles
            </a>
            <Link
              to="/apply"
              className="border-border hover:bg-secondary inline-flex min-h-10 items-center rounded-md border px-4 text-sm font-medium"
            >
              Open application
            </Link>
          </>
        }
      />

      <Section tone="surface" id="open-roles" className="pt-8">
        <div className="mb-6 flex items-end justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold tracking-tight">Open roles</h2>
            <p className="text-muted-foreground mt-1 text-sm">
              Filter by department, open a role for the full JD, then apply.
            </p>
          </div>
        </div>
        <CareersBoard jobs={jobs} />
      </Section>

      <Section tone="surface" className="pt-4">
        <div className="border-border bg-card rounded-xl border p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
                Open application
              </p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
                Don&apos;t see a matching role?
              </h2>
              <p className="text-muted-foreground mt-3 max-w-xl text-sm leading-relaxed">
                We review relevant profiles on an ongoing basis. Send a short introduction and
                links to work you&apos;re proud of.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                to="/apply"
                className="bg-foreground text-background inline-flex min-h-10 items-center rounded-md px-4 text-sm font-medium"
              >
                Send your CV
              </Link>
              <Link
                to="/about"
                className="border-border hover:bg-secondary inline-flex min-h-10 items-center rounded-md border px-4 text-sm font-medium"
              >
                Meet the team
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <PageCta
        title="Ready to apply?"
        description="Tell us what you've built and what you want to build next."
        primary={{ label: "Apply now", to: "/apply" }}
        secondary={{ label: "Browse roles", to: "/careers" }}
      />
    </>
  );
}

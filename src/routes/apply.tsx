import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { Section } from "@/components/common/Section";
import { ApplyForm } from "@/components/marketing/ApplyForm";
import { jobs } from "@/content/careers";
import { pageHead } from "@/lib/seo";

const description =
  "Submit your application for an open role at Blockvora. Include your resume and links to work you're proud of.";

export const Route = createFileRoute("/apply")({
  validateSearch: (search: Record<string, unknown>): { role?: string } => {
    const next: { role?: string } = {};
    if (typeof search["role"] === "string") next.role = search["role"];
    return next;
  },
  head: ({ match }) => {
    const role =
      match?.search && typeof match.search === "object" && "role" in match.search
        ? (match.search as { role?: string }).role
        : undefined;
    return pageHead({
      title: role ? `Apply · ${role}` : "Apply",
      description,
      path: "/apply",
    });
  },
  component: Page,
});

function Page() {
  const { role } = Route.useSearch();
  const roleTitles = jobs.map((job) => job.title);
  const matched = role
    ? jobs.find((job) => job.title === role || job.slug === role)
    : undefined;
  const defaultRole = matched?.title ?? role;

  return (
    <>
      <PageHeader
        eyebrow="Careers · Apply"
        title={defaultRole ? `Apply for ${defaultRole}` : "Submit your application"}
        description={
          defaultRole
            ? `Complete the form below for ${defaultRole}. Required fields are marked with *.`
            : description
        }
        meta={
          <Link
            to="/careers"
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            All open roles
          </Link>
        }
      />

      <Section tone="surface" className="pt-8 pb-16">
        <div className="mx-auto max-w-2xl">
          <ApplyForm
            {...(defaultRole ? { defaultRole } : {})}
            roles={defaultRole ? [] : roleTitles}
          />
        </div>
      </Section>
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { Section } from "@/components/common/Section";
import { MainProjects } from "@/components/home/MainProjects";
import { mainProjects } from "@/content/projects";
import { pageHead } from "@/lib/seo";

const description =
  "Browse Blockvora’s live delivery machines — AI, agents, healthcare, ledger, and RWA platforms.";

export const Route = createFileRoute("/platforms")({
  head: () => pageHead({ title: "Platforms", description, path: "/platforms" }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Platforms"
        title="Main project machines"
        description={description}
        meta={
          <>
            <span>{mainProjects.length} live programs</span>
            <span className="text-border" aria-hidden="true">
              /
            </span>
            <span>Always-on delivery pools</span>
          </>
        }
      />
      <Section tone="surface" className="pt-0">
        <MainProjects title="All platforms" description="Open a machine for the full stack and engagement path." />
        <div className="mt-12 px-0">
          <Link
            to="/marketplace"
            className="text-primary-foreground bg-[image:var(--gradient-brand)] inline-flex min-h-11 items-center gap-2 rounded-full px-5 text-sm font-medium"
          >
            Browse marketplace <ArrowRight className="size-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}

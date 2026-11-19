import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { PlatformsGrid } from "@/components/home/PlatformsGrid";
import { BuildWithCta } from "@/components/home/BuildWithCta";
import { mainProjects } from "@/content/projects";
import { pageHead } from "@/lib/seo";

const description =
  "Explore Blockvora prototype platforms across production AI, institutional blockchain, and real-world assets.";

export const Route = createFileRoute("/platforms")({
  head: () => pageHead({ title: "Platforms", description, path: "/platforms" }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Platforms"
        title="Prototype platforms"
        description={description}
        meta={
          <>
            <span>{mainProjects.length} prototypes</span>
            <span className="text-border" aria-hidden="true">
              /
            </span>
            <span>AI · Blockchain · RWA</span>
          </>
        }
        actions={
          <Link
            to="/contact"
            className="bg-foreground text-background hover:bg-foreground/90 inline-flex min-h-10 items-center rounded-md px-4 text-sm font-medium"
          >
            Work with us
          </Link>
        }
      />
      <div className="-mt-4">
        <PlatformsGrid showHeader={false} />
      </div>
      <BuildWithCta />
    </>
  );
}

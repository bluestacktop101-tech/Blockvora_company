import { createFileRoute, notFound } from "@tanstack/react-router";
import { CaseStudyDetail } from "@/components/marketing/CaseStudyDetail";
import { PendingPage } from "@/components/marketing/PendingPage";
import { getCaseStudy } from "@/content/case-studies";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const study = getCaseStudy(params.slug);
    if (!study) throw notFound();
    return study;
  },
  pendingComponent: PendingPage,
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    return pageHead({
      title: loaderData.title,
      description: loaderData.summary,
      path: `/case-studies/${loaderData.slug}`,
    });
  },
  component: Page,
});

function Page() {
  const study = Route.useLoaderData();
  return <CaseStudyDetail study={study} />;
}

import { createFileRoute, notFound } from "@tanstack/react-router";
import { JobDetail } from "@/components/marketing/JobDetail";
import { PendingPage } from "@/components/marketing/PendingPage";
import { getJob } from "@/content/careers";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/careers/$slug")({
  loader: ({ params }) => {
    const job = getJob(params.slug);
    if (!job) throw notFound();
    return job;
  },
  pendingComponent: PendingPage,
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    return pageHead({
      title: loaderData.title,
      description: loaderData.summary,
      path: `/careers/${loaderData.slug}`,
    });
  },
  component: Page,
});

function Page() {
  const job = Route.useLoaderData();
  return <JobDetail job={job} />;
}

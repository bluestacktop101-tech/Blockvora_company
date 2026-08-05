import { createFileRoute, notFound } from "@tanstack/react-router";
import { OfferDetail } from "@/components/marketing/OfferDetail";
import { PendingPage } from "@/components/marketing/PendingPage";
import { getSolution } from "@/content/solutions";
import { caseStudyCards, solutionCards } from "@/content/related";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/solutions/$slug")({
  loader: ({ params }) => {
    const solution = getSolution(params.slug);
    if (!solution) throw notFound();
    return solution;
  },
  pendingComponent: PendingPage,
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    return pageHead({
      title: loaderData.title,
      description: loaderData.summary,
      path: `/solutions/${loaderData.slug}`,
    });
  },
  component: Page,
});

function Page() {
  const solution = Route.useLoaderData();

  return (
    <OfferDetail
      model={{
        eyebrow: "Solution",
        title: solution.title,
        summary: solution.summary,
        overview: solution.overview,
        problem: solution.problem,
        challenges: solution.challenges,
        solution: solution.solution,
        capabilities: solution.capabilities,
        technologies: solution.technologies,
        process: solution.process,
        benefits: solution.benefits,
        outcomes: solution.outcomes,
        faqs: solution.faqs,
        related: [
          ...caseStudyCards(solution.relatedCaseStudies),
          ...solutionCards(solution.relatedSolutions),
        ].slice(0, 3),
      }}
    />
  );
}

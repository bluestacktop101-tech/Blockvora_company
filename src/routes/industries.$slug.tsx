import { createFileRoute, notFound } from "@tanstack/react-router";
import { OfferDetail } from "@/components/marketing/OfferDetail";
import { PendingPage } from "@/components/marketing/PendingPage";
import { getIndustry } from "@/content/industries";
import { solutionCards } from "@/content/related";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/industries/$slug")({
  loader: ({ params }) => {
    const industry = getIndustry(params.slug);
    if (!industry) throw notFound();
    return industry;
  },
  pendingComponent: PendingPage,
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    return pageHead({
      title: `${loaderData.title} Industry`,
      description: loaderData.summary,
      path: `/industries/${loaderData.slug}`,
    });
  },
  component: Page,
});

function Page() {
  const industry = Route.useLoaderData();

  return (
    <OfferDetail
      model={{
        eyebrow: "Industry",
        title: industry.title,
        summary: industry.summary,
        overview: industry.overview,
        problem: industry.problem,
        challenges: industry.challenges,
        solution: industry.solution,
        capabilities: industry.capabilities,
        technologies: industry.technologies,
        process: industry.process,
        benefits: industry.benefits,
        faqs: industry.faqs,
        compliance: industry.compliance,
        useCases: industry.useCases,
        related: solutionCards(industry.relatedSolutions),
      }}
    />
  );
}

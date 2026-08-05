import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { LinkCards } from "@/components/marketing/LinkCards";
import { PageCta } from "@/components/marketing/PageCta";
import { solutions } from "@/content/solutions";
import { pageHead } from "@/lib/seo";

const description =
  "AI, blockchain, healthcare intelligence and tokenization platforms engineered for regulated production environments.";

export const Route = createFileRoute("/solutions")({
  head: () => pageHead({ title: "Solutions", description, path: "/solutions" }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Solutions"
        title="Technology that solves real problems"
        description={description}
      />
      <Section tone="dark">
        <SectionHeading
          align="left"
          eyebrow="Portfolio"
          title="Six practice areas. One delivery standard."
          description="Every engagement is built to clear security review, integrate with existing systems and remain operable after launch."
        />
        <LinkCards
          className="mt-12"
          items={solutions.map((item) => ({
            title: item.shortTitle,
            description: item.summary,
            to: `/solutions/${item.slug}`,
            meta: "Explore",
          }))}
        />
      </Section>
      <PageCta
        title="Not sure which solution fits?"
        description="We'll help you map the problem space and recommend an architecture before you commit to a build."
      />
    </>
  );
}

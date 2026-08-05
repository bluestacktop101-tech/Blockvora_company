import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { LinkCards } from "@/components/marketing/LinkCards";
import { PageCta } from "@/components/marketing/PageCta";
import { industries } from "@/content/industries";
import { pageHead } from "@/lib/seo";

const description =
  "Blockvora partners with regulated industries where AI, data and blockchain must clear real operational and compliance bars.";

export const Route = createFileRoute("/industries")({
  head: () => pageHead({ title: "Industries", description, path: "/industries" }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title="Domain fluency for high-stakes sectors"
        description={description}
      />
      <Section>
        <SectionHeading
          align="left"
          eyebrow="Focus"
          title="Where we create the most leverage"
          description="We combine practice-area engineering with sector-specific workflow, risk and interoperability knowledge."
        />
        <LinkCards
          className="mt-12"
          columns={2}
          items={industries.map((item) => ({
            title: item.title,
            description: item.summary,
            to: `/industries/${item.slug}`,
            meta: "Industry",
          }))}
        />
      </Section>
      <PageCta
        title="Building in a regulated industry?"
        secondary={{ label: "See solutions", to: "/solutions" }}
      />
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { LinkCards } from "@/components/marketing/LinkCards";
import { PageCta } from "@/components/marketing/PageCta";
import { caseStudies } from "@/content/case-studies";
import { pageHead } from "@/lib/seo";

const description =
  "Selected Blockvora engagements with measurable impact across AI automation, healthcare and tokenization.";

export const Route = createFileRoute("/case-studies")({
  head: () => pageHead({ title: "Case Studies", description, path: "/case-studies" }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader eyebrow="Case studies" title="Proof in production" description={description} />
      <Section>
        <SectionHeading
          align="left"
          eyebrow="Selected work"
          title="Outcomes over slideware"
          description="Details are anonymized where required. The architectures, constraints and metrics are real."
        />
        <LinkCards
          className="mt-12"
          columns={2}
          items={caseStudies.map((item) => ({
            title: item.title,
            description: item.summary,
            to: `/case-studies/${item.slug}`,
            meta: `${item.industry} · ${item.results[0]?.value ?? ""} ${item.results[0]?.label ?? ""}`,
          }))}
        />
      </Section>
      <PageCta title="Want results like these?" />
    </>
  );
}

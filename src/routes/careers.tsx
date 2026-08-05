import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { FeatureGrid } from "@/components/marketing/FeatureGrid";
import { LinkCards } from "@/components/marketing/LinkCards";
import { PageCta } from "@/components/marketing/PageCta";
import { jobs } from "@/content/careers";
import { pageHead } from "@/lib/seo";

const description =
  "Join Blockvora to build enterprise AI and blockchain systems with a senior, outcome-obsessed team.";

const culture = [
  {
    title: "Builders, not spectators",
    description: "Everyone ships. Titles do not excuse you from design docs, reviews or demos.",
  },
  {
    title: "High trust, low theater",
    description: "We keep process light and standards high — clarity over ceremony.",
  },
  {
    title: "Real client problems",
    description: "Your work clears security reviews and shows up in production metrics.",
  },
  {
    title: "Growth through craft",
    description: "Mentorship, pairing and postmortems that make the next system better.",
  },
];

export const Route = createFileRoute("/careers")({
  head: () => pageHead({ title: "Careers", description, path: "/careers" }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Build systems that have to work"
        description={description}
      />
      <Section tone="dark">
        <SectionHeading align="left" eyebrow="Culture" title="What it's like here" />
        <FeatureGrid items={culture} columns={2} className="mt-12" />
      </Section>
      <Section tone="surface">
        <SectionHeading
          align="left"
          eyebrow="Open roles"
          title="Current opportunities"
          description="Don't see a perfect fit? Write to us anyway — we hire for trajectory as much as checklist match."
        />
        <LinkCards
          className="mt-12"
          columns={2}
          items={jobs.map((job) => ({
            title: job.title,
            description: job.summary,
            to: `/careers/${job.slug}`,
            meta: `${job.team} · ${job.location} · ${job.type}`,
          }))}
        />
      </Section>
      <PageCta
        title="Introduce yourself"
        description="Send a short note about what you've built and what you want to build next."
        primary={{ label: "Contact us", to: "/contact" }}
        secondary={null}
      />
    </>
  );
}

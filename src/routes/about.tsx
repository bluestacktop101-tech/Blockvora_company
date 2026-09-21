import { createFileRoute, Link } from "@tanstack/react-router";
import { CompanyMap } from "@/components/common/CompanyMap";
import { PageHeader } from "@/components/common/PageHeader";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { BuildWithCta } from "@/components/home/BuildWithCta";
import { FeatureGrid } from "@/components/marketing/FeatureGrid";
import { BulletList } from "@/components/marketing/BulletList";
import { siteConfig } from "@/config/site";
import { pageHead } from "@/lib/seo";

const description = siteConfig.description;

const principles = [
  {
    title: "Production over pilots",
    description:
      "We optimize for day-two operations: monitoring, ownership, cost and change control.",
  },
  {
    title: "Security as a design input",
    description:
      "Threat models and data boundaries shape architecture before the first feature sprint.",
  },
  {
    title: "Domain respect",
    description:
      "Healthcare, finance and capital markets have rules. We learn them instead of waving them away.",
  },
  {
    title: "Small senior teams",
    description:
      "Clients get experienced builders who write, review and own outcomes — not layered staffing pyramids.",
  },
  {
    title: "Honest scoping",
    description:
      "We would rather shrink an MVP than sell theater that collapses under real constraints.",
  },
  {
    title: "Shared language",
    description:
      "Design docs, ADRs and demos that risk, legal and engineering can all interrogate.",
  },
];

export const Route = createFileRoute("/about")({
  head: () => pageHead({ title: "About", description, path: "/about" }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Blockvora is a technology company"
        description={siteConfig.vision}
        actions={
          <>
            <Link
              to="/platforms"
              className="bg-foreground text-background hover:bg-foreground/90 inline-flex min-h-10 items-center rounded-md px-4 text-sm font-medium"
            >
              Explore platforms
            </Link>
            <Link
              to="/contact"
              className="border-border text-foreground hover:bg-secondary inline-flex min-h-10 items-center rounded-md border px-4 text-sm font-medium"
            >
              Work with us
            </Link>
          </>
        }
      />

      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            align="left"
            eyebrow="Positioning"
            title="Accessible. Transparent. Connected."
            description="We build intelligent, decentralized technology so complex systems become operable for the people who have to run them — not just impressive in a pitch deck."
          />
          <div>
            <h2 className="font-mono text-[0.7rem] tracking-[0.16em] uppercase">What that means</h2>
            <BulletList
              className="mt-6"
              items={[
                "Production AI with private deployment and evaluation gates",
                "Institutional blockchain and settlement systems that clear review",
                "Real-world asset rails with policy and custody in the critical path",
                "Senior engineers on the work — not layered staff-aug theater",
              ]}
            />
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading align="left" eyebrow="Principles" title="How we show up on engagements" />
        <FeatureGrid items={principles} columns={3} className="mt-10" />
      </Section>

      <Section tone="surface">
        <SectionHeading
          align="left"
          eyebrow="Studio"
          title={`Based in ${siteConfig.address}`}
          description="We work with clients across Europe and North America, with remote-friendly delivery and on-site workshops when the problem demands it."
        />
        <dl className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { label: "Focus", value: "AI · Blockchain · RWA" },
            { label: "Contact", value: siteConfig.email },
            { label: "Careers", value: "We're hiring builders" },
          ].map((item) => (
            <div key={item.label} className="border-border bg-card rounded-xl border p-5">
              <dt className="text-muted-foreground text-xs">{item.label}</dt>
              <dd className="mt-2 text-base font-semibold tracking-tight">{item.value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-8">
          <CompanyMap />
        </div>
      </Section>

      <BuildWithCta />
    </>
  );
}

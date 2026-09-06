import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { FeatureGrid } from "@/components/marketing/FeatureGrid";
import { BulletList } from "@/components/marketing/BulletList";
import { PageCta } from "@/components/marketing/PageCta";
import { siteConfig } from "@/config/site";
import { pageHead } from "@/lib/seo";

const description =
  "Blockvora is an engineering studio for enterprise AI, blockchain and tokenization — built by practitioners who ship systems that last.";

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
        title="An engineering studio for AI and blockchain"
        description={description}
      />
      <Section tone="dark">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
          <SectionHeading
            align="left"
            eyebrow="Story"
            title="We started where demos fail"
            description="Blockvora was founded to close the gap between impressive AI and blockchain prototypes and systems that clear enterprise review. Our teams combine applied research fluency with the habits of platform engineering — because regulated buyers need both."
          />
          <div>
            <h2 className="font-mono text-[0.7rem] tracking-[0.2em] uppercase">What we believe</h2>
            <BulletList
              className="mt-6"
              items={[
                "Models and chains are components — products are workflows with owners",
                "Compliance evidence should be a byproduct of good architecture",
                "The best interface for a complex system is often a calm one",
                "Long-term partners beat transactional staff augmentation",
              ]}
            />
          </div>
        </div>
      </Section>
      <Section tone="surface">
        <SectionHeading align="left" eyebrow="Principles" title="How we show up on engagements" />
        <FeatureGrid items={principles} columns={3} className="mt-12" />
      </Section>
      <Section tone="dark">
        <SectionHeading
          align="left"
          eyebrow="Studio"
          title="Based in Zug, building globally"
          description={`${siteConfig.address}. We work with clients across Europe and North America, with remote-friendly delivery and on-site workshops when the problem demands it.`}
        />
        <dl className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            { label: "Focus", value: "AI · Blockchain · RWA" },
            { label: "Contact", value: siteConfig.email },
            { label: "Careers", value: "We're hiring builders" },
          ].map((item) => (
            <div key={item.label} className="border-border/70 rounded-3xl border p-6">
              <dt className="text-muted-foreground font-mono text-[0.65rem] tracking-[0.18em] uppercase">
                {item.label}
              </dt>
              <dd className="mt-3 text-lg font-semibold tracking-tight">{item.value}</dd>
            </div>
          ))}
        </dl>
      </Section>
      <PageCta title="Work with Blockvora" secondary={{ label: "Open roles", to: "/careers" }} />
    </>
  );
}

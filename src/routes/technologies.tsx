import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { ChipList } from "@/components/marketing/ChipList";
import { PageCta } from "@/components/marketing/PageCta";
import { technologyCategories, trustedTechnologies } from "@/content/technologies";
import { pageHead } from "@/lib/seo";

const description =
  "A pragmatic engineering stack for enterprise AI, blockchain networks and secure cloud platforms.";

export const Route = createFileRoute("/technologies")({
  head: () => pageHead({ title: "Technologies", description, path: "/technologies" }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Technologies"
        title="Tools enterprises already trust — used with discipline"
        description={description}
      />
      <Section tone="surface">
        <SectionHeading
          align="left"
          eyebrow="Foundation"
          title="Core technologies we ship with"
          description="We choose boring reliability over novelty when production is on the line — and adopt new tools when they earn their keep."
        />
        <Reveal className="mt-10">
          <ChipList items={[...trustedTechnologies]} />
        </Reveal>
      </Section>
      <Section tone="dark">
        <SectionHeading align="left" eyebrow="Categories" title="Depth across the stack" />
        <ul className="mt-12 grid gap-8 lg:grid-cols-2">
          {technologyCategories.map((category, index) => (
            <Reveal as="li" key={category.title} delay={index * 0.05}>
              <article className="border-border/70 h-full rounded-3xl border p-6 sm:p-8">
                <h2 className="text-xl font-semibold tracking-tight">{category.title}</h2>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {category.description}
                </p>
                <div className="mt-6">
                  <ChipList items={category.items} />
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </Section>
      <PageCta
        title="Have a stack constraint?"
        description="Tell us what you standardize on. We meet you in your environment rather than forcing a rewrite."
        secondary={{ label: "View services", to: "/services" }}
      />
    </>
  );
}

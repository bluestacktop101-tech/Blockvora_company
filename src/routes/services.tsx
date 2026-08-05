import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { ChipList } from "@/components/marketing/ChipList";
import { PageCta } from "@/components/marketing/PageCta";
import { services } from "@/content/services";
import { pageHead } from "@/lib/seo";

const description =
  "From strategy and architecture to secure delivery — AI, blockchain, product and platform engineering under one roof.";

export const Route = createFileRoute("/services")({
  head: () => pageHead({ title: "Services", description, path: "/services" }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Engineering across the full stack"
        description={description}
      />
      <Section tone="dark">
        <SectionHeading
          align="left"
          eyebrow="How we engage"
          title="Capability pods that own outcomes"
          description="You get senior practitioners, not a revolving cast of slide decks. Each service line plugs into the same discovery-to-scale delivery model."
        />
        <ol className="mt-14 divide-y divide-border/70 border-y border-border/70">
          {services.map((service, index) => (
            <Reveal as="li" key={service.slug} delay={index * 0.04}>
              <article className="grid gap-6 py-10 lg:grid-cols-[auto_minmax(0,1fr)_minmax(0,0.9fr)] lg:items-start lg:gap-10">
                <span className="text-muted-foreground font-mono text-[0.7rem] tracking-[0.2em]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight">{service.title}</h2>
                  <p className="text-muted-foreground mt-3 text-sm leading-relaxed sm:text-base">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {service.offerings.map((offering) => (
                      <li key={offering.title}>
                        <p className="text-sm font-medium">{offering.title}</p>
                        <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                          {offering.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground">
                    Delivery path
                  </p>
                  <div className="mt-4">
                    <ChipList items={service.process} />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </Section>
      <PageCta
        title="Need a blended team?"
        description="Most engagements combine two or more services. We'll propose a shape that matches your risk and timeline."
      />
    </>
  );
}

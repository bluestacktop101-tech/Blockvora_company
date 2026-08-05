import { PageHeader } from "@/components/common/PageHeader";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { GradientButton } from "@/components/common/GradientButton";
import { BulletList } from "./BulletList";
import { FeatureGrid } from "./FeatureGrid";
import { ChipList } from "./ChipList";
import { MetricStrip } from "./MetricStrip";
import { ProcessSteps } from "./ProcessSteps";
import { FaqList } from "./FaqList";
import { LinkCards, type LinkCardItem } from "./LinkCards";
import { PageCta } from "./PageCta";
import type { FeatureItem, FaqItem, MetricItem } from "@/content/types";

export type OfferDetailModel = {
  eyebrow: string;
  title: string;
  summary: string;
  overview: string;
  problem: string;
  challenges: string[];
  solution: string;
  capabilities: FeatureItem[];
  technologies: string[];
  process: string[];
  benefits: string[];
  outcomes?: MetricItem[];
  faqs: FaqItem[];
  related: LinkCardItem[];
  compliance?: string[];
  useCases?: string[];
};

export function OfferDetail({ model }: { model: OfferDetailModel }) {
  return (
    <>
      <PageHeader
        eyebrow={model.eyebrow}
        title={model.title}
        description={model.summary}
        actions={
          <>
            <GradientButton to="/contact">Start a Project</GradientButton>
            <GradientButton to="/case-studies" variant="outline">
              View Case Studies
            </GradientButton>
          </>
        }
      />

      <Section tone="dark" id="overview">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          <SectionHeading
            align="left"
            eyebrow="Overview"
            title="What this engagement covers"
            description={model.overview}
          />
          {model.compliance ? (
            <Reveal delay={0.08}>
              <h2 className="font-mono text-[0.7rem] tracking-[0.2em] uppercase">
                Compliance posture
              </h2>
              <div className="mt-5">
                <ChipList items={model.compliance} />
              </div>
            </Reveal>
          ) : model.outcomes ? (
            <MetricStrip items={model.outcomes} />
          ) : null}
        </div>
      </Section>

      <Section tone="surface" id="problem">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            align="left"
            eyebrow="Problem"
            title="Where initiatives stall"
            description={model.problem}
          />
          <div>
            <h2 className="font-mono text-[0.7rem] tracking-[0.2em] uppercase">
              Failure modes we see
            </h2>
            <BulletList items={model.challenges} className="mt-6" />
          </div>
        </div>
      </Section>

      <Section tone="dark" id="solution">
        <SectionHeading
          align="left"
          eyebrow="Solution"
          title="How Blockvora approaches it"
          description={model.solution}
        />
        {model.useCases ? (
          <div className="mt-12">
            <h3 className="font-mono text-[0.7rem] tracking-[0.2em] uppercase">
              Common starting points
            </h3>
            <BulletList items={model.useCases} className="mt-6 max-w-3xl" />
          </div>
        ) : null}
      </Section>

      <Section tone="surface" id="capabilities">
        <SectionHeading align="left" eyebrow="Capabilities" title="What we put in production" />
        <FeatureGrid items={model.capabilities} className="mt-12" columns={2} />
      </Section>

      <Section tone="dark" id="technology">
        <SectionHeading align="left" eyebrow="Technology" title="Stack we reach for" />
        <Reveal className="mt-10">
          <ChipList items={model.technologies} />
        </Reveal>
      </Section>

      <Section tone="surface" id="process">
        <SectionHeading
          align="left"
          eyebrow="Process"
          title="From ambiguity to operable systems"
          description="A disciplined path with evaluation and security embedded — not bolted on at the end."
        />
        <div className="mt-12">
          <ProcessSteps steps={model.process} />
        </div>
      </Section>

      <Section tone="dark" id="results">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <SectionHeading align="left" eyebrow="Results / Benefits" title="What good looks like" />
          <BulletList items={model.benefits} />
        </div>
        {model.outcomes && model.compliance ? (
          <div className="mt-12">
            <MetricStrip items={model.outcomes} />
          </div>
        ) : null}
      </Section>

      {model.related.length > 0 ? (
        <Section tone="surface" id="related">
          <SectionHeading align="left" eyebrow="Related" title="Continue exploring" />
          <LinkCards
            items={model.related}
            className="mt-12"
            columns={model.related.length === 2 ? 2 : 3}
          />
        </Section>
      ) : null}

      <Section tone="dark" id="faq">
        <SectionHeading align="left" eyebrow="FAQ" title="Questions we hear first" />
        <div className="mt-10">
          <FaqList items={model.faqs} />
        </div>
      </Section>

      <PageCta />
    </>
  );
}

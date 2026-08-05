import { PageHeader } from "@/components/common/PageHeader";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { GradientButton } from "@/components/common/GradientButton";
import { BulletList } from "./BulletList";
import { FeatureGrid } from "./FeatureGrid";
import { ChipList } from "./ChipList";
import { MetricStrip } from "./MetricStrip";
import { ProjectGallery } from "./ProjectGallery";
import { FaqList } from "./FaqList";
import { LinkCards } from "./LinkCards";
import { PageCta } from "./PageCta";
import { caseStudyCards, solutionCards } from "@/content/related";
import type { CaseStudy } from "@/content/types";

export function CaseStudyDetail({ study }: { study: CaseStudy }) {
  const related = [
    ...caseStudyCards(study.relatedCaseStudies),
    ...solutionCards(study.relatedSolutions),
  ].slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow={`${study.industry} · Case study`}
        title={study.title}
        description={study.summary}
        meta={
          <>
            <span>{study.client}</span>
            <span className="text-border" aria-hidden="true">
              /
            </span>
            <span>{study.industry}</span>
          </>
        }
        actions={
          <>
            <GradientButton to="/contact">Start a similar project</GradientButton>
            <GradientButton to="/case-studies" variant="outline">
              All case studies
            </GradientButton>
          </>
        }
      />

      <Section tone="dark" id="overview">
        <SectionHeading
          align="left"
          eyebrow="Overview"
          title="Engagement at a glance"
          description={study.overview}
        />
        <div className="mt-12">
          <MetricStrip items={study.results} />
        </div>
      </Section>

      <Section tone="surface" id="challenge">
        <SectionHeading
          align="left"
          eyebrow="Challenge"
          title="The problem as we found it"
          description={study.challenge}
        />
      </Section>

      <Section tone="dark" id="approach">
        <SectionHeading align="left" eyebrow="Approach" title="How we worked the problem" />
        <BulletList items={study.approach} ordered className="mt-10 max-w-3xl" />
      </Section>

      <Section tone="surface" id="architecture">
        <SectionHeading
          align="left"
          eyebrow="Architecture"
          title="System shape"
          description="Major building blocks that made the outcome operable — not a slide-only topology."
        />
        <FeatureGrid items={study.architecture} className="mt-12" columns={2} />
      </Section>

      <Section tone="dark" id="technology">
        <SectionHeading align="left" eyebrow="Technology stack" title="What we shipped on" />
        <Reveal className="mt-10">
          <ChipList items={study.stack} />
        </Reveal>
      </Section>

      <Section tone="surface" id="features">
        <SectionHeading align="left" eyebrow="Key features" title="Capabilities that mattered" />
        <FeatureGrid items={study.keyFeatures} className="mt-12" />
      </Section>

      <Section tone="dark" id="results">
        <SectionHeading align="left" eyebrow="Results" title="Measured impact" />
        <div className="mt-12">
          <MetricStrip items={study.results} />
        </div>
      </Section>

      <Section tone="surface" id="gallery">
        <SectionHeading
          align="left"
          eyebrow="Project gallery"
          title="Product surfaces"
          description="Representative views from the delivery — stylized for confidentiality."
        />
        <div className="mt-12">
          <ProjectGallery items={study.gallery} />
        </div>
      </Section>

      <Section tone="dark" id="related">
        <SectionHeading align="left" eyebrow="Related" title="More like this" />
        <LinkCards items={related} className="mt-12" columns={related.length === 2 ? 2 : 3} />
      </Section>

      {study.faqs.length > 0 ? (
        <Section tone="surface" id="faq">
          <SectionHeading align="left" eyebrow="FAQ" title="Project questions" />
          <div className="mt-10">
            <FaqList items={study.faqs} />
          </div>
        </Section>
      ) : null}

      <PageCta title="Have a similar challenge?" />
    </>
  );
}

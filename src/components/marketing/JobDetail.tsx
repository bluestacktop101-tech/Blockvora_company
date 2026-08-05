import { PageHeader } from "@/components/common/PageHeader";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { GradientButton } from "@/components/common/GradientButton";
import { BulletList } from "./BulletList";
import { PageCta } from "./PageCta";
import type { JobPosting } from "@/content/types";

export function JobDetail({ job }: { job: JobPosting }) {
  return (
    <>
      <PageHeader
        eyebrow={`${job.team} · ${job.type}`}
        title={job.title}
        description={job.summary}
        meta={
          <>
            <span>{job.location}</span>
            <span className="text-border" aria-hidden="true">
              /
            </span>
            <span>{job.team}</span>
            <span className="text-border" aria-hidden="true">
              /
            </span>
            <span>{job.type}</span>
          </>
        }
        actions={<GradientButton to="/contact">Apply for this role</GradientButton>}
      />

      <Section tone="dark" id="role">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-start">
          <SectionHeading
            align="left"
            eyebrow="Role"
            title="About the position"
            description={job.about}
          />
          <Reveal className="border-border/70 rounded-3xl border p-6 sm:p-8">
            <dl className="space-y-5 text-sm">
              <div>
                <dt className="text-muted-foreground font-mono text-[0.65rem] tracking-[0.18em] uppercase">
                  Location
                </dt>
                <dd className="mt-1.5 font-medium">{job.location}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground font-mono text-[0.65rem] tracking-[0.18em] uppercase">
                  Team
                </dt>
                <dd className="mt-1.5 font-medium">{job.team}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground font-mono text-[0.65rem] tracking-[0.18em] uppercase">
                  Type
                </dt>
                <dd className="mt-1.5 font-medium">{job.type}</dd>
              </div>
            </dl>
            <div className="mt-8">
              <GradientButton to="/contact" className="w-full sm:w-auto">
                Apply via contact
              </GradientButton>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="surface" id="responsibilities">
        <SectionHeading align="left" eyebrow="Responsibilities" title="What you’ll own" />
        <BulletList items={job.responsibilities} className="mt-10 max-w-3xl" />
      </Section>

      <Section tone="dark" id="requirements">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="Requirements" title="Must-haves" />
            <BulletList items={job.requirements} className="mt-8" />
          </div>
          <div>
            <SectionHeading align="left" eyebrow="Bonus" title="Nice to have" />
            <BulletList items={job.niceToHave} className="mt-8" />
          </div>
        </div>
      </Section>

      <Section tone="surface" id="benefits">
        <SectionHeading align="left" eyebrow="Benefits" title="How we take care of builders" />
        <BulletList items={job.benefits} className="mt-10 max-w-3xl" />
      </Section>

      <PageCta
        eyebrow="Application"
        title={`Apply for ${job.title}`}
        description="Include links to work you’re proud of and a short note on what you want to build next. We read every message."
        primary={{ label: "Submit application", to: "/contact" }}
        secondary={{ label: "All roles", to: "/careers" }}
      />
    </>
  );
}

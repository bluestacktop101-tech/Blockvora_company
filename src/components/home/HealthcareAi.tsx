import {
  BarChart3,
  Bot,
  Database,
  HeartPulse,
  Stethoscope,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { HealthcareVisual } from "./HealthcareVisual";

const capabilities: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "AI Healthcare Platforms",
    description: "Full-stack clinical products from data ingestion to clinician workflows.",
    icon: HeartPulse,
  },
  {
    title: "Clinical Intelligence",
    description: "Risk stratification and decision support grounded in clinical evidence.",
    icon: Stethoscope,
  },
  {
    title: "Medical Data Systems",
    description: "FHIR and HL7 interoperability with secure, auditable pipelines.",
    icon: Database,
  },
  {
    title: "AI Assistants",
    description: "Documentation, coding and triage copilots that give clinicians hours back.",
    icon: Bot,
  },
  {
    title: "Patient Platforms",
    description: "Engagement, monitoring and care-navigation patients actually use.",
    icon: UserRound,
  },
  {
    title: "Healthcare Analytics",
    description: "Population health and operational insight delivered in real time.",
    icon: BarChart3,
  },
];

export function HealthcareAi() {
  return (
    <Section id="healthcare" tone="dark" className="overflow-hidden">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-16 xl:gap-24">
        <Reveal className="order-2 lg:order-1">
          <HealthcareVisual />
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHeading
            align="left"
            eyebrow="Healthcare AI"
            title="Intelligence for the Future of Healthcare"
            description="Compliant, explainable AI for providers, payers and digital health — engineered to survive clinical review and regulatory scrutiny."
          />

          <ul className="mt-12 space-y-0">
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal as="li" key={item.title} delay={index * 0.05}>
                  <div className="group flex gap-4 border-b border-border/60 py-5 first:border-t">
                    <Icon
                      className="text-foreground mt-0.5 size-4 shrink-0"
                      aria-hidden="true"
                    />
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold tracking-tight sm:text-base">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
}

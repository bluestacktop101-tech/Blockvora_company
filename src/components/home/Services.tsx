import {
  BrainCircuit,
  Boxes,
  FileCode2,
  Layers,
  Smartphone,
  Cloud,
  PenTool,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Section } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";

const services: { title: string; blurb: string; icon: LucideIcon }[] = [
  {
    title: "AI Development",
    blurb: "Models, agents and evaluation loops in production.",
    icon: BrainCircuit,
  },
  {
    title: "Blockchain Development",
    blurb: "Networks, wallets and protocol integrations.",
    icon: Boxes,
  },
  {
    title: "Smart Contract Development",
    blurb: "Secure issuance, settlement and upgrade paths.",
    icon: FileCode2,
  },
  {
    title: "Custom Software",
    blurb: "Platforms tailored to regulated workflows.",
    icon: Layers,
  },
  {
    title: "Web & Mobile",
    blurb: "Product experiences that ship and scale.",
    icon: Smartphone,
  },
  {
    title: "Cloud & DevOps",
    blurb: "Hardened infrastructure and delivery pipelines.",
    icon: Cloud,
  },
  {
    title: "UI/UX",
    blurb: "Interfaces for complex enterprise systems.",
    icon: PenTool,
  },
  {
    title: "QA & Security",
    blurb: "Verification, audits and continuous assurance.",
    icon: ShieldCheck,
  },
];

export function Services() {
  return (
    <Section id="services" tone="light" className="overflow-hidden">
      <div className="relative grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-end lg:gap-16">
        <Reveal>
          <span className="border-invert-foreground/15 text-invert-muted inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-[0.7rem] tracking-[0.22em] uppercase">
            <span className="bg-primary size-1.5 rounded-full" />
            Services
          </span>
          <h2 className="text-invert-foreground mt-6 text-4xl leading-[1.05] font-semibold text-balance sm:text-5xl">
            Engineering Across the Full Stack
          </h2>
          <p className="text-invert-muted mt-5 max-w-md text-lg leading-relaxed text-pretty">
            From architecture and product design to secure delivery — one team that owns the
            outcome.
          </p>
          <Link
            to="/services"
            className="text-invert-foreground mt-8 inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline"
          >
            View services in detail
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-invert-muted font-mono text-[0.65rem] tracking-[0.24em] uppercase lg:text-right">
            Eight capabilities · One delivery model
          </p>
        </Reveal>
      </div>

      <ul className="relative mt-14 columns-1 gap-x-12 sm:columns-2">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Reveal
              as="li"
              key={service.title}
              delay={index * 0.04}
              className="mb-0 break-inside-avoid"
            >
              <div className="group border-invert-foreground/10 flex items-start gap-4 border-t py-6">
                <span className="text-invert-muted mt-1 font-mono text-[0.65rem] tracking-[0.18em]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-3">
                    <Icon
                      className="text-primary size-4 shrink-0"
                      aria-hidden="true"
                      strokeWidth={1.75}
                    />
                    <h3 className="text-invert-foreground text-lg font-semibold tracking-tight sm:text-xl">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-invert-muted mt-2 text-sm leading-relaxed">{service.blurb}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}

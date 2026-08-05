import { Section } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";

export function ContentPlaceholder({ label }: { label: string }) {
  return (
    <Section>
      <Reveal className="glass rounded-3xl p-10 text-center">
        <p className="font-mono text-[0.7rem] tracking-[0.22em] uppercase text-muted-foreground">
          {label}
        </p>
        <p className="mt-4 text-lg text-muted-foreground">
          Architecture ready — page content will be added next.
        </p>
      </Reveal>
    </Section>
  );
}

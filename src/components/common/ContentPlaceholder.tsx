import { Section } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";

export function ContentPlaceholder({ label }: { label: string }) {
  return (
    <Section>
      <Reveal className="border-border bg-card rounded-xl border p-10 text-center">
        <p className="text-muted-foreground font-mono text-[0.7rem] tracking-[0.16em] uppercase">
          {label}
        </p>
        <p className="text-muted-foreground mt-4 text-lg">
          Architecture ready — page content will be added next.
        </p>
      </Reveal>
    </Section>
  );
}

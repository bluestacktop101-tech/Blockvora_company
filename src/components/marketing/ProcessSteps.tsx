import { Reveal } from "@/components/common/Reveal";
import { cn } from "@/lib/utils";

export function ProcessSteps({ steps }: { steps: string[] }) {
  return (
    <ol
      className={cn(
        "grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border/70 bg-border/50",
        steps.length > 4 ? "sm:grid-cols-3 lg:grid-cols-6" : "sm:grid-cols-2 lg:grid-cols-4",
      )}
    >
      {steps.map((step, index) => (
        <Reveal as="li" key={`${step}-${index}`} delay={index * 0.03} className="min-h-0">
          <div className="bg-background hover:bg-card flex h-full min-h-[7.5rem] flex-col justify-between p-4 transition-colors duration-500 sm:min-h-[8.5rem] sm:p-5">
            <span className="text-muted-foreground font-mono text-[0.65rem] tracking-[0.2em]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-sm font-semibold tracking-tight sm:text-base">{step}</h3>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

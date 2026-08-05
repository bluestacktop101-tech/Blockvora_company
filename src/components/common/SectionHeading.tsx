import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl text-left",
        className,
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-[0.7rem] tracking-[0.22em] uppercase",
            light
              ? "border-invert-foreground/15 text-invert-muted"
              : "border-border text-muted-foreground",
          )}
        >
          <span className="bg-primary size-1.5 rounded-full" />
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "mt-6 text-4xl leading-[1.05] font-semibold text-balance sm:text-5xl",
          light ? "text-invert-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed text-pretty",
            light ? "text-invert-muted" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

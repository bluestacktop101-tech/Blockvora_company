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
        <p
          className={cn(
            "text-xs font-medium tracking-wide uppercase",
            light ? "text-invert-muted" : "text-muted-foreground",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "mt-2 text-2xl font-semibold tracking-tight text-balance sm:text-3xl",
          light ? "text-invert-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-3 text-sm leading-relaxed text-pretty sm:text-base",
            light ? "text-invert-muted" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

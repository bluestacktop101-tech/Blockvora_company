import type { FeatureItem } from "@/content/types";
import { Reveal } from "@/components/common/Reveal";
import { cn } from "@/lib/utils";

export function FeatureGrid({
  items,
  columns = 2,
  className,
}: {
  items: FeatureItem[];
  columns?: 2 | 3;
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "grid gap-6",
        columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2",
        className,
      )}
    >
      {items.map((item, index) => (
        <Reveal as="li" key={item.title} delay={index * 0.05}>
          <article className="border-border/70 h-full border-t pt-6">
            <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
            <p className="text-muted-foreground mt-2.5 text-sm leading-relaxed">
              {item.description}
            </p>
          </article>
        </Reveal>
      ))}
    </ul>
  );
}

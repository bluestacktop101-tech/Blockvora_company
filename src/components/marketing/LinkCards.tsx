import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { cn } from "@/lib/utils";

export type LinkCardItem = {
  title: string;
  description: string;
  to: string;
  meta?: string;
};

export function LinkCards({
  items,
  columns = 3,
  className,
}: {
  items: LinkCardItem[];
  columns?: 2 | 3;
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "grid gap-4",
        columns === 2 ? "md:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {items.map((item, index) => (
        <Reveal as="li" key={item.to} delay={index * 0.04}>
          <Link
            to={item.to}
            className="border-border/70 bg-card/30 hover:border-primary/40 hover:bg-card focus-visible:ring-ring group flex h-full flex-col rounded-3xl border p-6 transition-colors duration-500 focus-visible:ring-2 focus-visible:outline-none"
          >
            {item.meta ? (
              <span className="text-muted-foreground font-mono text-[0.65rem] tracking-[0.2em] uppercase">
                {item.meta}
              </span>
            ) : null}
            <div className="mt-3 flex items-start justify-between gap-3">
              <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
              <ArrowUpRight className="text-muted-foreground group-hover:text-foreground mt-1 size-4 shrink-0 transition-colors" />
            </div>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{item.description}</p>
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}

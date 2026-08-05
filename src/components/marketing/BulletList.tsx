import { Reveal } from "@/components/common/Reveal";
import { cn } from "@/lib/utils";

export function BulletList({
  items,
  className,
  ordered = false,
}: {
  items: string[];
  className?: string;
  ordered?: boolean;
}) {
  const Comp = ordered ? "ol" : "ul";
  return (
    <Comp className={cn("space-y-3", className)}>
      {items.map((item, index) => (
        <Reveal as="li" key={item} delay={index * 0.03}>
          <div className="flex gap-4">
            <span
              className="text-primary mt-2 size-1.5 shrink-0 rounded-full bg-current"
              aria-hidden="true"
            />
            <p className="text-muted-foreground text-sm leading-relaxed sm:text-[0.95rem]">
              {ordered ? (
                <span className="text-foreground mr-2 font-mono text-[0.7rem]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              ) : null}
              {item}
            </p>
          </div>
        </Reveal>
      ))}
    </Comp>
  );
}

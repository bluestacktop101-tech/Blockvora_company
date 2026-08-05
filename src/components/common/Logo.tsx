import { BrandMark } from "@/components/common/BrandMark";
import { cn } from "@/lib/utils";

export function Logo({ className, invert = false }: { className?: string; invert?: boolean }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span className="text-primary-foreground grid size-9 place-items-center rounded-xl bg-[image:var(--gradient-brand)] shadow-[var(--shadow-glow)]">
        <BrandMark className="size-[1.15rem]" />
      </span>
      <span
        className={cn(
          "font-display text-lg font-semibold tracking-tight",
          invert ? "text-invert-foreground" : "text-foreground",
        )}
      >
        Block<span className="text-gradient">vora</span>
      </span>
    </span>
  );
}

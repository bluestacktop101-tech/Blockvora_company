import { Boxes } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ className, invert = false }: { className?: string; invert?: boolean }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span className="grid size-9 place-items-center rounded-xl bg-[image:var(--gradient-brand)] shadow-[var(--shadow-glow)]">
        <Boxes className="text-primary-foreground size-5" strokeWidth={2.1} aria-hidden="true" />
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

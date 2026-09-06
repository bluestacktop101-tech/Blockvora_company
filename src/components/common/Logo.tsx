import { BrandMark } from "@/components/common/BrandMark";
import { cn } from "@/lib/utils";

export function Logo({ className, invert = false }: { className?: string; invert?: boolean }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span
        className={cn(
          "grid size-8 place-items-center rounded-md",
          invert ? "bg-invert-foreground text-invert" : "bg-foreground text-background",
        )}
      >
        <BrandMark className="size-4" />
      </span>
      <span
        className={cn(
          "text-[0.95rem] font-semibold tracking-tight",
          invert ? "text-invert-foreground" : "text-foreground",
        )}
      >
        Blockvora
      </span>
    </span>
  );
}

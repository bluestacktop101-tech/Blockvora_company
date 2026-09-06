import { cn } from "@/lib/utils";

export function Logo({ className, invert = false }: { className?: string; invert?: boolean }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <img
        src="/logo.png"
        alt=""
        width={32}
        height={32}
        className={cn(
          "size-8 rounded-md object-cover",
          invert ? "ring-1 ring-white/20" : "ring-1 ring-border",
        )}
      />
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

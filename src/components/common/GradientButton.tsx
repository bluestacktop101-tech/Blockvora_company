import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function GradientButton({
  to,
  children,
  variant = "solid",
  className,
}: {
  to: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "focus-visible:ring-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium transition-transform duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
        variant === "solid" &&
          "text-primary-foreground bg-[image:var(--gradient-brand)] shadow-[var(--shadow-glow)] hover:scale-[1.03]",
        variant === "outline" &&
          "border-border text-foreground hover:bg-secondary border hover:scale-[1.02]",
        className,
      )}
    >
      {children}
    </Link>
  );
}

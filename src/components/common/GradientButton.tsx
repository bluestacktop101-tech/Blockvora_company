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
        "focus-visible:ring-ring inline-flex min-h-10 items-center justify-center gap-2 rounded-md px-4 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none",
        variant === "solid" && "bg-foreground text-background hover:bg-foreground/90",
        variant === "outline" &&
          "border-border text-foreground hover:bg-secondary border",
        className,
      )}
    >
      {children}
    </Link>
  );
}

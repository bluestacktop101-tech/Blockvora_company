import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

export function Section({
  children,
  id,
  className,
  tone = "dark",
  containerClassName,
  size,
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  tone?: "dark" | "light" | "surface";
  containerClassName?: string;
  size?: "default" | "narrow" | "wide";
}) {
  return (
    <section
      id={id}
      className={cn(
        "section-pad relative",
        tone === "dark" && "bg-background text-foreground",
        tone === "surface" && "bg-surface text-surface-foreground",
        tone === "light" && "bg-invert text-invert-foreground",
        className,
      )}
    >
      <Container className={containerClassName} {...(size ? { size } : {})}>
        {children}
      </Container>
    </section>
  );
}

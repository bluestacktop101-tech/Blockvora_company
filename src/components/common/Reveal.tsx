import { useEffect, useState, type ElementType, type ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const variants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease },
  },
};

/** Scroll entrance — always becomes visible (failsafe if IntersectionObserver misses). */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li";
}) {
  const reduceMotion = useReducedMotion();
  const [forceShow, setForceShow] = useState(false);
  const Comp = motion[as] as ElementType;

  useEffect(() => {
    const id = window.setTimeout(() => setForceShow(true), 900);
    return () => window.clearTimeout(id);
  }, []);

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Comp
      className={cn(className)}
      variants={variants}
      initial="hidden"
      animate={forceShow ? "show" : undefined}
      whileInView="show"
      viewport={{ once: true, amount: 0.05, margin: "80px 0px" }}
      transition={{ duration: 0.45, delay, ease }}
    >
      {children}
    </Comp>
  );
}

/** Parent for staggered card/list entrances. */
export function Stagger({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul" | "ol";
}) {
  const reduceMotion = useReducedMotion();
  const [forceShow, setForceShow] = useState(false);
  const Comp = motion[as] as ElementType;

  useEffect(() => {
    const id = window.setTimeout(() => setForceShow(true), 900);
    return () => window.clearTimeout(id);
  }, []);

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Comp
      className={cn(className)}
      variants={staggerContainer}
      initial="hidden"
      animate={forceShow ? "show" : undefined}
      whileInView="show"
      viewport={{ once: true, amount: 0.05, margin: "80px 0px" }}
    >
      {children}
    </Comp>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
}) {
  const reduceMotion = useReducedMotion();
  const Comp = motion[as] as ElementType;

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Comp className={cn(className)} variants={staggerItem}>
      {children}
    </Comp>
  );
}

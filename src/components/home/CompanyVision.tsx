import { useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "motion/react";
import { Link } from "@tanstack/react-router";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const pillars = [
  {
    key: "accessible",
    title: "Accessible",
    body: "Complex systems explained and operable — not locked behind specialist theater.",
  },
  {
    key: "transparent",
    title: "Transparent",
    body: "Clear ownership, auditable decisions, and delivery you can inspect.",
  },
  {
    key: "connected",
    title: "Connected",
    body: "AI, chains, and real-world workflows linked into one coherent product.",
  },
] as const;

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: 0.08 + i * 0.035, ease: [0.22, 1, 0.36, 1] },
  }),
};

const pillarVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.35 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

/** Company vision with flowing pillar animation. */
export function CompanyVision({ className }: { className?: string } = {}) {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-12% 0px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const lineProgress = useTransform(scrollYProgress, [0.15, 0.55], [0, 1]);

  const words = siteConfig.vision.split(" ");

  return (
    <section
      ref={sectionRef}
      id="vision"
      className={cn("px-4 sm:px-6 lg:px-8", className)}
      aria-labelledby="vision-heading"
    >
      <div className="border-border bg-card overflow-hidden rounded-xl border">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
          <div className="border-border flex flex-col justify-center border-b p-6 sm:p-8 lg:border-r lg:border-b-0 lg:p-10">
            <motion.p
              className="text-muted-foreground font-mono text-[0.7rem] tracking-[0.16em] uppercase"
              initial={reduce ? false : { opacity: 0, y: 8 }}
              {...(inView ? { animate: { opacity: 1, y: 0 } } : {})}
              transition={{ duration: 0.35 }}
            >
              Company vision
            </motion.p>

            <h2 id="vision-heading" className="sr-only">
              {siteConfig.vision}
            </h2>

            <p className="mt-5 text-2xl leading-snug font-semibold tracking-tight text-balance sm:text-3xl lg:text-[2.05rem] lg:leading-[1.2]">
              {reduce ? (
                siteConfig.vision
              ) : (
                <span className="inline">
                  {words.map((word, i) => (
                    <motion.span
                      key={`${word}-${i}`}
                      className="mr-[0.28em] inline-block"
                      custom={i}
                      variants={wordVariants}
                      initial="hidden"
                      animate={inView ? "show" : "hidden"}
                    >
                      {word}
                    </motion.span>
                  ))}
                </span>
              )}
            </p>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-3"
              initial={reduce ? false : { opacity: 0, y: 10 }}
              {...(inView ? { animate: { opacity: 1, y: 0 } } : {})}
              transition={{ duration: 0.4, delay: 0.55 }}
            >
              <Link
                to="/about"
                className="bg-foreground text-background hover:bg-foreground/90 inline-flex min-h-10 items-center rounded-md px-4 text-sm font-medium"
              >
                About Blockvora
              </Link>
              <Link
                to="/contact"
                className="border-border text-foreground hover:bg-secondary inline-flex min-h-10 items-center rounded-md border px-4 text-sm font-medium"
              >
                Start a project
              </Link>
            </motion.div>
          </div>

          <div className="bg-surface relative flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <p className="text-muted-foreground mb-6 font-mono text-[0.65rem] tracking-[0.16em] uppercase">
              How we deliver
            </p>

            <div className="relative">
              {/* Flow line */}
              <div
                className="bg-border absolute top-3 bottom-3 left-[0.7rem] w-px sm:left-[0.85rem]"
                aria-hidden="true"
              />
              <motion.div
                className="bg-foreground absolute top-3 left-[0.7rem] w-px origin-top sm:left-[0.85rem]"
                style={{
                  height: "calc(100% - 1.5rem)",
                  scaleY: reduce ? 1 : lineProgress,
                }}
                aria-hidden="true"
              />

              <ol className="relative space-y-6">
                {pillars.map((pillar, index) => (
                  <motion.li
                    key={pillar.key}
                    className="relative flex gap-4 pl-0"
                    custom={index}
                    variants={pillarVariants}
                    initial={reduce ? false : "hidden"}
                    animate={inView || reduce ? "show" : "hidden"}
                  >
                    <span className="border-border bg-card text-foreground relative z-10 mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border text-[0.65rem] font-medium sm:size-7">
                      {index + 1}
                    </span>
                    <div className="min-w-0 pt-0.5">
                      <h3 className="text-base font-semibold tracking-tight">{pillar.title}</h3>
                      <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                        {pillar.body}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

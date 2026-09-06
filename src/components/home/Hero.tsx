import { lazy, Suspense } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/common/Container";

const NetworkVisual = lazy(() =>
  import("./NetworkVisual").then((module) => ({ default: module.NetworkVisual })),
);

const stats = [
  { value: "12+", label: "Years engineering" },
  { value: "180+", label: "Systems shipped" },
  { value: "$2.4B", label: "Assets tokenized" },
];

const capabilities = ["Artificial Intelligence", "Blockchain", "RWA", "Healthcare AI", "Web3"];

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:pt-44 lg:pb-28">
      <div
        className="grid-lines animate-grid-drift pointer-events-none absolute inset-0 opacity-30"
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-0 h-[42rem] bg-[image:var(--gradient-glow)] opacity-40"
        aria-hidden="true"
        {...(!reduce
          ? {
              animate: { opacity: [0.28, 0.5, 0.28], scale: [1, 1.04, 1] },
              transition: { duration: 10, repeat: Infinity, ease: "easeInOut" as const },
            }
          : {})}
      />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          <div>
            <motion.span
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="border-border text-muted-foreground inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-[0.65rem] tracking-[0.22em] uppercase"
            >
              <motion.span
                className="bg-cyan size-1.5 rounded-full"
                {...(!reduce
                  ? {
                      animate: { opacity: [1, 0.35, 1], scale: [1, 1.35, 1] },
                      transition: { duration: 2, repeat: Infinity },
                    }
                  : {})}
              />
              AI · Blockchain · RWA
            </motion.span>

            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.08, ease }}
              className="mt-7 text-[2.6rem] leading-[1.04] font-semibold text-balance sm:text-6xl lg:text-[4.2rem]"
            >
              Building the Future with{" "}
              <span className="text-gradient animate-gradient-shift">AI &amp; Blockchain</span>
            </motion.h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2, ease }}
              className="text-muted-foreground mt-7 max-w-xl text-base leading-relaxed text-pretty sm:text-lg"
            >
              Blockvora engineers intelligent software, blockchain infrastructure, RWA platforms,
              and AI-powered products for the next generation of businesses.
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32, ease }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <motion.div
                {...(!reduce
                  ? { whileHover: { scale: 1.04 }, whileTap: { scale: 0.98 } }
                  : { whileTap: { scale: 0.98 } })}
              >
                <Link
                  to="/contact"
                  className="text-primary-foreground focus-visible:ring-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-7 text-sm font-medium shadow-[var(--shadow-glow)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  Start a Project <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </motion.div>
              <motion.div
                {...(!reduce
                  ? { whileHover: { scale: 1.03 }, whileTap: { scale: 0.98 } }
                  : { whileTap: { scale: 0.98 } })}
              >
                <Link
                  to="/solutions"
                  className="border-border text-foreground hover:bg-secondary focus-visible:ring-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-7 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  Explore Solutions <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.ul
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.07, delayChildren: 0.42 } },
              }}
              className="mt-10 flex flex-wrap gap-x-5 gap-y-2"
            >
              {capabilities.map((c) => (
                <motion.li
                  key={c}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
                  }}
                  className="text-muted-foreground font-mono text-[0.68rem] tracking-[0.16em] uppercase"
                >
                  {c}
                </motion.li>
              ))}
            </motion.ul>

            <motion.dl
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.55, ease }}
              className="border-border mt-10 grid max-w-lg grid-cols-3 gap-6 border-t pt-8"
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.62 + i * 0.08, ease }}
                >
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="font-display block text-2xl font-semibold sm:text-3xl">
                      {s.value}
                    </span>
                    <span className="text-muted-foreground mt-1 block text-xs leading-snug">
                      {s.label}
                    </span>
                  </dd>
                </motion.div>
              ))}
            </motion.dl>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.92, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.05, delay: 0.18, ease }}
            className="relative min-h-[18rem] sm:min-h-[22rem]"
          >
            <Suspense
              fallback={
                <div
                  className="mx-auto aspect-square w-full max-w-[34rem] animate-pulse rounded-full bg-[image:var(--gradient-glow)] opacity-40"
                  aria-hidden="true"
                />
              }
            >
              <div className="animate-float-slow">
                <NetworkVisual />
              </div>
            </Suspense>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

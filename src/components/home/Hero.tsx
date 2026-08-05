import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Container } from "@/components/common/Container";
import { NetworkVisual } from "./NetworkVisual";

const stats = [
  { value: "12+", label: "Years engineering" },
  { value: "180+", label: "Systems shipped" },
  { value: "$2.4B", label: "Assets tokenized" },
];

const capabilities = ["Artificial Intelligence", "Blockchain", "RWA", "Healthcare AI", "Web3"];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:pt-44 lg:pb-28">
      <div
        className="grid-lines pointer-events-none absolute inset-0 opacity-30"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[42rem] bg-[image:var(--gradient-glow)] opacity-40"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="border-border text-muted-foreground inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-[0.65rem] tracking-[0.22em] uppercase"
            >
              <span className="bg-cyan size-1.5 rounded-full" />
              AI · Blockchain · RWA
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 text-[2.6rem] leading-[1.04] font-semibold text-balance sm:text-6xl lg:text-[4.2rem]"
            >
              Building the Future with <span className="text-gradient">AI &amp; Blockchain</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24 }}
              className="text-muted-foreground mt-7 max-w-xl text-base leading-relaxed text-pretty sm:text-lg"
            >
              Blockvora engineers intelligent software, blockchain infrastructure, RWA platforms,
              and AI-powered products for the next generation of businesses.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.36 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Link
                to="/contact"
                className="text-primary-foreground focus-visible:ring-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-7 text-sm font-medium shadow-[var(--shadow-glow)] transition-transform duration-300 hover:scale-[1.03] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                Start a Project <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                to="/solutions"
                className="border-border text-foreground hover:bg-secondary focus-visible:ring-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-7 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                Explore Solutions <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-x-5 gap-y-2"
            >
              {capabilities.map((c) => (
                <li
                  key={c}
                  className="text-muted-foreground font-mono text-[0.68rem] tracking-[0.16em] uppercase"
                >
                  {c}
                </li>
              ))}
            </motion.ul>

            <motion.dl
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="border-border mt-10 grid max-w-lg grid-cols-3 gap-6 border-t pt-8"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="font-display block text-2xl font-semibold sm:text-3xl">
                      {s.value}
                    </span>
                    <span className="text-muted-foreground mt-1 block text-xs leading-snug">
                      {s.label}
                    </span>
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="animate-float-slow">
              <NetworkVisual />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/common/Reveal";
import { mainProjects, statusLabel } from "@/content/projects";
import { cn } from "@/lib/utils";

const AUTO_MS = 4500;
const ease = [0.22, 1, 0.36, 1] as const;

/** Auto-playing platform image slide bar — company product showcase. */
export function FeaturedRail() {
  const reduce = useReducedMotion();
  const list = mainProjects;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const active = list[index] ?? list[0];
  const count = list.length;

  useEffect(() => {
    if (paused || count < 2) return;
    const id = window.setTimeout(() => {
      setIndex((value) => (value + 1) % count);
    }, AUTO_MS);
    return () => window.clearTimeout(id);
  }, [index, paused, count]);

  useEffect(() => {
    setProgressKey((value) => value + 1);
  }, [index]);

  useEffect(() => {
    const next = list[(index + 1) % count];
    if (!next) return;
    const img = new Image();
    img.src = next.image;
  }, [index, count, list]);

  if (!active) return null;

  function goTo(next: number) {
    setIndex(((next % count) + count) % count);
  }

  return (
    <section id="featured" className="border-border border-t">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-muted-foreground font-mono text-[0.7rem] tracking-[0.16em] uppercase">
                Platforms
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Featured prototypes
              </h2>
              <p className="text-muted-foreground mt-3 max-w-xl text-base leading-relaxed">
                Auto-advancing look at the products we are building — pause anytime.
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setPaused((value) => !value)}
                aria-label={paused ? "Resume" : "Pause"}
                className="border-border hover:bg-secondary grid size-9 place-items-center rounded-md border"
              >
                {paused ? <Play className="size-3.5" /> : <Pause className="size-3.5" />}
              </button>
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                aria-label="Previous platform"
                className="border-border hover:bg-secondary grid size-9 place-items-center rounded-md border"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => goTo(index + 1)}
                aria-label="Next platform"
                className="border-border hover:bg-secondary grid size-9 place-items-center rounded-md border"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </Reveal>

        <div className="border-border bg-card mt-8 overflow-hidden rounded-xl border shadow-[var(--shadow-elevate)]">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="border-border relative min-h-[16rem] overflow-hidden bg-muted sm:min-h-[20rem] lg:min-h-[24rem] lg:border-r">
              <AnimatePresence mode="wait" initial={false}>
                <motion.img
                  key={active.slug}
                  src={active.image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover"
                  initial={reduce ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  {...(!reduce ? { exit: { opacity: 0 } } : {})}
                  transition={reduce ? { duration: 0 } : { duration: 0.35, ease }}
                />
              </AnimatePresence>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-black/20">
                {!paused ? (
                  <motion.div
                    key={progressKey}
                    className="h-full bg-white"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: AUTO_MS / 1000, ease: "linear" }}
                  />
                ) : (
                  <div className="h-full w-full bg-white/70" />
                )}
              </div>
            </div>

            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active.slug}
                  initial={reduce ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  {...(!reduce ? { exit: { opacity: 0, y: -8 } } : {})}
                  transition={reduce ? { duration: 0 } : { duration: 0.4, ease }}
                >
                  <p className="text-muted-foreground text-xs">
                    {statusLabel(active.status)} · {active.category}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight">{active.name}</h3>
                  <p className="text-muted-foreground mt-4 max-w-xl text-sm leading-relaxed sm:text-base">
                    {active.body}
                  </p>
                  <div className="mt-6">
                    <p className="text-muted-foreground text-[0.7rem]">Intended outcome</p>
                    <p className="mt-0.5 font-medium">{active.outcome}</p>
                  </div>
                  <div className="mt-8">
                    {active.hrefSlug ? (
                      <Link
                        to={active.href}
                        params={{ slug: active.hrefSlug }}
                        className="bg-foreground text-background hover:bg-foreground/90 inline-flex min-h-10 items-center rounded-md px-4 text-sm font-medium transition-transform hover:-translate-y-0.5"
                      >
                        {active.cta}
                      </Link>
                    ) : (
                      <Link
                        to="/contact"
                        className="bg-foreground text-background hover:bg-foreground/90 inline-flex min-h-10 items-center rounded-md px-4 text-sm font-medium transition-transform hover:-translate-y-0.5"
                      >
                        {active.cta}
                      </Link>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Thumbnail slide bar */}
          <div className="border-border flex gap-2 overflow-x-auto border-t p-3 sm:p-4">
            {list.map((item, i) => (
              <button
                key={item.slug}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show ${item.name}`}
                aria-current={i === index}
                className={cn(
                  "relative h-16 w-28 shrink-0 overflow-hidden rounded-md border transition-all sm:h-20 sm:w-36",
                  i === index
                    ? "border-foreground ring-foreground/20 ring-2"
                    : "border-border opacity-70 hover:opacity-100",
                )}
              >
                <img src={item.image} alt="" loading="lazy" className="size-full object-cover" />
                <span className="absolute inset-x-0 bottom-0 bg-black/55 px-1.5 py-1 text-[0.65rem] font-medium text-white">
                  {item.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

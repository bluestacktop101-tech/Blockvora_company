import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { mainProjects } from "@/content/projects";
import { cn } from "@/lib/utils";

/** Product pack rail with real JPG covers. */
export function FeaturedRail() {
  const reduce = useReducedMotion();
  const packs = mainProjects.filter((item) => item.status === "live");
  const list = packs.length > 0 ? packs : mainProjects;
  const [index, setIndex] = useState(0);
  const active = list[index] ?? list[0];

  useEffect(() => {
    if (reduce || list.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((value) => (value + 1) % list.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, [list.length, reduce]);

  if (!active) return null;

  return (
    <section className="px-4 pt-5 sm:px-6 lg:px-8">
      <div className="border-border bg-card overflow-hidden rounded-xl border">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="border-border flex flex-col justify-center border-b p-6 sm:p-8 lg:border-r lg:border-b-0 lg:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.slug}
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                {...(!reduce ? { exit: { opacity: 0 } } : {})}
                transition={{ duration: 0.25 }}
              >
                <p className="text-muted-foreground text-xs">
                  {active.byline} · {active.codename}
                </p>
                <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  {active.name}
                </h1>
                <p className="text-muted-foreground mt-4 max-w-xl text-sm leading-relaxed sm:text-[0.95rem]">
                  {active.body}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  {active.hrefSlug ? (
                    <Link
                      to="/solutions/$slug"
                      params={{ slug: active.hrefSlug }}
                      className="bg-foreground text-background inline-flex min-h-10 items-center rounded-md px-4 text-sm font-medium"
                    >
                      {active.cta} · {active.entryValue}
                    </Link>
                  ) : (
                    <Link
                      to="/contact"
                      className="bg-foreground text-background inline-flex min-h-10 items-center rounded-md px-4 text-sm font-medium"
                    >
                      {active.cta}
                    </Link>
                  )}
                  <div className="text-sm">
                    <span className="text-muted-foreground">{active.topSignalLabel}: </span>
                    <span className="font-medium">{active.topSignal}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative min-h-[22rem] bg-[#0d0d0d] sm:min-h-[26rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`pack-${active.slug}`}
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                {...(!reduce ? { exit: { opacity: 0 } } : {})}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <img
                  src={active.image}
                  alt=""
                  className="absolute inset-0 size-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="border-border bg-background/90 absolute right-4 bottom-4 rounded-md border px-3 py-2 text-sm backdrop-blur-sm">
                  <p className="text-muted-foreground text-[0.65rem]">Top prize</p>
                  <p className="font-semibold">{active.topSignal}</p>
                </div>
                <div className="absolute bottom-4 left-4 flex -space-x-3">
                  {list
                    .filter((item) => item.slug !== active.slug)
                    .slice(0, 3)
                    .map((item) => (
                      <button
                        key={item.slug}
                        type="button"
                        onClick={() => setIndex(list.findIndex((p) => p.slug === item.slug))}
                        className="border-border size-12 overflow-hidden rounded-md border shadow-lg"
                        aria-label={`Show ${item.name}`}
                      >
                        <img src={item.image} alt="" className="size-full object-cover" />
                      </button>
                    ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="border-border flex items-center justify-between gap-3 border-t px-4 py-2.5 sm:px-6">
          <div className="flex gap-1 overflow-x-auto">
            {list.map((item, i) => (
              <button
                key={item.slug}
                type="button"
                onClick={() => setIndex(i)}
                className={cn(
                  "flex items-center gap-2 rounded-md px-2 py-1.5 text-xs whitespace-nowrap transition-colors",
                  i === index
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <img
                  src={item.image}
                  alt=""
                  className="size-5 rounded object-cover"
                />
                {item.name}
              </button>
            ))}
          </div>
          <div className="flex shrink-0 gap-1">
            <button
              type="button"
              onClick={() => setIndex((v) => (v - 1 + list.length) % list.length)}
              aria-label="Previous"
              className="border-border hover:bg-secondary grid size-8 place-items-center rounded-md border"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => setIndex((v) => (v + 1) % list.length)}
              aria-label="Next"
              className="border-border hover:bg-secondary grid size-8 place-items-center rounded-md border"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

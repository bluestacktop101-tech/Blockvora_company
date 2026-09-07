import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { homeSlides } from "@/content/slides";
import { cn } from "@/lib/utils";

const AUTO_MS = 6000;
const SLIDE_MS = 0.45;

/** Simple left–right image slider — no glass, glow, or heavy motion. */
export function HomeSlider() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const active = homeSlides[index] ?? homeSlides[0];
  const count = homeSlides.length;

  useEffect(() => {
    if (paused || count < 2) return;

    const advanceId = window.setTimeout(() => {
      setIndex((value) => (value + 1) % count);
    }, AUTO_MS);

    return () => window.clearTimeout(advanceId);
  }, [index, paused, count]);

  if (!active) return null;

  function goTo(nextIndex: number) {
    const wrapped = ((nextIndex % count) + count) % count;
    if (wrapped === index) return;
    setIndex(wrapped);
  }

  const controlBtn =
    "grid size-8 place-items-center rounded-md border border-white/25 bg-black/40 text-white hover:bg-black/55";

  return (
    <section className="px-4 pt-5 sm:px-6 lg:px-8">
      <div className="border-border relative overflow-hidden rounded-xl border bg-muted">
        <div className="relative aspect-[16/10] min-h-[18rem] overflow-hidden sm:aspect-[21/9] sm:min-h-[22rem]">
          <motion.div
            className="absolute inset-y-0 left-0 flex h-full"
            style={{ width: `${count * 100}%` }}
            animate={{ x: `${(-index * 100) / count}%` }}
            transition={reduce ? { duration: 0 } : { duration: SLIDE_MS, ease: "easeOut" }}
          >
            {homeSlides.map((slide) => (
              <div
                key={slide.id}
                className="relative h-full shrink-0"
                style={{ width: `${100 / count}%` }}
              >
                <img
                  src={slide.image}
                  alt=""
                  className="absolute inset-0 size-full object-cover"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
            ))}
          </motion.div>

          <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-end p-5 sm:p-8 lg:p-10">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active.id}
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                {...(!reduce ? { exit: { opacity: 0 } } : {})}
                transition={reduce ? { duration: 0 } : { duration: 0.2 }}
                className="pointer-events-auto max-w-xl"
              >
                <p className="text-xs font-medium text-white/75">{active.eyebrow}</p>
                <h1 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-4xl">
                  {active.title}
                </h1>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/85 sm:text-base">
                  {active.body}
                </p>
                <Link
                  to={active.cta.to}
                  className="mt-5 inline-flex min-h-10 items-center rounded-md bg-white px-4 text-sm font-medium text-zinc-900"
                >
                  {active.cta.label}
                </Link>
              </motion.div>
            </AnimatePresence>

            <div className="pointer-events-auto mt-6 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  {homeSlides.map((slide, i) => (
                    <button
                      key={slide.id}
                      type="button"
                      aria-label={`Go to slide ${i + 1}`}
                      onClick={() => goTo(i)}
                      className={cn(
                        "h-1.5 rounded-full transition-colors",
                        i === index ? "w-6 bg-white" : "w-1.5 bg-white/45 hover:bg-white/70",
                      )}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setPaused((value) => !value)}
                  aria-label={paused ? "Play slides" : "Pause slides"}
                  className={controlBtn}
                >
                  {paused ? <Play className="size-3.5" /> : <Pause className="size-3.5" />}
                </button>
              </div>
              <div className="flex gap-1">
                <button
                  type="button"
                  onClick={() => goTo(index - 1)}
                  aria-label="Previous slide"
                  className={controlBtn}
                >
                  <ChevronLeft className="size-4" />
                </button>
                <button
                  type="button"
                  onClick={() => goTo(index + 1)}
                  aria-label="Next slide"
                  className={controlBtn}
                >
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

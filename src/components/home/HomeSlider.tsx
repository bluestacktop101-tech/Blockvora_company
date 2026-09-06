import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { homeSlides } from "@/content/slides";
import { cn } from "@/lib/utils";

const AUTO_MS = 5500;
const SLIDE_MS = 1.15;
const EASE = [0.16, 1, 0.3, 1] as const;

/** Smooth left–right image slider. */
export function HomeSlider() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const active = homeSlides[index] ?? homeSlides[0];
  const count = homeSlides.length;

  useEffect(() => {
    if (paused || count < 2) return;

    const advanceId = window.setTimeout(() => {
      setDirection(1);
      setIndex((value) => (value + 1) % count);
    }, AUTO_MS);

    return () => window.clearTimeout(advanceId);
  }, [index, paused, count]);

  if (!active) return null;

  function goTo(nextIndex: number) {
    const wrapped = ((nextIndex % count) + count) % count;
    if (wrapped === index) return;

    const forward = (wrapped - index + count) % count;
    const backward = (index - wrapped + count) % count;
    setDirection(forward <= backward ? 1 : -1);
    setIndex(wrapped);
  }

  return (
    <section className="px-4 pt-5 sm:px-6 lg:px-8">
      <div className="border-border relative overflow-hidden rounded-xl border">
        <div className="relative aspect-[16/10] min-h-[18rem] overflow-hidden sm:aspect-[21/9] sm:min-h-[22rem]">
          <motion.div
            className="absolute inset-y-0 left-0 flex h-full will-change-transform"
            style={{ width: `${count * 100}%` }}
            animate={{ x: `${(-index * 100) / count}%` }}
            transition={
              reduce ? { duration: 0 } : { duration: SLIDE_MS, ease: EASE }
            }
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
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>
            ))}
          </motion.div>

          <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-end p-5 sm:p-8 lg:p-10">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={active.id}
                custom={direction}
                initial={
                  reduce ? false : { opacity: 0, x: direction > 0 ? 24 : -24 }
                }
                animate={{ opacity: 1, x: 0 }}
                exit={
                  reduce
                    ? undefined
                    : { opacity: 0, x: direction > 0 ? -24 : 24 }
                }
                transition={
                  reduce ? { duration: 0 } : { duration: 0.5, ease: EASE }
                }
                className="pointer-events-auto max-w-xl"
              >
                <p className="text-xs font-medium text-white/70">{active.eyebrow}</p>
                <h1 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-4xl">
                  {active.title}
                </h1>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
                  {active.body}
                </p>
                <Link
                  to={active.cta.to}
                  className="mt-5 inline-flex min-h-10 items-center rounded-md bg-white px-4 text-sm font-medium text-black"
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
                        "h-1.5 rounded-full transition-all duration-500 ease-out",
                        i === index ? "w-6 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70",
                      )}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setPaused((value) => !value)}
                  aria-label={paused ? "Play slides" : "Pause slides"}
                  className="grid size-8 place-items-center rounded-md border border-white/20 bg-black/30 text-white backdrop-blur-sm hover:bg-black/50"
                >
                  {paused ? <Play className="size-3.5" /> : <Pause className="size-3.5" />}
                </button>
              </div>
              <div className="flex gap-1">
                <button
                  type="button"
                  onClick={() => goTo(index - 1)}
                  aria-label="Previous slide"
                  className="grid size-8 place-items-center rounded-md border border-white/20 bg-black/30 text-white backdrop-blur-sm hover:bg-black/50"
                >
                  <ChevronLeft className="size-4" />
                </button>
                <button
                  type="button"
                  onClick={() => goTo(index + 1)}
                  aria-label="Next slide"
                  className="grid size-8 place-items-center rounded-md border border-white/20 bg-black/30 text-white backdrop-blur-sm hover:bg-black/50"
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

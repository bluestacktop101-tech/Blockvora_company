import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { homeSlides } from "@/content/slides";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const AUTO_MS = 4000;

/** Full-bleed company hero — autoplay image swap, no motion library. */
export function CompanyHero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const active = homeSlides[index] ?? homeSlides[0];
  const count = homeSlides.length;
  const nextIndex = (index + 1) % count;

  useEffect(() => {
    const next = homeSlides[nextIndex];
    if (!next) return;
    const img = new Image();
    img.src = next.image;
  }, [nextIndex]);

  useEffect(() => {
    if (paused || count < 2) return;
    const id = window.setTimeout(() => {
      setIndex((value) => (value + 1) % count);
    }, AUTO_MS);
    return () => window.clearTimeout(id);
  }, [index, paused, count]);

  if (!active) return null;

  function goTo(next: number) {
    const wrapped = ((next % count) + count) % count;
    if (wrapped === index) return;
    setIndex(wrapped);
  }

  return (
    <section className="relative isolate min-h-[min(78vh,36rem)] overflow-hidden sm:min-h-[min(80vh,40rem)]">
      <div className="absolute inset-0 bg-zinc-900">
        <img
          key={active.id}
          src={active.image}
          alt=""
          decoding="async"
          fetchPriority="high"
          loading="eager"
          className="absolute inset-0 size-full object-cover"
          draggable={false}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/40" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[min(78vh,36rem)] max-w-6xl flex-col justify-end px-4 pb-10 pt-24 sm:min-h-[min(80vh,40rem)] sm:px-6 sm:pb-12 lg:px-8 lg:pb-14">
        <div>
          <p className="text-xs font-medium tracking-[0.18em] text-white/70 uppercase">
            Technology company · {siteConfig.address}
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl lg:leading-[0.95]">
            {siteConfig.name}
          </h1>
        </div>

        <div className="mt-6 max-w-xl">
          <p className="text-lg font-medium tracking-tight text-white/95 text-balance sm:text-xl">
            {active.title}
          </p>
          <p className="mt-3 text-base leading-relaxed text-white/75 text-pretty">{active.body}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to={active.cta.to}
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-white px-5 text-sm font-medium text-zinc-900"
            >
              {active.cta.label}
            </Link>
            <Link
              to="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/30 px-5 text-sm font-medium text-white hover:bg-white/10"
            >
              Work with us
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-5">
          <div className="flex min-w-0 flex-1 flex-col gap-3 sm:max-w-md">
            <div className="flex gap-2">
              {homeSlides.map((slide, i) => (
                <button
                  key={slide.id}
                  type="button"
                  aria-label={`Show slide ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => goTo(i)}
                  className={cn(
                    "h-1.5 shrink-0 rounded-full",
                    i === index ? "w-10 bg-white" : "w-2 bg-white/35 hover:bg-white/55",
                  )}
                />
              ))}
            </div>
            <p className="text-xs text-white/55">
              {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")} · Autoplay
            </p>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setPaused((value) => !value)}
              aria-label={paused ? "Resume slideshow" : "Pause slideshow"}
              className="grid size-9 place-items-center rounded-md border border-white/25 text-white hover:bg-white/10"
            >
              {paused ? <Play className="size-3.5" /> : <Pause className="size-3.5" />}
            </button>
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Previous slide"
              className="grid size-9 place-items-center rounded-md border border-white/25 text-white hover:bg-white/10"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Next slide"
              className="grid size-9 place-items-center rounded-md border border-white/25 text-white hover:bg-white/10"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

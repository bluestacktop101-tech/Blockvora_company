import { Reveal } from "@/components/common/Reveal";
import type { GalleryItem } from "@/content/types";

export function ProjectGallery({ items }: { items: GalleryItem[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {items.map((item, index) => {
        const accent = item.accent ?? "primary";
        return (
          <Reveal as="li" key={item.title} delay={index * 0.05}>
            <figure className="border-border/70 overflow-hidden rounded-3xl border">
              <div
                className="relative flex aspect-[16/10] items-end p-6"
                style={{
                  backgroundImage: `
                    linear-gradient(135deg, color-mix(in oklab, var(--${accent}) 32%, transparent), transparent 62%),
                    linear-gradient(to right, color-mix(in oklab, oklch(1 0 0) 5%, transparent) 1px, transparent 1px),
                    linear-gradient(to bottom, color-mix(in oklab, oklch(1 0 0) 5%, transparent) 1px, transparent 1px)
                  `,
                  backgroundSize: "auto, 48px 48px, 48px 48px",
                  backgroundColor: "var(--card)",
                }}
                role="img"
                aria-label={`${item.title}: ${item.caption}`}
              >
                <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                  <div className="absolute top-6 left-6 size-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm" />
                  <div className="absolute top-10 right-8 h-20 w-28 rounded-xl border border-white/10 bg-white/5" />
                  <div className="absolute right-10 bottom-20 left-10 h-1.5 rounded-full bg-white/10" />
                  <div className="absolute right-24 bottom-14 left-10 h-1.5 rounded-full bg-white/10" />
                </div>
              </div>
              <figcaption className="bg-card/50 px-6 py-4">
                <p className="font-semibold tracking-tight">{item.title}</p>
                <p className="text-muted-foreground mt-1 text-sm">{item.caption}</p>
              </figcaption>
            </figure>
          </Reveal>
        );
      })}
    </ul>
  );
}

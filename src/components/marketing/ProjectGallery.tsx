import { Reveal } from "@/components/common/Reveal";
import type { GalleryItem } from "@/content/types";

export function ProjectGallery({ items }: { items: GalleryItem[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {items.map((item, index) => (
        <Reveal as="li" key={item.title} delay={index * 0.03}>
          <figure className="border-border overflow-hidden rounded-xl border">
            <div
              className="bg-muted relative flex aspect-[16/10] items-end p-6"
              role="img"
              aria-label={`${item.title}: ${item.caption}`}
            >
              <div className="border-border bg-card absolute top-5 left-5 size-12 rounded-md border" />
              <div className="border-border bg-card absolute top-8 right-6 h-16 w-24 rounded-md border" />
              <div className="bg-border absolute right-8 bottom-16 left-8 h-1 rounded-full" />
              <div className="bg-border absolute right-20 bottom-12 left-8 h-1 rounded-full" />
            </div>
            <figcaption className="bg-card px-5 py-4">
              <p className="font-semibold tracking-tight">{item.title}</p>
              <p className="text-muted-foreground mt-1 text-sm">{item.caption}</p>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </ul>
  );
}

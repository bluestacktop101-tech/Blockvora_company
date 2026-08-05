import { Reveal } from "@/components/common/Reveal";
import type { FaqItem } from "@/content/types";

export function FaqList({ items }: { items: FaqItem[] }) {
  if (items.length === 0) return null;

  return (
    <div className="divide-y divide-border/70 border-y border-border/70">
      {items.map((item, index) => (
        <Reveal key={item.question} delay={index * 0.04}>
          <details className="group py-5">
            <summary className="focus-visible:ring-ring cursor-pointer list-none rounded-lg text-left text-base font-semibold tracking-tight focus-visible:ring-2 focus-visible:outline-none sm:text-lg [&::-webkit-details-marker]:hidden">
              <span className="flex items-start justify-between gap-4">
                {item.question}
                <span
                  className="text-muted-foreground mt-1 font-mono text-sm transition-transform duration-300 group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </span>
            </summary>
            <p className="text-muted-foreground mt-3 max-w-3xl text-sm leading-relaxed sm:text-[0.95rem]">
              {item.answer}
            </p>
          </details>
        </Reveal>
      ))}
    </div>
  );
}

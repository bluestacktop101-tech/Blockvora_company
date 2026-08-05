import { cn } from "@/lib/utils";

/** Custom Blockvora "B" mark. */
export function BrandMark({
  className,
  title = "Blockvora",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-5", className)}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M9 7.25h8.1c3.35 0 5.9 2.05 5.9 5.05 0 1.95-1.05 3.4-2.7 4.15C22.4 17.3 23.7 18.9 23.7 21c0 3.25-2.7 5.25-6.35 5.25H9V7.25Zm4.05 3.3v4.55h3.85c1.55 0 2.45-.8 2.45-2.25s-.9-2.3-2.5-2.3h-3.8Zm0 7.85v5.05h4.35c1.75 0 2.85-.95 2.85-2.5s-1.1-2.55-2.9-2.55h-4.3Z"
        fill="currentColor"
      />
    </svg>
  );
}

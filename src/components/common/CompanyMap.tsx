import { ExternalLink, MapPin } from "lucide-react";
import { googleMapsEmbedUrl, googleMapsLink, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

/** Embedded Google Map for company HQ. */
export function CompanyMap({
  className,
  heightClassName = "h-72 sm:h-96",
  showCaption = true,
}: {
  className?: string;
  heightClassName?: string;
  showCaption?: boolean;
}) {
  const embedSrc = googleMapsEmbedUrl();
  const openHref = googleMapsLink();

  return (
    <div className={cn("border-border overflow-hidden rounded-xl border bg-card", className)}>
      {showCaption ? (
        <div className="border-border flex flex-wrap items-center justify-between gap-3 border-b px-4 py-3 sm:px-5">
          <div className="flex items-start gap-2.5">
            <MapPin className="text-muted-foreground mt-0.5 size-4 shrink-0" aria-hidden="true" />
            <div>
              <p className="text-sm font-medium">Headquarters</p>
              <p className="text-muted-foreground text-sm">{siteConfig.address}</p>
            </div>
          </div>
          <a
            href={openHref}
            target="_blank"
            rel="noreferrer"
            className="text-foreground inline-flex items-center gap-1.5 text-sm font-medium underline-offset-4 hover:underline"
          >
            Open in Google Maps
            <ExternalLink className="size-3.5 opacity-70" aria-hidden="true" />
          </a>
        </div>
      ) : null}

      <div className={cn("bg-muted relative w-full", heightClassName)}>
        <iframe
          title={`Map of ${siteConfig.address}`}
          src={embedSrc}
          className="absolute inset-0 size-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </div>
  );
}

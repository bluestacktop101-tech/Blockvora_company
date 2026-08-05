export function PendingPage() {
  return (
    <div className="section-pad" aria-busy="true" aria-live="polite">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="bg-muted/40 h-4 w-28 animate-pulse rounded-full" />
        <div className="bg-muted/50 mt-6 h-12 w-full max-w-xl animate-pulse rounded-2xl" />
        <div className="bg-muted/30 mt-4 h-6 w-full max-w-lg animate-pulse rounded-xl" />
        <div className="mt-16 grid gap-4 md:grid-cols-2">
          <div className="bg-muted/25 h-40 animate-pulse rounded-3xl" />
          <div className="bg-muted/25 h-40 animate-pulse rounded-3xl" />
        </div>
        <span className="sr-only">Loading page</span>
      </div>
    </div>
  );
}

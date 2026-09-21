import { Link } from "@tanstack/react-router";

export function BuildWithCta() {
  return (
    <section id="build-with" className="border-border border-t">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="border-border bg-invert text-invert-foreground rounded-xl border px-6 py-12 text-center sm:px-10 sm:py-14">
          <p className="text-invert-muted font-mono text-[0.7rem] tracking-[0.16em] uppercase">
            Next step
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Build with Blockvora
          </h2>
          <p className="text-invert-muted mx-auto mt-4 max-w-xl text-base leading-relaxed">
            Explore the platforms we are prototyping, or talk with us about the system you need to
            ship.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/platforms"
              className="bg-invert-foreground text-invert hover:bg-invert-foreground/90 inline-flex min-h-11 items-center justify-center rounded-md px-5 text-sm font-medium"
            >
              Explore platforms
            </Link>
            <Link
              to="/contact"
              className="border-invert-foreground/25 text-invert-foreground hover:bg-invert-foreground/10 inline-flex min-h-11 items-center justify-center rounded-md border px-5 text-sm font-medium"
            >
              Contact the team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

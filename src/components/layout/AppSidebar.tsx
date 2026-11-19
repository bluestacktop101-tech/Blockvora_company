import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  ArrowLeftRight,
  Briefcase,
  CircleUser,
  Gift,
  Home,
  Landmark,
  LayoutGrid,
  Menu,
  Trophy,
  X,
} from "lucide-react";
import { Logo } from "@/components/common/Logo";
import { productNav } from "@/config/site";
import { cn } from "@/lib/utils";

const icons = {
  Home,
  Platforms: LayoutGrid,
  Marketplace: LayoutGrid,
  Lending: Landmark,
  Borrowing: ArrowLeftRight,
  Leaderboard: Trophy,
  Profile: CircleUser,
  Careers: Briefcase,
  Redemption: Gift,
} as const;

function pathMatches(pathname: string, to: string) {
  if (to === "/") return pathname === "/";
  return pathname === to || pathname.startsWith(`${to}/`);
}

export function AppSidebar() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="border-border bg-background fixed top-3 left-3 z-50 grid size-9 place-items-center rounded-md border lg:hidden"
      >
        <Menu className="size-4" aria-hidden="true" />
      </button>

      {open ? (
        <button
          type="button"
          aria-label="Close menu overlay"
          className="fixed inset-0 z-40 bg-foreground/30 lg:hidden"
          onClick={() => setOpen(false)}
        />
      ) : null}

      <aside
        className={cn(
          "border-border bg-background fixed inset-y-0 left-0 z-50 flex w-[var(--spacing-sidebar)] flex-col border-r transition-transform duration-200 lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex items-center justify-between gap-3 px-4 py-4">
          <Link to="/" aria-label="Blockvora home" onClick={() => setOpen(false)}>
            <Logo />
          </Link>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="border-border grid size-8 place-items-center rounded-md border lg:hidden"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Primary" className="flex-1 overflow-y-auto px-2 pb-4">
          <ul className="space-y-0.5">
            {productNav.map((item) => {
              const active = pathMatches(pathname, item.to);
              const Icon = icons[item.label as keyof typeof icons] ?? LayoutGrid;
              return (
                <li key={`${item.label}-${item.to}`}>
                  <Link
                    to={item.to}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center gap-2.5 rounded-md px-3 py-2 text-[0.925rem] transition-colors",
                      active
                        ? "bg-secondary text-foreground"
                        : "text-muted-foreground hover:bg-secondary/80 hover:text-foreground",
                    )}
                  >
                    <Icon className="size-4 shrink-0 opacity-80" aria-hidden="true" />
                    <span className="flex-1">{item.label}</span>
                    {item.soon ? (
                      <span className="text-muted-foreground text-[0.7rem]">Coming soon</span>
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-border border-t p-3">
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="bg-foreground text-background inline-flex min-h-10 w-full items-center justify-center rounded-md text-sm font-medium"
          >
            Log in
          </Link>
        </div>
      </aside>
    </>
  );
}

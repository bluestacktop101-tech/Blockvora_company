import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { headerLinks, headerMenus } from "@/config/site";
import { Logo } from "@/components/common/Logo";
import { BookCallDialog, bookCallClassName } from "@/components/marketing/BookCallDialog";
import { cn } from "@/lib/utils";

function isActive(pathname: string, to: string) {
  if (to === "/") return pathname === "/";
  return pathname === to || pathname.startsWith(`${to}/`);
}

/** Company header — consulting, services, and about menus plus a strategy-call action. */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
    setMenu(null);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-white transition-shadow",
        scrolled || open ? "border-zinc-200 shadow-sm" : "border-zinc-200/80",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8"
      >
        <Link to="/" aria-label="Blockvora home" className="shrink-0">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {headerMenus.map((group) => {
            const active = group.items.some((item) => isActive(pathname, item.to));
            const expanded = menu === group.label;
            return (
              <li
                key={group.label}
                className="relative"
                onMouseEnter={() => setMenu(group.label)}
                onMouseLeave={() => setMenu(null)}
              >
                <button
                  type="button"
                  aria-expanded={expanded}
                  aria-haspopup="true"
                  onClick={() => setMenu(expanded ? null : group.label)}
                  className={cn(
                    "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm",
                    active || expanded ? "text-zinc-950" : "text-zinc-600 hover:text-zinc-950",
                  )}
                >
                  {group.label}
                  <ChevronDown className={cn("size-3.5 transition-transform", expanded && "rotate-180")} />
                </button>
                {expanded ? (
                  <div className="absolute top-full left-0 z-50 w-64 pt-2">
                    <ul className="rounded-xl border border-zinc-200 bg-white p-2 shadow-lg">
                      {group.items.map((item) => (
                        <li key={item.label}>
                          <Link
                            to={item.to}
                            className="block rounded-lg px-3 py-2.5 text-sm text-zinc-700 hover:bg-zinc-50 hover:text-zinc-950"
                          >
                            <span className="font-medium">{item.label}</span>
                            {item.description ? (
                              <span className="mt-0.5 block text-xs text-zinc-500">
                                {item.description}
                              </span>
                            ) : null}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </li>
            );
          })}
          {headerLinks.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={cn(
                  "rounded-md px-3 py-2 text-sm",
                  isActive(pathname, item.to)
                    ? "text-zinc-950"
                    : "text-zinc-600 hover:text-zinc-950",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <BookCallDialog>
            <button type="button" className={bookCallClassName("min-h-9 px-4")}>
              Book a Call
            </button>
          </BookCallDialog>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid size-10 place-items-center rounded-md border border-zinc-200 text-zinc-950 lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open ? (
        <div id="mobile-nav" className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-zinc-200 bg-white lg:hidden">
          <div className="mx-auto grid max-w-6xl gap-4 px-4 py-4 sm:px-6">
            {headerMenus.map((group) => (
              <div key={group.label}>
                <p className="px-3 text-xs font-semibold tracking-wide text-zinc-400 uppercase">
                  {group.label}
                </p>
                <ul className="mt-1">
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.to}
                        className="block rounded-md px-3 py-2.5 text-base text-zinc-800 hover:bg-zinc-50"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <ul>
              {headerLinks.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="block rounded-md px-3 py-2.5 text-base text-zinc-800 hover:bg-zinc-50"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <BookCallDialog>
              <button type="button" className={bookCallClassName("w-full")}>
                Book a Call
              </button>
            </BookCallDialog>
          </div>
        </div>
      ) : null}
    </header>
  );
}

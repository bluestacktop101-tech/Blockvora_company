import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { AppSidebar } from "./AppSidebar";
import { AppTopbar } from "./AppTopbar";
import { SiteFooter } from "./SiteFooter";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background flex min-h-screen overflow-x-clip">
      <a
        href="#main"
        className="focus:bg-foreground focus:text-background sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <AppSidebar />
      <div className="flex min-h-screen min-w-0 flex-1 flex-col lg:pl-[var(--spacing-sidebar)]">
        <div className="border-border text-muted-foreground border-b px-4 py-2 text-center text-xs">
          <span className="text-foreground mr-1.5 font-medium">New</span>
          Blockvora Protocol is currently in open beta.{" "}
          <Link to="/platforms" className="text-foreground underline-offset-2 hover:underline">
            View platforms
          </Link>
        </div>
        <AppTopbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}

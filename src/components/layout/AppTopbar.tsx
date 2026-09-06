import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";

export function AppTopbar() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const q = query.trim().toLowerCase();
    if (!q) return;
    if (q.includes("market")) void navigate({ to: "/marketplace" });
    else if (q.includes("platform") || q.includes("atlas") || q.includes("project"))
      void navigate({ to: "/platforms" });
    else if (q.includes("lend")) void navigate({ to: "/lending" });
    else if (q.includes("borrow")) void navigate({ to: "/borrowing" });
    else if (q.includes("leader")) void navigate({ to: "/leaderboard" });
    else if (q.includes("career") || q.includes("job") || q.includes("apply") || q.includes("hiring"))
      void navigate({ to: "/careers" });
    else if (q.includes("profile") || q.includes("about")) void navigate({ to: "/about" });
    else if (q.includes("contact") || q.includes("redeem")) void navigate({ to: "/contact" });
    else if (q.includes("rwa") || q.includes("eden") || q.includes("nova"))
      void navigate({ to: "/solutions/$slug", params: { slug: "rwa-tokenization" } });
    else if (q.includes("health") || q.includes("clinic"))
      void navigate({ to: "/solutions/$slug", params: { slug: "healthcare-ai" } });
    else if (q.includes("agent"))
      void navigate({ to: "/solutions/$slug", params: { slug: "ai-agents" } });
    else if (q.includes("ledger") || q.includes("chain"))
      void navigate({ to: "/solutions/$slug", params: { slug: "blockchain" } });
    else void navigate({ to: "/platforms" });
    setQuery("");
  }

  return (
    <div className="border-border bg-background sticky top-0 z-30 border-b">
      <div className="flex items-center justify-between gap-3 px-4 py-2.5 sm:px-6 lg:px-8">
        <form
          onSubmit={onSubmit}
          className="border-border bg-card ml-10 flex min-h-9 w-full max-w-md items-center gap-2 rounded-md border px-3 lg:ml-0"
          role="search"
        >
          <Search className="text-muted-foreground size-3.5 shrink-0" aria-hidden="true" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search platforms, marketplace…"
            className="placeholder:text-muted-foreground w-full bg-transparent text-sm outline-none"
            aria-label="Search"
          />
          <kbd className="text-muted-foreground border-border hidden rounded border px-1.5 py-0.5 font-mono text-[0.65rem] sm:inline">
            ⌘K
          </kbd>
        </form>

        <Link
          to="/contact"
          className="border-border hover:bg-secondary inline-flex min-h-9 shrink-0 items-center justify-center rounded-md border px-3.5 text-sm font-medium"
        >
          Log in
        </Link>
      </div>
    </div>
  );
}

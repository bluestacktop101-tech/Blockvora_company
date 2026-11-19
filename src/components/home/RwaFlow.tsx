import { Building2, Coins, Link2, ShieldCheck, Store, type LucideIcon } from "lucide-react";

const stages: { label: string; icon: LucideIcon }[] = [
  { label: "Asset", icon: Building2 },
  { label: "Tokenization", icon: Coins },
  { label: "Blockchain", icon: Link2 },
  { label: "Digital Ownership", icon: ShieldCheck },
  { label: "Marketplace", icon: Store },
];

export function RwaFlow() {
  return (
    <div className="relative">
      <ol className="relative hidden lg:grid lg:grid-cols-5">
        {stages.map((stage, index) => {
          const Icon = stage.icon;
          const isLast = index === stages.length - 1;
          return (
            <li key={stage.label} className="relative flex flex-col items-center text-center">
              <span className="border-border bg-background text-foreground relative z-10 flex size-12 items-center justify-center rounded-md border">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <span className="text-muted-foreground mt-3 font-mono text-[0.65rem] tracking-[0.16em]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="mt-1.5 text-sm font-semibold tracking-tight">{stage.label}</span>
              {!isLast ? (
                <div
                  className="bg-border absolute top-6 left-[calc(50%+1.5rem)] right-[calc(-50%+1.5rem)] h-px"
                  aria-hidden="true"
                />
              ) : null}
            </li>
          );
        })}
      </ol>

      <ol className="relative space-y-2 lg:hidden">
        {stages.map((stage, index) => {
          const Icon = stage.icon;
          return (
            <li key={stage.label}>
              <div className="border-border bg-background flex items-center gap-3 rounded-md border px-3 py-3">
                <span className="border-border flex size-9 shrink-0 items-center justify-center rounded-md border">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium tracking-tight">{stage.label}</span>
                <span className="text-muted-foreground ml-auto font-mono text-[0.65rem]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

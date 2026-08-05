import { motion } from "motion/react";
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
      {/* Desktop: horizontal pipeline */}
      <ol className="relative hidden lg:grid lg:grid-cols-5 lg:gap-0">
        {stages.map((stage, index) => {
          const Icon = stage.icon;
          const isLast = index === stages.length - 1;
          return (
            <li key={stage.label} className="relative flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex w-full flex-col items-center"
              >
                <span className="text-primary border-border bg-card relative z-10 flex size-14 items-center justify-center rounded-2xl border shadow-[var(--shadow-elevate)]">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="text-muted-foreground mt-4 font-mono text-[0.65rem] tracking-[0.2em]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-2 text-sm font-semibold tracking-tight sm:text-base">
                  {stage.label}
                </span>
              </motion.div>

              {!isLast ? (
                <div
                  className="absolute top-7 left-[calc(50%+1.75rem)] right-[calc(-50%+1.75rem)] h-px overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(90deg, color-mix(in oklab, var(--primary) 55%, transparent), color-mix(in oklab, var(--cyan) 45%, transparent))",
                  }}
                  aria-hidden="true"
                >
                  <motion.span
                    className="bg-cyan absolute top-1/2 size-1.5 -translate-y-1/2 rounded-full"
                    animate={{ left: ["0%", "100%"] }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      delay: index * 0.35,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              ) : null}
            </li>
          );
        })}
      </ol>

      {/* Mobile / tablet: vertical pipeline */}
      <ol className="relative space-y-3 lg:hidden">
        {stages.map((stage, index) => {
          const Icon = stage.icon;
          const isLast = index === stages.length - 1;
          return (
            <li key={stage.label} className="relative">
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="bg-background/70 border-border/80 relative flex items-center gap-4 rounded-2xl border px-4 py-4"
              >
                <span className="text-primary border-border bg-card/70 flex size-10 shrink-0 items-center justify-center rounded-xl border">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium tracking-tight sm:text-base">
                  {stage.label}
                </span>
                <span className="text-muted-foreground ml-auto font-mono text-[0.65rem]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </motion.div>

              {!isLast ? (
                <div
                  className="relative mx-auto my-1 h-5 w-px overflow-hidden bg-[color-mix(in_oklab,var(--primary)_35%,transparent)]"
                  aria-hidden="true"
                >
                  <motion.span
                    className="bg-cyan absolute inset-x-0 h-2 rounded-full"
                    animate={{ y: ["-8px", "22px"] }}
                    transition={{
                      duration: 1.6,
                      repeat: Infinity,
                      delay: index * 0.35,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              ) : null}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

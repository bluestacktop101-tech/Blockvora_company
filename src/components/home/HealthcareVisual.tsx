import { motion, useReducedMotion } from "motion/react";
import { Activity, BrainCircuit, FileText, Sparkles } from "lucide-react";

const signals = [
  { label: "Triage accuracy", value: "96.4%" },
  { label: "Chart review time", value: "-72%" },
  { label: "Records processed", value: "18.2M" },
];

const bars = [38, 62, 48, 80, 56, 92, 70, 84, 60, 96];
const ease = [0.22, 1, 0.36, 1] as const;

export function HealthcareVisual() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="glass relative overflow-hidden rounded-3xl p-6 sm:p-8"
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease }}
    >
      <motion.div
        className="glow-orb -right-16 -top-20 size-72"
        style={{ background: "var(--gradient-glow)" }}
        aria-hidden="true"
        {...(!reduce
          ? {
              animate: { opacity: [0.35, 0.6, 0.35] },
              transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const },
            }
          : {})}
      />

      <div className="relative flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-primary border-border bg-background/60 flex size-9 items-center justify-center rounded-xl border">
            <BrainCircuit className="size-4" aria-hidden="true" />
          </span>
          <div>
            <p className="text-sm font-semibold tracking-tight">Clinical Intelligence</p>
            <p className="text-muted-foreground font-mono text-[0.65rem] tracking-[0.18em] uppercase">
              Live cohort
            </p>
          </div>
        </div>
        <span className="text-cyan border-border/80 flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[0.65rem]">
          <motion.span
            className="bg-cyan size-1.5 rounded-full"
            {...(!reduce
              ? {
                  animate: { opacity: [1, 0.2, 1], scale: [1, 1.3, 1] },
                  transition: { duration: 1.6, repeat: Infinity },
                }
              : {})}
          />
          streaming
        </span>
      </div>

      <div className="relative mt-8 flex h-32 items-end gap-1.5" aria-hidden="true">
        {bars.map((height, index) => (
          <motion.span
            key={index}
            className="origin-bottom flex-1 rounded-t-sm opacity-80"
            style={{ backgroundImage: "var(--gradient-brand)" }}
            initial={reduce ? { height: Math.round((height / 100) * 128) } : { height: 6 }}
            whileInView={{ height: Math.round((height / 100) * 128) }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: index * 0.045, ease }}
          />
        ))}
      </div>

      <dl className="relative mt-8 grid grid-cols-3 gap-3">
        {signals.map((signal, index) => (
          <motion.div
            key={signal.label}
            className="border-border/80 bg-background/60 rounded-2xl border p-3"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 + index * 0.08, ease }}
          >
            <dt className="text-muted-foreground text-[0.68rem] leading-snug">{signal.label}</dt>
            <dd className="mt-1.5 text-lg font-semibold tracking-tight">{signal.value}</dd>
          </motion.div>
        ))}
      </dl>

      <motion.div
        className="border-border/80 bg-background/60 relative mt-4 flex items-start gap-3 rounded-2xl border p-4"
        initial={reduce ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.55, ease }}
      >
        <Sparkles className="text-violet mt-0.5 size-4 shrink-0" aria-hidden="true" />
        <p className="text-muted-foreground text-sm leading-relaxed">
          AI assistant summarized 42 encounters and flagged 3 high-risk patients for review.
        </p>
      </motion.div>

      <div className="text-muted-foreground relative mt-4 flex items-center gap-4 font-mono text-[0.65rem] tracking-[0.18em] uppercase">
        <span className="flex items-center gap-1.5">
          <FileText className="size-3.5" aria-hidden="true" /> FHIR
        </span>
        <span className="flex items-center gap-1.5">
          <Activity className="size-3.5" aria-hidden="true" /> HL7
        </span>
        <span>HIPAA</span>
      </div>
    </motion.div>
  );
}

import { motion, useReducedMotion } from "motion/react";

type Node = { id: string; x: number; y: number; r: number };

const nodes: Node[] = [
  { id: "core", x: 250, y: 250, r: 13 },
  { id: "a", x: 250, y: 90, r: 7 },
  { id: "b", x: 400, y: 155, r: 9 },
  { id: "c", x: 430, y: 330, r: 6.5 },
  { id: "d", x: 300, y: 425, r: 8.5 },
  { id: "e", x: 128, y: 388, r: 7 },
  { id: "f", x: 82, y: 210, r: 9.5 },
  { id: "g", x: 160, y: 62, r: 5.5 },
  { id: "h", x: 458, y: 232, r: 5 },
  { id: "i", x: 196, y: 175, r: 4.5 },
  { id: "j", x: 340, y: 300, r: 5 },
];

const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

const edges: [string, string][] = [
  ["core", "a"],
  ["core", "b"],
  ["core", "c"],
  ["core", "d"],
  ["core", "e"],
  ["core", "f"],
  ["core", "i"],
  ["core", "j"],
  ["a", "b"],
  ["a", "g"],
  ["g", "f"],
  ["f", "e"],
  ["e", "d"],
  ["d", "c"],
  ["c", "h"],
  ["h", "b"],
  ["i", "f"],
  ["j", "c"],
];

const flows: [string, string][] = [
  ["a", "core"],
  ["core", "c"],
  ["f", "core"],
  ["core", "d"],
  ["b", "h"],
  ["e", "f"],
];

const ease = [0.22, 1, 0.36, 1] as const;

export function NetworkVisual() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[34rem]">
      <motion.div
        className="glow-orb bg-primary/50 top-1/4 left-1/4 size-[22rem]"
        aria-hidden="true"
        {...(!reduce
          ? {
              animate: { opacity: [0.35, 0.6, 0.35], scale: [1, 1.08, 1] },
              transition: { duration: 7, repeat: Infinity, ease: "easeInOut" as const },
            }
          : {})}
      />
      <motion.div
        className="glow-orb bg-violet/40 right-4 bottom-8 size-[16rem]"
        aria-hidden="true"
        {...(!reduce
          ? {
              animate: { opacity: [0.25, 0.5, 0.25], scale: [1.05, 0.95, 1.05] },
              transition: { duration: 9, repeat: Infinity, ease: "easeInOut" as const },
            }
          : {})}
      />

      <svg
        viewBox="0 0 500 500"
        role="img"
        aria-label="Abstract diagram of a distributed AI and blockchain network with connected nodes and data flows"
        className="relative size-full"
      >
        <defs>
          <linearGradient id="bv-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--cyan)" stopOpacity="0.55" />
            <stop offset="50%" stopColor="var(--primary)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="var(--violet)" stopOpacity="0.5" />
          </linearGradient>
          <radialGradient id="bv-core" cx="50%" cy="50%">
            <stop offset="0%" stopColor="var(--cyan)" />
            <stop offset="60%" stopColor="var(--primary)" />
            <stop offset="100%" stopColor="var(--violet)" />
          </radialGradient>
          <filter id="bv-blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>

        {[110, 165, 220].map((r, i) => (
          <motion.circle
            key={r}
            cx="250"
            cy="250"
            r={r}
            fill="none"
            stroke="url(#bv-line)"
            strokeOpacity={0.22}
            strokeDasharray="2 10"
            style={{ transformOrigin: "250px 250px" }}
            {...(!reduce
              ? {
                  animate: { rotate: i % 2 === 0 ? 360 : -360 },
                  transition: { duration: 55 + i * 18, repeat: Infinity, ease: "linear" as const },
                }
              : {})}
          />
        ))}

        {edges.map(([from, to], i) => {
          const a = byId[from]!;
          const b = byId[to]!;
          return (
            <motion.line
              key={`${from}-${to}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="url(#bv-line)"
              strokeWidth={1.1}
              initial={reduce ? false : { pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.25 + i * 0.04, ease: "easeOut" }}
            />
          );
        })}

        {!reduce
          ? flows.map(([from, to], i) => {
              const a = byId[from]!;
              const b = byId[to]!;
              return (
                <motion.circle
                  key={`flow-${from}-${to}`}
                  r={2.8}
                  fill="var(--cyan)"
                  initial={{ cx: a.x, cy: a.y, opacity: 0 }}
                  animate={{ cx: [a.x, b.x], cy: [a.y, b.y], opacity: [0, 1, 1, 0] }}
                  transition={{
                    duration: 2.4,
                    delay: i * 0.4,
                    repeat: Infinity,
                    repeatDelay: 1.1,
                    ease: "easeInOut",
                  }}
                />
              );
            })
          : null}

        {nodes.map((n, i) => (
          <motion.g
            key={n.id}
            initial={reduce ? false : { opacity: 0, scale: 0.35 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.15 + i * 0.05, ease }}
            style={{ transformOrigin: `${n.x}px ${n.y}px` }}
          >
            {n.id === "core" ? (
              <>
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={34}
                  fill="url(#bv-core)"
                  opacity={0.35}
                  filter="url(#bv-blur)"
                />
                {!reduce ? (
                  <motion.circle
                    cx={n.x}
                    cy={n.y}
                    r={n.r}
                    fill="none"
                    stroke="var(--cyan)"
                    strokeWidth={1}
                    animate={{ r: [n.r, n.r * 3.4], opacity: [0.75, 0] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut" }}
                  />
                ) : null}
              </>
            ) : null}
            <circle
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill={n.id === "core" ? "url(#bv-core)" : "var(--background)"}
              stroke="url(#bv-line)"
              strokeWidth={1.4}
            />
            {n.id !== "core" ? (
              <circle cx={n.x} cy={n.y} r={n.r * 0.34} fill="var(--cyan)" opacity={0.85} />
            ) : null}
          </motion.g>
        ))}
      </svg>

      <motion.div
        className="glass absolute top-[12%] -left-2 rounded-2xl px-4 py-3 sm:left-0"
        initial={reduce ? false : { opacity: 0, x: -18, y: 12 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: 0.85, ease }}
        {...(!reduce ? { whileHover: { y: -4, transition: { duration: 0.25 } } } : {})}
      >
        <p className="text-muted-foreground font-mono text-[0.6rem] tracking-[0.2em] uppercase">
          Inference
        </p>
        <p className="mt-1 text-sm font-medium">14.2ms latency</p>
      </motion.div>

      <motion.div
        className="glass absolute right-0 bottom-[14%] rounded-2xl px-4 py-3"
        initial={reduce ? false : { opacity: 0, x: 18, y: 12 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: 1.05, ease }}
        {...(!reduce ? { whileHover: { y: -4, transition: { duration: 0.25 } } } : {})}
      >
        <p className="text-muted-foreground font-mono text-[0.6rem] tracking-[0.2em] uppercase">
          On-chain
        </p>
        <p className="mt-1 text-sm font-medium">$2.4B RWA settled</p>
      </motion.div>
    </div>
  );
}

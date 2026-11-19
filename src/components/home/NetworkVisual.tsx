/** Static network diagram — no particles, glow, or looping motion. */
export function NetworkVisual() {
  const nodes = [
    { id: "core", x: 200, y: 160, r: 18, label: "Core" },
    { id: "ai", x: 80, y: 80, r: 12, label: "AI" },
    { id: "chain", x: 320, y: 70, r: 12, label: "Chain" },
    { id: "rwa", x: 340, y: 220, r: 12, label: "RWA" },
    { id: "ops", x: 60, y: 230, r: 12, label: "Ops" },
  ] as const;

  const edges: [string, string][] = [
    ["core", "ai"],
    ["core", "chain"],
    ["core", "rwa"],
    ["core", "ops"],
    ["ai", "ops"],
    ["chain", "rwa"],
  ];

  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <div className="border-border bg-card relative overflow-hidden rounded-xl border p-4 sm:p-6">
      <svg viewBox="0 0 400 300" className="text-foreground h-auto w-full" role="img" aria-label="Delivery network diagram">
        {edges.map(([a, b]) => {
          const from = byId[a];
          const to = byId[b];
          if (!from || !to) return null;
          return (
            <line
              key={`${a}-${b}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="currentColor"
              strokeOpacity={0.18}
              strokeWidth={1.5}
            />
          );
        })}
        {nodes.map((node) => (
          <g key={node.id}>
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill="var(--card)"
              stroke="currentColor"
              strokeOpacity={0.35}
              strokeWidth={1.5}
            />
            <text
              x={node.x}
              y={node.y + node.r + 16}
              textAnchor="middle"
              className="fill-muted-foreground text-[10px]"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
      <div className="border-border bg-background absolute top-4 left-4 rounded-md border px-3 py-2 text-xs">
        Delivery network
      </div>
      <div className="border-border bg-background absolute right-4 bottom-4 rounded-md border px-3 py-2 text-xs">
        AI · Chain · RWA
      </div>
    </div>
  );
}

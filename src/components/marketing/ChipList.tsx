export function ChipList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="border-border/80 text-muted-foreground rounded-full border px-3 py-1 font-mono text-[0.65rem] tracking-[0.12em] uppercase"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

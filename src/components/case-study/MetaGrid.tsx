interface MetaGridProps {
  items: { label: string; value: string }[];
  columns?: 1 | 2;
}

export function MetaGrid({ items, columns = 2 }: MetaGridProps) {
  return (
    <div className={`grid gap-px overflow-hidden rounded-2xl border border-border bg-border ${columns === 2 ? "sm:grid-cols-2" : "grid-cols-1"}`}>
      {items.map((item) => (
        <div key={item.label} className="flex items-center justify-between gap-4 bg-surface px-6 py-4">
          <span className="text-xs font-semibold uppercase tracking-wide text-muted">{item.label}</span>
          <strong className="text-right text-sm">{item.value}</strong>
        </div>
      ))}
    </div>
  );
}

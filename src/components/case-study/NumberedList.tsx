interface NumberedListProps {
  items: { title: string; description: string; number?: string }[];
}

export function NumberedList({ items }: NumberedListProps) {
  return (
    <div className="flex flex-col gap-px overflow-hidden rounded-2xl border border-border bg-border">
      {items.map((item, index) => (
        <div key={item.title} className="flex items-center gap-6 bg-surface px-7 py-6">
          <span className="min-w-10 text-xl font-extrabold text-muted opacity-50">{item.number ?? String(index + 1).padStart(2, "0")}</span>
          <div>
            <h4 className="mb-1 text-sm font-semibold">{item.title}</h4>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

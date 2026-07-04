interface TimelineProps {
  items: { date: string; title: string; description: string; done?: boolean }[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative border-l border-border pl-10">
      {items.map((item) => (
        <div key={item.date} className="relative mb-8 last:mb-0">
          <span className={`absolute -left-[45px] top-1.5 h-3 w-3 rounded-full border-2 ${item.done ? "border-foreground bg-foreground" : "border-border"}`} />
          <div className="rounded-xl border border-border p-6">
            <span className="mb-1 block font-mono text-xs text-muted">{item.date}</span>
            <h4 className="mb-1 text-sm font-semibold">{item.title}</h4>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

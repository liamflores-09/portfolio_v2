interface FeatureGridProps {
  items: { title: string; description: string }[];
}

export function FeatureGrid({ items }: FeatureGridProps) {
  return (
    <div className="flex flex-col gap-px overflow-hidden rounded-2xl border border-border bg-border">
      {items.map((item) => (
        <div key={item.title} className="bg-surface p-7">
          <h4 className="mb-1.5 text-sm font-semibold">{item.title}</h4>
          <p className="text-sm text-muted-foreground">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

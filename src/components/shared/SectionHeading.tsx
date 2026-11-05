export function SectionHeading({ number, title, action }: { number?: string; title: string; action?: React.ReactNode }) {
  return (
    <div className="mx-auto mb-7 flex max-w-2xl items-baseline flex-wrap justify-between gap-3">
      <div className="flex items-baseline gap-5">
        {number && <span aria-hidden="true" className="font-mono text-xs text-muted">{number}</span>}
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
      </div>
      {action}
    </div>
  );
}

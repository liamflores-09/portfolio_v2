export function SectionHeading({ number, title, action }: { number: string; title: string; action?: React.ReactNode }) {
  return (
    <div className="mx-auto mb-14 flex max-w-2xl items-baseline justify-between gap-5">
      <div className="flex items-baseline gap-5">
        <span className="font-mono text-xs text-muted">{number}</span>
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
      </div>
      {action}
    </div>
  );
}

interface TocItem {
  id: string;
  label: string;
}

export function CaseStudyToc({ items }: { items: TocItem[] }) {
  return (
    <details className="mx-auto mb-6 max-w-3xl rounded-xl border border-border bg-surface px-4">
      <summary className="min-h-11 cursor-pointer py-3 text-sm font-semibold">On this page</summary>
      <nav aria-label="Case study contents">
        <ul className="grid gap-x-4 pb-2 sm:grid-cols-2">
          {items.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="nav-link px-0 text-sm text-accent capitalize sm:px-0">{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </details>
  );
}

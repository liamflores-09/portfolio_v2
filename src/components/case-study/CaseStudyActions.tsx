import Link from "next/link";

export function CaseStudyActions({ id }: { id?: string }) {
  return (
    <nav id={id} aria-label="Next steps" className="mx-auto mt-8 flex max-w-2xl flex-wrap gap-2 border-t border-border pt-6">
      <Link href="/#contact" className="action-primary">Contact Liam</Link>
      <Link href="/projects" className="action-secondary">All projects</Link>
    </nav>
  );
}

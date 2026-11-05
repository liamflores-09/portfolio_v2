import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-5 pb-12 sm:px-6 sm:pt-8">
      <Link href="/projects" className="nav-link mb-3 gap-2 px-0 text-sm font-semibold text-accent sm:px-0">
        <ArrowLeft aria-hidden="true" className="size-4" /> All projects
      </Link>
      {children}
    </div>
  );
}

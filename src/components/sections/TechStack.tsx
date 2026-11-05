import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { techStack } from "@/data/techStack";

const featuredNames = ["JavaScript", "Vue 3", "PHP", "Laravel", "PostgreSQL", "Git"];

export function TechStack() {
  const featured = techStack.flatMap((group) => group.items).filter((item) => featuredNames.includes(item.name));

  return (
    <section id="techstack" className="px-5 py-10 sm:px-6 sm:py-14">
      <SectionHeading
        title="Tech stack"
        action={
          <Link href="/tech-stack" className="nav-link gap-2 text-sm font-semibold text-accent">
            View full tech stack <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        }
      />
      <ul className="mx-auto flex max-w-2xl flex-wrap gap-2">
        {featured.map((item) => (
          <li key={item.name} className="flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-muted-foreground">
            <item.icon aria-hidden="true" className="size-4" />
            {item.name}
          </li>
        ))}
      </ul>
    </section>
  );
}

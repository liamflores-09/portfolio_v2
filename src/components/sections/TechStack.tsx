"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { useScrollBlur } from "@/lib/useScrollBlur";
import { Marquee } from "@/components/ui/marquee";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { techStack } from "@/data/techStack";

const FEATURED_NAMES = ["HTML", "JavaScript", "PHP", "Laravel", "Git", "GitHub"];

export function TechStack() {
  const allItems = techStack.flatMap((group) => group.items);
  const featuredItems = FEATURED_NAMES.map((name) => allItems.find((item) => item.name === name)!);
  const remainingCount = allItems.length - featuredItems.length;
  const { ref, blur } = useScrollBlur<HTMLDivElement>();

  return (
    <section id="techstack" className="px-6 py-24">
      <div ref={ref} style={{ filter: `blur(${blur}px)` }}>
        <SectionHeading
          number="04"
          title="tech stack"
          action={
            <Link href="/tech-stack" className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              View all
              <FaArrowRight className="h-3 w-3" />
            </Link>
          }
        />
        <div className="mx-auto mb-14 flex max-w-2xl flex-wrap gap-2">
          {featuredItems.map((item) => (
            <span
              key={item.name}
              className="flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-muted-foreground"
            >
              <item.icon className="h-3.5 w-3.5 text-muted" />
              {item.name}
            </span>
          ))}
          <Link
            href="/tech-stack"
            className="flex items-center gap-2 rounded-full border border-dotted border-border px-3 py-1.5 text-sm text-muted transition-colors hover:text-foreground"
          >
            +{remainingCount} more
          </Link>
        </div>
        <div className="mx-auto max-w-2xl">
          <Marquee pauseOnHover className="[--duration:30s]">
            {allItems.map((item) => (
              <span key={item.name} className="flex items-center gap-2 px-6 text-sm text-muted">
                <item.icon className="h-4 w-4" />
                {item.name}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

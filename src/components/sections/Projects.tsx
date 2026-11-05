"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { useScrollBlur } from "@/lib/useScrollBlur";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ProjectStack } from "./ProjectStack";
import { GitHubContributions } from "./GitHubContributions";

export function Projects() {
  const { ref, blur } = useScrollBlur<HTMLDivElement>();

  return (
    <section id="projects" className="px-6 py-24">
      <div ref={ref} style={{ filter: `blur(${blur}px)` }}>
        <SectionHeading
          number="06"
          title="projects"
          action={
            <Link href="/projects" className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              View all projects
              <FaArrowRight className="h-3 w-3" />
            </Link>
          }
        />
        <ProjectStack />
        <GitHubContributions />
      </div>
    </section>
  );
}

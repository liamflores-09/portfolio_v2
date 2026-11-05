import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredProjects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projects" aria-labelledby="work-title" className="border-y border-border bg-surface px-5 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 sm:mb-7">
          <h2 id="work-title" className="text-3xl font-bold tracking-tight">Selected work</h2>
          <Link href="/projects" className="nav-link gap-2 text-sm font-semibold text-accent">
            All projects <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {featuredProjects.map((project) => <ProjectCard key={project.title} project={project} featured />)}
        </div>
      </div>
    </section>
  );
}

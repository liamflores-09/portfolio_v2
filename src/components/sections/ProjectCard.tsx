import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ProjectThumbnail } from "@/components/shared/ProjectThumbnail";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const links = featured ? project.links.slice(0, 1) : project.links;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background">
      {project.image && (
        <div className="relative aspect-[16/9] w-full border-b border-border bg-surface">
          <ProjectThumbnail project={project} sizes="(min-width: 768px) 370px, (min-width: 640px) 50vw, 100vw" />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-2 px-5 pt-5 pb-3">
        <p className="text-xs font-semibold tracking-widest text-muted uppercase">{project.status ?? project.category}</p>
        <h3 className="text-xl leading-tight font-bold tracking-tight">{project.title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
        {links.length > 0 && (
          <div className="flex flex-wrap gap-x-4">
            {links.map((link) =>
              link.external ? (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer" data-ext-confirm-label={link.confirmationLabel} className="nav-link gap-1 px-0 text-sm font-semibold text-accent sm:px-0">
                  {link.label} <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
              ) : (
                <Link key={link.href} href={link.href} className="nav-link gap-1 px-0 text-sm font-semibold text-accent sm:px-0">
                  {link.label} <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              ),
            )}
          </div>
        )}
      </div>
    </article>
  );
}

import Link from "next/link";
import { FaArrowUpRightFromSquare, FaTriangleExclamation } from "react-icons/fa6";
import { MagicCard } from "@/components/ui/magic-card";
import { ProjectThumbnail } from "@/components/shared/ProjectThumbnail";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <MagicCard className="flex h-full flex-col overflow-hidden rounded-2xl border border-border" gradientColor="#4338ca1a">
      <div className="relative h-52 w-full bg-border">
        <ProjectThumbnail project={project} sizes="(min-width: 768px) 50vw, 100vw" />
        {project.status && (
          <span className="absolute right-3 top-3 rounded-full bg-amber-500/90 px-2.5 py-1 text-xs font-semibold text-white shadow-sm">
            {project.status}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-7">
        <span className="text-xs font-semibold tracking-widest text-muted uppercase">{project.category}</span>
        <h3 className="text-lg font-bold">{project.title}</h3>
        <p className="flex-1 text-sm text-muted-foreground">{project.description}</p>
        {project.tags && (
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted">
                {tag}
              </span>
            ))}
          </div>
        )}
        {project.notice && (
          <p className="flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-400">
            <FaTriangleExclamation className="h-3 w-3" />
            {project.notice}
          </p>
        )}
        <div className="mt-1 flex flex-wrap gap-2">
          {project.links.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
              >
                <FaArrowUpRightFromSquare className="h-3 w-3" />
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
              >
                {link.label}
              </Link>
            ),
          )}
        </div>
      </div>
    </MagicCard>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FaArrowLeft, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { projects } from "@/data/projects";
import { ProjectThumbnail } from "@/components/shared/ProjectThumbnail";

const CASE_STUDY_PATHS: Record<string, string> = {
  "Applicant Tracking System": "/projects/ats",
  "Personal Budget Tracker (MIK!)": "/projects/budget-tracker",
};

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="flex flex-col gap-6 px-6 pt-6 pb-24 md:flex-row md:gap-10 md:px-12 md:pt-10">
      <aside className="flex shrink-0 gap-3 overflow-x-auto md:sticky md:top-10 md:w-64 md:flex-col md:self-start md:overflow-visible">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 rounded-xl border border-border px-4 py-3 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground"
        >
          <FaArrowLeft className="h-3 w-3" />
          Back to Portfolio
        </Link>
        {projects.map((project) => {
          const href = CASE_STUDY_PATHS[project.title];

          if (href) {
            const isActive = pathname === href;
            return (
              <Link
                key={project.title}
                href={href}
                className={`flex shrink-0 items-center gap-3 rounded-xl border p-3 text-left transition-colors ${
                  isActive ? "border-foreground bg-surface" : "border-border hover:bg-surface"
                }`}
              >
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-border">
                  <ProjectThumbnail project={project} sizes="40px" compact />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold">{project.title}</p>
                  <p className="truncate text-xs text-muted">{project.category}</p>
                </div>
              </Link>
            );
          }

          const externalLink = project.links.find((l) => l.external) ?? project.links[0];

          if (!externalLink) {
            return (
              <div
                key={project.title}
                className="flex shrink-0 items-center gap-3 rounded-xl border border-border p-3 text-left opacity-70"
              >
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-border">
                  <ProjectThumbnail project={project} sizes="40px" compact />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">{project.title}</p>
                  <p className="truncate text-xs text-muted">{project.status ?? project.category}</p>
                </div>
              </div>
            );
          }

          return (
            <a
              key={project.title}
              href={externalLink.href}
              target="_blank"
              rel="noreferrer"
              className="flex shrink-0 items-center gap-3 rounded-xl border border-border p-3 text-left transition-colors hover:bg-surface"
            >
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-border">
                <ProjectThumbnail project={project} sizes="40px" compact />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold">{project.title}</p>
                <p className="truncate text-xs text-muted">{project.category}</p>
              </div>
              <FaArrowUpRightFromSquare className="h-3 w-3 shrink-0 text-muted" />
            </a>
          );
        })}
      </aside>
      <div className="min-w-0 flex-1">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -24, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 30, mass: 0.9 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

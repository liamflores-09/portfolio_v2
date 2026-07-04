"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { projects, type Project } from "@/data/projects";
import { ProjectThumbnail } from "@/components/shared/ProjectThumbnail";
import { ProjectCard } from "./ProjectCard";

const EXCLUDED_TITLES = new Set(["Portfolio Website", "E-commerce Department Hub"]);
const featuredProjects = projects.filter((p) => !EXCLUDED_TITLES.has(p.title));

function wrap(index: number, length: number) {
  return ((index % length) + length) % length;
}

const PEEK_SCATTER = {
  left: { x: -96, y: 16, rotate: -6 },
  right: { x: 88, y: -12, rotate: 5 },
};

function ProjectPeek({ project, side, onClick }: { project: Project; side: "left" | "right"; onClick: () => void }) {
  const scatter = PEEK_SCATTER[side];

  return (
    <AnimatePresence initial={false} mode="popLayout">
      <motion.button
        key={project.title}
        onClick={onClick}
        aria-label={`Show ${project.title}`}
        initial={{ opacity: 0, scale: 0.85, x: scatter.x * 0.6, y: scatter.y, rotate: scatter.rotate }}
        animate={{ opacity: 1, scale: 0.95, x: scatter.x, y: scatter.y, rotate: scatter.rotate }}
        exit={{ opacity: 0, scale: 0.85, x: scatter.x * 0.6, y: scatter.y, rotate: scatter.rotate }}
        whileHover={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        className="group absolute inset-0 z-10 flex flex-col overflow-hidden rounded-2xl border border-border bg-surface"
      >
        <div className="relative h-52 w-full bg-border">
          <ProjectThumbnail project={project} sizes="(min-width: 768px) 50vw, 100vw" />
        </div>
        <div className="p-7 text-left">
          <span className="text-xs font-semibold tracking-widest text-muted uppercase">{project.category}</span>
          <h3 className="text-lg font-bold">{project.title}</h3>
        </div>
        <div className="absolute inset-0 bg-black/50 transition-colors group-hover:bg-black/30" />
      </motion.button>
    </AnimatePresence>
  );
}

export function ProjectStack() {
  const [active, setActive] = useState(0);
  const prevIndex = wrap(active - 1, featuredProjects.length);
  const nextIndex = wrap(active + 1, featuredProjects.length);

  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center">
      <div className="relative w-full">
        <ProjectPeek project={featuredProjects[prevIndex]} side="left" onClick={() => setActive(prevIndex)} />
        <ProjectPeek project={featuredProjects[nextIndex]} side="right" onClick={() => setActive(nextIndex)} />
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key={featuredProjects[active].title}
            initial={{ opacity: 0, scale: 0.92, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: -12 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="relative z-20"
          >
            <ProjectCard project={featuredProjects[active]} />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mt-6 flex items-center gap-4">
        <button
          onClick={() => setActive(prevIndex)}
          aria-label="Previous project"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:text-foreground"
        >
          <FaChevronLeft className="h-3.5 w-3.5" />
        </button>
        <span className="font-mono text-xs text-muted">
          {active + 1} / {featuredProjects.length}
        </span>
        <button
          onClick={() => setActive(nextIndex)}
          aria-label="Next project"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:text-foreground"
        >
          <FaChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects | Liam Flores",
  description: "All of Liam Flores' projects, from web apps to freelance work.",
};

export default function ProjectsPage() {
  const completed = projects.filter((project) => !project.status);
  const inProgress = projects.filter((project) => project.status);

  return (
    <main id="main-content" tabIndex={-1} className="mx-auto max-w-4xl px-5 py-10 sm:px-6 sm:py-14">
      <Link href="/#projects" className="nav-link gap-2 px-0 text-sm font-semibold text-accent sm:px-0">
        <ArrowLeft aria-hidden="true" className="size-4" /> Selected work
      </Link>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">Projects</h1>
      <section aria-labelledby="completed" className="mt-9">
        <h2 id="completed" className="mb-4 text-xl font-bold">Completed work</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {completed.map((project) => <ProjectCard key={project.title} project={project} />)}
        </div>
      </section>
      <section aria-labelledby="in-progress" className="mt-9">
        <h2 id="in-progress" className="mb-4 text-xl font-bold">In progress</h2>
        {inProgress.map((project) => <ProjectCard key={project.title} project={project} />)}
      </section>
    </main>
  );
}

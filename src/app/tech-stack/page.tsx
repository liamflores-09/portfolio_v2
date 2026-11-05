import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { techStack } from "@/data/techStack";

export const metadata = {
  title: "Tech Stack | Liam Flores",
  description: "The full list of languages, frameworks, and tools Liam Flores works with.",
};

export default function TechStackPage() {
  return (
    <main id="main-content" tabIndex={-1} className="mx-auto max-w-4xl px-5 py-10 sm:px-6 sm:py-14">
      <Link
        href="/#techstack"
        className="nav-link mb-3 gap-2 px-0 text-sm font-semibold text-accent sm:px-0"
      >
        <FaArrowLeft className="h-3 w-3" />
        Back to Portfolio
      </Link>
      <div className="max-w-3xl">
        <h1 className="mb-8 text-3xl font-extrabold tracking-tight md:text-4xl">tech stack</h1>
        <div className="flex flex-col gap-10">
          {techStack.map((group) => (
            <div key={group.category}>
              <h4 className="mb-4 text-xs font-bold tracking-widest text-muted uppercase">{group.category}</h4>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item.name}
                    className="flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-muted-foreground"
                  >
                    <item.icon className="h-3.5 w-3.5 text-muted" />
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { techStack } from "@/data/techStack";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

export const metadata = {
  title: "Tech Stack | Liam Flores",
  description: "The full list of languages, frameworks, and tools Liam Flores works with.",
};

export default function TechStackPage() {
  return (
    <main className="relative overflow-hidden px-6 pt-32 pb-24 md:px-12">
      <div className="absolute inset-x-0 top-0 h-64">
        <FlickeringGrid
          className="absolute inset-0"
          squareSize={4}
          gridGap={6}
          color="#8b8b85"
          maxOpacity={0.25}
          flickerChance={0.15}
        />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
      </div>
      <Link
        href="/"
        className="absolute left-6 top-6 z-10 flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 text-sm text-muted md:left-12 md:top-8"
      >
        <FaArrowLeft className="h-3 w-3" />
        Back to Portfolio
      </Link>
      <div className="relative z-10 mx-auto max-w-2xl">
        <h1 className="mb-14 text-3xl font-extrabold tracking-tight md:text-4xl">tech stack</h1>
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

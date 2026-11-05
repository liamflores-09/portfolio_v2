import { FaCircleCheck } from "react-icons/fa6";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

interface CaseStudyHeroProps {
  badge: string;
  brand: React.ReactNode;
  title: string;
  subtitle: string;
  notice: string;
}

export function CaseStudyHero({ badge, brand, title, subtitle, notice }: CaseStudyHeroProps) {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-20 md:px-12">
      <div className="absolute inset-x-0 top-0 h-40">
        <FlickeringGrid
          className="absolute inset-0"
          squareSize={4}
          gridGap={6}
          color="#8b8b85"
          maxOpacity={0.25}
          flickerChance={0.15}
        />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-background" />
      </div>
      <div className="relative z-10 mx-auto max-w-2xl">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
          <FaCircleCheck className="h-3 w-3" />
          {badge}
        </span>
        <div className="mb-2 text-sm font-bold tracking-[0.2em] text-accent uppercase">{brand}</div>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">{title}</h1>
        <p className="mb-8 text-lg text-muted-foreground">{subtitle}</p>
        <div className="rounded-xl border-l-4 border-foreground bg-surface p-6 text-sm text-muted-foreground">{notice}</div>
      </div>
    </section>
  );
}

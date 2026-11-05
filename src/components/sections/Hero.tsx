import Image from "next/image";
import { ArrowRight, FileText } from "lucide-react";
import { hero } from "@/data/hero";

export function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-title" className="relative isolate px-5 py-9 sm:px-6 sm:py-14 lg:py-20">
      <div className="hero-pixels absolute inset-x-0 top-0 -z-10 h-44" aria-hidden="true" />
      <div className="mx-auto grid max-w-3xl items-center gap-6 sm:grid-cols-[1fr_9rem] sm:gap-10 md:grid-cols-[1fr_12rem]">
        <div>
          <div className="mb-3 flex items-center gap-2.5 text-sm font-semibold text-muted-foreground">
            <span className="relative size-11 shrink-0 overflow-hidden rounded-lg bg-surface sm:hidden">
              <Image src={hero.avatar} alt="" fill sizes="44px" className="scale-125 object-cover object-top" />
            </span>
            <p>{hero.name} <span aria-hidden="true">·</span> {hero.meta[0].label}</p>
          </div>
          <h1 id="hero-title" className="max-w-xl text-4xl leading-[1.02] font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Web developer with a UI design background
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg">{hero.subtitle}</p>
          <div className="mt-5 flex flex-wrap gap-2 sm:mt-7">
            <a href="#projects" className="action-primary">
              View selected work <ArrowRight aria-hidden="true" className="size-4" />
            </a>
            <a href={hero.resume} target="_blank" rel="noopener noreferrer" className="action-secondary">
              <FileText aria-hidden="true" className="size-4" /> View résumé (PDF)
            </a>
          </div>
        </div>
        <div className="relative hidden aspect-[2/3] overflow-hidden rounded-2xl sm:block">
          <Image src={hero.avatar} alt="Liam Flores" fill sizes="(min-width: 768px) 192px, 144px" className="origin-top scale-125 object-cover object-top" priority />
        </div>
      </div>
    </section>
  );
}

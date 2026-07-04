"use client";

import { useScrollBlur } from "@/lib/useScrollBlur";
import { MagicCard } from "@/components/ui/magic-card";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { hobbies } from "@/data/hobbies";

export function Hobbies() {
  const { ref, blur } = useScrollBlur<HTMLDivElement>();

  return (
    <section id="hobbies" className="px-6 py-24">
      <div ref={ref} style={{ filter: `blur(${blur}px)` }}>
        <SectionHeading number="08" title="hobbies" />
        <div className="mx-auto grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3">
          {hobbies.map((hobby) => (
            <MagicCard key={hobby.title} className="rounded-2xl border border-border" gradientColor="#4338ca1a">
              <div className="group flex flex-col items-center gap-3 p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition-transform duration-300 group-hover:scale-110">
                  <hobby.icon className="h-5 w-5 text-muted" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold">{hobby.title}</h4>
                  <p className="text-xs text-muted">{hobby.subtitle}</p>
                </div>
              </div>
            </MagicCard>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useScrollBlur } from "@/lib/useScrollBlur";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { BorderBeam } from "@/components/ui/border-beam";
import { experience } from "@/data/experience";

function getInitials(name: string): string {
  const words = name.split(/[\s/-]+/).filter(Boolean);
  return words
    .slice(0, 2)
    .map((word) => word[0]!.toUpperCase())
    .join("");
}

function LogoBadge({ src }: { src: string }) {
  return (
    <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-surface">
      <Image src={src} alt="" width={36} height={36} className="h-full w-full object-contain p-1.5" />
    </div>
  );
}

export function Experience() {
  const { ref, blur } = useScrollBlur<HTMLDivElement>();

  return (
    <section id="experience" className="px-6 py-24">
      <div ref={ref} style={{ filter: `blur(${blur}px)` }}>
        <SectionHeading number="02" title="experience" />
        <div className="mx-auto flex max-w-2xl flex-col gap-4">
          {experience.map((item) => (
            <div key={`${item.role}-${item.company}`} className="relative overflow-hidden rounded-2xl border border-border p-6">
              <div className="mb-3 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  {item.logos && item.logos.length > 0 ? (
                    <div className="flex shrink-0 -space-x-2">
                      {item.logos.map((src) => (
                        <LogoBadge key={src} src={src} />
                      ))}
                    </div>
                  ) : (
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-xs font-bold text-muted-foreground">
                      {getInitials(item.company)}
                    </div>
                  )}
                  <span className="text-sm font-medium text-muted-foreground">{item.company}</span>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  {item.current && (
                    <span className="rounded-full bg-foreground px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-background">
                      Current
                    </span>
                  )}
                  <span className="inline-block rounded-full border border-border px-3 py-1 font-mono text-xs text-muted">
                    {item.period}
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-semibold">{item.role}</h3>
              {item.current && <BorderBeam duration={6} size={200} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

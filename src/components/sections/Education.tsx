"use client";

import Image from "next/image";
import { useScrollBlur } from "@/lib/useScrollBlur";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { education } from "@/data/education";

function getInitials(name: string): string {
  const words = name.split(/[\s/-]+/).filter(Boolean);
  return words
    .slice(0, 2)
    .map((word) => word[0]!.toUpperCase())
    .join("");
}

export function Education() {
  const { ref, blur } = useScrollBlur<HTMLDivElement>();

  return (
    <section id="education" className="px-6 py-24">
      <div ref={ref} style={{ filter: `blur(${blur}px)` }}>
        <SectionHeading number="05" title="education" />
        <div className="mx-auto flex max-w-2xl flex-col gap-4">
          {education.map((item) => (
            <div key={item.degree} className="rounded-2xl border border-border p-6">
              <div className="mb-3 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  {item.logo ? (
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-surface">
                      <Image src={item.logo} alt="" width={36} height={36} className="h-full w-full object-contain p-1.5" />
                    </div>
                  ) : (
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-xs font-bold text-muted-foreground">
                      {getInitials(item.school)}
                    </div>
                  )}
                  <span className="text-sm font-medium text-muted-foreground">{item.school}</span>
                </div>
                <span className="inline-block shrink-0 rounded-full border border-border px-3 py-1 font-mono text-xs text-muted">
                  {item.period}
                </span>
              </div>
              <h3 className="text-xl font-bold">{item.degree}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

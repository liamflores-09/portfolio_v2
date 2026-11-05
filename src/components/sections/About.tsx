"use client";

import { useScrollBlur } from "@/lib/useScrollBlur";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Highlighter } from "@/components/ui/highlighter";
import { about } from "@/data/about";

const HIGHLIGHT_PHRASE = "Magna Cum Laude";

export function About() {
  const { ref, blur } = useScrollBlur<HTMLDivElement>();
  const [before, after] = about.text.split(HIGHLIGHT_PHRASE);

  return (
    <section id="about" className="px-6 pt-12 pb-24">
      <div ref={ref} style={{ filter: `blur(${blur}px)` }}>
        <SectionHeading number="01" title="about me" />
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          {before}
          <Highlighter action="underline" color="var(--color-accent)" isView>
            {HIGHLIGHT_PHRASE}
          </Highlighter>
          {after}
        </p>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { Lightbox } from "@/components/shared/Lightbox";
import type { CaseStudyScreenshot } from "@/data/caseStudies/ats";

export function ScreenshotGallery({ screenshots }: { screenshots: CaseStudyScreenshot[] }) {
  const [side, setSide] = useState<"client" | "admin">("client");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const trigger = useRef<HTMLButtonElement | null>(null);

  const filtered = useMemo(() => screenshots.filter((s) => s.side === side), [screenshots, side]);
  const lightboxImages = useMemo(() => filtered.map((s) => ({ src: s.src, alt: s.description, title: s.title })), [filtered]);

  return (
    <div>
      <div className="mb-8 flex justify-center gap-2">
        {(["client", "admin"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setSide(tab)}
            aria-pressed={side === tab}
            className={`min-h-11 rounded-full border px-4 py-2 text-sm font-semibold capitalize transition-colors ${
              side === tab ? "border-foreground bg-foreground text-background" : "border-border text-muted"
            }`}
          >
            {tab} Side
          </button>
        ))}
      </div>
      <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((shot, index) => (
          <button
            key={shot.src}
            aria-label={`View ${shot.title} screenshot`}
            onClick={(event) => {
              trigger.current = event.currentTarget;
              setOpenIndex(index);
            }}
            className="flex flex-col bg-surface text-left focus-visible:relative focus-visible:z-10 focus-visible:-outline-offset-2"
          >
            <div className="relative h-44 w-full bg-background">
              <Image src={shot.src} alt={shot.title} fill sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="p-5">
              <h4 className="mb-1 text-sm font-semibold">{shot.title}</h4>
              <p className="mb-2 text-xs text-muted-foreground">{shot.description}</p>
              <div className="flex flex-wrap gap-1">
                {shot.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-border px-2 py-0.5 text-[10px] text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>
      <Lightbox images={lightboxImages} openIndex={openIndex} onClose={() => setOpenIndex(null)} onIndexChange={setOpenIndex} trigger={trigger} />
    </div>
  );
}

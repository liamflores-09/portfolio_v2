"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Lightbox } from "@/components/shared/Lightbox";
import type { CaseStudyScreenshot } from "@/data/caseStudies/ats";

export function ScreenshotGallery({ screenshots }: { screenshots: CaseStudyScreenshot[] }) {
  const [side, setSide] = useState<"client" | "admin">("client");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = useMemo(() => screenshots.filter((s) => s.side === side), [screenshots, side]);
  const lightboxImages = useMemo(() => filtered.map((s) => ({ src: s.src, alt: s.title })), [filtered]);

  return (
    <div>
      <div className="mb-8 flex justify-center gap-2">
        {(["client", "admin"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setSide(tab)}
            className={`rounded-full border px-5 py-2 text-sm font-semibold capitalize transition-colors ${
              side === tab ? "border-foreground bg-foreground text-background" : "border-border text-muted"
            }`}
          >
            {tab} Side
          </button>
        ))}
      </div>
      <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((shot, index) => (
          <button key={shot.src} onClick={() => setOpenIndex(index)} className="flex flex-col bg-surface text-left">
            <div className="relative h-44 w-full bg-background">
              <Image src={shot.src} alt={shot.title} fill sizes="33vw" className="object-cover" />
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
      <Lightbox images={lightboxImages} openIndex={openIndex} onClose={() => setOpenIndex(null)} onIndexChange={setOpenIndex} />
    </div>
  );
}

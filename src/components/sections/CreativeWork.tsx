"use client";

import { useMemo, useState } from "react";
import { useScrollBlur } from "@/lib/useScrollBlur";
import { MagicCard } from "@/components/ui/magic-card";
import { Lens } from "@/components/ui/lens";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Lightbox } from "@/components/shared/Lightbox";
import { creativeWork } from "@/data/creativeWork";

const TABS = ["Digital Art", "OJT Graphics"] as const;

export function CreativeWork() {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>("Digital Art");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, blur } = useScrollBlur<HTMLDivElement>();

  const items = useMemo(() => creativeWork.filter((item) => item.category === activeTab), [activeTab]);
  const lightboxImages = useMemo(() => items.map((item) => ({ src: item.src, alt: item.category })), [items]);

  return (
    <section id="creative" className="px-6 py-24">
      <div ref={ref} style={{ filter: `blur(${blur}px)` }}>
        <SectionHeading number="07" title="creative work" />
        <div className="mx-auto mb-8 flex max-w-5xl justify-center gap-2">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${
                activeTab === tab ? "border-foreground bg-foreground text-background" : "border-border text-muted hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="mx-auto columns-2 max-w-5xl gap-3 sm:columns-3 md:columns-4">
          {items.map((item, index) => (
            <MagicCard key={item.src} className="mb-3 block break-inside-avoid cursor-pointer overflow-hidden rounded-xl" gradientColor="#4338ca1a">
              <button className="block w-full" onClick={() => setOpenIndex(index)}>
                <Lens zoomFactor={1.6} lensSize={120} ariaLabel={`Zoom into ${item.category} artwork`}>
                  {/* eslint-disable-next-line @next/next/no-img-element -- masonry needs each image's real aspect ratio, not a fixed square crop */}
                  <img src={item.src} alt={item.category} loading="lazy" className="block h-auto w-full" />
                </Lens>
              </button>
            </MagicCard>
          ))}
        </div>
      </div>
      <Lightbox images={lightboxImages} openIndex={openIndex} onClose={() => setOpenIndex(null)} onIndexChange={setOpenIndex} />
    </section>
  );
}

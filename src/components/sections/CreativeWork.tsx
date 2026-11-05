"use client";

import { useRef, useState } from "react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Lightbox } from "@/components/shared/Lightbox";
import { creativeWork } from "@/data/creativeWork";

const categories = ["Digital Art", "OJT Graphics"] as const;

export function CreativeWork() {
  const [category, setCategory] = useState<(typeof categories)[number]>("Digital Art");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const items = creativeWork.filter((item) => item.category === category);
  const lightboxImages = items.map(({ src, title, description }) => ({ src, alt: description ?? title, title }));

  return (
    <section id="creative" className="px-5 py-10 sm:px-6 sm:py-14">
      <SectionHeading title="Creative work" />
      <div className="mx-auto max-w-3xl">
        <div aria-label="Artwork category" role="group" className="mb-5 flex flex-wrap gap-2">
          {categories.map((option) => (
            <button key={option} type="button" onClick={() => setCategory(option)} aria-pressed={category === option} className={category === option ? "action-primary" : "action-secondary"}>
              {option}
            </button>
          ))}
        </div>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {items.map((item, index) => (
            <li key={item.src} className="min-w-0 rounded-xl border border-border bg-surface">
              <button
                type="button"
                aria-label={`View ${item.title}`}
                onClick={(event) => {
                  trigger.current = event.currentTarget;
                  setOpenIndex(index);
                }}
                className="flex h-full w-full flex-col rounded-xl text-left"
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- artworks use variable source dimensions */}
                <img src={item.src} alt={item.description ?? item.title} loading="lazy" className="aspect-square w-full rounded-t-xl bg-background object-contain" />
                <div className="p-3">
                  <p className="text-sm font-semibold">{item.title}</p>
                  {item.description && <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.description}</p>}
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Lightbox images={lightboxImages} openIndex={openIndex} onClose={() => setOpenIndex(null)} onIndexChange={setOpenIndex} trigger={trigger} />
    </section>
  );
}

"use client";

import Image from "next/image";
import type { RefObject } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { nextIndex, prevIndex } from "@/lib/lightbox";

interface LightboxImage {
  src: string;
  alt: string;
  title: string;
}

interface LightboxProps {
  images: LightboxImage[];
  openIndex: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
  trigger: RefObject<HTMLElement | null>;
}

export function Lightbox({ images, openIndex, onClose, onIndexChange, trigger }: LightboxProps) {
  const current = openIndex === null ? null : images[openIndex];

  return (
    <Dialog open={Boolean(current)} onOpenChange={(open) => !open && onClose()}>
      {current && openIndex !== null && (
        <DialogContent
          className="grid max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-5xl overflow-y-auto sm:max-w-5xl"
          finalFocus={trigger}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") onIndexChange(prevIndex(openIndex, images.length));
            if (event.key === "ArrowRight") onIndexChange(nextIndex(openIndex, images.length));
          }}
        >
          <DialogTitle className="pr-9">{current.title}</DialogTitle>
          <div className="relative h-[min(65dvh,42rem)]">
            <Image src={current.src} alt={current.alt} fill sizes="(min-width: 1024px) 960px, 90vw" className="object-contain" />
          </div>
          {images.length > 1 && (
            <div className="flex items-center justify-between gap-2">
              <button type="button" aria-label="Previous image" onClick={() => onIndexChange(prevIndex(openIndex, images.length))} className="action-secondary">
                <ChevronLeft aria-hidden="true" className="size-4" /> Previous
              </button>
              <p role="status" className="text-sm text-muted-foreground">{openIndex + 1} / {images.length}</p>
              <button type="button" aria-label="Next image" onClick={() => onIndexChange(nextIndex(openIndex, images.length))} className="action-secondary">
                Next <ChevronRight aria-hidden="true" className="size-4" />
              </button>
            </div>
          )}
        </DialogContent>
      )}
    </Dialog>
  );
}

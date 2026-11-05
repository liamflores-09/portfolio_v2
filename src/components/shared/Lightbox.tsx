"use client";

import Image from "next/image";
import { useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaXmark } from "react-icons/fa6";
import { nextIndex, prevIndex } from "@/lib/lightbox";

interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxProps {
  images: LightboxImage[];
  openIndex: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

export function Lightbox({ images, openIndex, onClose, onIndexChange }: LightboxProps) {
  const isOpen = openIndex !== null;

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onIndexChange(prevIndex(openIndex!, images.length));
      if (e.key === "ArrowRight") onIndexChange(nextIndex(openIndex!, images.length));
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, openIndex, images.length, onClose, onIndexChange]);

  if (!isOpen) return null;

  const current = images[openIndex];

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/95" onClick={onClose}>
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white"
      >
        <FaXmark />
      </button>
      <button
        aria-label="Previous"
        onClick={(e) => {
          e.stopPropagation();
          onIndexChange(prevIndex(openIndex, images.length));
        }}
        className="absolute left-6 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white"
      >
        <FaChevronLeft />
      </button>
      <div className="relative h-[80vh] w-[80vw]" onClick={(e) => e.stopPropagation()}>
        <Image src={current.src} alt={current.alt} fill sizes="80vw" className="object-contain" />
      </div>
      <button
        aria-label="Next"
        onClick={(e) => {
          e.stopPropagation();
          onIndexChange(nextIndex(openIndex, images.length));
        }}
        className="absolute right-6 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}

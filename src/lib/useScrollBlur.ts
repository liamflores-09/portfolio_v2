"use client";

import { useEffect, useRef, useState } from "react";

const MAX_BLUR_PX = 12;
const REVEAL_START = 0.85;
const REVEAL_END = 0.45;

export function useScrollBlur<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [blur, setBlur] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let frame: number | null = null;

    const update = () => {
      frame = null;
      const vh = window.innerHeight;
      const top = node.getBoundingClientRect().top;
      const startY = REVEAL_START * vh;
      const endY = REVEAL_END * vh;
      const progress = Math.min(Math.max((startY - top) / (startY - endY), 0), 1);
      setBlur(MAX_BLUR_PX * (1 - progress));
    };

    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame !== null) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return { ref, blur };
}

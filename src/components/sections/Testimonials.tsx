"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { useScrollBlur } from "@/lib/useScrollBlur";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "./TestimonialCard";

const FEATURED_COUNT = 3;

export function Testimonials() {
  const { ref, blur } = useScrollBlur<HTMLDivElement>();

  return (
    <section id="testimonials" className="px-6 py-24">
      <div ref={ref} style={{ filter: `blur(${blur}px)` }}>
        <SectionHeading
          number="03"
          title="testimonials"
          action={
            <Link href="/testimonials" className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              View all
              <FaArrowRight className="h-3 w-3" />
            </Link>
          }
        />
        <div className="mx-auto columns-2 max-w-2xl gap-4 sm:columns-3">
          {testimonials.slice(0, FEATURED_COUNT).map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

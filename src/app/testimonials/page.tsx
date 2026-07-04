import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "@/components/sections/TestimonialCard";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

export const metadata = {
  title: "Testimonials | Liam Flores",
  description: "What clients and collaborators say about working with Liam Flores.",
};

export default function TestimonialsPage() {
  return (
    <main className="relative overflow-hidden px-6 pb-24 pt-32 md:px-12">
      <div className="absolute inset-x-0 top-0 h-64">
        <FlickeringGrid
          className="absolute inset-0"
          squareSize={4}
          gridGap={6}
          color="#8b8b85"
          maxOpacity={0.25}
          flickerChance={0.15}
        />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
      </div>
      <Link
        href="/"
        className="absolute left-6 top-6 z-10 flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 text-sm text-muted md:left-12 md:top-8"
      >
        <FaArrowLeft className="h-3 w-3" />
        Back to Portfolio
      </Link>
      <div className="relative z-10 mx-auto max-w-2xl">
        <h1 className="mb-14 text-3xl font-extrabold tracking-tight md:text-4xl">testimonials</h1>
        <div className="columns-2 gap-4 sm:columns-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </div>
    </main>
  );
}

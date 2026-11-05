import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "@/components/sections/TestimonialCard";

export const metadata = {
  title: "Testimonials | Liam Flores",
  description: "What clients and collaborators say about working with Liam Flores.",
};

export default function TestimonialsPage() {
  return (
    <main id="main-content" tabIndex={-1} className="mx-auto max-w-4xl px-5 py-10 sm:px-6 sm:py-14">
      <Link
        href="/#testimonials"
        className="nav-link mb-3 gap-2 px-0 text-sm font-semibold text-accent sm:px-0"
      >
        <FaArrowLeft className="h-3 w-3" />
        Back to Portfolio
      </Link>
      <div className="max-w-3xl">
        <h1 className="mb-8 text-3xl font-extrabold tracking-tight md:text-4xl">testimonials</h1>
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </div>
    </main>
  );
}

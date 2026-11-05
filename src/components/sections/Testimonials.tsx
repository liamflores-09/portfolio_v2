import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const adviser = testimonials[0];

  return (
    <section id="testimonials" className="px-5 py-10 sm:px-6 sm:py-14">
      <SectionHeading
        title="Testimonials"
        action={
          <Link href="/testimonials" className="nav-link gap-2 text-sm font-semibold text-accent">
            All testimonials <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        }
      />
      <figure className="mx-auto max-w-2xl border-l-2 border-accent pl-5">
        <blockquote className="text-lg font-semibold">{adviser.quote}</blockquote>
        <figcaption className="mt-2 text-sm text-muted-foreground">{adviser.name} · {adviser.role}</figcaption>
      </figure>
    </section>
  );
}

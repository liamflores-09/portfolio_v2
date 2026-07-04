import { FaCircleCheck, FaQuoteLeft, FaUser } from "react-icons/fa6";
import { MagicCard } from "@/components/ui/magic-card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import type { Testimonial } from "@/data/testimonials";

function renderQuote(testimonial: Testimonial) {
  const { quote, tooltip } = testimonial;
  if (!tooltip) return quote;

  const index = quote.indexOf(tooltip.word);
  if (index === -1) return quote;

  const before = quote.slice(0, index);
  const match = quote.slice(index, index + tooltip.word.length);
  const after = quote.slice(index + tooltip.word.length);

  return (
    <>
      {before}
      <Tooltip>
        <TooltipTrigger render={<span className="cursor-help underline decoration-dotted underline-offset-2" />}>
          {match}
        </TooltipTrigger>
        <TooltipContent side="top">{tooltip.note}</TooltipContent>
      </Tooltip>
      {after}
    </>
  );
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <MagicCard className="mb-4 block break-inside-avoid rounded-2xl border border-border" gradientColor="#4338ca22">
      <div className="p-8">
        <FaQuoteLeft className="mb-4 h-5 w-5 text-border" />
        <p className="text-sm text-muted-foreground">{renderQuote(testimonial)}</p>
        <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background">
            <FaUser className="h-3.5 w-3.5 text-muted" />
          </div>
          <div>
            <h4 className="flex items-center gap-1.5 text-sm font-semibold">
              {testimonial.name}
              {testimonial.verified && <FaCircleCheck className="h-3 w-3 text-accent" />}
            </h4>
            <span className="text-xs text-muted">{testimonial.role}</span>
          </div>
        </div>
      </div>
    </MagicCard>
  );
}

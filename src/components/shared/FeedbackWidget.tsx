"use client";

import { useId, useRef, useState } from "react";
import { FaCommentDots, FaPaperPlane, FaRegStar, FaSpinner, FaStar } from "react-icons/fa6";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DockIcon } from "@/components/ui/dock";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { Confetti, type ConfettiRef } from "@/components/ui/confetti";
import { submitToWeb3Forms } from "@/lib/web3forms";
import { contact } from "@/data/contact";

type Status = "idle" | "sending" | "sent" | "error";

const FIELD_CLASSES =
  "w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm outline-none transition-colors focus:border-accent";

export function FeedbackWidget({
  iconClassName,
  variant = "dock",
}: {
  iconClassName: string;
  variant?: "dock" | "plain";
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const confettiRef = useRef<ConfettiRef>(null);
  const nameId = useId();
  const emailId = useId();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", contact.web3formsAccessKey);
    formData.append("subject", "New Portfolio Feedback");
    formData.append("rating", rating ? `${rating}/5` : "Not rated");
    const success = await submitToWeb3Forms(formData);
    setStatus(success ? "sent" : "error");
    if (success) {
      e.currentTarget.reset();
      setRating(0);
      confettiRef.current?.fire({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    }
  }

  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) setStatus("idle");
      }}
    >
      {variant === "dock" ? (
        <DockIcon>
          <Tooltip>
            <TooltipTrigger
              render={
                <DialogTrigger aria-label="Send feedback" className="flex h-full w-full items-center justify-center text-foreground" />
              }
            >
              <FaCommentDots className={iconClassName} />
            </TooltipTrigger>
            <TooltipContent side="top">Feedback</TooltipContent>
          </Tooltip>
        </DockIcon>
      ) : (
        <DialogTrigger
          aria-label="Send feedback"
          className="flex min-h-11 min-w-11 items-center justify-center rounded-full text-foreground"
        >
          <FaCommentDots className={iconClassName} />
        </DialogTrigger>
      )}
      <DialogContent className="flex flex-col gap-0 overflow-hidden p-0 sm:max-w-md" showCloseButton>
        <Confetti ref={confettiRef} manualstart className="pointer-events-none absolute inset-0 z-50 h-full w-full" />
        <div className="relative overflow-hidden px-6 pb-5 pt-8">
          <div className="absolute inset-x-0 top-0 h-24">
            <FlickeringGrid
              className="absolute inset-0"
              squareSize={3}
              gridGap={5}
              color="#8b8b85"
              maxOpacity={0.25}
              flickerChance={0.15}
            />
            <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-b from-transparent to-popover" />
          </div>
          <div className="relative z-10">
            <DialogTitle>Feedback</DialogTitle>
            <DialogDescription>Quick thoughts on the portfolio -- what worked, what didn&apos;t.</DialogDescription>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 border-t border-border px-6 pb-6 pt-5">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor={nameId} className="sr-only">
                Name (optional)
              </label>
              <input id={nameId} type="text" name="name" placeholder="Name (optional)" className={FIELD_CLASSES} />
            </div>
            <div>
              <label htmlFor={emailId} className="sr-only">
                Email (optional)
              </label>
              <input id={emailId} type="email" name="email" placeholder="Email (optional)" className={FIELD_CLASSES} />
            </div>
          </div>

          <div>
            <p className="mb-1.5 text-xs font-bold tracking-widest text-muted uppercase">How would you rate this portfolio?</p>
            <div className="flex items-center gap-1" onMouseLeave={() => setHoverRating(0)}>
              {[1, 2, 3, 4, 5].map((value) => {
                const filled = (hoverRating || rating) >= value;
                return (
                  <button
                    key={value}
                    type="button"
                    aria-label={`Rate ${value} out of 5`}
                    onMouseEnter={() => setHoverRating(value)}
                    onClick={() => setRating(value)}
                    className="p-0.5 text-accent transition-transform hover:scale-110"
                  >
                    {filled ? <FaStar className="h-5 w-5" /> : <FaRegStar className="h-5 w-5" />}
                  </button>
                );
              })}
            </div>
          </div>

          <textarea name="liked" placeholder="What did you like?" rows={2} className={`resize-none ${FIELD_CLASSES}`} />
          <textarea name="improve" placeholder="What could be improved?" rows={2} className={`resize-none ${FIELD_CLASSES}`} />
          <textarea name="message" placeholder="Any other thoughts?" rows={2} className={`resize-none ${FIELD_CLASSES}`} />

          <button
            type="submit"
            disabled={status === "sending"}
            className="flex w-fit items-center gap-2 rounded-lg bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-85 disabled:opacity-60"
          >
            {status === "sending" ? <FaSpinner className="h-3.5 w-3.5 animate-spin" /> : <FaPaperPlane className="h-3.5 w-3.5" />}
            {status === "sending" ? "Sending..." : "Submit Feedback"}
          </button>

          {status === "sent" && (
            <p className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-600 dark:text-emerald-400">
              Thanks for your feedback! Your input helps me improve.
            </p>
          )}
          {status === "error" && (
            <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-400">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
}

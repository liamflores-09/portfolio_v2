"use client";

import { useId, useRef, useState } from "react";
import { FaPaperPlane, FaSpinner } from "react-icons/fa6";
import { useScrollBlur } from "@/lib/useScrollBlur";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { MagicCard } from "@/components/ui/magic-card";
import { Confetti, type ConfettiRef } from "@/components/ui/confetti";
import { submitToWeb3Forms } from "@/lib/web3forms";
import { contact } from "@/data/contact";

type Status = "idle" | "sending" | "sent" | "error";

const FIELD_CLASSES =
  "rounded-lg border border-border bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-accent";
const LABEL_CLASSES = "mb-1.5 block text-xs font-bold tracking-widest text-muted uppercase";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const { ref, blur } = useScrollBlur<HTMLDivElement>();
  const confettiRef = useRef<ConfettiRef>(null);
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", contact.web3formsAccessKey);
    formData.append("subject", "New Contact from Portfolio");
    const success = await submitToWeb3Forms(formData);
    setStatus(success ? "sent" : "error");
    if (success) {
      e.currentTarget.reset();
      confettiRef.current?.fire({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
    }
  }

  return (
    <section id="contact" className="px-6 py-24">
      <div ref={ref} style={{ filter: `blur(${blur}px)` }}>
        <SectionHeading number="09" title="contact" />
        <MagicCard className="mx-auto max-w-xl overflow-hidden rounded-2xl border border-border" gradientColor="#4338ca1a">
          <Confetti
            ref={confettiRef}
            manualstart
            className="pointer-events-none absolute inset-0 z-50 h-full w-full"
          />
          <div className="relative overflow-hidden px-8 pb-6 pt-10">
            <div className="absolute inset-x-0 top-0 h-32">
              <FlickeringGrid
                className="absolute inset-0"
                squareSize={4}
                gridGap={6}
                color="#8b8b85"
                maxOpacity={0.25}
                flickerChance={0.15}
              />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-background" />
            </div>
            <div className="relative z-10">
              <h3 className="mb-3 text-3xl font-extrabold">{contact.heading}</h3>
              <p className="mb-9 text-muted-foreground">{contact.text}</p>
              <div className="flex flex-wrap gap-3">
                {contact.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-foreground hover:text-background"
                  >
                    <link.icon className="h-4 w-4" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 border-t border-border p-8">
            <div>
              <label htmlFor={nameId} className={LABEL_CLASSES}>
                Name
              </label>
              <input id={nameId} type="text" name="name" placeholder="Your name" required className={`w-full ${FIELD_CLASSES}`} />
            </div>
            <div>
              <label htmlFor={emailId} className={LABEL_CLASSES}>
                Email
              </label>
              <input id={emailId} type="email" name="email" placeholder="you@example.com" required className={`w-full ${FIELD_CLASSES}`} />
            </div>
            <div>
              <label htmlFor={messageId} className={LABEL_CLASSES}>
                Message
              </label>
              <textarea
                id={messageId}
                name="message"
                placeholder="Tell me about your project"
                rows={4}
                required
                className={`w-full resize-none ${FIELD_CLASSES}`}
              />
            </div>
            <InteractiveHoverButton type="submit" disabled={status === "sending"} className="w-fit">
              <span className="flex items-center gap-2">
                {status === "sending" ? <FaSpinner className="h-3.5 w-3.5 animate-spin" /> : <FaPaperPlane className="h-3.5 w-3.5" />}
                {status === "sending" ? "Sending..." : "Send Message"}
              </span>
            </InteractiveHoverButton>
            {status === "sent" && (
              <p className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-600 dark:text-emerald-400">
                Thanks for reaching out. I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-400">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </MagicCard>
      </div>
    </section>
  );
}

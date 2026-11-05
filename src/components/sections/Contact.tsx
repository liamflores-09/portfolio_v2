"use client";

import { useId, useRef, useState } from "react";
import { Mail, Send } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { submitToWeb3Forms } from "@/lib/web3forms";
import { contact } from "@/data/contact";

type Status = "idle" | "sending" | "sent" | "error";

const FIELD_CLASSES = "w-full rounded-lg border border-muted bg-surface px-3 py-3 text-base disabled:opacity-65";
const LABEL_CLASSES = "mb-1.5 block text-sm font-semibold";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const inFlight = useRef(false);
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", contact.web3formsAccessKey);
    formData.append("subject", "New Contact from Portfolio");

    inFlight.current = true;
    setStatus("sending");
    const success = await submitToWeb3Forms(formData);
    if (success) form.reset();
    inFlight.current = false;
    setStatus(success ? "sent" : "error");
  }

  return (
    <section id="contact" className="border-t border-border bg-surface px-5 py-10 sm:px-6 sm:py-14">
      <SectionHeading title="Contact Liam" />
      <div className="mx-auto grid max-w-2xl gap-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        <div>
          <p className="text-lg font-semibold">Hiring, collaboration, or a project?</p>
          <p className="mt-1 text-muted-foreground">Send me a note using the form or email me directly.</p>
          <a href={contact.links[0].href} className="mt-4 inline-flex min-h-11 max-w-full items-center gap-2 rounded text-sm font-semibold break-all text-accent hover:underline">
            <Mail aria-hidden="true" className="size-4 shrink-0" />
            {contact.links[0].href.slice("mailto:".length)}
          </a>
        </div>
        <form onSubmit={handleSubmit} className="min-w-0">
          <fieldset disabled={status === "sending"} className="flex min-w-0 flex-col gap-4">
            <div>
              <label htmlFor={nameId} className={LABEL_CLASSES}>Name</label>
              <input id={nameId} type="text" name="name" autoComplete="name" required className={FIELD_CLASSES} />
            </div>
            <div>
              <label htmlFor={emailId} className={LABEL_CLASSES}>Email</label>
              <input id={emailId} type="email" name="email" autoComplete="email" required className={FIELD_CLASSES} />
            </div>
            <div>
              <label htmlFor={messageId} className={LABEL_CLASSES}>Message</label>
              <textarea id={messageId} name="message" placeholder="What would you like to discuss?" rows={4} required className={FIELD_CLASSES} />
            </div>
            <button type="submit" className="action-primary self-start disabled:opacity-65">
              <Send aria-hidden="true" className="size-4" /> Send message
            </button>
          </fieldset>
          <p role="status" className="mt-3 text-sm text-muted-foreground">
            {status === "sending" && "Sending your message…"}
            {status === "sent" && "Message submitted. Thanks for reaching out."}
          </p>
          {status === "error" && (
            <p role="alert" className="mt-2 text-sm text-red-700 dark:text-red-300">
              Your message couldn’t be sent. Try again or use the email link.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

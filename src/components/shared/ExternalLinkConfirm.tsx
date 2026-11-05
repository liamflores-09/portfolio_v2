"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";

export function ExternalLinkConfirm() {
  const [destination, setDestination] = useState<{ url: string; label: string } | null>(null);
  const trigger = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const link = event.target instanceof Element ? event.target.closest("a") : null;
      if (!link || link.dataset.extConfirmSkip || link.target !== "_blank") return;

      const url = new URL(link.href, window.location.href);
      if (!["http:", "https:"].includes(url.protocol) || url.origin === window.location.origin) return;

      event.preventDefault();
      trigger.current = link;
      setDestination({ url: url.href, label: link.dataset.extConfirmLabel ?? "Open external link" });
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return (
    <Dialog open={destination !== null} onOpenChange={(open) => !open && setDestination(null)}>
      <DialogContent className="text-center" showCloseButton={false} finalFocus={trigger}>
        <DialogTitle>Leaving this portfolio</DialogTitle>
        <DialogDescription>The destination opens in a new tab.</DialogDescription>
        {destination && <p className="break-all rounded-md border border-border bg-background px-3 py-2 text-xs text-muted-foreground">{destination.url}</p>}
        <div className="flex flex-wrap justify-center gap-2">
          <DialogClose className="action-secondary">Cancel</DialogClose>
          {destination && (
            <a
              href={destination.url}
              target="_blank"
              rel="noopener noreferrer"
              data-ext-confirm-skip="true"
              onClick={() => setDestination(null)}
              className="action-primary"
            >
              {destination.label} <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

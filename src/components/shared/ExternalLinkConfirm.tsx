"use client";

import { useEffect, useState } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";

export function ExternalLinkConfirm() {
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const link = target?.closest("a");
      if (!link || link.dataset.extConfirmSkip) return;
      if (link.target !== "_blank") return;

      const href = link.getAttribute("href") ?? "";
      if (!href.startsWith("http")) return;

      e.preventDefault();
      setUrl(href);
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return (
    <Dialog open={url !== null} onOpenChange={(open) => !open && setUrl(null)}>
      <DialogContent className="text-center" showCloseButton={false}>
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background">
          <FaArrowUpRightFromSquare className="h-4 w-4 text-muted-foreground" />
        </div>
        <DialogTitle>Leaving Portfolio</DialogTitle>
        {url && <p className="break-all rounded-md border border-border bg-background px-3 py-2 font-mono text-xs text-muted-foreground">{url}</p>}
        <DialogDescription>You&apos;re about to open an external link. Continue?</DialogDescription>
        <div className="mt-2 flex justify-center gap-3">
          <button
            onClick={() => setUrl(null)}
            className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Cancel
          </button>
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              data-ext-confirm-skip="true"
              onClick={() => setUrl(null)}
              className="flex items-center gap-1.5 rounded-lg bg-foreground px-4 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-85"
            >
              Open Link
              <FaArrowUpRightFromSquare className="h-3 w-3" />
            </a>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

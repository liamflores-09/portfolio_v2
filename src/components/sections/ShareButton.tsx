"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { FaCheck, FaCopy, FaShareNodes } from "react-icons/fa6";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const SITE_URL = "https://liamflores.onrender.com";

export function ShareButton() {
  const [qr, setQr] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [canShare] = useState(() => typeof navigator !== "undefined" && typeof navigator.share === "function");

  useEffect(() => {
    QRCode.toDataURL(SITE_URL, {
      width: 240,
      margin: 1,
      color: { dark: "#18181b", light: "#ffffff" },
    })
      .then(setQr)
      .catch(() => setQr(null));
  }, []);

  async function handleCopy() {
    await navigator.clipboard.writeText(SITE_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  async function handleNativeShare() {
    try {
      await navigator.share({ title: "Liam Flores — Portfolio", url: SITE_URL });
    } catch {
      // Cancelled or unsupported; nothing to do.
    }
  }

  return (
    <Dialog>
      <DialogTrigger className="flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-foreground hover:text-background">
        <FaShareNodes className="h-3 w-3" />
        Share
      </DialogTrigger>
      <DialogContent className="flex flex-col items-center gap-4 text-center sm:max-w-xs">
        <DialogTitle>Share this portfolio</DialogTitle>
        <DialogDescription>Scan the code or copy the link.</DialogDescription>
        <div className="flex h-56 w-56 items-center justify-center rounded-xl border border-border bg-white p-3">
          {qr ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={qr} alt="QR code linking to this portfolio" className="h-full w-full" />
          ) : (
            <div className="h-full w-full animate-pulse rounded-lg bg-border" />
          )}
        </div>
        <div className="flex w-full items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2">
          <span className="flex-1 truncate text-left font-mono text-xs text-muted-foreground">{SITE_URL}</span>
          <button
            onClick={handleCopy}
            aria-label="Copy link"
            className="flex shrink-0 items-center gap-1 rounded-md border border-border px-2 py-1 text-xs font-medium transition-colors hover:bg-foreground hover:text-background"
          >
            {copied ? <FaCheck className="h-3 w-3" /> : <FaCopy className="h-3 w-3" />}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        {canShare && (
          <button
            onClick={handleNativeShare}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-85"
          >
            <FaShareNodes className="h-3.5 w-3.5" />
            Share via...
          </button>
        )}
      </DialogContent>
    </Dialog>
  );
}

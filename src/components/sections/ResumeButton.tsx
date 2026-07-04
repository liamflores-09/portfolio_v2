"use client";

import { FaArrowUpRightFromSquare, FaEye, FaFileLines } from "react-icons/fa6";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export function ResumeButton({ src }: { src: string }) {
  return (
    <Dialog>
      <DialogTrigger className="flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-foreground hover:text-background">
        <FaEye className="h-3 w-3" />
        View Resume
      </DialogTrigger>
      <DialogContent className="flex h-[85vh] flex-col gap-3 sm:max-w-3xl">
        <div className="flex items-center justify-between gap-4 pr-8">
          <DialogTitle className="flex items-center gap-2 text-sm">
            <FaFileLines className="h-3.5 w-3.5 text-muted" />
            Resume — Liam Jed M. Flores
          </DialogTitle>
          <a
            href={src}
            target="_blank"
            rel="noreferrer"
            className="flex shrink-0 items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium transition-colors hover:bg-foreground hover:text-background"
          >
            Open in new tab
            <FaArrowUpRightFromSquare className="h-2.5 w-2.5" />
          </a>
        </div>
        <iframe src={src} title="Resume — Liam Jed M. Flores" className="h-full w-full flex-1 rounded-lg border border-border" />
      </DialogContent>
    </Dialog>
  );
}

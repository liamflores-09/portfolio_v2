"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import type { DockLink } from "./SiteDock";

const TAP_TARGET =
  "flex min-h-11 min-w-11 items-center justify-center rounded-full text-foreground";

export function MobileMenu({ links }: { links: DockLink[] }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger aria-label="Open menu" className={TAP_TARGET}>
        <Menu className="h-5 w-5" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-xs" showCloseButton>
        <DialogTitle className="sr-only">Menu</DialogTitle>
        <nav className="flex flex-col gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <link.icon className="h-5 w-5" />
              {link.label}
            </Link>
          ))}
        </nav>
      </DialogContent>
    </Dialog>
  );
}

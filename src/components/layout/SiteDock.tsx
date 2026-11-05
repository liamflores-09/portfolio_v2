"use client";

import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function SiteDock() {
  const { theme, toggleTheme } = useTheme();
  const ThemeIcon = theme === "dark" ? Sun : Moon;

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <nav aria-label="Main navigation" className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-x-2 px-4 sm:px-6">
        <Link href="/#hero" className="inline-flex min-h-12 items-center whitespace-nowrap font-bold tracking-tight">
          Liam Flores
        </Link>
        <div className="flex items-center gap-1 text-sm font-semibold sm:gap-4">
          <Link href="/#projects" className="nav-link">Work</Link>
          <Link href="/#experience" className="nav-link">Experience</Link>
          <Link href="/#contact" className="nav-link text-accent">Contact</Link>
          <button type="button" onClick={toggleTheme} aria-label="Toggle theme" className="nav-link justify-center">
            <ThemeIcon aria-hidden="true" className="size-4" />
          </button>
        </div>
      </nav>
    </header>
  );
}

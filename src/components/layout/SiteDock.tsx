"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Briefcase,
  Code,
  Gamepad2,
  GraduationCap,
  Home,
  LayoutGrid,
  Mail,
  MessageSquareQuote,
  Palette,
  User,
  type LucideIcon,
} from "lucide-react";
import { Dock, DockIcon } from "@/components/ui/dock";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { FeedbackWidget } from "@/components/shared/FeedbackWidget";
import { useTheme } from "./ThemeProvider";

interface DockLink {
  href: string;
  label: string;
  icon: LucideIcon;
}

const DOCK_LINKS: DockLink[] = [
  { href: "/#hero", label: "Home", icon: Home },
  { href: "/#about", label: "About Me", icon: User },
  { href: "/#experience", label: "Experience", icon: Briefcase },
  { href: "/#testimonials", label: "Testimonials", icon: MessageSquareQuote },
  { href: "/#techstack", label: "Tech Stack", icon: Code },
  { href: "/#education", label: "Education", icon: GraduationCap },
  { href: "/#projects", label: "Projects", icon: LayoutGrid },
  { href: "/#creative", label: "Creative Work", icon: Palette },
  { href: "/#hobbies", label: "Hobbies", icon: Gamepad2 },
  { href: "/#contact", label: "Contact", icon: Mail },
];

function useIsCompactDock() {
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 640px)");
    const update = () => setIsCompact(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return isCompact;
}

export function SiteDock() {
  const { theme, toggleTheme } = useTheme();
  const isCompact = useIsCompactDock();
  const iconClass = isCompact ? "h-3.5 w-3.5" : "h-6 w-6";
  const svgIconClass = isCompact ? "[&_svg]:h-3.5 [&_svg]:w-3.5" : "[&_svg]:h-6 [&_svg]:w-6";

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center overflow-x-auto px-4">
      <Dock
        iconSize={isCompact ? 28 : 40}
        iconMagnification={isCompact ? 36 : 60}
        iconDistance={isCompact ? 60 : 140}
        className={`pointer-events-auto mt-0 border-border bg-surface/80 ${isCompact ? "gap-1 p-1.5" : "gap-2"}`}
      >
        {DOCK_LINKS.map((link) => (
          <DockIcon key={link.href}>
            <Tooltip>
              <TooltipTrigger
                render={
                  <Link href={link.href} aria-label={link.label} className="flex h-full w-full items-center justify-center text-foreground" />
                }
              >
                <link.icon className={iconClass} />
              </TooltipTrigger>
              <TooltipContent side="top">{link.label}</TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <FeedbackWidget iconClassName={iconClass} />
        <DockIcon>
          <Tooltip>
            <TooltipTrigger
              render={
                <AnimatedThemeToggler
                  theme={theme}
                  onThemeChange={() => toggleTheme()}
                  aria-label="Toggle theme"
                  className={`flex h-full w-full items-center justify-center text-foreground ${svgIconClass}`}
                />
              }
            />
            <TooltipContent side="top">Toggle theme</TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </div>
  );
}

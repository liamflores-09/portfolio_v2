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
import { MobileMenu } from "./MobileMenu";
import { useTheme } from "./ThemeProvider";
import type { Theme } from "@/lib/theme";

export interface DockLink {
  href: string;
  label: string;
  icon: LucideIcon;
}

const HOME_LINK: DockLink = { href: "/#hero", label: "Home", icon: Home };
const CONTACT_LINK: DockLink = { href: "/#contact", label: "Contact", icon: Mail };

const MENU_LINKS: DockLink[] = [
  { href: "/#about", label: "About Me", icon: User },
  { href: "/#experience", label: "Experience", icon: Briefcase },
  { href: "/#testimonials", label: "Testimonials", icon: MessageSquareQuote },
  { href: "/#techstack", label: "Tech Stack", icon: Code },
  { href: "/#education", label: "Education", icon: GraduationCap },
  { href: "/#projects", label: "Projects", icon: LayoutGrid },
  { href: "/#creative", label: "Creative Work", icon: Palette },
  { href: "/#hobbies", label: "Hobbies", icon: Gamepad2 },
];

const DOCK_LINKS: DockLink[] = [HOME_LINK, ...MENU_LINKS, CONTACT_LINK];

const MOBILE_TAP_TARGET =
  "flex min-h-11 min-w-11 items-center justify-center rounded-full text-foreground";

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

function MobileDockBar({ theme, toggleTheme }: { theme: Theme; toggleTheme: () => void }) {
  return (
    <div className="fixed inset-x-0 bottom-6 z-50 flex justify-center px-4">
      <div className="flex items-center gap-1 rounded-2xl border border-border bg-surface/80 p-1.5 backdrop-blur-md">
        <Link href={HOME_LINK.href} aria-label={HOME_LINK.label} className={MOBILE_TAP_TARGET}>
          <HOME_LINK.icon className="h-5 w-5" />
        </Link>
        <MobileMenu links={MENU_LINKS} />
        <FeedbackWidget variant="plain" iconClassName="h-5 w-5" />
        <Link href={CONTACT_LINK.href} aria-label={CONTACT_LINK.label} className={MOBILE_TAP_TARGET}>
          <CONTACT_LINK.icon className="h-5 w-5" />
        </Link>
        <AnimatedThemeToggler
          theme={theme}
          onThemeChange={() => toggleTheme()}
          aria-label="Toggle theme"
          className={`${MOBILE_TAP_TARGET} [&_svg]:h-5 [&_svg]:w-5`}
        />
      </div>
    </div>
  );
}

export function SiteDock() {
  const { theme, toggleTheme } = useTheme();
  const isCompact = useIsCompactDock();

  if (isCompact) {
    return <MobileDockBar theme={theme} toggleTheme={toggleTheme} />;
  }

  const iconClass = "h-6 w-6";
  const svgIconClass = "[&_svg]:h-6 [&_svg]:w-6";

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center overflow-x-auto px-4">
      <Dock
        iconSize={40}
        iconMagnification={60}
        iconDistance={140}
        className="pointer-events-auto mt-0 gap-2 border-border bg-surface/80"
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

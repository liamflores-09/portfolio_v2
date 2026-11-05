import { FeedbackWidget } from "@/components/shared/FeedbackWidget";
import { ShareButton } from "@/components/sections/ShareButton";
import { hero } from "@/data/hero";

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-8 text-sm text-muted-foreground sm:px-6">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3">
        <p>© 2026 Liam Flores</p>
        <div className="flex flex-wrap items-center gap-x-2">
          {hero.socials.map((social) => (
            <a key={social.href} href={social.href} target={social.href.startsWith("https:") ? "_blank" : undefined} rel="noreferrer" className="nav-link">
              {social.label}
            </a>
          ))}
          <ShareButton />
          <FeedbackWidget />
        </div>
      </div>
    </footer>
  );
}

import Image from "next/image";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { ResumeButton } from "@/components/sections/ResumeButton";
import { ShareButton } from "@/components/sections/ShareButton";
import { Stats } from "@/components/sections/Stats";
import { hero } from "@/data/hero";

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-16">
      <div className="absolute inset-x-0 top-0 h-64">
        <FlickeringGrid
          className="absolute inset-0"
          squareSize={4}
          gridGap={6}
          color="#8b8b85"
          maxOpacity={0.25}
          flickerChance={0.15}
        />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
      </div>
      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:gap-8 sm:text-left">
        <div className="relative aspect-[2/3] w-40 shrink-0 overflow-hidden rounded-2xl sm:w-48">
          <Image
            src={hero.avatar}
            alt={hero.name}
            fill
            sizes="(min-width: 640px) 192px, 160px"
            className="origin-top scale-125 object-cover object-top"
            priority
          />
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <h1 className="mb-3 text-5xl font-extrabold tracking-tight md:text-6xl">{hero.name} 👋</h1>
          <p className="mb-6 max-w-md text-lg text-muted-foreground">{hero.subtitle}</p>
          <div className="mb-6 flex flex-wrap items-center justify-center gap-2 text-sm text-muted sm:justify-start">
            {hero.meta.map((item, index) => (
              <span key={item.label} className="flex items-center gap-2">
                {index > 0 && <span className="opacity-50">·</span>}
                <item.icon className="h-3.5 w-3.5" />
                {item.label}
              </span>
            ))}
          </div>
          <div className="mb-6 flex flex-wrap items-center justify-center gap-4 text-sm font-medium sm:justify-start">
            {hero.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                className="flex items-center gap-1.5 text-foreground lowercase transition-colors hover:text-accent"
              >
                {social.label}
                <FaArrowUpRightFromSquare className="h-3 w-3" />
              </a>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
            <ResumeButton src={hero.resume} />
            <ShareButton />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}

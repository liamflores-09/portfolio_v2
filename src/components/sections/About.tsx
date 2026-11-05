import { SectionHeading } from "@/components/shared/SectionHeading";
import { about } from "@/data/about";

const HIGHLIGHT_PHRASE = "Magna Cum Laude";

export function About() {
  const [before, after] = about.text.split(HIGHLIGHT_PHRASE);

  return (
    <section id="about" className="px-5 py-10 sm:px-6 sm:py-14">
      <div>
        <SectionHeading title="About me" />
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          {before}
          <strong className="font-semibold text-foreground">{HIGHLIGHT_PHRASE}</strong>
          {after}
        </p>
      </div>
    </section>
  );
}

import Image from "next/image";

interface CaseStudyHeroProps {
  brand: string;
  title: string;
  status: string;
  problem: string;
  contribution: string;
  image: { src: string; alt: string; caption: string; width: number; height: number };
  evidence: { href: string; label: string };
}

export function CaseStudyHero({ brand, title, status, problem, contribution, image, evidence }: CaseStudyHeroProps) {
  return (
    <header className="mx-auto max-w-3xl pt-4 pb-8 sm:pt-8">
      <p className="mb-2 text-xs font-bold tracking-widest text-accent uppercase">{brand}</p>
      <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">{title}</h1>
      <p className="mt-3 text-sm font-semibold text-muted">{status}</p>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed">{problem}</p>
      <p className="mt-2 max-w-2xl leading-relaxed text-muted-foreground">{contribution}</p>
      <a href={evidence.href} className="action-secondary mt-4">
        {evidence.label}
      </a>
      <figure className="mt-6">
        <div className="overflow-hidden rounded-xl border border-border bg-surface">
          <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(min-width: 768px) 768px, 100vw" className="h-auto w-full" priority />
        </div>
        <figcaption className="mt-2 text-sm text-muted-foreground">{image.caption}</figcaption>
      </figure>
    </header>
  );
}

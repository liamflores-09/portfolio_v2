import { CaseStudyActions } from "@/components/case-study/CaseStudyActions";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { MetaGrid } from "@/components/case-study/MetaGrid";
import { NumberedList } from "@/components/case-study/NumberedList";
import { FeatureGrid } from "@/components/case-study/FeatureGrid";
import { FlowSteps } from "@/components/case-study/FlowSteps";
import { Timeline } from "@/components/case-study/Timeline";
import { ScreenshotGallery } from "@/components/case-study/ScreenshotGallery";
import { CaseStudyToc } from "@/components/case-study/CaseStudyToc";
import { atsCaseStudy } from "@/data/caseStudies/ats";
import { recruitMint } from "@/data/projects";
import { testimonials } from "@/data/testimonials";

export const metadata = {
  title: "Applicant Tracking System | Liam Flores",
  description: "Portfolio showcase of the Applicant Tracking System capstone project built with Laravel, PostgreSQL, and Bootstrap 5.",
};

const TOC_ITEMS = [
  { id: "overview", label: "project overview" },
  { id: "techstack", label: "tech stack" },
  { id: "deployment", label: "deployment" },
  { id: "timeline", label: "project timeline" },
  { id: "objectives", label: "system objectives" },
  { id: "features", label: "key features" },
  { id: "screenshots", label: "project screenshots" },
];

export default function AtsCaseStudyPage() {
  const c = atsCaseStudy;
  const adviser = testimonials[0];

  return (
    <main id="main-content" tabIndex={-1} className="mx-auto min-w-0 max-w-4xl">
      <CaseStudyHero
        brand={c.brand}
        title={c.title}
        status="Capstone project · Portfolio walkthrough · No live demo"
        problem="Local employers needed one place to post jobs, review applications and track candidates through hiring."
        contribution={recruitMint.description}
        image={{ src: recruitMint.image, alt: recruitMint.imageAlt, width: 972, height: 468, caption: "The admin dashboard summarizes applications by job and shows the skills reported across the candidate pool." }}
        evidence={{ href: "#screenshots", label: "See the recruiting workflow" }}
      />
      <CaseStudyToc items={TOC_ITEMS} />

      <section id="overview" className="py-8 sm:px-6 sm:py-10">
        <SectionHeading number="01" title="project overview" />
        <div className="mx-auto flex max-w-2xl flex-col gap-6">
          <div className="rounded-2xl border border-border p-8">
            <h3 className="mb-2 text-lg font-bold">{c.title}</h3>
            <p className="text-sm text-muted-foreground">{c.overview.description}</p>
          </div>
          <MetaGrid items={c.overview.meta} columns={1} />
        </div>
        <div className="mx-auto mt-6 flex max-w-2xl flex-col gap-px overflow-hidden rounded-2xl border border-border bg-border">
          <div className="bg-surface p-6">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted">Capstone Adviser</span>
            <p className="text-sm font-medium">{c.team.adviser}</p>
          </div>
          <div className="bg-surface p-6">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted">Developed in Collaboration With</span>
            <p className="text-sm font-medium">{c.team.collaborators.join(", ")}</p>
          </div>
        </div>
        <figure className="mx-auto mt-6 max-w-2xl border-l-2 border-accent pl-5">
          <blockquote className="font-semibold">{adviser.quote}</blockquote>
          <figcaption className="mt-2 text-sm text-muted-foreground">{adviser.name} · {adviser.role}</figcaption>
        </figure>
      </section>

      <section id="techstack" className="py-8 sm:px-6 sm:py-10">
        <SectionHeading number="02" title="tech stack" />
        <div className="mx-auto flex max-w-2xl flex-col gap-8">
          {c.techStack.map((group) => (
            <div key={group.category}>
              <h4 className="mb-3 text-xs font-bold uppercase tracking-wide text-muted">{group.category}</h4>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-border px-4 py-1.5 text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="deployment" className="py-8 sm:px-6 sm:py-10">
        <SectionHeading number="03" title="deployment" />
        <div className="mx-auto max-w-2xl">
          <FlowSteps steps={c.deployment} />
        </div>
      </section>

      <section id="timeline" className="py-8 sm:px-6 sm:py-10">
        <SectionHeading number="04" title="project timeline" />
        <div className="mx-auto max-w-2xl">
          <Timeline items={c.timeline} />
        </div>
      </section>

      <section id="objectives" className="py-8 sm:px-6 sm:py-10">
        <SectionHeading number="05" title="system objectives" />
        <div className="mx-auto max-w-2xl">
          <NumberedList items={c.objectives} />
        </div>
      </section>

      <section id="features" className="py-8 sm:px-6 sm:py-10">
        <SectionHeading number="06" title="key features" />
        <div className="mx-auto max-w-2xl">
          <FeatureGrid items={c.features} />
        </div>
      </section>

      <section id="screenshots" className="py-8 sm:px-6 sm:py-10">
        <SectionHeading number="07" title="project screenshots" />
        <div className="mx-auto max-w-5xl">
          <ScreenshotGallery screenshots={c.screenshots} />
        </div>
      </section>

      <CaseStudyActions />
      <p className="px-6 pt-8 text-center text-xs text-muted">{c.footer}</p>
    </main>
  );
}

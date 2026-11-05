import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { MetaGrid } from "@/components/case-study/MetaGrid";
import { NumberedList } from "@/components/case-study/NumberedList";
import { FeatureGrid } from "@/components/case-study/FeatureGrid";
import { FlowSteps } from "@/components/case-study/FlowSteps";
import { Timeline } from "@/components/case-study/Timeline";
import { StatsRow } from "@/components/case-study/StatsRow";
import { ScreenshotGallery } from "@/components/case-study/ScreenshotGallery";
import { CaseStudyToc } from "@/components/case-study/CaseStudyToc";
import { atsCaseStudy } from "@/data/caseStudies/ats";

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

  return (
    <div className="flex gap-10">
      <CaseStudyToc items={TOC_ITEMS} />
      <main className="min-w-0 max-w-4xl flex-1">
        <CaseStudyHero badge={c.badge} brand={c.brand} title={c.title} subtitle={c.subtitle} notice={c.notice} />

        <section id="overview" className="px-6 py-16 md:px-12">
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
        </section>

        <section id="techstack" className="px-6 py-16 md:px-12">
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

        <section id="deployment" className="px-6 py-16 md:px-12">
          <SectionHeading number="03" title="deployment" />
          <div className="mx-auto max-w-2xl">
            <FlowSteps steps={c.deployment} />
          </div>
        </section>

        <section id="timeline" className="px-6 py-16 md:px-12">
          <SectionHeading number="04" title="project timeline" />
          <div className="mx-auto mb-10 max-w-2xl">
            <Timeline items={c.timeline} />
          </div>
          <div className="mx-auto max-w-2xl">
            <StatsRow stats={c.timelineStats} />
          </div>
        </section>

        <section id="objectives" className="px-6 py-16 md:px-12">
          <SectionHeading number="05" title="system objectives" />
          <div className="mx-auto max-w-2xl">
            <NumberedList items={c.objectives} />
          </div>
        </section>

        <section id="features" className="px-6 py-16 md:px-12">
          <SectionHeading number="06" title="key features" />
          <div className="mx-auto max-w-2xl">
            <FeatureGrid items={c.features} />
          </div>
        </section>

        <section id="screenshots" className="px-6 py-16 md:px-12">
          <SectionHeading number="07" title="project screenshots" />
          <div className="mx-auto max-w-5xl">
            <ScreenshotGallery screenshots={c.screenshots} />
          </div>
        </section>

        <section className="border-y border-border bg-surface px-6 py-16 text-center md:px-12">
          <h3 className="mb-10 text-2xl font-bold">project highlights</h3>
          <div className="mx-auto max-w-2xl">
            <StatsRow stats={c.highlights} />
          </div>
        </section>

        <p className="px-6 py-10 text-center text-xs text-muted">{c.footer}</p>
      </main>
    </div>
  );
}

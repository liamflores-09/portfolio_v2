import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { MetaGrid } from "@/components/case-study/MetaGrid";
import { NumberedList } from "@/components/case-study/NumberedList";
import { FeatureGrid } from "@/components/case-study/FeatureGrid";
import { FlowSteps } from "@/components/case-study/FlowSteps";
import { Timeline } from "@/components/case-study/Timeline";
import { CaseStudyToc } from "@/components/case-study/CaseStudyToc";
import { budgetTrackerCaseStudy } from "@/data/caseStudies/budgetTracker";

export const metadata = {
  title: "Personal Budget Tracker (MIK!) | Liam Flores",
  description: "Case study of the Personal Budget Tracker — a brutalist finance dashboard built with Laravel, Vue 3, and Kinetic Typography.",
};

const TOC_ITEMS = [
  { id: "overview", label: "overview" },
  { id: "problem", label: "problem" },
  { id: "philosophy", label: "design philosophy" },
  { id: "design-system", label: "design system" },
  { id: "techstack", label: "tech stack" },
  { id: "features", label: "key features" },
  { id: "architecture", label: "component architecture" },
  { id: "accessibility", label: "accessibility" },
  { id: "evolution", label: "design evolution" },
  { id: "results", label: "results" },
  { id: "reflections", label: "reflections" },
  { id: "links-section", label: "links" },
];

function ColorSwatchList({ items }: { items: { label: string; hex: string }[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-3 rounded-full border border-border px-4 py-2 text-sm">
          <span className="h-3.5 w-3.5 rounded-full border border-border" style={{ backgroundColor: item.hex }} />
          {item.label} {item.hex}
        </div>
      ))}
    </div>
  );
}

function IconList({ heading, items, tone }: { heading: string; items: string[]; tone: "positive" | "warning" }) {
  const color = tone === "positive" ? "text-emerald-600 dark:text-emerald-400" : "text-amber-600 dark:text-amber-400";
  return (
    <div className="rounded-2xl border border-border p-8">
      <h3 className="mb-4 text-lg font-bold">{heading}</h3>
      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm text-muted-foreground">
            <span className={color}>→</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function BudgetTrackerCaseStudyPage() {
  const c = budgetTrackerCaseStudy;

  return (
    <div className="flex gap-10">
      <CaseStudyToc items={TOC_ITEMS} />
      <main className="min-w-0 max-w-4xl flex-1">
        <CaseStudyHero badge={c.badge} brand={c.brand} title={c.title} subtitle={c.subtitle} notice={c.notice} />

        <section id="overview" className="px-6 py-16 md:px-12">
          <SectionHeading number="01" title="overview" />
          <div className="mx-auto flex max-w-2xl flex-col gap-6">
            <div className="rounded-2xl border border-border p-8">
              <h3 className="mb-2 text-lg font-bold">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.overview.description}</p>
            </div>
            <MetaGrid items={c.overview.meta} columns={1} />
          </div>
        </section>

        <section id="problem" className="px-6 py-16 md:px-12">
          <SectionHeading number="02" title="problem" />
          <div className="mx-auto max-w-2xl">
            <NumberedList items={c.problem} />
          </div>
        </section>

        <section id="philosophy" className="px-6 py-16 md:px-12">
          <SectionHeading number="03" title="design philosophy" />
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">{c.philosophy.intro}</p>
          <div className="mx-auto mb-8 max-w-2xl">
            <FeatureGrid items={c.philosophy.principles} />
          </div>
          <div className="mx-auto max-w-2xl">
            <NumberedList items={[{ title: "Why This Approach", description: c.philosophy.why, number: "WHY" }]} />
          </div>
        </section>

        <section id="design-system" className="px-6 py-16 md:px-12">
          <SectionHeading number="04" title="design system" />
          <div className="mx-auto max-w-2xl">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wide text-muted">Color Architecture</h3>
            <ColorSwatchList items={c.designSystem.colors} />
            <p className="mb-8 mt-4 text-sm text-muted-foreground">{c.designSystem.colorNote}</p>

            <h3 className="mb-4 text-xs font-bold uppercase tracking-wide text-muted">Typography Scale</h3>
            <MetaGrid items={c.designSystem.typeScale} columns={1} />

            <p className="mt-6 text-sm text-muted-foreground">
              <strong className="text-foreground">Font:</strong> {c.designSystem.font}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              <strong className="text-foreground">Shape Language:</strong> {c.designSystem.shapeLanguage}
            </p>
          </div>
        </section>

        <section id="techstack" className="px-6 py-16 md:px-12">
          <SectionHeading number="05" title="tech stack" />
          <div className="mx-auto mb-8 max-w-2xl">
            <FlowSteps steps={c.architecture} />
          </div>
          <div className="mx-auto max-w-2xl">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wide text-muted">Design Token System</h3>
            <ColorSwatchList items={c.designTokens} />
            <p className="mt-4 text-sm text-muted-foreground">{c.tokenNote}</p>
          </div>
        </section>

        <section id="features" className="px-6 py-16 md:px-12">
          <SectionHeading number="06" title="key features" />
          <div className="mx-auto max-w-2xl">
            <FeatureGrid items={c.keyFeatures} />
          </div>
        </section>

        <section id="architecture" className="px-6 py-16 md:px-12">
          <SectionHeading number="07" title="component architecture" />
          <div className="mx-auto mb-10 max-w-2xl">
            <FeatureGrid items={c.components} />
          </div>
          <h3 className="mx-auto mb-4 max-w-2xl text-xs font-bold uppercase tracking-wide text-muted">Motion System</h3>
          <div className="mx-auto max-w-2xl">
            <FeatureGrid items={c.motionSystem} />
            <p className="mt-4 text-sm text-muted-foreground">{c.motionNote}</p>
          </div>
        </section>

        <section id="accessibility" className="px-6 py-16 md:px-12">
          <SectionHeading number="08" title="accessibility" />
          <div className="mx-auto max-w-2xl">
            <FeatureGrid items={c.accessibility} />
          </div>
        </section>

        <section id="evolution" className="px-6 py-16 md:px-12">
          <SectionHeading number="09" title="design evolution" />
          <div className="mx-auto mb-6 max-w-2xl">
            <Timeline items={c.evolution} />
          </div>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground">{c.evolutionNote}</p>
        </section>

        <section id="results" className="px-6 py-16 md:px-12">
          <SectionHeading number="10" title="results" />
          <div className="mx-auto max-w-2xl">
            <FeatureGrid items={c.results} />
          </div>
        </section>

        <section id="reflections" className="px-6 py-16 md:px-12">
          <SectionHeading number="11" title="reflections" />
          <div className="mx-auto mb-8 flex max-w-2xl flex-col gap-6">
            <IconList heading="What Worked" items={c.reflections.whatWorked} tone="positive" />
            <IconList heading="What I'd Improve" items={c.reflections.whatToImprove} tone="warning" />
          </div>
          <div className="mx-auto max-w-2xl">
            <NumberedList items={[{ title: "Key Takeaway", description: c.reflections.keyTakeaway, number: "★" }]} />
          </div>
        </section>

        <section id="links-section" className="px-6 py-16 md:px-12">
          <SectionHeading number="12" title="links" />
          <div className="mx-auto max-w-2xl">
            <FlowSteps steps={c.links} />
            <p className="mt-8 text-center text-sm italic text-muted">{c.closingLine}</p>
          </div>
        </section>

        <p className="px-6 py-10 text-center text-xs text-muted">{c.footer}</p>
      </main>
    </div>
  );
}

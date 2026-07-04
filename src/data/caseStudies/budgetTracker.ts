export interface CaseStudyListItem {
  title: string;
  description: string;
}

export interface CaseStudyMeta {
  label: string;
  value: string;
}

export interface ColorSwatch {
  label: string;
  hex: string;
}

export interface TypeScaleRow {
  label: string;
  value: string;
}

export interface FlowStep {
  title: string;
  description: string;
}

export interface TimelineItem {
  date: string;
  title: string;
  description: string;
  done?: boolean;
}

export const budgetTrackerCaseStudy = {
  badge: "Completed",
  brand: "MIK! — Mag Ipon Ka!",
  title: "Personal Budget Tracker",
  subtitle: "Case Study — A brutalist finance dashboard built with Laravel, Vue 3, and Kinetic Typography",
  notice:
    "This case study covers the design philosophy, technical architecture, and feature breakdown of the Personal Budget Tracker — a project built in a single session with Xiaomi MiMo Code assistance.",
  githubUrl: "https://github.com/liamflores-09/personal_budget_tracker",
  overview: {
    description:
      "A brutalist finance dashboard built with Laravel, Vue 3, and Kinetic Typography. Instead of following the sea of dark-mode SaaS dashboards, this project uses typography as the interface — massive scale, constant motion, hard color inversions, and brutalist geometry.",
    meta: [
      { label: "Role", value: "Full-Stack Developer & UI/UX Designer" },
      { label: "Stack", value: "Laravel · Vue 3 · Inertia.js · Tailwind CSS" },
      { label: "Timeline", value: "Single Session (Design + Implementation)" },
      { label: "Type", value: "Web Application — Case Study" },
      { label: "AI Assistance", value: "Xiaomi MiMo Code" },
      { label: "Status", value: "Live on GitHub" },
    ] satisfies CaseStudyMeta[],
  },
  problem: [
    { title: "Bloated or Basic", description: "Personal finance tracking tools are either bloated with features nobody uses, or so basic they're abandoned after a week." },
    { title: "The Core Need", description: "See your financial health at a glance, track spending patterns, and stay within budget — without the cognitive overhead of enterprise accounting software." },
    { title: "The Goal", description: "Build a budget tracker that feels alive — something you want to open every day because the interface itself is engaging." },
  ] satisfies CaseStudyListItem[],
  philosophy: {
    intro:
      "Instead of following the sea of dark-mode SaaS dashboards, this project uses Kinetic Typography — a brutalist design system where typography is the interface.",
    principles: [
      { title: "Typography as Structure", description: "Headlines at 6–10rem, numbers at 8–12rem. Text fills the screen and becomes the primary visual element." },
      { title: "Constant Motion", description: "Infinite marquees scroll financial stats. Nothing is ever still." },
      { title: "Hard Color Inversions", description: "Cards flood to acid yellow on hover, text inverts to black. No gentle fades — instant, dramatic shifts." },
      { title: "Brutalist Geometry", description: "0px border radius, 2px solid borders, completely flat design. No shadows, no gradients." },
    ] satisfies CaseStudyListItem[],
    why: "Generic dark mode with subtle gradients had become invisible — every finance app looks the same. Kinetic Typography creates an instantly recognizable identity through aggressive scale, relentless motion, and high-contrast color.",
  },
  designSystem: {
    colors: [
      { label: "Background", hex: "#09090B" },
      { label: "Foreground", hex: "#FAFAFA" },
      { label: "Muted", hex: "#27272A" },
      { label: "Muted FG", hex: "#A1A1AA" },
      { label: "Accent", hex: "#DFE104" },
      { label: "Border", hex: "#3F3F46" },
    ] satisfies ColorSwatch[],
    colorNote:
      "The single accent color (acid yellow) is used sparingly but boldly — navigation highlights, hover states, the stats marquee, and the salary history cards.",
    typeScale: [
      { label: "Page headings", value: "clamp(2rem, 6vw, 5rem)" },
      { label: "Hero numbers", value: "clamp(3rem, 12vw, 10rem)" },
      { label: "Background numbers", value: "clamp(8rem, 20vw, 16rem)" },
      { label: "Section titles", value: "text-3xl uppercase, tight tracking" },
      { label: "Body text", value: "text-lg — larger than typical web" },
      { label: "Labels", value: "text-xs uppercase, tracking-widest" },
    ] satisfies TypeScaleRow[],
    font: "Space Grotesk — strong geometric shapes, excellent at large sizes.",
    shapeLanguage:
      "Border radius: 0px everywhere · Borders: 2px solid #3F3F46 · Shadows: None — depth through color layering only · Grid dividers: gap-px with border-colored backgrounds create connected card systems",
  },
  architecture: [
    { title: "Laravel", description: "Backend · Auth · DB" },
    { title: "Inertia.js", description: "Bridge · SPA-like Nav" },
    { title: "Vue 3", description: "Components · Reactivity" },
    { title: "Tailwind CSS", description: "Design Tokens · Styling" },
  ] satisfies FlowStep[],
  designTokens: [
    { label: "bg", hex: "#09090B" },
    { label: "fg", hex: "#FAFAFA" },
    { label: "accent", hex: "#DFE104" },
    { label: "border", hex: "#3F3F46" },
  ] satisfies ColorSwatch[],
  tokenNote: "Every component uses these tokens — no hardcoded colors. Changing the accent color globally requires a single token change.",
  keyFeatures: [
    { title: "Stats Marquee", description: "A yellow banner that scrolls budget, spent, remaining, and percentage at fast speed. Traditional stat cards are static and forgettable — a marquee creates urgency and energy." },
    { title: "Massive Hero Number", description: "The total budget is displayed at viewport-responsive scale (clamp(3rem, 12vw, 10rem)). In Kinetic Typography, scale = importance." },
    { title: "Calendar with Heatmap", description: "Days with expenses show intensity through background color. The selected day inverts to the accent color with a dramatic scale transform." },
    { title: "Hard Color Inversion Cards", description: "Every card floods to acid yellow on hover. All text simultaneously inverts to black. The signature interaction — instant, dramatic, memorable." },
    { title: "Connected Card Grids", description: "Using gap-px with a border-colored parent container, cards appear as one connected system with hairline dividers — like a circuit board." },
    { title: "Oversized Form Inputs", description: "All inputs use bottom-border only, oversized text (text-2xl font-bold), and uppercase placeholder text. Forms become part of the design language." },
  ] satisfies CaseStudyListItem[],
  components: [
    { title: "PrimaryButton", description: "Acid yellow, hard border, scale hover" },
    { title: "SecondaryButton", description: "Transparent, inverts to white on hover" },
    { title: "TextInput", description: "Bottom-border only, oversized, bold" },
    { title: "Modal", description: "Flat dark overlay, 2px border, no blur" },
    { title: "Toast", description: "Inertia flash message display" },
    { title: "AuthenticatedLayout", description: "Brutalist nav with accent navigation" },
  ] satisfies CaseStudyListItem[],
  motionSystem: [
    { title: "Stats Marquee", description: "12s linear — high-energy financial overview" },
    { title: "Branding Marquee", description: "35s linear — slow, ambient branding" },
    { title: "Page Entrance", description: "500ms cubic-bezier — smooth content reveal" },
    { title: "Scale on Hover", description: "200ms — button tactile feedback" },
    { title: "Color Inversion", description: "300ms — card hover transformation" },
  ] satisfies CaseStudyListItem[],
  motionNote: "All animations respect prefers-reduced-motion — marquees pause, entrance animations skip.",
  accessibility: [
    { title: "Contrast", description: "Off-white on rich black = ~15:1 ratio (WCAG AAA)" },
    { title: "Focus Indicators", description: "Acid yellow 2px outline on all interactive elements" },
    { title: "Keyboard Navigation", description: "All buttons, links, and calendar days are focusable" },
    { title: "Touch Targets", description: "Minimum 44px for all interactive elements" },
    { title: "Screen Reader", description: "ARIA labels on calendar days, form fields, and icon buttons" },
  ] satisfies CaseStudyListItem[],
  evolution: [
    { date: "v1", title: "Functional Foundation", description: "Standard CRUD interface with basic styling. Worked, but visually invisible." },
    { date: "v2", title: "Dark Mode Toggle", description: "Added dark/light mode switching with cyan accent. More modern, but still generic." },
    { date: "v3", title: "Dark-Only with Cyan", description: "Removed the toggle, committed to dark mode. Cleaner, but the design still blended in with every other finance app." },
    { date: "v4 — Final", title: "Kinetic Typography", description: "Complete visual overhaul. Acid yellow instead of cyan. Sharp corners instead of rounded. Massive type instead of standard sizes. Marquees instead of static cards. Connected grids instead of individual cards.", done: true },
  ] satisfies TimelineItem[],
  evolutionNote: "Each iteration was a deliberate rejection of what came before — pushing toward a more distinctive, memorable identity.",
  results: [
    { title: "Full CRUD", description: "Expenses, salary entries, categories — all functional" },
    { title: "Responsive", description: "Works from 320px mobile to 1440px+ desktop" },
    { title: "Performant", description: "Lazy-loaded routes, animated counters, skeleton loaders" },
    { title: "Accessible", description: "WCAG AA contrast, keyboard navigation, screen reader support" },
    { title: "Memorable", description: "Instantly recognizable design that stands apart from generic dashboards" },
  ] satisfies CaseStudyListItem[],
  reflections: {
    whatWorked: [
      "Kinetic Typography creates instant identity — the design is unmistakably this project",
      "Single accent color forces disciplined use — every yellow element feels intentional",
      'Connected grids (gap-px) solve the "card soup" problem — the layout feels architectural',
    ],
    whatToImprove: [
      "Add real-time charts (Chart.js or D3) for spending trends",
      "Implement push notifications for budget limit warnings",
      "Add export to CSV/PDF for tax reporting",
      "Build a PWA for mobile home screen install",
      "Support multi-currency for international users",
    ],
    keyTakeaway:
      "The most important design decision wasn't a color or a font — it was choosing to be bold. Generic designs are forgettable. A strong design system, applied consistently, creates something people remember and want to use.",
  },
  links: [
    { title: "GitHub", description: "liamflores-09/personal_budget_tracker", href: "https://github.com/liamflores-09/personal_budget_tracker" },
    { title: "Tech Stack", description: "Laravel · Vue 3 · Inertia.js · Tailwind CSS" },
    { title: "Design System", description: "Kinetic Typography" },
  ],
  closingLine: "Built with intention. Designed to be remembered.",
  footer: "© 2026 Liam Flores — Personal Budget Tracker Case Study",
};

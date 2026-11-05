export interface ProjectLink {
  label: string;
  href: string;
  external?: boolean;
  confirmationLabel?: string;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  image?: string;
  imageAlt?: string;
  tags?: string[];
  status?: string;
  links: ProjectLink[];
}

export const recruitMint = {
  title: "RecruitMint Applicant Tracking System",
  category: "Capstone Project",
  description:
    "I led development of a Laravel platform that brings job postings, résumé review, applicant tracking and hiring reports into one workflow.",
  image: "/images/capstone/analytics1.png",
  imageAlt: "RecruitMint admin dashboard with charts for job applications and candidate skills",
  tags: ["Laravel", "PHP", "PostgreSQL", "Bootstrap", "Chart.js"],
  links: [{ label: "Read the RecruitMint case study", href: "/projects/ats" }],
} satisfies Project;

export const budgetTracker = {
  title: "Personal Budget Tracker (MIK!)",
  category: "Personal Finance App",
  description:
    "I designed and built a dashboard to log income and expenses, review spending at a glance and spot patterns on a calendar.",
  image: "/images/budgettracker.png",
  imageAlt: "MIK! dashboard preview with black surfaces and yellow budget totals",
  tags: ["Laravel", "Vue 3", "Inertia.js", "Tailwind CSS", "MiMo Code"],
  links: [{ label: "Read the MIK! case study", href: "/projects/budget-tracker" }],
} satisfies Project;

export const featuredProjects = [recruitMint, budgetTracker];

export const projects: Project[] = [
  ...featuredProjects,
  {
    title: "Yeyeniya's Pilot Service",
    category: "Pilot Service",
    description: "I built a service website for Yeyeniya, a professional Magic Chess: Go Go player.",
    image: "/images/yeyeniya.png",
    tags: ["Laravel", "Bootstrap", "MySQL", "JavaScript"],
    links: [{ label: "View live demo", confirmationLabel: "Open Yeyeniya demo", href: "https://yeyeniya.vercel.app/", external: true }],
  },
  {
    title: "Portfolio Website",
    category: "Personal Portfolio",
    description:
      "This portfolio, built with Next.js and Tailwind CSS. It brings together project case studies, creative work, and a contact form in a responsive layout.",
    image: "/images/portfoliobg.png",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    links: [{ label: "Source Code", href: "https://github.com/liamflores-09/portfolio_v2", external: true }],
  },
  {
    title: "E-commerce Department Hub",
    category: "Internal Tool",
    description:
      "An internal hub built for JG Superstore's e-commerce department, centralizing EOD reports, a price calculator, data-gathering tools, team announcements, attendance, and weekly/monthly output and SLA analytics, alongside brand management -- with more features on the way.",
    status: "In Development",
    links: [],
  },
];

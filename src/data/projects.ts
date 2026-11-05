export interface ProjectLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  image?: string;
  tags?: string[];
  notice?: string;
  status?: string;
  links: ProjectLink[];
}

export const projects: Project[] = [
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
    title: "RecruitMint Applicant Tracking System",
    category: "Capstone Project",
    description:
      "Led a four-person team to build RecruitMint, a Laravel applicant tracking system for job postings, applicant workflows, resume parsing, and hiring reports. The capstone received a 4.73/5 satisfaction rating.",
    image: "/images/capstonebg.png",
    tags: ["Laravel", "PHP", "PostgreSQL", "Bootstrap", "Chart.js"],
    links: [{ label: "View Case Study", href: "/projects/ats" }],
  },
  {
    title: "Yeyeniya's Pilot Service",
    category: "Pilot Service",
    description: "Pilot Service for Yeyeniya, a Professional Player of Magic Chess: Go Go",
    image: "/images/yeyeniya.png",
    tags: ["Laravel", "Bootstrap", "MySQL", "JavaScript"],
    notice: "Hosted on Vercel Free Tier",
    links: [{ label: "Live Demo", href: "https://yeyeniya.vercel.app/", external: true }],
  },
  {
    title: "Personal Budget Tracker (MIK!)",
    category: "Kinetic Typography",
    description:
      "A brutalist finance dashboard built with Laravel, Vue 3, Inertia.js, and Tailwind CSS. Features kinetic typography, hard color inversions, and connected card grids. Assisted by Xiaomi MiMo Code.",
    image: "/images/budgettracker.png",
    tags: ["Laravel", "Vue 3", "Inertia.js", "Tailwind CSS", "MiMo Code"],
    links: [
      { label: "Case Study", href: "/projects/budget-tracker" },
      { label: "GitHub", href: "https://github.com/liamflores-09/personal_budget_tracker", external: true },
    ],
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

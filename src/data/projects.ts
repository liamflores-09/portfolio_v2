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
      "Personal portfolio built using Laravel + Bootstrap. Fully responsive with dark mode, interactive elements, and smooth animations.",
    image: "/images/portfoliobg.png",
    tags: ["Laravel", "Bootstrap", "MySQL", "JavaScript", "HTML", "CSS"],
    links: [{ label: "GitHub", href: "https://github.com/liamflores-09", external: true }],
  },
  {
    title: "Applicant Tracking System",
    category: "Capstone Project",
    description:
      "Built using Laravel to streamline the recruitment process featuring job posting, application management, and candidate tracking.",
    image: "/images/capstonebg.png",
    links: [
      { label: "View Details", href: "/projects/ats" },
      { label: "GitHub", href: "https://github.com/liamflores-09", external: true },
    ],
  },
  {
    title: "Yeyeniya's Pilot Service",
    category: "Pilot Service",
    description: "Pilot Service for Yeyeniya, a Professional Player of Magic Chess: Go Go",
    image: "/images/yeyeniya.png",
    tags: ["Laravel", "Bootstrap", "MySQL", "JavaScript"],
    notice: "Hosted on Vercel Free Tier",
    links: [
      { label: "Live Demo", href: "https://yeyeniya.vercel.app/", external: true },
      { label: "GitHub", href: "https://github.com/liamflores-09", external: true },
    ],
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

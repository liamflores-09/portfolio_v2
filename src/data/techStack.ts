import type { IconType } from "react-icons";
import { FaBolt, FaBootstrap, FaCode, FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaJs, FaNodeJs, FaPhp, FaVuejs } from "react-icons/fa6";
import { SiFirebase, SiLaravel, SiMysql, SiPostgresql, SiTailwindcss } from "react-icons/si";

export interface TechItem {
  name: string;
  icon: IconType;
}

export interface TechGroup {
  category: "Frontend" | "Backend" | "Tools";
  items: TechItem[];
}

export const techStack: TechGroup[] = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "Vue 3", icon: FaVuejs },
      { name: "Inertia.js", icon: FaBolt },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: FaBootstrap },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "PHP", icon: FaPhp },
      { name: "Laravel", icon: SiLaravel },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "VS Code", icon: FaCode },
    ],
  },
];

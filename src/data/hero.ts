import { FaBriefcase, FaGraduationCap, FaLocationDot } from "react-icons/fa6";
import type { IconType } from "react-icons";

export interface HeroMeta {
  icon: IconType;
  label: string;
}

export interface HeroSocialLink {
  label: string;
  href: string;
}

export const hero = {
  name: "Liam Flores",
  roles: ["IT Specialist", "Web Developer", "Graphics Designer", "Freelance Designer"],
  subtitle: "I led development on RecruitMint, a Laravel applicant tracking system. I currently work in e-commerce content at JG Superstore.",
  avatar: "/images/profilepic.png",
  resume: "/LJFlores_Portfolio.pdf",
  meta: [
    { icon: FaLocationDot, label: "Pateros, Metro Manila" },
    { icon: FaBriefcase, label: "JG Superstore" },
    { icon: FaGraduationCap, label: "TIP Manila — BSIT" },
  ] satisfies HeroMeta[],
  socials: [
    { label: "GitHub", href: "https://github.com/liamflores-09" },
    { label: "LinkedIn", href: "https://linkedin.com/in/liamjedmflores" },
    { label: "Email", href: "mailto:liamjedmflores@gmail.com" },
  ] satisfies HeroSocialLink[],
};

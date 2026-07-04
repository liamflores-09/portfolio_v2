export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  logos?: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "E-commerce Content Associate",
    company: "JG Superstore",
    period: "Present",
    current: true,
    logos: ["/images/companies/jg.png"],
  },
  {
    role: "Web Developer",
    company: "Highly Succeed Inc",
    period: "2025",
    logos: ["/images/companies/hsi.png"],
  },
  {
    role: "Graphics Designer",
    company: "Highly Succeed Inc / Unleash PH",
    period: "2025",
    logos: ["/images/companies/hsi.png", "/images/companies/unleash.png"],
  },
  {
    role: "Freelance Graphic Designer",
    company: "Self-employed",
    period: "2019",
    logos: ["/images/companies/ljgfx.png"],
  },
];

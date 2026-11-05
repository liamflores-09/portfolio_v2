export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description?: string;
  current?: boolean;
  logos?: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "E-commerce Content Associate",
    company: "JG Superstore",
    period: "Present",
    current: true,
    description: "Create and maintain product listings and correct product information across Lazada, Shopee, Shopify and TikTok Shop.",
    logos: ["/images/companies/jg.png"],
  },
  {
    role: "Web Development Team Lead · Intern",
    company: "Highly Succeed Inc",
    period: "2025",
    description: "Built front-end components for the DILG pre-registration system and contributed to the PhilGEPS user manual.",
    logos: ["/images/companies/hsi.png"],
  },
  {
    role: "Graphics Designer",
    company: "Highly Succeed Inc / Unleash PH",
    period: "2025",
    description: "Created UI designs, brand identity, and publication and marketing materials.",
    logos: ["/images/companies/hsi.png", "/images/companies/unleash.png"],
  },
  {
    role: "Freelance Graphic Designer",
    company: "Self-employed",
    period: "2019",
    logos: ["/images/companies/ljgfx.png"],
  },
];

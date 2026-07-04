export interface EducationItem {
  degree: string;
  school: string;
  period: string;
  logo?: string;
}

export const education: EducationItem[] = [
  {
    degree: "BS in Information Technology",
    school: "Technological Institute of the Philippines - Manila",
    period: "2021 - 2025",
    logo: "/images/T.I.P._Logo.png",
  },
];

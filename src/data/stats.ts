export interface Stat {
  value: number | string;
  suffix?: string;
  label: string;
}

export const stats: Stat[] = [
  { value: "2025", label: "BSIT Graduate" },
  { value: 5, label: "Projects" },
  { value: 16, label: "Tools & Technologies" },
  { value: 1, label: "Internship" },
];

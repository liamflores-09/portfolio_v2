export interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 1, suffix: "+", label: "Months Experience" },
  { value: 4, suffix: "+", label: "Projects Completed" },
  { value: 9, suffix: "+", label: "Technologies" },
  { value: 1, label: "Internship Completed" },
];

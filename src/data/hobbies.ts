import type { IconType } from "react-icons";
import { FaBookOpen, FaCamera, FaCode, FaGamepad, FaPenNib, FaTv } from "react-icons/fa6";

export interface Hobby {
  icon: IconType;
  title: string;
  subtitle: string;
}

export const hobbies: Hobby[] = [
  { icon: FaPenNib, title: "Digital Art", subtitle: "Vector/Vexel" },
  { icon: FaCode, title: "Coding", subtitle: "Web Development" },
  { icon: FaGamepad, title: "Gaming", subtitle: "Mobile & PC Games" },
  { icon: FaTv, title: "Anime", subtitle: "Watching Series" },
  { icon: FaCamera, title: "Photography", subtitle: "Capturing Moments" },
  { icon: FaBookOpen, title: "Learning", subtitle: "Continuous Growth" },
];

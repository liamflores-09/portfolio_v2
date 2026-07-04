import type { IconType } from "react-icons";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa6";

export interface ContactLink {
  label: string;
  href: string;
  icon: IconType;
}

export const contact = {
  heading: "Let's Connect",
  text: "Have a project in mind or need IT consulting? I'm always open to discussing new opportunities and challenges.",
  web3formsAccessKey: "01b7820c-d853-4dc5-aae1-3401a186a8d4",
  links: [
    { label: "Email", href: "mailto:liamjedmflores@gmail.com", icon: FaEnvelope },
    { label: "GitHub", href: "https://github.com/liamflores-09", icon: FaGithub },
    { label: "LinkedIn", href: "https://linkedin.com/in/liamjedmflores", icon: FaLinkedinIn },
  ] satisfies ContactLink[],
};

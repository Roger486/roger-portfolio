import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaFileArrowDown } from "react-icons/fa6";

export const socialLinkList = [
  {
    key: "github",
    name: "GitHub",
    href: "https://github.com/Roger486",
    isFile: false,
    label: "GitHub profile",
    icon: FaGithub,
  },
  {
    key: "linkedin",
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/roger-navarro-desarrollador/",
    isFile: false,
    label: "LinkedIn profile",
    icon: FaLinkedin,
  },
  {
    key: "cv",
    name: "Currículum Vitae",
    href: "/download-files/cv-web-roger.pdf",
    isFile: true,
    label: "Download Curriculum Vitae",
    icon: FaFileArrowDown,
  },
]
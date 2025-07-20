import {
  FaAngular, FaDocker, FaGitAlt, FaGithub, FaJava,
  FaLaravel, FaProjectDiagram, FaRaspberryPi, FaReact
} from "react-icons/fa";
import { RiNodejsFill } from "react-icons/ri";
import {
  SiCss3,
  SiGnubash, SiHtml5, SiJavascript, SiMongodb, SiMysql,
  SiPhp, SiPostman, SiTailwindcss, SiTypescript
} from "react-icons/si";
import { BiWindowAlt } from "react-icons/bi";
import { DiScrum } from "react-icons/di";

export const hardSkills = [
  {
    categoryKey: "frontend",
    skills: [
      {
        key: "react",
        name: "React",
        icon: FaReact,
        color: "#00d8FF",
        backgroundColor: "#222222",
      },
      {
        key: "angular",
        name: "Angular",
        icon: FaAngular,
        color: "#c3002f",
        backgroundColor: "#eaeaea",
      },
      {
        key: "tailwind",
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#FFFFFF",
        backgroundColor: "#38BDF8",
      },
      {
        key: "html",
        name: "HTML",
        icon: SiHtml5,
        color: "#FFFFFF",
        backgroundColor: "#E34F26",
      },
      {
        key: "css",
        name: "CSS",
        icon: SiCss3,
        color: "#FFFFFF",
        backgroundColor: "#264DE4",
      },
      {
        key: "javascript",
        name: "JavaScript",
        icon: SiJavascript,
        color: "#000000",
        backgroundColor: "#F7DF1E",
      },
      {
        key: "typescript",
        name: "TypeScript",
        icon: SiTypescript,
        color: "#FFFFFF",
        backgroundColor: "#3178C6",
      },
    ],
  },
  {
    categoryKey: "backend",
    skills: [
      {
        key: "php",
        name: "PHP",
        icon: SiPhp,
        color: "#FFFFFF",
        backgroundColor: "#777BB4",
      },
      {
        key: "laravel",
        name: "Laravel",
        icon: FaLaravel,
        color: "white",
        backgroundColor: "#f55247",
      },
      {
        key: "nodejs",
        name: "NodeJS",
        icon: RiNodejsFill,
        color: "#6cc24a",
        backgroundColor: "white",
      },
      {
        key: "java",
        name: "Java",
        icon: FaJava,
        color: "#007396",
        backgroundColor: "#E0F0FF",
      },
      {
        key: "javafx",
        name: "JavaFX",
        icon: BiWindowAlt,
        color: "#007396",
        backgroundColor: "#E0F0FF",
      },
      {
        key: "api-rest",
        name: "API REST",
        icon: SiPostman,
        color: "#FFFFFF",
        backgroundColor: "#FF6C37",
      },
    ],
  },
  {
    categoryKey: "databases",
    skills: [
      {
        key: "sql",
        name: "MySQL - MariaDB",
        icon: SiMysql,
        color: "#FFFFFF",
        backgroundColor: "#f29111",
      },
      {
        key: "mongo",
        name: "MongoDB",
        icon: SiMongodb,
        color: "#00ed64",
        backgroundColor: "#001e2b",
      },
    ],
  },
  {
    categoryKey: "devops",
    skills: [
      {
        key: "docker",
        name: "Docker",
        icon: FaDocker,
        color: "#1D63ED",
        backgroundColor: "white",
      },
      {
        key: "raspi",
        name: "Raspberry Pi",
        icon: FaRaspberryPi,
        color: "#c7053d",
        backgroundColor: "white",
      },
      {
        key: "bash",
        name: "Bash",
        icon: SiGnubash,
        color: "#4EAA25",
        backgroundColor: "#FFFFFF",
      },
    ],
  },
  {
    categoryKey: "tools",
    skills: [
      {
        key: "git",
        name: "Git",
        icon: FaGitAlt,
        color: "#F05032",
        backgroundColor: "white",
      },
      {
        key: "github",
        name: "GitHub",
        icon: FaGithub,
        color: "#333333",
        backgroundColor: "white",
      },
    ],
  },
  {
    categoryKey: "architecture",
    skills: [
      {
        key: "mvc",
        name: "MVC",
        icon: FaProjectDiagram,
        color: "#FFFFFF",
        backgroundColor: "#512BD4",
      },
      {
        key: "agile",
        name: "Agile methods",
        icon: DiScrum,
        color: "#3B82F6",
        backgroundColor: "#FDBA74",
      },
    ],
  },
];

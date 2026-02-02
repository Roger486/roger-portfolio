import {
  FaAngular, FaDocker, FaGitAlt, FaGithub, FaJava,
  FaLaravel, FaLayerGroup, FaProjectDiagram, FaRaspberryPi, FaReact
} from "react-icons/fa";
import { RiNodejsFill } from "react-icons/ri";
import {
  SiCss3,
  SiGnubash, SiHtml5, SiJavascript, SiMongodb, SiMysql,
  SiPhp, SiPostman, SiTailwindcss, SiTypescript, SiSonarqube
} from "react-icons/si";
import { BiTestTube, BiWindowAlt } from "react-icons/bi";
import { DiScrum } from "react-icons/di";
import { HiOutlineCube, HiOutlineDatabase, HiOutlineViewGridAdd } from "react-icons/hi";
import { MdOutlineScience, MdSyncAlt } from "react-icons/md";
import { HiOutlineServerStack, HiOutlineWrench } from "react-icons/hi2";
import { CgMoreR } from "react-icons/cg";
import { GiJesterHat } from "react-icons/gi";
import { SlLayers } from "react-icons/sl";

export const hardSkills = [
  {
    categoryKey: "frontend",
    categoryIcon: HiOutlineViewGridAdd,
    skills: [
      {
        key: "angular",
        name: "Angular",
        icon: FaAngular,
        color: "#c3002f",
        backgroundColor: "#eaeaea",
      },
      {
        key: "typescript",
        name: "TypeScript",
        icon: SiTypescript,
        color: "#FFFFFF",
        backgroundColor: "#3178C6",
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
    ],
  },
  {
    categoryKey: "backend",
    categoryIcon: HiOutlineServerStack,
    skills: [
      {
        key: "nodejs",
        name: "NodeJS",
        icon: RiNodejsFill,
        color: "#6cc24a",
        backgroundColor: "white",
      },
      {
        key: "javascript",
        name: "JavaScript",
        icon: SiJavascript,
        color: "#000000",
        backgroundColor: "#F7DF1E",
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
    categoryIcon: HiOutlineDatabase,
    skills: [
      {
        key: "mysql",
        name: "MySQL",
        icon: SiMysql,
        color: "#FFFFFF",
        backgroundColor: "#f29111",
      },
    ],
  },
  {
    categoryKey: "testing",
    categoryIcon: BiTestTube,
    skills: [
      {
        key: "sonar",
        name: "Sonar Qube",
        icon: SiSonarqube,
        color: "#290042",
        backgroundColor: "#ffffff",
      },
      {
        key: "jest",
        name: "Jest",
        icon: GiJesterHat,
        color: "#863C51",
        backgroundColor: "#ffffff",
      },
      {
        key: "karma",
        name: "Karma",
        icon: MdOutlineScience,
        color: "#56C5A8",
        backgroundColor: "#eaeaea",
      },
    ],
  },
  {
    categoryKey: "devops",
    categoryIcon: MdSyncAlt,
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
    categoryIcon: HiOutlineWrench,
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
    categoryIcon: HiOutlineCube,
    skills: [
      {
        key: "layered",
        name: "Layered architecture",
        icon: SlLayers,
        color: "#FFFFFF",
        backgroundColor: "#4B6EAF",
      },
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
  {
    categoryKey: "other",
    categoryIcon: CgMoreR,
    skills: [
      {
        key: "react",
        name: "React",
        icon: FaReact,
        color: "#00d8FF",
        backgroundColor: "#222222",
      },
      {
        key: "tailwind",
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#FFFFFF",
        backgroundColor: "#38BDF8",
      },
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
        key: "mongo",
        name: "MongoDB",
        icon: SiMongodb,
        color: "#00ed64",
        backgroundColor: "#001e2b",
      },
    ],
  }
];

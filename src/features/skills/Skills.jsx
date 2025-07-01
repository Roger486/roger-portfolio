import { FaReact } from "react-icons/fa";
import SkillCard from "./SkillCard";


export default function Skills() {
  const skill = {
    name: "React - JavaScript",
    description: "Esta página web (mi portfolio) web está hecha por mí en React 19 con Tailwind v4.",
    icon: FaReact,
    color: "#00d8FF",
    backgroundColor: "#222222"
  };

  return (
    <section id="skills" className="min-h-screen p-8">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <SkillCard skill={skill} />

      <br />
      <ul className="list-disc list-inside">
        <li>HTML5, CSS3, JavaScript</li>
        <li>React, React Hooks, Vite</li>
        <li>Tailwind CSS</li>
        <li>Git y GitHub</li>
        <li>Node.js y Express (básico)</li>
      </ul>
    </section>
  );
}

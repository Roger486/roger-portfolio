import { projects } from "../../data/project-list";
import { hardSkills } from "../../data/hard-skill-list";
import FeaturedProjectCard from "./FeaturedProjectCard";

export default function Projects() {
  const project = projects[0];

  return (
    <section className="min-h-screen p-8">
      <h2 className="text-3xl font-bold mb-4">Proyectos</h2>

      <FeaturedProjectCard project={project} />
      
    </section>
  );
}

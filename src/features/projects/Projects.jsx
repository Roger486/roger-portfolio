import { projects } from "../../data/project-list";
import FeaturedProjectCard from "./FeaturedProjectCard";

export default function Projects() {
  const projectElements = projects.map((project) => {
    return <FeaturedProjectCard key={project.key} project={project} />
  });

  return (
    <section className="min-h-screen p-8">
      <h2 className="text-3xl font-bold mb-4">Proyectos</h2>
      
      {projectElements}
      
    </section>
  );
}

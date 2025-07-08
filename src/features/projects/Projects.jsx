import { projects } from "../../data/project-list";
import FeaturedProjectCard from "./FeaturedProjectCard";
import ProjectCard from "./ProjectCard";

export default function Projects() {

  const featuredProjectElements = projects
    .filter((project) => project.featured)
    .map((project) => <FeaturedProjectCard key={project.key} project={project} />)

  const normalProjectElements = projects
    .filter((project) => !project.featured)
    .map((project) => <ProjectCard key={project.key} project={project} />)

  return (
    <section className="min-h-screen p-8">
      <h2 className="text-3xl font-bold mb-8">Proyectos</h2>
      <div className="flex flex-col gap-4 mb-4">{featuredProjectElements}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* {normalProjectElements} */}
        <ProjectCard key={1} project={projects[0]} />
        <ProjectCard key={2} project={projects[0]} />
        <ProjectCard key={3} project={projects[0]} />
        <ProjectCard key={4} project={projects[0]} />
        <ProjectCard key={5} project={projects[0]} />
      </div>
    </section>
  );
}

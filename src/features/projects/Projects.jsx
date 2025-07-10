import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { projects } from "../../data/project-list";
import FeaturedProjectCard from "./components/FeaturedProjectCard";
import ProjectCard from "./components/ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const featuredProjectElements = projects
    .filter((project) => project.featured)
    .map((project) => (
      <FeaturedProjectCard
        key={project.key}
        project={project}
        onClick={() => handleOpenModal(project)}
      />
    ));

  const normalProjectElements = projects
    .filter((project) => !project.featured)
    .map((project) => (
      <ProjectCard
        key={project.key}
        project={project}
        onClick={() => handleOpenModal(project)}
      />
    ));

  return (
    <section id="projects" className="min-h-screen p-8">
      <h2 className="text-3xl font-bold mb-8">{t("projects.title")}</h2>
      <div className="flex flex-col gap-4 mb-4">{featuredProjectElements}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {normalProjectElements}
      </div>

      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </section>
  );
}

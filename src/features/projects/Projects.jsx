import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { projects } from "../../data/project-list";
import FeaturedProjectCard from "./components/FeaturedProjectCard";
import ProjectCard from "./components/ProjectCard";
import ProjectModal from "./ProjectModal";
import SectionTitle from "../../components/ui/SectionTitle";

export default function Projects() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenProjectModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseProjectModal = () => {
    setSelectedProject(null);
  };

  const featuredProjectElements = projects
    .filter((project) => project.featured)
    .map((project) => (
      <FeaturedProjectCard
        key={project.key}
        project={project}
        onClick={() => handleOpenProjectModal(project)}
      />
    ));

  const normalProjectElements = projects
    .filter((project) => !project.featured)
    .map((project) => (
      <ProjectCard
        key={project.key}
        project={project}
        onClick={() => handleOpenProjectModal(project)}
      />
    ));

  return (
    <section id="projects" className="min-h-screen p-8">
      <SectionTitle>{t("projects.title")}</SectionTitle>
      <div className="flex flex-col gap-4 mb-4">{featuredProjectElements}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {normalProjectElements}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={handleCloseProjectModal}
      />
    </section>
  );
}

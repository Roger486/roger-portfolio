import { useState } from "react";
import { useLanguage } from "../../../core/context/LanguageContext";
import { projects } from "../../../core/data/project-list";
import FeaturedProjectCard from "../components/FeaturedProjectCard";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import SectionTitle from "../../../core/components/ui/SectionTitle";
import useInView from "../../../core/hooks/useInView";

export default function Projects() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);
  const { ref: featuredProjectsGridRef, hasBeenVisible: featuredProjectssGridHasBeenVisible } = useInView(0.1);
  const { ref: projectsGridRef, hasBeenVisible: projectssGridHasBeenVisible } = useInView(0.1);

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
        onOpenModal={() => handleOpenProjectModal(project)}
      />
    ));

  const normalProjectElements = projects
    .filter((project) => !project.featured)
    .map((project) => (
      <ProjectCard
        key={project.key}
        project={project}
        onOpenModal={() => handleOpenProjectModal(project)}
      />
    ));

  return (
    <section id="projects" className="min-h-screen">
      <SectionTitle>{t("projects.title")}</SectionTitle>
      <div 
        ref={featuredProjectsGridRef}
        className={`
          flex flex-col gap-6 gap-y-12 mb-12 opacity-0
          ${featuredProjectssGridHasBeenVisible ? "fade-in" : ""}
        `}
      >
        {featuredProjectElements}
        </div>
      <div
        ref={projectsGridRef}
        className={`
          grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-12 opacity-0
          ${projectssGridHasBeenVisible ? "fade-in" : ""}
        `}
      >
        {normalProjectElements}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={handleCloseProjectModal}
      />
    </section>
  );
}

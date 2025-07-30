import { useLanguage } from "../../../core/context/LanguageContext";
import getMainThumbnail from "../utils/getMainThumbnail";
import { renderProjectBadges } from "../utils/renderProjectElements";
import OpenProjectModalButton from "./OpenProjectModalButton";

export default function ProjectCard({ project, onOpenModal }) {
  const { t } = useLanguage();

  const mainThumbnail = getMainThumbnail(project);

  const mainSkillElements = renderProjectBadges(project.mainSkillsKeys, "main-skill");

  return (
    <div
      className="
      grid grid-cols-1 xl:grid-cols-2 p-4
      border-2 rounded-xl bg-white border-blue-400 shadow-md
    "
    >
      {/* Thumbnail + CTA */}
      <div className="flex flex-col gap-6 justify-between xl:mr-4">
        <h3 className="mb-3 text-blue-600 text-center text-lg font-bold xl:hidden">
          {project.name}
        </h3>
        <div className="flex justify-center">
          <img
            src={mainThumbnail}
            alt={`${project.name} thumbnail`}
            role="button"
            aria-label={t("projects.viewDetails")}
            className="
              rounded border border-black/20 shadow
              transition duration-300
              hover:scale-105 cursor-pointer
            "
            onClick={onOpenModal}
          />
        </div>

        <div className=" mx-6 mb-4 flex justify-center">
          <OpenProjectModalButton
            label={t("projects.viewDetails")}
            onClick={onOpenModal}
          />
        </div>
      </div>

      {/*Description + Main Skills */}
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="mb-3 text-blue-600 text-center font-bold text-lg hidden xl:block">
            {project.name}
          </h3>
          <p className="mb-4 text-sm">
            {t(`projects.project-descriptions.${project.key}.short`)}
          </p>
        </div>
          <div className="flex flex-wrap gap-1 justify-center">
            {mainSkillElements}
          </div>
      </div>
    </div>
  );
}

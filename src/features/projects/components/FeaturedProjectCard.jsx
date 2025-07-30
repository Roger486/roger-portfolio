import { useLanguage } from "../../../core/context/LanguageContext";
import getMainThumbnail from "../utils/getMainThumbnail";
import { renderProjectBadges } from "../utils/renderProjectElements";
import OpenProjectModalButton from "./OpenProjectModalButton";

export default function FeaturedProjectCard({ project, onOpenModal }) {
  const { t } = useLanguage();

  const mainThumbnail = getMainThumbnail(project);

  const mainSkillElements = renderProjectBadges(project.mainSkillsKeys, "main-skill");

  return (
    <div
      className="
        grid grid-cols-1 md:grid-cols-8 p-4
        border-2 rounded-xl bg-white border-blue-400 shadow-md
      "
    >
      {/* Thumbnail + CTA */}
      <div
        className="
        col-span-4 md:mr-3
        flex flex-col gap-6 justify-evenly
      "
      >
        <h3 className="text-blue-600 text-2xl font-bold mb-4 md:hidden text-center">
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

        <div className="mx-10 mb-6 md:mb-0 flex justify-center">
          <OpenProjectModalButton
            label={t("projects.viewDetails")}
            onClick={onOpenModal}
          />
        </div>
      </div>

      {/* text + main skills */}
      <div
        className="col-span-4
        md:border-l-2 border-blue-400 pl-3
        flex flex-col gap-6 justify-between
        "
      >
        <div>
          <h3 className="text-blue-600 text-2xl font-bold mb-4 hidden md:block">
            {project.name}
          </h3>
          <h4 className="font-semibold mb-2">
            {t("projects.description-title")}:
          </h4>
          <p className="mb-2">
            {t(`projects.project-descriptions.${project.key}.short`)}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-2">
          {mainSkillElements}
        </div>
      </div>
    </div>
  );
}

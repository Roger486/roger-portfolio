import { useLanguage } from "../../../core/context/LanguageContext";
import { renderExternalLinkButtons, renderProjectBadges } from "../../../core/utils/renderProjectElements";
import OpenModalButton from "./OpenModalButton";

export default function ProjectCard({ project, onClick }) {
  const { t } = useLanguage();

  const mainImage = project.images.find((image) => image.key === "img-001");
  const mainThumbnail = mainImage.thumb;

  const demoUrlElements = renderExternalLinkButtons(project.demoUrls);
  const repoUrlElements = renderExternalLinkButtons(project.repoUrls);

  const roleElements = renderProjectBadges(project.roles, "role");
  const mainSkillElements = renderProjectBadges(project.mainSkillsKeys, "main-skill");
  const secondarySkillElements = renderProjectBadges(project.secondarySkillsKeys, "secondary-skill");

  return (
    <div
      className="
      grid grid-cols-1 xl:grid-cols-2 p-4
      border-2 rounded-xl bg-white border-blue-400 shadow-md
    "
    >
      {/* Thumbnail + CTA + Roles */}
      <div className="flex flex-col xl:mr-3">
        <h3 className="mb-3 text-center text-lg font-bold xl:hidden">
          {project.name}
        </h3>
        <div className="flex justify-center mb-4">
          <img
            src={mainThumbnail}
            alt="Thumbnail"
            className="
            rounded border border-black/20 shadow
            transition duration-300
            hover:scale-105 cursor-pointer
          "
            onClick={onClick}
          />
        </div>

        <div className="mb-4 flex justify-center">
          <OpenModalButton
            label={t("projects.viewDetails")}
            onClick={onClick}
          />
        </div>

        {demoUrlElements.length > 0 && (
          <div>
            <h4 className="text-xs">{t("projects.demo-urls")}:</h4>
            <div className="flex gap-1 justify-center">{demoUrlElements}</div>
          </div>
        )}
        {repoUrlElements.length > 0 && (
          <div>
            <h4 className="text-xs">{t("projects.repo-urls")}:</h4>
            <div className="flex gap-1 justify-center">{repoUrlElements}</div>
          </div>
        )}
        <div>
          <h4 className="text-xs">{t("projects.roles")}:</h4>
          <div className="flex flex-wrap gap-1 justify-center">
            {roleElements}
          </div>
        </div>
      </div>

      {/*Description + Skills */}
      <div className="flex flex-col h-full justify-between">
        <div>
          <h3 className="mb-3 text-center font-bold text-lg hidden xl:block">
            {project.name}
          </h3>
          <p className="mb-4 text-sm">
            {t(`projects.project-descriptions.${project.key}.short`)}
          </p>
        </div>
        <div>
          <h4 className="text-xs">{t("projects.related-skills")}:</h4>
          <div className="flex flex-wrap gap-1 justify-center">
            {mainSkillElements}
          </div>
          <div className="flex flex-wrap gap-1 justify-center">
            {secondarySkillElements}
          </div>
        </div>
      </div>
    </div>
  );
}

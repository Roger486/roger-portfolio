import { useLanguage } from "../../../core/context/LanguageContext";
import { renderExternalLinkButtons, renderProjectBadges } from "../../../core/utils/renderProjectElements";
import OpenModalButton from "./OpenModalButton";

export default function FeaturedProjectCard({ project, onClick }) {
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
        grid grid-cols-1 md:grid-cols-8 p-4
        border-2 rounded-xl bg-white border-blue-400 shadow-md
      "
    >
      {/* Thumbnail + CTA */}
      <div className="col-span-3 p-2 md:mr-3">
        <h3 className="text-2xl font-bold mb-4 md:hidden">{project.name}</h3>
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
          <OpenModalButton label={t("projects.viewDetails")} onClick={onClick} />
        </div>

        <div>
          {demoUrlElements.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm">{t("projects.demo-urls")}:</h4>
              <div className="flex gap-1 justify-center text-center">
                {demoUrlElements}
              </div>
            </div>
          )}

          {repoUrlElements.length > 0 && (
            <div>
              <h4 className="text-sm">{t("projects.repo-urls")}:</h4>
              <div className="flex gap-1 justify-center text-center">
                {repoUrlElements}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* text + roles + skills */}
      <div
        className="col-span-5
        md:border-l-2 border-blue-400 pl-3
        flex flex-col h-full justify-between
        "
      >
        <div>
          <h3 className="text-2xl font-bold mb-4 hidden md:block">
            {project.name}
          </h3>
          <h4 className="font-semibold mb-2">
            {t("projects.description-title")}:
          </h4>
          <p className="mb-2">
            {t(`projects.project-descriptions.${project.key}.short`)}:
          </p>
        </div>
        <div className="mb-2">
          <h4 className="mt-4 mb-1 font-semibold">{t("projects.roles")}:</h4>
          <div className="flex flex-wrap gap-1 justify-center">
            {roleElements}
          </div>
          <div>
            <h4 className="mt-4 mb-1 font-semibold">
              {t("projects.main-skills")}:
            </h4>
            <div className="flex flex-wrap gap-2 justify-center">
              {mainSkillElements}
            </div>
            <h4 className="mt-4 mb-1 font-semibold">
              {t("projects.secondary-skills")}:
            </h4>
            <div className="flex flex-wrap gap-2 justify-center">
              {secondarySkillElements}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

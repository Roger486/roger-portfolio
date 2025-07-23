import { ImCross } from "react-icons/im";
import ImageGallery from "./ImageGallery";
import { useLanguage } from "../../../core/context/LanguageContext";
import { useEffect } from "react";
import {
  lockBodyScroll,
  unlockBodyScroll,
} from "../../../core/utils/lockbodyscroll";
import { createPortal } from "react-dom";
import {
  renderExternalLinkButtons,
  renderProjectBadges,
} from "../utils/renderProjectElements";

export default function ProjectModal({ project, onClose }) {
  const { t } = useLanguage();
  const isOpen = Boolean(project);

  useEffect(() => {
    if (isOpen) lockBodyScroll();
    return () => unlockBodyScroll();
  }, [isOpen]);

  if (!isOpen) return null;

  const modalRoot = document.getElementById("modal-root");

  const modalContent = (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative scroll-smooth"
        // This avoids the onClick={onClose} on parent div to be triggered when cliking inside this div
        onClick={(e) => e.stopPropagation()}
      >
        {/* close button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-red-700 cursor-pointer"
          onClick={onClose}
        >
          <ImCross />
        </button>

        {/* div with with the modal content */}
        <div className="mt-4 space-y-6">
          <ImageGallery images={project.images} />

          <h2
            className="
            text-2xl font-bold mb-4 text-center text-gray-800
            after:flex after:h-1 after:bg-blue-600 after:mt-3
            before:flex before:h-1 before:bg-blue-600 before:mb-3
            "
          >
            {project.name}
          </h2>

          {/* 🔗 Enlaces visibles rápido */}
          <div className="mb-4">
            <h3 className="font-semibold text-sm text-blue-600 mb-4">
              {t("projects.links")}
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {renderExternalLinkButtons(project.demoUrls)}
              {renderExternalLinkButtons(project.repoUrls)}
            </div>
          </div>

          {/* 🏷️ Roles y skills */}
          <div className="mb-6">
            <div className="mb-3">
              <h3 className="font-semibold text-sm text-blue-600 mb-1">
                {t("projects.roles")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {renderProjectBadges(project.roles, "role")}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-sm text-blue-600 mb-1">
                {t("projects.main-skills")}
              </h3>
              <div className="flex flex-wrap gap-2 mb-1">
                {renderProjectBadges(project.mainSkillsKeys, "main-skill")}
              </div>
              <h3 className="font-semibold text-sm text-blue-600 mb-1">
                {t("projects.secondary-skills")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {renderProjectBadges(
                  project.secondarySkillsKeys,
                  "secondary-skill"
                )}
              </div>
            </div>
          </div>

          {/* 📝 Descripción técnica */}
          <h4 className="font-semibold mb-2 text-blue-600">
            {t("projects.description-title")}:
          </h4>
          <p className="text-gray-900 mb-3">
            {t(`projects.project-descriptions.${project.key}.long`)}
          </p>
          <p className="text-gray-600 italic">
            {t(`projects.project-descriptions.${project.key}.extra`)}
          </p>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, modalRoot);
}

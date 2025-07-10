import { ImCross } from "react-icons/im";
import ImageGallery from "./components/ImageGallery";
import { useLanguage } from "../../context/LanguageContext";
import { useEffect } from "react";
import { lockBodyScroll, unlockBodyScroll } from "../../helpers/lockbodyscroll";
import { createPortal } from "react-dom";

export default function ProjectModal({ project, onClose }) {
  const { t } = useLanguage();
  const isOpen = Boolean(project);

  useEffect(() => {
    if (isOpen) lockBodyScroll();
    return () => unlockBodyScroll();
  }, [isOpen]);

  if (!isOpen) return null;

  const modalRoot = document.getElementById("project-modal-root");

  const modalContent = (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
        // This avoids the onClick={onClose} on parent div to be triggered when cliking inside this div
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-red-700"
          onClick={onClose}
        >
          <ImCross />
        </button>

        <div className="mt-4">
          <ImageGallery images={project.images} />

          <h2 className="text-2xl font-bold mb-4">{project.name}</h2>

          <p className="text-gray-900 mb-4">
            {t(`projects.project-descriptions.${project.key}.long`)}
          </p>
          <p className="text-gray-600 mb-4">
            {t(`projects.project-descriptions.${project.key}.extra`)}
          </p>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, modalRoot);
}

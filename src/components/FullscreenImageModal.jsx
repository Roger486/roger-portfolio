import { ImCross } from "react-icons/im";
import { createPortal } from "react-dom";
import { useLanguage } from "../context/LanguageContext";

export default function FullscreenImageModal({ image, onClose }) {
    const { t } = useLanguage();
  const modalRoot = document.getElementById("project-modal-root"); // the same used for the ProjectModal

  return createPortal(
    <div
      className="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center"
      onClick={onClose}
    >
      <div className="relative w-full h-full flex items-center justify-center">
                <figure className="text-center">
        <img
          src={image.src}
          alt={t(`projects.image-descriptions.${image.descriptionKey}`)}
          className="max-w-full max-h-full object-contain cursor-zoom-out"
        />
        <figcaption className="mt-2 py-0.5 text-xs text-white border-t-2 border-b-2 border-blue-400">
          {t(
            `projects.image-descriptions.${image.descriptionKey}`
          )}
        </figcaption>
        </figure>
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-red-700 text-2xl"
          onClick={onClose}
        >
          <ImCross />
        </button>
      </div>
    </div>,
    modalRoot
  );
}

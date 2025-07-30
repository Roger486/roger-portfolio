import { ImCross } from "react-icons/im";
import { createPortal } from "react-dom";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useLanguage } from "../../../core/context/LanguageContext";

export default function FullScreenProjectImageModal({
  image,
  onClose,
  currentImageIndex,
  onImageIndexChange,
  imageListLength,
}) {
  const { t } = useLanguage();
  const modalRoot = document.getElementById("modal-root"); // the same used for the ProjectModal
  const isFirstImage = currentImageIndex === 0;
  const isLastImage = currentImageIndex === imageListLength - 1;

  return createPortal(
    <div
      className="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center"
      role="dialog"
      onClick={onClose}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <figure className="text-center">
          <img
            src={image.src}
            alt={t(`projects.image-descriptions.${image.descriptionKey}`)}
            className="max-w-full max-h-[90vh] object-contain cursor-zoom-out"
          />
          <figcaption className="mt-2 py-0.5 text-xs text-white border-t-2 border-b-2 border-blue-400">
            {t(`projects.image-descriptions.${image.descriptionKey}`)}
          </figcaption>
        </figure>

        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-red-700 text-2xl cursor-pointer"
          aria-label={t("projects.close-image")}
          onClick={onClose}
        >
          <ImCross />
        </button>

        {/* Skip images buttons */}
        {/**
         * We use e.stopPropagation(); in this case on the buttons, since doing it on the main container
         * makes the user unable to click-to-close the image.
         */}
        <button
          disabled={isFirstImage}
          className={`
          absolute top-[45vh] left-4  text-4xl rounded-full p-1
          transition 
          ${isFirstImage ? "text-gray-100/50" : "cursor-pointer text-gray-400/50 hover:text-black hover:bg-blue-400/50"}
          `}
          onClick={(e) => {
            e.stopPropagation();
            onImageIndexChange(Math.max(0, currentImageIndex - 1))
          }}
          aria-label={t("projects.previous-image")}
        >
          <GrPrevious />
        </button>
        <button
          disabled={isLastImage}
          className={`
          absolute top-[45vh] right-4 text-4xl rounded-full p-1
          transition
          ${isLastImage ? "text-gray-100/50" : "cursor-pointer text-gray-400/50 hover:text-black hover:bg-blue-400/50"}
          `}
          onClick={(e) => {
            e.stopPropagation();
            onImageIndexChange(Math.min(currentImageIndex + 1, imageListLength - 1));
          }}
          aria-label={t("projects.next-image")}
        >
          <GrNext />
        </button>
      </div>
    </div>,
    modalRoot
  );
}

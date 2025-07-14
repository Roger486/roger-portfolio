import { useState } from "react";
import { useLanguage } from "../../../context/LanguageContext";
import FullscreenImageModal from "../../../components/ui/FullscreenImageModal";

export default function ImageGallery({ images }) {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fullscreenOpen, setFullscreenOpen] = useState(false);

  if (!images || images.length === 0) return null;

  const imageElements = images.map((image, index) => {
    return (
      <li key={image.key} className="flex-shrink-0">
        <img
          src={image.thumb}
          alt={t(`projects.image-descriptions.${image.descriptionKey}`)}
          aria-current={index === currentImageIndex ? "true" : undefined}
          className={`
              w-20 max-h-20 sm:w-24 sm:max-h-24 xl:w-32 xl:max-h-32 aspect-square
              rounded border border-black/20 shadow
              transition duration-300
              hover:scale-105 cursor-pointer
              object-contain
              ${index === currentImageIndex ? "ring-2 ring-blue-400" : ""}
            `}
          onClick={() => setCurrentImageIndex(index)}
        />
      </li>
    );
  });

  return (
    <div>
      <figure className="my-4 p-1 text-center">
        <div className="rounded border border-gray-200 contain-content">
          <img
            src={images[currentImageIndex].src}
            alt={t(`projects.image-descriptions.${images[currentImageIndex].descriptionKey}`)}
            className="w-full max-h-[400px] object-contain cursor-zoom-in"
            onClick={() => setFullscreenOpen(true)}
          />
        </div>
        <figcaption className="mt-2 py-0.5 text-xs text-gray-600 border-t-2 border-b-2 border-blue-400">
          {t(
            `projects.image-descriptions.${images[currentImageIndex].descriptionKey}`
          )}
        </figcaption>
      </figure>
      <div className="overflow-x-auto">
        <ul role="list" className="flex gap-4 m-1 mb-4">
          {imageElements}
        </ul>
      </div>
      {/* Modal fullscreen */}
      {fullscreenOpen && (
        <FullscreenImageModal
          image={images[currentImageIndex]}
          onClose={() => setFullscreenOpen(false)}
          currentImageIndex={currentImageIndex}
          onImageIndexChange={setCurrentImageIndex}
          imageListLength={images.length}
        />
      )}
    </div>
  );
}

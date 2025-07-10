import { useState } from "react";
import FullscreenImageModal from "../../../components/FullscreenImageModal";

export default function ImageGallery({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [fullscreenOpen, setFullscreenOpen] = useState(false);

  if (!images || images.length === 0) return null;

  const imageElements = images.map((image, index) => {
    return (
      <img
        key={image.key}
        src={image.thumb}
        alt="Thumbnail"
        className="
            w-20 max-h-20 sm:w-24 sm:max-h-24 xl:w-32 xl:max-h-32 aspect-square
            rounded border border-black/20 shadow
            transition duration-300
            hover:scale-105 cursor-pointer
            object-contain
          "
        onClick={() => setCurrentImageIndex(index)}
      />
    );
  });

  return (
    <div>
      <div className="my-4 p-1 rounded border border-gray-200 contain-content">
        <img
          src={images[currentImageIndex].src}
          alt=""
          className="w-full max-h-[400px] object-contain cursor-zoom-in"
          onClick={() => setFullscreenOpen(true)}
        />
      </div>
      <div className="overflow-x-auto">
        <div className="flex gap-4 mb-4">{imageElements}</div>
      </div>
                  {/* Modal fullscreen */}
      {fullscreenOpen && (
        <FullscreenImageModal
          src={images[currentImageIndex].src}
          alt={`Imagen ${currentImageIndex + 1}`}
          onClose={() => setFullscreenOpen(false)}
        />
      )}
    </div>
  );
}

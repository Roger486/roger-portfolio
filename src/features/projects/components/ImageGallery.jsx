import { useState } from "react";

export default function ImageGallery({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const imageElements = images.map((image, index) => {
    return (
      <img
        key={image.key}
        src={image.src}
        alt="Thumbnail"
        className="
            w-30
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
        />
      </div>
      <div className="overflow-x-auto">
        <div className="flex gap-4 mb-4">{imageElements}</div>
      </div>
    </div>
  );
}

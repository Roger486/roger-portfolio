import { ImCross } from "react-icons/im";
import { createPortal } from "react-dom";

export default function FullscreenImageModal({ src, alt, onClose }) {
  const modalRoot = document.getElementById("project-modal-root"); // the same used for the ProjectModal

  return createPortal(
    <div
      className="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center"
      onClick={onClose}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-full object-contain cursor-zoom-out"
        />
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

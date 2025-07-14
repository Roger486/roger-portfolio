import { useEffect } from "react";
import { createPortal } from "react-dom";
import { ImCross } from "react-icons/im";
import { lockBodyScroll, unlockBodyScroll } from "../../helpers/lockbodyscroll";
import ContactForm from "./ContactForm";
import ContactActions from "../../components/contact/ContactActions"

export default function ContactModal({ onClose }) {
  useEffect(() => {
    lockBodyScroll();
    return () => unlockBodyScroll();
  }, []);

  const modalRoot = document.getElementById("modal-root");

  const modalContent = (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
    >
      <div
        className="relative bg-white p-8 rounded shadow-md max-w-2xl w-full"
      >

        {/* close button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-red-700 cursor-pointer"
          onClick={onClose}
        >
          <ImCross />
        </button>
        <div className="m-4 p-4 bg-gray-300">
          <p>Recuerda que puedes contactar conmigo a través de Linkedin o Github.</p>

        </div>
        <ContactForm />
      </div>
    </div>
  );

  return createPortal(modalContent, modalRoot);
}

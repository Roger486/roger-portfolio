import { useEffect } from "react";
import { createPortal } from "react-dom";
import { ImCross } from "react-icons/im";
import { lockBodyScroll, unlockBodyScroll } from "../../helpers/lockbodyscroll";
import ContactForm from "./ContactForm";
import SocialIconLink from "../../components/contact/SocialIconLink";
import { socialLinkList } from "../../data/social-link-list";

export default function ContactModal({ onClose }) {
  useEffect(() => {
    lockBodyScroll();
    return () => unlockBodyScroll();
  }, []);

  const socialIconsLinks = socialLinkList.map((socialLink) => (
      <SocialIconLink key={socialLink.key} platformKey={socialLink.key} displayName={true} />
  ));

  const modalRoot = document.getElementById("modal-root");

  const modalContent = (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="relative bg-white p-8 rounded shadow-md max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* close button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-red-700 cursor-pointer"
          onClick={onClose}
        >
          <ImCross />
        </button>
        <div className="flex flex-col gap-6 m-4 p-2">
          <section className="space-y-2 text-sm text-gray-700">
            <p>
              Recuerda que puedes contactar conmigo o ver mis proyectos y experiencia a través de las distintas redes:
            </p>
            <div className="flex justify-center gap-2">{socialIconsLinks}</div>
          </section>
          <hr className="my-4 border-gray-300" />
          <section className="text-sm text-gray-700">
            <p className="text-base font-medium mb-4">
              O si lo prefieres, escríbeme directamente:
            </p>
            <ContactForm />
          </section>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, modalRoot);
}

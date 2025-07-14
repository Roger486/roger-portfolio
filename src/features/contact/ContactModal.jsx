import { useEffect } from "react";
import { createPortal } from "react-dom";
import { ImCross } from "react-icons/im";
import { lockBodyScroll, unlockBodyScroll } from "../../helpers/lockbodyscroll";
import ContactForm from "./ContactForm";
import SocialIconLink from "../../components/contact/SocialIconLink";
import { socialLinkList } from "../../data/social-link-list";
import { useLanguage } from "../../context/LanguageContext";

export default function ContactModal({ onClose }) {
  useEffect(() => {
    lockBodyScroll();
    return () => unlockBodyScroll();
  }, []);

  const { t } = useLanguage();

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
        <div className="flex flex-col gap-5 m-4 p-2">
          <section className="text-sm text-gray-700">
            <p className="mb-3 text-blue-700">
              {t("contact.social-paragraph")}
            </p>
            <div className="flex justify-center gap-2">{socialIconsLinks}</div>
          </section>
          <hr className="my-4 border-blue-400" />
          <section className="text-sm text-gray-700">
            <p className="font-bold mb-4 text-blue-700">
              {t("contact.contact-paragraph")}
            </p>
            <ContactForm />
          </section>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, modalRoot);
}

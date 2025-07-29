import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import ContactModal from "../../../features/contact/components/ContactModal";
import { FiMail } from "react-icons/fi";

export default function ContactButton({ variant = "inline" }) {
  const { t } = useLanguage();
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  const baseClass = "transition duration-300 cursor-pointer flex flex-col items-center justify-center gap-1";
  const hoverClasses = "hover:text-blue-600 hover:shadow-xl hover:scale-110 hover:bg-[#ebf5ff]"
  const variantClasses = {
    inline:
      "px-3 py-1 border-2 rounded-full text-xs flex",
    floating:
      "fixed right-5 bottom-5 z-50 border rounded-lg text-[9px] font-semibold w-18 aspect-square bg-white shadow-[inset_2px_2px_6px_rgba(0,0,0,0.2)]"
  };

  const handleOpenContactModal = () => {
    setIsFormModalOpen(true);
  };
  const handleCloseContactModal = () => {
    setIsFormModalOpen(false);
  };

  return (
    <div>
      <button
        className={`${baseClass} ${hoverClasses} ${variantClasses[variant]}`}
        aria-label={t("contact.contact-me")}
        title={t("contact.contact-me")}
        onClick={handleOpenContactModal}
      >
        {variant === "floating" && <FiMail size={"38px"} />}
        {t("contact.contact-me")}
      </button>
      {isFormModalOpen && <ContactModal onClose={handleCloseContactModal} />}
    </div>
  );
}

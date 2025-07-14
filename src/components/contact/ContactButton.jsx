import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import ContactModal from "../../features/contact/ContactModal";

export default function ContactButton({ buttonClassName = "flex" }) {
  const { t } = useLanguage();
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  const handleOpenContactModal = () => {
    setIsFormModalOpen(true);
  };
  const handleCloseContactModal = () => {
    setIsFormModalOpen(false);
  };

  return (
    <div>
      <button
        className={`
          border-2 px-3 py-1 rounded-full text-xs cursor-pointer
          ${buttonClassName}
          transition duration-300
          hover:text-blue-600 hover:shadow-2xl hover:scale-110 hover:bg-blue-50/50
        `}
        aria-label={t("contact-me")}
        title={t("contact-me")}
        onClick={handleOpenContactModal}
      >
        {t("contact-me")}
      </button>
      {isFormModalOpen && <ContactModal onClose={handleCloseContactModal} />}
    </div>
  );
}

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { langs } from "../../data/langs";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isLangListOpen, setIsLangListOpen] = useState(false);
  const componentRef = useRef(null);

  const onLangChoice = (code) => {
    setLanguage(code);
    setIsLangListOpen(false);
  };

  useEffect(() => {
    if (!isLangListOpen) return;

    const handleClickAnywhere = (e) => {
      if (componentRef.current.contains(e.target)) return;
      setIsLangListOpen(false);
    }

    const handleEscKey = (e) => {
      if (e.key === 'Escape') setIsLangListOpen(false);
    }

    document.addEventListener('keydown', handleEscKey);
    document.addEventListener('click', handleClickAnywhere);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.removeEventListener('click', handleClickAnywhere);
    }
  }, [isLangListOpen])

  const langDetails = langs.find((lang) => lang.code === language);

  return (
    <div ref={componentRef}>
      <button
        type="button"
        onClick={() => setIsLangListOpen(true)}
        className={`w-24 p-2 text-xs rounded flex items-center gap-2 text-gray-500 bg-white border border-gray-500 ${isLangListOpen ? "opacity-30" : ""}`}
      >
        <img src={langDetails.flag} alt={langDetails.label} className="h-4 w-5" />
        {langDetails.label}
      </button>
      {isLangListOpen && (
        <ul className="relative -mt-10 flex flex-col bg-gray-500 text-white text-xs rounded">
          {langs.map((lang) => (
            <li key={lang.code}><button
              onClick={() => onLangChoice(lang.code)}
              type="button"
              className="w-24 p-2 flex items-center gap-2"
            >
              <img src={lang.flag} alt={lang.label} className="h-4 w-5" />
              {lang.label}
            </button></li>
          ))}
        </ul>
      )}
    </div>
  );
}

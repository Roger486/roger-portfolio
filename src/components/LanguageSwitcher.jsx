import { useLanguage } from "../context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setLanguage("es")}
        className={`px-2 py-1 text-xs rounded ${language === "es" ? "bg-gray-600 text-white" : ""}`}
      >
        Español
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-2 py-1 text-xs rounded ${language === "en" ? "bg-gray-600 text-white" : ""}`}
      >
        English
      </button>
    </div>
  );
}
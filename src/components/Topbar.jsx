import { useLanguage } from "../context/LanguageContext";
import ContactElements from "./ContactElements";

export default function Topbar() {
  const linkedinLink =
    "https://www.linkedin.com/in/roger-navarro-desarrollador/";
  const githubLink = "https://github.com/Roger486";
  const { t } = useLanguage();

  return (
    <header className="bg-amber-500 h-14 w-[calc(100%-16rem)] ml-64 flex items-center px-4">
      <p className="mr-4 font-semibold">Roger Navarro</p>
      <div className="ml-auto flex">
        <ContactElements />
      </div>
    </header>
  );
}

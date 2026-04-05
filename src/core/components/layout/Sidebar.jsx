import ContactActions from "../ui/ContactActions";
import { useLanguage } from "../../context/LanguageContext";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import useSidebarEffects from "../../hooks/useSidebarEffects";

export default function Sidebar({ isMenuOpen, onClose, activeSection }) {
  const { topPosition } = useSidebarEffects(onClose, isMenuOpen);
  const { t } = useLanguage();
  const sections = ["about", "projects", "skills"];

  const topStyle = isMenuOpen ? { top: "1rem" } : { top: `${topPosition}px` };

  return (
    <aside
      className={`
          fixed left-0 h-screen p-6 transition-all duration-300 z-50
          ${
            isMenuOpen
              ? "bg-gray-50 w-full text-xl flex justify-center text-center mt-10 lg:hidden"
              : "hidden"
          }
          lg:block lg:w-64
        `}
      style={topStyle}
    >
      <nav
        className={`mt-5 flex flex-col text-black font-semibold ${
          isMenuOpen ? "justify-around mb-100" : "gap-4"
        }`}
      >

        {sections.map((section) => {
          return (
            <a
              key={section}
              href={`#${section}`}
              onClick={onClose}
              className={`relative px-2 group font-semibold transition-all duration-300 rounded-2xl w-fit
            hover:text-blue-400 hover:bg-white/0
            ${
              activeSection === section && !isMenuOpen
                ? "bg-blue-400/20 font-bold text-blue-700"
                : ""
            }
          `}
            >
              {t(`side-bar.${section}`)}
              <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-blue-400 transition-all duration-500 group-hover:w-full"></span>
            </a>
          );
        })}

      </nav>
      <div className="fixed bottom-24 flex justify-center">
        {isMenuOpen && <ContactActions />}
      </div>
      <div className="fixed bottom-10 left-0 w-64 flex justify-center">
        <LanguageSwitcher />
      </div>
    </aside>
  );
}

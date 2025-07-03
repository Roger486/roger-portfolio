import { useState, useEffect } from "react";
import ContactElements from "./ContactElements";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";

export default function Sidebar() {
  const [topPosition, setTopPosition] = useState(250); // posición inicial para espacio avatar
  const { t } = useLanguage();

  useEffect(() => {
    // Establecemos topPosition correcto al montar el componente
    const scrollY = window.scrollY;
    setTopPosition(Math.max(250 - scrollY, 60));

    // Función para actualizar topPosition en scroll
    const onScroll = () => {
      const scrollY = window.scrollY;
      setTopPosition(Math.max(250 - scrollY, 60));
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mostrar versión compacta si scroll es mayor a 100
  const showCompactTopbar = scrollY > 60;

  return (
    <aside
      className="fixed left-0 h-screen w-64 p-6"
      style={{ top: `${topPosition}px`, transitionProperty: "top" }}
    >
      <nav className="mt-5 flex flex-col gap-4 text-black font-semibold">
        <a href="#about" className="hover:text-blue-400">
          {t("side_bar.about")}
        </a>
        <a href="#skills" className="hover:text-blue-400">
          {t("side_bar.skills")}
        </a>
        <a href="#projects" className="hover:text-blue-400">
          {t("side_bar.projects")}
        </a>
        <a href="#experience" className="hover:text-blue-400">
          {t("side_bar.experience")}
        </a>
      </nav>
      <div className="fixed bottom-25 left-0 w-64 flex justify-center">
        {showCompactTopbar && <ContactElements />}
      </div>
      <div className="fixed bottom-10 left-0 w-64 flex justify-center">
        <LanguageSwitcher />
      </div>
    </aside>
  );
}

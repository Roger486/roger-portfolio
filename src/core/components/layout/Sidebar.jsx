import { useState, useEffect } from "react";
import ContactActions from "../ui/ContactActions";
import {
  isBodyScrollLocked,
  lockBodyScroll,
  unlockBodyScroll,
} from "../../utils/lockbodyscroll";
import { useLanguage } from "../../context/LanguageContext";
import LanguageSwitcher from "../ui/LanguageSwitcher";

export default function Sidebar({ isMenuOpen, onClose, activeSection }) {
  const [topPosition, setTopPosition] = useState(250); // posición inicial para espacio avatar
  const { t } = useLanguage();

  useEffect(() => {
    /**
     * Bloque encargado de calcular el punto en el que estamos del scroll vertical
     * y no permitir que vaya más alla de 60, de esta forma el sidebar empieza
     * donde termina el avatar del componente <Avatar /> que mide 60
     * y solo baja al scrollear hasta la parte superior de la ventana
     */
    // Establecemos topPosition correcto al montar el componente
    const scrollY = window.scrollY;
    setTopPosition(Math.max(250 - scrollY, 60));
    // Función para actualizar topPosition en scroll
    const onScroll = () => {
      const scrollY = window.scrollY;
      setTopPosition(Math.max(250 - scrollY, 60));
    };

    // Cerrar menú directamente al hacer resize
    const onResize = () => {
      onClose(); // con esto también desbloqueas el scroll si el menú era quien lo tenía bloqueado
    };

    // Bloqueo scroll solo si se abre el menú en móvil
    if (isMenuOpen && window.innerWidth < 1024) {
      lockBodyScroll();
    } else {
      unlockBodyScroll();
    }

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      unlockBodyScroll();
    };
  }, [isMenuOpen, onClose]);

  // Mostrar los contact elements si scroll es mayor a 190
  const showContactActions = topPosition < 190;

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
          isMenuOpen ? "gap-6" : "gap-4"
        }`}
      >
        <a
          href="#about"
          onClick={onClose}
          className={`relative px-2 group font-semibold transition-all duration-300 rounded-2xl w-fit
            hover:text-blue-400 hover:bg-white/0
            ${activeSection === "about" ? "bg-blue-400/20 font-bold text-blue-700" : ""}
          `}
        >
          {t("side-bar.about")}
          <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-blue-400 transition-all duration-500 group-hover:w-full"></span>
        </a>
        <a
          href="#skills"
          onClick={onClose}
          className={`relative px-2 group font-semibold transition-all duration-300 rounded-2xl w-fit
            hover:text-blue-400 hover:bg-white/0
            ${activeSection === "skills" ? "bg-blue-400/20 font-bold text-blue-700" : ""}
          `}
        >
          {t("side-bar.skills")}
          <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-blue-400 transition-all duration-500 group-hover:w-full"></span>
        </a>{" "}
        <a
          href="#projects"
          onClick={onClose}
          className={`relative px-2 group font-semibold transition-all duration-300 rounded-2xl w-fit
            hover:text-blue-400 hover:bg-white/0
            ${activeSection === "projects" ? "bg-blue-400/20 font-bold text-blue-700" : ""}
          `}
        >
          {t("side-bar.projects")}
          <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-blue-400 transition-all duration-500 group-hover:w-full"></span>
        </a>
      </nav>
      <div className="fixed bottom-24 left-0 w-64 flex justify-center">
        {(showContactActions || isMenuOpen) && <ContactActions />}
      </div>
      <div className="fixed bottom-10 left-0 w-64 flex justify-center">
        <LanguageSwitcher />
      </div>
    </aside>
  );
}

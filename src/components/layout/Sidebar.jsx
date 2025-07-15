import { useState, useEffect } from "react";
import ContactActions from "../contact/ContactActions";
import { useLanguage } from "../../context/LanguageContext";
import {
  isBodyScrollLocked,
  lockBodyScroll,
  unlockBodyScroll,
} from "../../helpers/lockbodyscroll";
import LanguageSwitcher from "../ui/LanguageSwitcher";

export default function Sidebar({ isMenuOpen, onClose }) {
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

    /**
     * bloque encargado de bloquear el scroll vertical cuando el menu hamburguesa está abierto
     * También tiene en cuenta si alguien más necesita el scroll bloqueado (p.e. un modal)
     * a través de isBodyScrollLocked()
     */
    const updateOverflow = () => {
      const isMobile = window.innerWidth < 1024;

      if (isMenuOpen && isMobile) {
        lockBodyScroll();
      }

      if (isMenuOpen && !isMobile) {
        if (!isBodyScrollLocked()) {
          unlockBodyScroll();
        }
        onClose();
      }
    };

    updateOverflow();

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", updateOverflow);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateOverflow);
      unlockBodyScroll();
    };
  }, [isMenuOpen]);

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
          className="relative group text-black font-semibold transition-colors duration-300 hover:text-blue-400"
        >
          {t("side-bar.about")}
          <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-blue-400 transition-all duration-500 group-hover:w-full"></span>
        </a>
        <a
          href="#skills"
          onClick={onClose}
          className="relative group text-black font-semibold transition-colors duration-300 hover:text-blue-400"
        >
          {t("side-bar.skills")}
          <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-blue-400 transition-all duration-500 group-hover:w-full"></span>
        </a>        <a
          href="#projects"
          onClick={onClose}
          className="relative group text-black font-semibold transition-colors duration-300 hover:text-blue-400"
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

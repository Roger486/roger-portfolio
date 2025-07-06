import { useState, useEffect } from "react";
import ContactElements from "./ContactElements";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";

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
     */
    const updateOverflow = () => {
      const isMobile = window.innerWidth < 1024;
      if (isMenuOpen && isMobile) {
        document.body.style.overflow = "hidden";
        window.scrollTo(0, 0);
      } else {
        document.body.style.overflow = "";
        onClose();
      }
    };

    updateOverflow();

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", updateOverflow);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateOverflow);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Mostrar los contact elements si scroll es mayor a 190
  const showContactElements = topPosition < 190;

  const topStyle = isMenuOpen ? { top: "1rem" } : { top: `${topPosition}px` };

  return (
    <aside
      className={`
          fixed left-0 h-screen p-6 transition-all duration-300
          ${isMenuOpen
            ? "bg-gray-50 w-full relative z-10 text-xl flex justify-center text-center mt-10 lg:hidden"
            : "hidden"}
          lg:block lg:w-64
        `}
      style={topStyle}
    >
      <nav className={`mt-5 flex flex-col text-black font-semibold ${isMenuOpen ? "gap-6" : "gap-4"}`}>
        <a href="#about" onClick={onClose} className="hover:text-blue-400">
          {t("side_bar.about")}
        </a>
        <a href="#skills" onClick={onClose} className="hover:text-blue-400">
          {t("side_bar.skills")}
        </a>
        <a href="#projects" onClick={onClose} className="hover:text-blue-400">
          {t("side_bar.projects")}
        </a>
        <a href="#experience" onClick={onClose} className="hover:text-blue-400">
          {t("side_bar.experience")}
        </a>
      </nav>
      <div className="fixed bottom-24 left-0 w-64 flex justify-center">
        {(showContactElements || isMenuOpen) && <ContactElements />}
      </div>
      <div className="fixed bottom-10 left-0 w-64 flex justify-center">
        <LanguageSwitcher />
      </div>
    </aside>
  );
}

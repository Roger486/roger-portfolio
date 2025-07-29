import { useEffect, useState } from "react";
import { lockBodyScroll, unlockBodyScroll } from "../utils/lockbodyscroll";

export default function useSidebarEffects(onClose, isMenuOpen) {

  const [topPosition, setTopPosition] = useState(250); // posición inicial para espacio avatar

  useEffect(() => {

    /*
     * Establecemos topPosition correcta al montar el componente:
     * Lo que sea más grande, el tamaño grande del avatar menos el scroll,
     * o 60 que es lo que ocupará el avatar como mínimo, que es el tamaño del Topbar
     */
    const scrollY = window.scrollY;
    setTopPosition(Math.max(250 - scrollY, 60));

    /**
     * Función para actualizar topPosition cuando scrolleamos
     */
    const onScroll = () => {
      const scrollY = window.scrollY;
      setTopPosition(Math.max(250 - scrollY, 60));
    };

    /**
     * Cerrar menú movil al hacer resize para evitar problemas con el lock del scroll
     */
    const onResize = () => {
      onClose(); // con esto también desbloqueas el scroll si el menú era quien lo tenía bloqueado
    };

    // Bloqueo scroll solo si se abre el menú en móvil 
    // window.innerWidth < 1024 es porque supùestamente solo se puede abrir el menu en menos de 1024px de width
    if (isMenuOpen && window.innerWidth < 1024) {
      lockBodyScroll();
    } else {
      unlockBodyScroll();
    }
    
    // Events
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    }
  }, [onClose, isMenuOpen]);

  return {topPosition}
}
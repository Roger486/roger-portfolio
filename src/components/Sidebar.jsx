import { useState, useEffect } from 'react';
import CompactTopbar from './CompactTopBar';

export default function Sidebar() {
  const [topPosition, setTopPosition] = useState(250); // posición inicial para espacio avatar

  useEffect(() => {
    // Establecemos topPosition correcto al montar el componente
    const scrollY = window.scrollY;
    setTopPosition(Math.max(250 - scrollY, 60));

    // Función para actualizar topPosition en scroll
    const onScroll = () => {
      const scrollY = window.scrollY;
      setTopPosition(Math.max(250 - scrollY, 60));
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

    // Mostrar versión compacta si scroll es mayor a 100
  const showCompactTopbar = scrollY > 60;

  return (
    <aside
      className="fixed left-0 h-screen w-64 bg-gray-800 p-6"
      style={{ top: `${topPosition}px`, transitionProperty: 'top' }}
    >
      <nav className="mt-5 flex flex-col gap-4 text-gray-200 font-semibold">
        <a href="#about" className="hover:text-blue-500">About</a>
        <a href="#skills" className="hover:text-blue-500">Skills</a>
        <a href="#projects" className="hover:text-blue-500">Projects</a>
        <a href="#experience" className="hover:text-blue-500">Experience</a>
        {showCompactTopbar &&
          <CompactTopbar />
        }
      </nav>
    </aside>
  );
}

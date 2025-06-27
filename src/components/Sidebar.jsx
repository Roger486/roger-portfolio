import { useState, useEffect } from 'react';

export default function Sidebar() {
  const [topPosition, setTopPosition] = useState(250); // posición inicial (80px para espacio avatar)

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      // Calculamos la nueva posición top: resta scroll pero no menos de 0
      const newTop = Math.max(250 - scrollY, 0);
      setTopPosition(newTop);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <aside
      className="fixed left-0 h-screen w-64 bg-gray-100 dark:bg-gray-800 p-6 transition-top duration-300"
      style={{ top: `${topPosition}px`, transitionProperty: 'top' }}
    >
      <nav className="mt-10 flex flex-col gap-4 text-gray-800 dark:text-gray-200 font-semibold">
        <a href="#about" className="hover:text-blue-500">About</a>
        <a href="#skills" className="hover:text-blue-500">Skills</a>
        <a href="#projects" className="hover:text-blue-500">Projects</a>
        <a href="#experience" className="hover:text-blue-500">Experience</a>
      </nav>
    </aside>
  );
}

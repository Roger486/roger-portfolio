import { useState, useEffect } from "react";

export default function Avatar() {
  const [scrollY, setScrollY] = useState(null);
  const [mounted, setMounted] = useState(false);

  const maxSize = 220;
  const minSize = 40;

  useEffect(() => {
    const calculateScrollY = () => window.scrollY || 0;

    setScrollY(calculateScrollY());
    setMounted(true); // Indicamos que el componente ya está montado

    const onScroll = () => {
      setScrollY(calculateScrollY());
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const currentScrollY = scrollY !== null ? scrollY : 0;

  const size =
    currentScrollY < 200
      ? maxSize - ((maxSize - minSize) * currentScrollY) / 200
      : minSize;

  const showSeparateNames  = currentScrollY >= 75 && currentScrollY < 150;

  const showCombinedName  = currentScrollY >= 150;

  return (
    <div className="fixed top-4 items-center pl-3 hidden lg:flex">
      <div
        className="rounded-full overflow-hidden"
        style={{
          width: size,
          height: size,
          transition: mounted ? "width 0.2s, height 0.2s" : "none",
        }}
      >
        <img
          src="/src/assets/avatar.jpg"
          alt="Roger Navarro"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Mostrar los dos nombres en líneas separadas */}
      {showSeparateNames && (
        <div className="ml-2 flex flex-col font-semibold text-gray-900 transition-opacity duration-300">
          <span style={{ opacity: mounted ? 1 : 0 }}>Roger</span>
          <span style={{ opacity: mounted ? 1 : 0 }}>Navarro</span>
        </div>
      )}

      {/* Mostrar nombre completo en una línea */}
      {showCombinedName && (
        <span
          className="ml-2 font-semibold text-gray-900 transition-opacity duration-300"
          style={{ opacity: mounted ? 1 : 0 }}
        >
          Roger Navarro
        </span>
      )}
    </div>
  );
}

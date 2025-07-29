import { useState, useEffect } from "react";
import avatarImg from "/src/assets/avatar.jpg"; // import images as objects so the production build get them correctly

export default function Avatar() {
  const [scrollY, setScrollY] = useState(0);

  const maxSize = 220;
  const minSize = 40;

  useEffect(() => {
    const calculateScrollY = () => window.scrollY || 0;
    
    setScrollY(calculateScrollY());
    
    const onScroll = () => {
      setScrollY(calculateScrollY());
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const size =
    scrollY < 200
      ? maxSize - ((maxSize - minSize) * scrollY) / 200
      : minSize;

  const showSeparateNames  = scrollY >= 75 && scrollY < 150;

  const showCombinedName  = scrollY >= 150;

  return (
    <div className="fixed top-4 items-center pl-3 hidden lg:flex">
      <div
        className="rounded-full overflow-hidden"
        style={{
          width: size,
          height: size,
          transition: "width 0.3s, height 0.3s",
        }}
      >
        <img
          src={avatarImg}
          alt="Roger Navarro"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Mostrar los dos nombres en líneas separadas */}
      {showSeparateNames && (
        <div className="ml-2 flex flex-col font-semibold text-gray-900">
          <span className="text-blue-600">Roger</span>
          <span>Navarro</span>
        </div>
      )}

      {/* Mostrar nombre completo en una línea */}
      {showCombinedName && (
        <span
          className="ml-2 font-semibold text-gray-900"
        >
          <span className="text-blue-600">Roger</span> Navarro
        </span>
      )}
    </div>
  );
}

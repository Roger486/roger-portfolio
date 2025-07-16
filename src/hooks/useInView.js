import { useEffect, useRef, useState } from "react";

export default function useInView(threshold = 0.6) {
  // Creamos una referencia al elemento del DOM; al principio está en null pero luego le asignaremos el elemento
  const ref = useRef(null);
  // Estado que indica si el elemento está visible en pantalla; cambiará dinámicamente con el scroll
  const [isVisible, setIsVisible] = useState(false);
  // Estado que indica si el elemento ya ha sido visible al menos una vez (no se reinicia)
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  // Dentro de useEffect instanciamos un IntersectionObserver que observará la visibilidad del elemento
  // También limpiamos el observer cuando el componente se desmonte
  useEffect(() => {
    // Instanciamos el observer que reaccionará cuando el elemento entre o salga del viewport
    const observer = new IntersectionObserver(([entry]) => {
      // Usamos entry.isIntersecting para saber si es visible y setear los estados
      // setIsVisible y setHasBeenVisible se ejecutan solo si se debe cambiar el valor
        setIsVisible(entry.isIntersecting);
      if (entry.isIntersecting && !hasBeenVisible) {
        setHasBeenVisible(true);
      }
    }, { threshold });

    // Si el elemento DOM ya está disponible, lo empezamos a observar
    if (ref.current) observer.observe(ref.current)

    // Limpieza: dejamos de observar el elemento al desmontar el componente
    return () => { if (ref.current) observer.unobserve(ref.current) };
  // si el threshold viniera de un state como parámetro, podria cambiar, por si acaso se añade a las dependencias
  }, [threshold]);

  // Devolvemos la referencia al elemento y su estado de visibilidad
  return { ref, isVisible, hasBeenVisible };
}
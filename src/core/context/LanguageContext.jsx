import { createContext, useContext, useState } from "react";
import en from "../../locales/en.json";
import es from "../../locales/es.json";

// objeto que contiene los json con las expresiones en cada idioma
const translations = { en, es };

/*
Creamos un nuevo contexto vacío y lo almacenamos en LanguageContext.
Un contexto es un objeto de react que hace de contendor de información.
Esta información se la pasaremos con un provider, que es un componente
que crearemos aquí mismo.
*/
const LanguageContext = createContext();

/*
{ children } es un prop especial en React que representa el contenido del propio componente.
Por ejemplo: 
        <LanguageProvider>
          <App />
        </LanguageProvider>
Aqui <App /> sería el children.
*/
export function LanguageProvider({ children }) {
  // usamos un state para el idioma y lo ponemos en español por defecto
  const [language, setLanguage] = useState("es");

  /*
  La función t(key), viene de translate y hace eso mismo traducir:
  - Identifica el idioma activo en el state para acceder un json o otro.
  - Extrae de la key el string corrrecto del objeto "translations"
  */
  const t = (key) => {
    // la key puede ser por ejemplo "about.title", la convertimos en el string ["about", "title"]
    const keyMadeArray = key.split(".");
    /*
    Con reduce, accedemos a la propiedad "about", y luego la propiedad "title" dentro de "about"
    recorriendo el string.
    El valor inicial será el objeto "translations" que contiene todos los strings,
    pero en el "language" correcto (-- translations[language] --)
    Al final en el return retornamos el string, pero si la key no existe en translations, translatedString
    valdrá "undefined", por lo que retornaremos la key directamente y así en la web se verá "about.title"
    y así sabremos que falla la key.
    */
    const translatedString = keyMadeArray.reduce((obj, property) => {
        return (obj || {})[property];
      }, translations[language]);
    return translatedString || key;
  };

  /*
  El proveedor LanguageContext envuelve a todos los hijos (children)
  y les proporciona acceso a 'language', 'setLanguage' y 't' mediante el contexto.
  Así, cualquier componente descendiente puede consumir estos valores sin pasarlos explícitamente como props
  y de esta forma acceder a las traducciones, cambiar el idioma o simplemente saber cual está seleccionado.
  */
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

/*
Define un hook personalizado llamado useLanguage.
Este hook usa internamente useContext para acceder al LanguageContext.
Facilita a los componentes consumir el contexto sin tener que importar y usar directamente
useContext(LanguageContext) cada vez.

*/
export function useLanguage() {
  return useContext(LanguageContext);
}

/*
Ejemplo de uso, con esto tienes a disposición las funciones y variables del contexto en un componente:

import { useLanguage } from '../context/LanguageContext';

const { language, t, setLanguage } = useLanguage();
*/

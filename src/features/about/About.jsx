import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import bgAboutImg from "/src/assets/bg-about.png"; // import images as objects so the production build get them correctly
import SectionTitle from "../../components/ui/SectionTitle";

export default function About() {
  const greetingRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });

    if (greetingRef.current) {
      observer.observe(greetingRef.current);
    }

    return () => {
      if (greetingRef.current) observer.unobserve(greetingRef.current);
    };
  }, []);

  return (
    <section id="about" className="min-h-screen p-8">
      <div
        className="
          bg-no-repeat 
          bg-[length:200px] 
          sm:bg-[length:400px] 
          bg-[top_50px_right] 
          sm:bg-top-right
        "
        style={{ backgroundImage: `url(${bgAboutImg})` }}
      >
        <div>
          <SectionTitle>{t("about.title")}</SectionTitle>
          <p
            ref={greetingRef}
            className={`
              text-xl font-semibold text-blue-600 italic mb-8 ml-8 
              ${isVisible ? "fade-in-lateral" : ""}
            `}
          >
            {t("about.greeting")}
          </p>
          <div className="p-6 bg-white/50 border-2 border-blue-400 rounded-lg">
            <p className="mb-6">{t("about.paragraph1")}</p>
            <p className="mb-6">{t("about.paragraph2")}</p>
            <p>{t("about.paragraph3")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

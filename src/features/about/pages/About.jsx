import { useLanguage } from "../../../core/context/LanguageContext";
import bgAboutImg from "/src/assets/bg-about.png"; // import images as objects so the production build get them correctly
import SectionTitle from "../../../core/components/ui/SectionTitle";
import useInView from "../../../core/hooks/useInView";
import ProjectBadge from "../../projects/components/ProjectBadge";

export default function About() {
  const { t } = useLanguage();
  const { ref: heroRef, isVisible: heroIsVisible } = useInView();
  const { ref: textRef, hasBeenVisible: textHasBeenVisible } = useInView(0.1);

  return (
    <section id="about" className="min-h-screen">
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
          <div
            ref={heroRef}
            className={`
              mb-10 ml-8 max-w-3xl
              ${heroIsVisible ? "fade-in-lateral" : ""}
            `}
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 tracking-tight">
              {t("about.hero.title")}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-600">
              {t("about.hero.subtitle")}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <ProjectBadge name="angular" type="main-skill" />
              <ProjectBadge name="nodejs" type="main-skill" />
              <ProjectBadge name="mysql" type="main-skill" />
              <ProjectBadge name="docker" type="main-skill" />
              <ProjectBadge name="api-rest" type="main-skill" />
              <ProjectBadge name="jest" type="main-skill" />
              <ProjectBadge name="layered" type="main-skill" />
            </div>
          </div>
          <div
            ref={textRef}
            className={`
              opacity-0
              p-6 bg-white/70 border-2 border-blue-300 rounded-lg shadow-md
              ${textHasBeenVisible ? "fade-in" : ""}
            `}
          >
            <p className="mb-6">{t("about.paragraph1")}</p>
            <p className="mb-6">{t("about.paragraph2")}</p>
            <p>{t("about.paragraph3")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

import HardSkillCard from "./HardSkillCard";
import { hardSkills } from "../../data/hard-skill-list";
import { softSkills } from "../../data/soft-skill-list";
import { useLanguage } from "../../context/LanguageContext";
import SoftSkillCard from "./SoftSkillCard";
import SectionTitle from "../../components/ui/SectionTitle";
import useInView from "../../hooks/useInView";

export default function Skills() {
  const { t } = useLanguage();
  const { ref: softSkillsTitleRef, isVisible: softSkillsTitleIsVisible } = useInView();
  const { ref: hardSkillsTitleRef, isVisible: hardSkillsTitleIsVisible } = useInView();
  const { ref: softSkillsGridRef, hasBeenVisible: softSkillsGridHasBeenVisible } = useInView(0.1);
  const { ref: hardSkillsGridRef, hasBeenVisible: hardSkillsGridHasBeenVisible } = useInView(0.1);
  const hardSkillElements = getHardSkills();
  const softSkillElements = getSoftSkills();

  function getHardSkills() {
    return hardSkills.map((skill) => {
      return <HardSkillCard key={skill.key} skill={skill} />;
    });
  }

  function getSoftSkills() {
    return softSkills.map((skill) => {
      // guardamos la key de traducción de la skill de esta iteración
      const skillKey = `skills.soft-skills.${skill.key}`;
      // recorremos el array y gracias a la key añadimos al objeto skill las traducciones
      const SkillWithTranslatedTexts = {
        ...skill,
        name: t(`${skillKey}.name`),
        description: t(`${skillKey}.description`),
      };

      return <SoftSkillCard key={skill.key} skill={SkillWithTranslatedTexts} />;
    });
  }

  return (
    <section id="skills" className="min-h-screen p-4">
      <SectionTitle>{t("skills.title")}</SectionTitle>
      <h3
        ref={softSkillsTitleRef}
        className={`
          text-xl font-bold mb-4 text-blue-600
          ${softSkillsTitleIsVisible ? "fade-in-lateral" : ""}
        `}
      >
        {t("skills.title-hard")}
      </h3>
      <div
        ref={softSkillsGridRef}
        className={`
          grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8 opacity-0
          ${softSkillsGridHasBeenVisible ? "fade-in" : ""}
        `}
      >
        {hardSkillElements}
      </div>
      <h3
        ref={hardSkillsTitleRef}
        className={`
          text-xl font-bold mb-4 text-blue-600
          ${hardSkillsTitleIsVisible ? "fade-in-lateral" : ""}
        `}
      >
        {t("skills.title-soft")}
      </h3>
      <div
        ref={hardSkillsGridRef}
        className={`
          grid md:grid-cols-1 lg:grid-cols-2 gap-4 opacity-0
          ${hardSkillsGridHasBeenVisible ? "fade-in" : ""}
        `}
      >
        {softSkillElements}
      </div>
    </section>
  );
}

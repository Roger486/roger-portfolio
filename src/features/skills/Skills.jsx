import HardSkillCard from "./HardSkillCard";
import { hardSkills } from "../../data/hard-skill-list";
import { softSkills } from "../../data/soft-skill-list";
import { useLanguage } from "../../context/LanguageContext";
import SoftSkillCard from "./SoftSkillCard";

export default function Skills() {
  const { t } = useLanguage();
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
      <h2 className="text-3xl font-bold mb-8">{t("skills.title")}</h2>
      <h3 className="text-xl font-bold mb-4">{t("skills.title-hard")}</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {hardSkillElements}
      </div>
      <h3 className="text-xl font-bold mb-4">{t("skills.title-soft")}</h3>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
        {softSkillElements}
      </div>
    </section>
  );
}

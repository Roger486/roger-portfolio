import HardSkillCard from "./HardSkillCard";
import { hardSkills } from "../../data/hard-skill-list";
import { useLanguage } from "../../context/LanguageContext";

export default function Skills() {
  const { t } = useLanguage();
  const hardSkillElements = getHardSkills();

  function getHardSkills() {
    return hardSkills.map((skill) => {
      if (skill.type !== "hard") return;
      return <HardSkillCard key={skill.key} skill={skill} />;
    });
  }

  /*
  function getHardSkills() {
    return skills.map((skill) => {
      if (skill.type !== "hard") return;
      // guardamos la key de traducción de la skill de esta iteración
      const skillKey = `skills.skill-list.${skill.key}`;
      // recorremos el array y gracias a la key añadimos al objeto skill las traducciones
      const SkillWithTranslatedTexts = {
        ...skill,
        description: t(`${skillKey}.description`),
        project: t(`${skillKey}.project`),
      };

      return <HardSkillCard key={skill.key} skill={SkillWithTranslatedTexts} />;
    });
  }
*/

  return (
    <section id="skills" className="min-h-screen p-4">
      <h2 className="text-3xl font-bold mb-8">{t("skills.title")}</h2>
      <h3 className="text-xl font-bold mb-4">{t("skills.title-hard")}</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {hardSkillElements}
      </div>
      <h3 className="text-xl font-bold mb-4">{t("skills.title-soft")}</h3>
    </section>
  );
}

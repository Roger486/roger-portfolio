import SkillCard from "./SkillCard";
import { skills } from "../../data/skill-list";
import { useLanguage } from "../../context/LanguageContext";

export default function Skills() {
  const { t } = useLanguage()

  const skillElements = skills.map( skill => {
    // guardamos la key de traducción de la skill de esta iteración
    const skillKey = `skills.${skill.key}`;
    // recorremos el array y gracias a la key añadimos al objeto skill las traducciones
    const SkillWithTranslatedTexts = {
      ...skill,
      name: t(`${skillKey}.name`),
      description: t(`${skillKey}.description`),
      project: t(`${skillKey}.project`)
    }

    return <SkillCard key={skill.key} skill={SkillWithTranslatedTexts} />
  });

  return (
    <section id="skills" className="min-h-screen p-8">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {skillElements}
      </div>
    </section>
  );
}

import { hardSkills } from "../../../core/data/hard-skill-list";
import { softSkills } from "../../../core/data/soft-skill-list";
import HardSkillCategoryCard from "../components/HardSkillCategoryCard";
import SoftSkillCard from "../components/SoftSkillCard";

export function renderHardSkillCategoryCards() {
  return hardSkills.map((category) => (
    <HardSkillCategoryCard key={category.categoryKey} category={category} />
  ));
}

export function renderSoftSkillsCards(t) {
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

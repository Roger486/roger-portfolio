import { useLanguage } from "../../../core/context/LanguageContext";
import HardSkillCard from "./HardSkillCard";

export default function HardSkillCategoryCard({ category }) {
  const { t } = useLanguage();

  const hardSkillElements = category.skills.map((skill) => {
    return <HardSkillCard key={skill.key} skill={skill} />;
  });

  return (
    <div 
      className="
        border-2 border-blue-400 bg-gray-100/50 rounded-lg p-2 shadow-md
        transition duration-300 hover:bg-gray-100/85 hover:shadow-xl
      "
    >
      <h4 className="text-base font-semibold mb-2 text-blue-600 border-l-4 border-blue-400 pl-3 bg-linear-65 from-gray-400/20 to-blue-400/10 rounded-r-full">
        {t(`skills.hard-skill-categories.${category.categoryKey}`)}
      </h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-2 p-2">
        {hardSkillElements}
      </div>
    </div>
  );
}

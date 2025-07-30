import { useLanguage } from "../../../core/context/LanguageContext";
import SectionTitle from "../../../core/components/ui/SectionTitle";
import useInView from "../../../core/hooks/useInView";
import { renderHardSkillCategoryCards, renderSoftSkillsCards } from "../utils/renderSkillCards";

export default function Skills() {
  const { t } = useLanguage();
  const { ref: softSkillsTitleRef, isVisible: softSkillsTitleIsVisible } = useInView();
  const { ref: hardSkillsTitleRef, isVisible: hardSkillsTitleIsVisible } = useInView();
  const { ref: softSkillsGridRef, hasBeenVisible: softSkillsGridHasBeenVisible } = useInView(0.1);
  const { ref: hardSkillsGridRef, hasBeenVisible: hardSkillsGridHasBeenVisible } = useInView(0.1);
  const hardSkillElements = renderHardSkillCategoryCards();
  const softSkillElements = renderSoftSkillsCards(t);

  return (
    <section id="skills" className="min-h-screen">
      <SectionTitle>{t("skills.title")}</SectionTitle>
      <h3
        ref={hardSkillsTitleRef}
        className={`
          text-xl font-bold mb-6 text-blue-600
          ${hardSkillsTitleIsVisible ? "fade-in-lateral" : ""}
        `}
      >
        {t("skills.title-hard")}
      </h3>
      <div
        ref={hardSkillsGridRef}
        className={`
          flex flex-col gap-6 mb-8
          ${hardSkillsGridHasBeenVisible ? "fade-in" : ""}
        `}
      >
        {hardSkillElements}
      </div>
      <h3
        ref={softSkillsTitleRef}
        className={`
          text-xl font-bold mb-6 text-blue-600
          ${softSkillsTitleIsVisible ? "fade-in-lateral" : ""}
        `}
      >
        {t("skills.title-soft")}
      </h3>
      <div
        ref={softSkillsGridRef}
        className={`
          grid md:grid-cols-1 lg:grid-cols-2 gap-6 opacity-0
          ${softSkillsGridHasBeenVisible ? "fade-in" : ""}
        `}
      >
        {softSkillElements}
      </div>
    </section>
  );
}

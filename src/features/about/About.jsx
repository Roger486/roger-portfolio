import { useLanguage } from "../../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="min-h-screen p-8">
      <div
        className="    bg-no-repeat 
    bg-[length:200px] 
    sm:bg-[length:400px] 
    bg-[top_50px_right] 
    sm:bg-top-right"
        style={{ backgroundImage: "url('/src/assets/bg-about.png')" }}
      >
        <div>
          <h2 className="text-3xl font-bold pt-40 mb-12">{t("about.title")}</h2>
          <p className="text-xl font-semibold mb-8">{t("about.greeting")}</p>
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

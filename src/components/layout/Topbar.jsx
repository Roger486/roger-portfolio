import { IoClose, IoMenu } from "react-icons/io5";
import avatarImg from "/src/assets/avatar.jpg"; // import images as objects so the production build get them correctly
import ContactActions from "../contact/ContactActions";
import { useLanguage } from "../../context/LanguageContext";
import { Typewriter } from "react-simple-typewriter";

export default function Topbar({ isMenuOpen, setIsMenuOpen }) {
  const { t, language } = useLanguage();

  const animatedSubtitleWords = ["Full Stack", "Front End", "Back End", t("subtitle-2"), "Web"];

  const animatedSubtitle =
    language === "es" ? (
      <>
        {t("subtitle-1")}{" "}
        <span className="text-blue-600 font-semibold">
          <Typewriter
            words={animatedSubtitleWords}
            loop={5}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </span>
      </>
    ) : (
      <>
        <span className="text-blue-600 font-semibold">
          <Typewriter
            words={animatedSubtitleWords}
            loop={5}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </span>{" "}
        {t("subtitle-1")}
      </>
    );

  return (
    <header className="h-14 flex items-center px-4 ml-0 lg:ml-64 lg:relative fixed top-0 left-0 right-0 z-50 bg-gray-50 lg:bg-transparent">
      {/* Dinamic elements */}
      <div className="top-4 items-center lg:hidden flex gap-2 mr-2">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="cursor-pointer"
        >
          {isMenuOpen ? <IoClose size={40} /> : <IoMenu size={40} />}
        </button>
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img
            src={avatarImg}
            alt="Roger Navarro"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <h1 className="text-sm md:text-xl lg:text-3xl font-extrabold text-gray-800 drop-shadow-xl tracking-tight">
        <span className="text-blue-600">Roger</span> Navarro
      </h1>
      <p className="hidden sm:block m-auto text-sm md:text-lg text-gray-700 font-medium fade-in">
        {animatedSubtitle}
      </p>
      <div className="ml-auto">
        <ContactActions buttonClassName="hidden sm:flex" />
      </div>
    </header>
  );
}

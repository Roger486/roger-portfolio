import { useEffect, useState } from "react";
import Footer from "../components/layout/Footer";
import Avatar from "../components/layout/Avatar";
import Topbar from "../components/layout/Topbar";
import Sidebar from "../components/layout/Sidebar";

export default function MainLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting)
        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      {
        threshold: 0.30, // cuando se vea un 30% de la seccion, es opcional pero útil para elementos grandes
      }
    );

    sections.forEach((section) => observer.observe(section));
    
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <Avatar />
      <Topbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Sidebar isMenuOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} activeSection={activeSection} />

      <main className="ml-0 lg:ml-64">
        {children}
        <Footer />
      </main>
    </>
  );
}

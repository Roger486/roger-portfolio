import { useState } from "react";
import Avatar from "../components/Avatar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function MainLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <>
      <Avatar />
      <Topbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Sidebar isMenuOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <main className="ml-0 lg:ml-64">
        {children}
        <Footer />
      </main>
    </>
  );
}

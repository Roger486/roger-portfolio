import { useState } from "react";
import Footer from "../components/layout/Footer";
import Avatar from "../components/layout/Avatar";
import Topbar from "../components/layout/Topbar";
import Sidebar from "../components/layout/Sidebar";

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

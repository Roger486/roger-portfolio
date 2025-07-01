import Avatar from "../components/Avatar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function MainLayout({ children }) {
  return (
    <>
      <Avatar />
      <Topbar />
      <Sidebar />

      <main className="ml-64">
        {children}
        <Footer />
      </main>
    </>
  );
}

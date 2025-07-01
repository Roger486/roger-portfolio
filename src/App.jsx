import About from "./features/about/About";
import Contact from "./features/contact/Contact";
import Experience from "./features/experience/Experience";
import Projects from "./features/projects/Projects";
import Skills from "./features/skills/Skills";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <MainLayout>

      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      
    </MainLayout>
  );
}

export default App;

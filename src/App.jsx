import About from "./features/about/pages/About";
import Projects from "./features/projects/pages/Projects";
import Skills from "./features/skills/pages/Skills";
import MainLayout from "./core/layouts/MainLayout";

function App() {
  return (
    <MainLayout>

      <About />
      <Skills />
      <Projects />
      
    </MainLayout>
  );
}

export default App;

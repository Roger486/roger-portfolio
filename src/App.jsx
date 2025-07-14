import About from "./features/about/About";
import Projects from "./features/projects/Projects";
import Skills from "./features/skills/Skills";
import MainLayout from "./layouts/MainLayout";

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

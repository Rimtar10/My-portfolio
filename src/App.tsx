import { Navbar } from "./components/layout/Navbar";
import { CustomCursor } from "./components/ui/CustomCursor";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Leadership } from "./components/sections/Leadership";
import { BeyondCode } from "./components/sections/BeyondCode";
import { Contact } from "./components/sections/Contact";

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Leadership />
        <BeyondCode />
        <Contact />
      </main>
    </>
  );
}

export default App;

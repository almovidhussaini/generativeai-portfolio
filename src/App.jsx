import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import FeaturedProject from "./components/FeaturedProject";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <FeaturedProject />
        <Projects />
        <Journey />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
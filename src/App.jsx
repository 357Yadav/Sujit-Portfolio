import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Leadership from "./components/Leadership";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Highlights from "./components/Highlights";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (

     <>
  <Navbar />
  <Hero />
  <Highlights />
  <About />
  <Skills />
  <Projects />
  <Leadership />
  <Achievements />
  <Education />
  <Contact />
  <Footer />

    </>
  );
}

export default App;
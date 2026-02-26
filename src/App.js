import React from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <div className="App min-h-screen">
        <Navbar />
        <main className="pt-16">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Certifications />
          <Contact />
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;

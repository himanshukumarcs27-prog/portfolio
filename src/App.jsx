
import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";

import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skill";
import Projects from "./components/project";
import Resume from "./components/resume";
import Contact from "./components/contact";
import Footer from "./components/footer";
import CodingProfile from "./components/CodingProfile.jsx";
import Achievement from "./components/achevement.jsx";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <main className="pt-20">

        <Routes>

          {/* Home */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Resume />
                <Contact />
              </>
            }
          />

          {/* About */}
          <Route
            path="/about"
            element={<About />}
          />

          {/* Skills */}
          <Route
            path="/skills"
            element={<Skills />}
          />

          {/* Projects */}
          <Route
            path="/projects"
            element={<Projects />}
          />
         <Route path="/Achivement"
          element={<Achievement/>} />

      <Route path="/coding"
          element={<CodingProfile/>} />



          {/* Resume */}
          <Route
            path="/resume"
            element={<Resume />}
          />

          {/* Contact */}
          <Route
            path="/contact"
            element={<Contact />}
          />

        </Routes>

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default App;


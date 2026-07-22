import React, { useState } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-[#EFF8EF] text-[#1a321a]">
      <Navbar />

      <main>
        <Hero />
        <AboutMe />
        <Experiences />
        <Projects onSelectProject={(p) => setSelectedProject(p)} />

        {/* Gradient transition: Projects (white) → Skills (section-tint) */}
        <div className="section-bridge-top" aria-hidden="true" />

        {/* Skills & Achievements – satu section, satu background */}
        <section id="skills" className="pt-16 lg:pt-20 pb-24 lg:pb-32 px-6 section-tint">
          <div className="max-w-5xl mx-auto">
            <Skills />
            {/* Divider spacing before Achievements */}
            <div className="mt-20">
              <Achievements />
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default App;

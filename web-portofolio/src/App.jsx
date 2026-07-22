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

        {/* Skills & Achievements – background & glow style matched to Experiences */}
        <section id="skills" className="experiences-section pt-16 pb-24 lg:pt-20 lg:pb-32 px-6 relative overflow-hidden">
          {/* Left side gradient glow */}
          <div className="experiences-glow-left" aria-hidden="true" />
          {/* Right side gradient glow */}
          <div className="experiences-glow-right" aria-hidden="true" />

          <div className="max-w-5xl mx-auto relative z-10">
            <Skills />
            {/* Divider spacing before Achievements */}
            <div className="mt-16 sm:mt-20">
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

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MobileAppsSection } from './components/MobileAppsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { FreelanceSection } from './components/FreelanceSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <Hero />
        <MobileAppsSection />
        <ProjectsSection />
        <FreelanceSection />
        <ExperienceSection />
        <SkillsSection />
        <TestimonialsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;

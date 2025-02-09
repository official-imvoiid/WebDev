import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import AchievementsSection from './components/AchievementsSection';
import BrandingSection from './components/BrandingSection';
import PapersSection from './components/PapersSection';
import ResumeSection from './components/ResumeSection';
import WhatIDoSection from './components/WhatIDoSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <AchievementsSection />
        <BrandingSection />
        <PapersSection />
        <ResumeSection />
        <WhatIDoSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

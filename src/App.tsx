import React, { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import OfferingsSection from './components/OfferingsSection';
import RoadmapSection from './components/RoadmapSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';

function App() {
  // Update the document title when the component mounts
  useEffect(() => {
    document.title = "Sorcerer's Supply - Arcane Tools for Modern Spellcasters";
    
    // Also update the favicon to a magic wand if available
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      favicon.setAttribute('href', '/wand.svg');
    }
  }, []);
  
  return (
    <div className="font-sans">
      <HeroSection />
      <AboutSection />
      <OfferingsSection />
      <RoadmapSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}

export default App;
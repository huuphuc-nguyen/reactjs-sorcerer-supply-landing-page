import React from 'react';
import { Sparkles, Scroll, ShoppingBag } from 'lucide-react';
import Button from './ui/Button';

const HeroSection: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 to-purple-950"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, index) => (
          <div 
            key={index}
            className="absolute h-1 w-1 rounded-full bg-amber-300 opacity-60 animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
        {/* Larger glowing orbs */}
        {[...Array(5)].map((_, index) => (
          <div 
            key={`orb-${index}`}
            className="absolute h-3 w-3 rounded-full bg-purple-400 opacity-70 animate-drift glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 7}s`,
              filter: 'blur(1px)'
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <Sparkles className="h-8 w-8 text-amber-300 mx-auto mb-4 animate-float" />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">Sorcerer's Supply</span>
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-purple-200 mb-8">
          Arcane tools for modern spellcasters
        </h2>
        <p className="text-purple-300 mb-10 max-w-xl mx-auto">
          Where the mystical meets the practical — empowering mages, alchemists, and curious minds with enchanted gear and arcane wisdom.
        </p>
        <div className='flex justify-center items-center flex-wrap gap-4'>
          <Button onClick={scrollToAbout}>
            <Scroll className="h-4 w-4 mr-2" />
            Explore the Magic
          </Button>
          <Button onClick={()=>{window.location.href='https://sorcerersupply.store'}}>
            <ShoppingBag className="h-4 w-4 mr-2" />
            Discover Our Collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import React from 'react';
import { Wand2, Gem, FlaskRound as Flask, Shirt } from 'lucide-react';

const OfferingsSection: React.FC = () => {
  const offerings = [
    {
      icon: <Wand2 className="h-10 w-10 text-purple-700" />,
      emoji: '🪄',
      title: 'Spellbooks & Tomes',
      description: 'Arcane knowledge, inked in runes'
    },
    {
      icon: <Gem className="h-10 w-10 text-indigo-600" />,
      emoji: '💎',
      title: 'Magical Artifacts',
      description: 'Charms, relics, and tools for any ritual'
    },
    {
      icon: <Flask className="h-10 w-10 text-emerald-600" />,
      emoji: '🧪',
      title: 'Potions & Ingredients',
      description: 'Brew your path to power'
    },
    {
      icon: <Shirt className="h-10 w-10 text-amber-600" />,
      emoji: '✨',
      title: 'Mystic Apparel',
      description: 'Robes, cloaks & enchanted accessories'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-indigo-50 relative">
      {/* Decorative element */}
      <div 
        className="absolute top-1/4 left-0 w-64 h-64 rounded-full bg-purple-300 opacity-10"
        style={{ filter: 'blur(70px)' }}
      ></div>
      <div 
        className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-indigo-300 opacity-10"
        style={{ filter: 'blur(70px)' }}
      ></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Wares of Wonder Await
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto mb-8"></div>
          <p className="text-slate-700 max-w-2xl mx-auto">
            Discover our curated collection of mystical goods, each item imbued with potent energies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerings.map((offering, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-8 border border-indigo-100 shadow-sm text-center transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex flex-col items-center">
                <div className="mb-2 text-4xl">{offering.emoji}</div>
                <div className="mb-5">{offering.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{offering.title}</h3>
                <p className="text-slate-600">{offering.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
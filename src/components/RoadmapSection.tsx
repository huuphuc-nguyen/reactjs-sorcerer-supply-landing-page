import React from 'react';
import { Sparkles, Book, Users, Package2 } from 'lucide-react';

const RoadmapSection: React.FC = () => {
  const milestones = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Launching our product collection",
      description: "Enchanted gear for every spellcaster's needs"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community spellboard & profile system",
      description: "Connect with fellow mages and share arcane wisdom"
    },
    {
      icon: <Package2 className="h-6 w-6" />,
      title: "Custom potion kits & wizard bundles",
      description: "Personalized magic for your specific journey"
    }
  ];

  return (
    <section className="py-20 bg-indigo-950 text-white relative overflow-hidden">
      {/* Animated stars */}
      <div className="absolute inset-0 z-0">
        {[...Array(30)].map((_, index) => (
          <div 
            key={index}
            className="absolute h-1 w-1 rounded-full bg-white opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What's Brewing in Our Cauldron
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-300 mx-auto mb-8"></div>
          <p className="text-indigo-200 max-w-2xl mx-auto">
            We're conjuring up something special! In the coming moons, expect exclusive product drops, 
            community spell-jams, and spellcaster stories from across realms.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-700"></div>
          
          <div className="space-y-12 md:space-y-0">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-amber-400 border-4 border-indigo-800"></div>
                
                {/* Content */}
                <div className={`bg-indigo-900 p-6 rounded-lg shadow-lg md:mb-0 ${index % 2 === 0 ? 'md:text-right md:pr-10' : 'md:col-start-2 md:pl-10'}`}>
                  <div className={`flex items-center mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <div className="h-10 w-10 rounded-full bg-indigo-800 flex items-center justify-center mr-3 md:order-2">
                      {milestone.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-amber-300 md:order-1">
                      {milestone.title} ✨
                    </h3>
                  </div>
                  <p className="text-indigo-200">
                    {milestone.description}
                  </p>
                </div>
                
                {/* Empty space for alternating layout */}
                {index % 2 === 0 ? <div className="hidden md:block"></div> : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
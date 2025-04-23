import React from 'react';
import { BookOpenText, Zap, Shield } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-purple-950 to-transparent opacity-10"></div>
      <div 
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-purple-200 opacity-10 transform translate-x-1/3 translate-y-1/3"
        style={{ filter: 'blur(70px)' }}
      ></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            A Haven for Spellcasters
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto mb-8"></div>
          <p className="text-slate-700 max-w-3xl mx-auto text-lg">
            At Sorcerer's Supply, we believe every journey into the arcane arts begins with the right tools. 
            Our mission? To equip modern-day mages with enchanted items, handpicked grimoires, and potions 
            brewed under moonlight. Whether you're a seasoned wizard or a curious apprentice, you'll find 
            something here that stirs your magical spark.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-purple-100 transform transition-transform duration-300 hover:-translate-y-1">
            <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-6">
              <BookOpenText className="h-6 w-6 text-purple-700" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Enchanted Quality</h3>
            <p className="text-slate-600">
              Each item in our collection is blessed, tested, and approved by Master Enchanters.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-purple-100 transform transition-transform duration-300 hover:-translate-y-1">
            <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-6">
              <Shield className="h-6 w-6 text-purple-700" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Trusted by Guilds</h3>
            <p className="text-slate-600">
              Endorsed by the Arcane Alliance and the Wizarding Council as a premier supplier.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-purple-100 transform transition-transform duration-300 hover:-translate-y-1">
            <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-6">
              <Zap className="h-6 w-6 text-purple-700" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Mystical Support</h3>
            <p className="text-slate-600">
              Our team of mage-engineers is ready to troubleshoot any magical mishaps.
            </p>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-lg border border-indigo-100 relative">
          <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-0">
            <div className="h-16 w-16 rounded-full bg-amber-100 flex items-center justify-center border-4 border-white">
              <span className="text-amber-600 text-xl">✦</span>
            </div>
          </div>
          <blockquote className="text-center italic text-slate-700 text-lg">
            "Magic is real — it just needed a better supply chain."
          </blockquote>
          <div className="mt-4 text-center">
            <span className="text-slate-500 text-sm">— Felix Nguyen, Archmage & Founder</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
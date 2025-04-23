import React from 'react';
import { InstagramIcon, Twitter, Github, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-2">🧙</span>
              <h3 className="text-xl font-bold text-white">Sorcerer's Supply</h3>
            </div>
            <p className="text-slate-400 mb-4 max-w-md">
              Empowering modern spellcasters with enchanted gear and arcane wisdom since 2025.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">Products</a></li>
              <li><a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Legal Scrolls</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">Shipping</a></li>
              <li><a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">Refund Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} Sorcerer's Supply. All rights enchanted.
          </p>
          <div className="mt-4 md:mt-0 text-sm text-slate-500 flex items-center">
            <span>Crafted with</span>
            <Zap className="h-4 w-4 mx-1 text-amber-400" />
            <span>by Felix Nguyen</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
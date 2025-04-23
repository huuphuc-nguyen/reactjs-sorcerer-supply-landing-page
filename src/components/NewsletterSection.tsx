import React, { useState } from 'react';
import { Mail, Wand2 } from 'lucide-react';
import Button from './ui/Button';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Handle form submission (would connect to API in production)
      console.log('Email submitted:', email);
      setIsSubmitted(true);
      setEmail('');
      // Reset after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-indigo-50 to-white relative">
      {/* Decorative element */}
      <div 
        className="absolute top-0 right-1/4 w-64 h-64 rounded-full bg-amber-200 opacity-20"
        style={{ filter: 'blur(70px)' }}
      ></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-5">
            {/* Left decorative panel */}
            <div className="hidden md:block md:col-span-2 bg-gradient-to-br from-purple-800 to-indigo-900 p-10 text-white relative">
              <div className="absolute inset-0 opacity-20">
                {[...Array(20)].map((_, index) => (
                  <div 
                    key={index}
                    className="absolute h-1 w-1 rounded-full bg-white animate-pulse"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 5}s`,
                      animationDuration: `${5 + Math.random() * 10}s`
                    }}
                  />
                ))}
              </div>
              
              <div className="relative h-full flex flex-col justify-center">
                <Mail className="h-12 w-12 text-amber-300 mb-6" />
                <h3 className="text-2xl font-bold mb-3">Join Our Mystical Circle</h3>
                <p className="text-indigo-200">
                  Receive arcane secrets, early access to rare items, and exclusive discounts.
                </p>
              </div>
            </div>
            
            {/* Right form panel */}
            <div className="p-8 md:p-10 md:col-span-3">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                Be Among the First to Know
              </h2>
              <p className="text-slate-600 mb-6">
                Get early access to magical deals, product launches, and arcane knowledge straight from the elders.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Scrollmail Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your scrollmail..."
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors outline-none"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Button type="submit" fullWidth>
                    <Wand2 className="h-4 w-4 mr-2" />
                    {isSubmitted ? 'Successfully Joined!' : 'Join the Circle'}
                  </Button>
                </div>
                
                <p className="text-xs text-slate-500 mt-4">
                  By joining, you agree to receive magical correspondences. We promise not to share your scrollmail with dark forces.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
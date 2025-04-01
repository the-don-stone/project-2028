
import React from 'react';
import { Globe, Shield, Flag } from 'lucide-react';

const Header = () => {
  return (
    <header className="hero-gradient text-white">
      <div className="section-container flex flex-col items-center text-center space-y-8">
        <div className="flex gap-2 items-center">
          <Flag className="w-8 h-8 text-project-red animate-pulse" />
          <Shield className="w-8 h-8 text-project-lightblue" />
          <Globe className="w-8 h-8 text-project-white" />
        </div>
        
        <h1 className="animate-fade-in font-extrabold">
          <span className="text-project-red">Project 2028:</span> 
          <span className="block text-project-white">A Framework for Global Progress</span>
          <span className="block text-project-white">&amp; Shared Prosperity</span>
        </h1>
        
        <p className="text-xl md:text-2xl max-w-3xl text-project-white/90 animate-slide-up">
          An alternative vision to isolationist, authoritarian, and oligarchic tendencies.
        </p>
        
        <div className="pt-4">
          <button className="bg-project-red hover:bg-project-red/90 text-white px-8 py-3 rounded-md text-lg font-semibold transition-all duration-300 transform hover:scale-105 animate-slide-up">
            Join The Movement
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

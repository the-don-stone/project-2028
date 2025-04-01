
import React from 'react';
import { Heart } from 'lucide-react';

const Vision = () => {
  return (
    <section className="bg-project-white text-project-darkblue py-16">
      <div className="section-container">
        <div className="flex flex-col items-center mb-12 text-center">
          <Heart className="w-12 h-12 text-project-red mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Vision</h2>
          <div className="w-24 h-1 bg-project-red mb-8"></div>
          
          <p className="text-xl md:text-2xl max-w-4xl">
            To foster resilient, equitable, and democratic societies worldwide, empowering individuals and communities while safeguarding the planet and promoting genuine international cooperation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;

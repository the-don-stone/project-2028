
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="bg-project-red text-white py-16">
      <div className="section-container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Project 2028</h2>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          Be part of the movement for a more democratic, equitable, and sustainable world. Together, we can counter fascism, oligarchy, and late-stage capitalism.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="bg-white text-project-red hover:bg-white/90 px-8 py-3 rounded-md text-lg font-semibold transition-all duration-300 flex items-center">
            Get Involved <ArrowRight className="ml-2 w-5 h-5" />
          </button>
          
          <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-md text-lg font-semibold transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

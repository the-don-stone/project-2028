
import React from 'react';
import { Users, Scale, Lightbulb, TrendingUp, Globe, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const principles = [
  {
    title: "Human Dignity & Well-being First",
    description: "All policy should prioritize the health, safety, education, and overall well-being of all people.",
    icon: <Users className="w-8 h-8 text-project-red" />,
    link: "/principle1"
  },
  {
    title: "Democratic Resilience",
    description: "Protecting and strengthening democratic institutions, processes, and norms is paramount.",
    icon: <Scale className="w-8 h-8 text-project-red" />,
    link: "/principle2"
  },
  {
    title: "Evidence-Based Policy",
    description: "Decisions must be grounded in scientific consensus, rigorous data, and expert knowledge.",
    icon: <Lightbulb className="w-8 h-8 text-project-red" />,
    link: "/principle3"
  },
  {
    title: "Shared Prosperity",
    description: "Economic systems should benefit the many, not just the few, with strong protections for workers and the environment.",
    icon: <TrendingUp className="w-8 h-8 text-project-red" />,
    link: "/principle4"
  },
  {
    title: "Global Solidarity",
    description: "Recognizing that major challenges require international cooperation and mutual respect.",
    icon: <Globe className="w-8 h-8 text-project-red" />,
    link: "/principle5"
  },
  {
    title: "Inclusivity & Equity",
    description: "Actively working to dismantle systemic discrimination and ensure opportunities are available to all.",
    icon: <ShieldCheck className="w-8 h-8 text-project-red" />,
    link: "/principle6"
  }
];

const Principles = () => {
  return (
    <section className="bg-project-blue text-white py-16" id="principles">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Guiding Principles</h2>
          <div className="w-24 h-1 bg-project-red mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <Link 
              to={principle.link} 
              key={index}
              className="principle-card group hover:no-underline"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                {principle.icon}
                <h3 className="text-xl font-bold ml-3 text-white group-hover:text-project-red transition-colors">{principle.title}</h3>
              </div>
              <p className="text-white/90">{principle.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Principles;

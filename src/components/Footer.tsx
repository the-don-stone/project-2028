
import React from 'react';
import { GitHub, Twitter, Facebook, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-project-darkblue text-white py-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Project 2028</h3>
            <p className="text-white/80 mb-4">
              A framework for global progress and shared prosperity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-project-red transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-project-red transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-project-red transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-project-red transition-colors">
                <GitHub className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-project-red transition-colors">Framework Document</a></li>
              <li><a href="#" className="text-white/80 hover:text-project-red transition-colors">Research</a></li>
              <li><a href="#" className="text-white/80 hover:text-project-red transition-colors">Publications</a></li>
              <li><a href="#" className="text-white/80 hover:text-project-red transition-colors">Press Kit</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Take Action</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-project-red transition-colors">Volunteer</a></li>
              <li><a href="#" className="text-white/80 hover:text-project-red transition-colors">Donate</a></li>
              <li><a href="#" className="text-white/80 hover:text-project-red transition-colors">Events</a></li>
              <li><a href="#" className="text-white/80 hover:text-project-red transition-colors">Organize</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="flex items-center mb-2">
              <Mail className="w-4 h-4 mr-2 text-project-red" />
              <a href="mailto:info@project2028.org" className="text-white/80 hover:text-project-red transition-colors">
                info@project2028.org
              </a>
            </div>
            <p className="text-white/80">
              Subscribe to our newsletter for updates on our progress and ways to get involved.
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Project 2028. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Standing for pro-human, pro-union, anti-fascist, anti-oligarch values.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

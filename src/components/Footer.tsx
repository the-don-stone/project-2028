import React from 'react';
import { Github, Mail, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

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
              <a href="#" className="text-white/80 hover:text-project-red transition-colors" title="Bluesky">
                <ExternalLink className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-project-red transition-colors" title="Mastodon">
                <ExternalLink className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-project-red transition-colors" title="Threads">
                <ExternalLink className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-project-red transition-colors" title="Github">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/framework" className="text-white/80 hover:text-project-red transition-colors">Framework Document</Link></li>
              <li><a href="#" className="text-white/80 hover:text-project-red transition-colors">Research</a></li>
              <li><a href="#" className="text-white/80 hover:text-project-red transition-colors">Publications</a></li>
              <li><a href="#" className="text-white/80 hover:text-project-red transition-colors">Press Kit</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Take Action</h3>
            <ul className="space-y-2">
              <li><Link to="/join" className="text-white/80 hover:text-project-red transition-colors">Volunteer</Link></li>
              <li><Link to="/donate" className="text-white/80 hover:text-project-red transition-colors">Donate</Link></li>
              <li><Link to="/events" className="text-white/80 hover:text-project-red transition-colors">Events</Link></li>
              <li><Link to="/organize" className="text-white/80 hover:text-project-red transition-colors">Organize</Link></li>
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
          <p className="mt-4 text-sm">
            Designed by: <a href="https://n1ghtw1re-studios.lovable.app/" className="text-project-red hover:underline">N1ghtw1re Studios</a>
            <br />
            Contact: <a href="mailto:n1ghtw1re@proton.me" className="text-project-red hover:underline">n1ghtw1re@proton.me</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

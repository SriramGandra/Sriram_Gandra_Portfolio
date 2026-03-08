import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="relative py-8 z-10 border-t border-electric/10 glass mt-12 bg-navy/80">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        
        <div className="text-text-main/60 text-sm mb-4 md:mb-0">
          Built with React & Tailwind. <br className="md:hidden" />
          &copy; {new Date().getFullYear()} Sriram Gandra. All rights reserved.
        </div>

        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-text-main/70 hover:text-electric transition-colors p-2 interactive"
            aria-label="GitHub"
          >
            <FiGithub size={20} />
          </a>
          <a 
            href="https://linkedin.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-text-main/70 hover:text-electric transition-colors p-2 interactive"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={20} />
          </a>
          <a 
            href="mailto:sriramgandra8@gmail.com" 
            className="text-text-main/70 hover:text-electric transition-colors p-2 interactive"
            aria-label="Email"
          >
            <FiMail size={20} />
          </a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 bg-[#050505]">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-gray-500 text-sm order-3 md:order-1">
          &copy; {new Date().getFullYear()} Bilal Ashraf. All rights reserved.
        </p>
        
        <div className="order-2">
          <SocialLinks className="gap-3" iconClassName="p-2 w-10 h-10" />
        </div>

        <div className="flex items-center gap-1 text-sm text-gray-400 order-1 md:order-3">
          Designed & Built with <span className="text-primary mx-1">❤</span> by 
          <div className="flex items-center gap-2 ml-1">
            <img src="/images/bilal.jpg" alt="Bilal Ashraf" className="w-6 h-6 rounded-full object-cover border border-white/20" />
            <span className="text-white font-medium">Bilal Ashraf</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

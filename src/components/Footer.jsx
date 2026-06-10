import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 bg-[#050505]">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Bilal Ashraf. All rights reserved.
        </p>
        <div className="flex items-center gap-1 text-sm text-gray-400">
          Designed & Built with <span className="text-primary mx-1">❤</span> by <span className="text-white font-medium ml-1">Bilal Ashraf</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

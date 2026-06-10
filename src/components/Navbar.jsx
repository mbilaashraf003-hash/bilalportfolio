import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../utils/cn';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Showcase', href: '#portfolio-showcase' },
    { name: 'Home', href: '#home' },
    { name: 'Welcome', href: '#welcome' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled
          ? 'py-4 bg-background/70 backdrop-blur-md border-b border-white/10'
          : 'py-6 bg-transparent'
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold tracking-tighter text-white font-display">
          BILAL <span className="text-primary">ASHRAF</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors hover:scale-105 transform inline-block"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 text-sm font-medium text-white bg-primary rounded-full hover:bg-primary/80 transition-all shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.8)]"
          >
            Let's Talk
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          'absolute top-full left-0 right-0 bg-background border-b border-white/10 md:hidden transition-all duration-300 overflow-hidden',
          isMobileMenuOpen ? 'max-h-96 py-6' : 'max-h-0 py-0 border-transparent'
        )}
      >
        <div className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-wrap gap-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">GitHub</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">WhatsApp</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

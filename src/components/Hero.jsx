import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro animation
      gsap.from('.hero-text', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power4.out',
        delay: 0.2,
      });

      gsap.from('.hero-badge', {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.7)',
        delay: 1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Cinematic Yellow Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[150px] mix-blend-screen"></div>
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-8 shadow-[0_0_15px_rgba(244,196,0,0.15)]">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
          <span className="text-sm font-semibold text-primary">Available for New Projects</span>
        </div>

        <h1 ref={textRef} className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-tight mb-4 font-display">
          <span className="hero-text block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
            AI Video Editor
          </span>
          <span className="hero-text block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            & Web Developer
          </span>
        </h1>

        <h2 className="hero-text text-2xl md:text-3xl font-bold text-white mb-6 font-display opacity-90">
          Creating Viral Content & Modern Websites
        </h2>

        <p className="hero-text text-lg md:text-xl text-gray-400 max-w-3xl mb-10 leading-relaxed mx-auto">
          I help brands, creators and businesses grow through AI-powered video editing, short-form content, cinematic visuals and modern responsive websites.
        </p>

        <div className="hero-text flex flex-col sm:flex-row gap-5 items-center justify-center w-full">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-primary text-black font-bold rounded-full hover:scale-105 hover:bg-white transition-all duration-300 w-full sm:w-auto shadow-[0_0_20px_rgba(244,196,0,0.3)] hover:shadow-[0_0_30px_rgba(244,196,0,0.6)]"
          >
            View My Work
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-colors duration-300 w-full sm:w-auto backdrop-blur-sm"
          >
            Let's Talk
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50 animate-bounce">
        <span className="text-xs tracking-widest uppercase mb-2">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;

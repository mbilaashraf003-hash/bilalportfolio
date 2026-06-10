import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

const Portfolio = () => {
  const containerRef = useRef(null);
  const maskLayerRef = useRef(null);
  const cursorTextRef = useRef(null);
  const textRef = useRef(null);
  const imageContainerRef = useRef(null);
  
  const [bgColor, setBgColor] = useState('#050505');
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Initial state setup
    gsap.set(maskLayerRef.current, {
      '--radius': '100px',
      '--x': '50%',
      '--y': '50%',
      opacity: 0 // Hidden until hover
    });
    gsap.set(cursorTextRef.current, { scale: 0, opacity: 0 });

    const handleMouseMoveGlobal = (e) => {
      // Subtle parallax for the background text based on entire screen
      gsap.to(textRef.current, {
        x: (e.clientX - window.innerWidth / 2) * 0.05,
        y: (e.clientY - window.innerHeight / 2) * 0.05,
        duration: 1,
        ease: 'power2.out'
      });
    };

    const handleImageMouseMove = (e) => {
      const rect = imageContainerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Animate mask position
      gsap.to(maskLayerRef.current, {
        '--x': `${x}px`,
        '--y': `${y}px`,
        duration: 0.3,
        ease: 'power2.out'
      });

      // Animate cursor text position
      gsap.to(cursorTextRef.current, {
        left: `${x}px`,
        top: `${y}px`,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const handleImageMouseEnter = () => {
      gsap.to(maskLayerRef.current, { opacity: 1, duration: 0.5 });
      gsap.to(cursorTextRef.current, { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.5)' });
    };

    const handleImageMouseLeave = () => {
      gsap.to(maskLayerRef.current, { opacity: 0, duration: 0.5 });
      gsap.to(cursorTextRef.current, { scale: 0, opacity: 0, duration: 0.5, ease: 'power3.in' });
      // Reset expansion state if they leave
      if (isExpanded) {
        setIsExpanded(false);
        gsap.to(maskLayerRef.current, { '--radius': '100px', duration: 0.5 });
      }
    };

    const container = containerRef.current;
    const imgContainer = imageContainerRef.current;

    container.addEventListener('mousemove', handleMouseMoveGlobal);
    imgContainer.addEventListener('mousemove', handleImageMouseMove);
    imgContainer.addEventListener('mouseenter', handleImageMouseEnter);
    imgContainer.addEventListener('mouseleave', handleImageMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMoveGlobal);
      imgContainer.removeEventListener('mousemove', handleImageMouseMove);
      imgContainer.removeEventListener('mouseenter', handleImageMouseEnter);
      imgContainer.removeEventListener('mouseleave', handleImageMouseLeave);
    };
  }, [isExpanded]);

  const handleContainerClick = () => {
    const nextExpanded = !isExpanded;
    setIsExpanded(nextExpanded);
    
    gsap.to(maskLayerRef.current, {
      '--radius': nextExpanded ? '600px' : '100px',
      duration: 1,
      ease: 'expo.inOut'
    });
  };

  const changeBg = (color) => {
    setBgColor(color);
    gsap.to(containerRef.current, { backgroundColor: color, duration: 0.8, ease: 'power2.out' });
  };

  return (
    <section 
      ref={containerRef}
      id="portfolio-showcase" 
      className="relative w-full min-h-screen overflow-hidden transition-colors duration-700 flex flex-col items-center justify-center pt-32 pb-24"
      style={{ backgroundColor: bgColor }}
    >
      {/* Background Switcher Triggers */}
      <div className="absolute inset-0 z-10 grid grid-cols-3 opacity-0">
        <div onMouseEnter={() => changeBg('#050505')} className="h-full w-full"></div>
        <div onMouseEnter={() => changeBg('#111')} className="h-full w-full"></div>
        <div onMouseEnter={() => changeBg('#1a1a1a')} className="h-full w-full"></div>
      </div>

      {/* Typography placed ABOVE the image to prevent overlap */}
      <div className="relative z-20 pointer-events-none w-full flex justify-center mix-blend-difference text-white mb-10 md:mb-16 px-6">
        <h2 
          ref={textRef}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-[7vw] font-black tracking-tighter leading-none opacity-90 select-none font-display text-center flex flex-wrap justify-center gap-4 md:gap-8"
        >
          <span>BILAL</span> <span className="text-primary">ASHRAF</span>
        </h2>
      </div>

      {/* Center Image Container with Mask Effect */}
      <div 
        ref={imageContainerRef}
        className="relative z-30 w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] xl:w-[480px] aspect-[3/4] rounded-lg shadow-2xl cursor-none overflow-hidden"
        onClick={handleContainerClick}
      >
        {/* Bottom Layer: Blurred & Darkened */}
        <img 
          src="/images/bilal.jpg" 
          alt="Bilal Profile Blurred" 
          className="absolute inset-0 w-full h-full object-cover blur-[12px] brightness-[0.3]"
        />

        {/* Top Layer: Sharp & Masked */}
        <div 
          ref={maskLayerRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ 
            clipPath: 'circle(var(--radius) at var(--x) var(--y))',
          }}
        >
          <img 
            src="/images/bilal.jpg" 
            alt="Bilal Profile Sharp" 
            className="w-full h-full object-cover"
          />
          {/* Glassmorphic border ring following the mask */}
          <div className="absolute inset-0 border border-primary/40 rounded-full shadow-[inset_0_0_20px_rgba(244,196,0,0.2)]" style={{ 
            width: 'calc(var(--radius) * 2)', 
            height: 'calc(var(--radius) * 2)', 
            left: 'calc(var(--x) - var(--radius))', 
            top: 'calc(var(--y) - var(--radius))',
          }}></div>
        </div>

        {/* Custom Cursor Text */}
        <div 
          ref={cursorTextRef}
          className="absolute z-40 pointer-events-none flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2"
        >
          <span className="text-white font-bold tracking-widest text-xs uppercase drop-shadow-lg mix-blend-difference">
            {isExpanded ? 'Collapse' : 'Explore'}
          </span>
        </div>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-10 left-10 z-30 pointer-events-none">
        <p className="text-primary font-semibold tracking-wider text-sm uppercase mb-2">Interactive Showcase</p>
        <p className="text-white/60 text-sm max-w-xs">Hover the image to reveal. Click to expand the lens. Move to explore.</p>
      </div>
    </section>
  );
};

export default Portfolio;

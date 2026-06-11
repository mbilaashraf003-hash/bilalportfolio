import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Welcome = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cinematic Entrance
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
          end: 'bottom 30%',
          toggleActions: 'play none none reverse'
        }
      });

      tl.from('.welcome-line', {
        y: 100,
        opacity: 0,
        rotationX: -45,
        transformOrigin: '0% 50% -50',
        duration: 1.2,
        stagger: 0.2,
        ease: 'power4.out'
      })
      .from('.welcome-accent', {
        scaleX: 0,
        transformOrigin: 'left',
        duration: 0.8,
        ease: 'power3.inOut'
      }, '-=0.8')
      .from('.welcome-stat', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out'
      }, '-=0.4')

      .from('.welcome-skill', {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: 'back.out(1.5)'
      }, '-=0.2')
      .from('.welcome-card', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out'
      }, '-=0.6');

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="welcome" className="py-32 relative bg-[#0a0a0a] overflow-hidden min-h-[80vh] flex flex-col justify-center">
      {/* Cinematic Lighting */}
      <div className="absolute top-0 left-1/4 w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16">
          <div className="welcome-accent w-24 h-1 bg-primary mb-8 rounded-full"></div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight font-display perspective-1000 max-w-4xl">
            <div className="overflow-hidden">
              <span className="welcome-line block text-white">I create content</span>
            </div>
            <div className="overflow-hidden">
              <span className="welcome-line block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">& websites that get results.</span>
            </div>
            <div className="overflow-hidden mt-6">
              <span className="welcome-line inline-block py-2 px-5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(244,196,0,0.2)]">
                Drive Engagement.
              </span>
            </div>
          </h2>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { value: '50+', label: 'Videos Edited' },
            { value: '10+', label: 'Web Projects' },
            { value: '100K+', label: 'Content Views' },
            { value: '100%', label: 'Client Focus' },
          ].map((stat, i) => (
            <div key={i} className="welcome-stat p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-md text-center hover:border-primary/30 transition-colors group shadow-xl">
              <h4 className="text-4xl md:text-5xl font-bold text-primary mb-2 font-display group-hover:scale-110 transition-transform">{stat.value}</h4>
              <p className="text-gray-400 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="flex flex-wrap gap-3 mb-16">
          {['AI Video Editing', 'Website Development', 'React', 'Tailwind CSS', 'GSAP', 'Content Creation', 'Canva', 'AI Tools'].map((skill, i) => (
            <span key={i} className="welcome-skill px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all cursor-default shadow-lg hover:shadow-[0_0_20px_rgba(244,196,0,0.2)]">
              {skill}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="welcome-card p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-xl shadow-2xl hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-500 group hover:-translate-y-2">
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">AI Video Editing</h3>
            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
              I create reels, shorts, YouTube videos and AI-powered edits designed to increase views, engagement and audience retention.
            </p>
          </div>
          <div className="welcome-card p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-xl shadow-2xl hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-500 group hover:-translate-y-2">
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">Website Development</h3>
            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
              I build modern, responsive and high-converting websites with clean UI, smooth animations and premium user experiences.
            </p>
          </div>
          <div className="welcome-card p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-xl shadow-2xl hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-500 group hover:-translate-y-2">
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">Content Strategy</h3>
            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
              I help creators and businesses plan, create and optimize content that grows their online presence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;

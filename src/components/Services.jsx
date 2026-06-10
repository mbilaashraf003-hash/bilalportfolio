import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Video, Code2, PenTool, Cpu, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <Video size={36} />,
    title: 'AI Video Editing',
    features: ['Reels', 'Shorts', 'YouTube Videos', 'AI Enhanced Editing'],
  },
  {
    icon: <Code2 size={36} />,
    title: 'Website Development',
    features: ['Portfolio Websites', 'Business Websites', 'Responsive Design', 'Modern UI/UX'],
  },
  {
    icon: <PenTool size={36} />,
    title: 'Content Creation',
    features: ['Social Media Content', 'YouTube Content', 'Content Strategy', 'Audience Growth'],
  },
  {
    icon: <Cpu size={36} />,
    title: 'AI Tools & Automation',
    features: ['AI Image Generation', 'AI Video Workflows', 'Productivity Automation', 'Creative AI Solutions'],
  }
];

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.service-card-wrapper', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="services" className="py-24 md:py-32 relative bg-[#030303]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16 md:mb-20 text-center">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">What We Do</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-6">Elevating Digital <span className="italic text-gray-400">Standards</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div key={index} className="service-card-wrapper">
              <div className="group relative p-10 md:p-12 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md overflow-hidden hover:-translate-y-2 transition-all duration-500 shadow-2xl hover:border-primary/30 h-full">
                {/* Hover effect gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-black group-hover:border-primary group-hover:scale-110 transition-all duration-500 shadow-xl">
                    {service.icon}
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-8 group-hover:text-primary transition-colors">{service.title}</h4>
                  
                  <ul className="space-y-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-400 group-hover:text-gray-200 transition-colors">
                        <CheckCircle2 size={20} className="text-primary/70 group-hover:text-primary transition-colors" />
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

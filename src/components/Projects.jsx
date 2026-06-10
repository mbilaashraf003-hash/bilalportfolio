import React, { useRef, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'AI Video Editing',
    description: 'High-retention short-form videos and YouTube content created with advanced AI tools, Premiere Pro, and After Effects.',
    image: '/images/projects/video-editing.jpg',
    tags: ['Premiere Pro', 'After Effects', 'AI Tools', 'Color Grading'],
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'A premium, fully custom personal portfolio with cinematic interactions, GSAP animations, and glassmorphism UI.',
    image: '/images/projects/portfolio-website.jpg',
    tags: ['React', 'GSAP', 'Tailwind CSS', 'Vite'],
  },
  {
    id: 3,
    title: 'Business Website',
    description: 'A high-converting, modern business landing page engineered to turn traffic into leads with a clean, luxury aesthetic.',
    image: '/images/projects/business-website.jpg',
    tags: ['Web Design', 'UI/UX', 'SEO', 'Optimization'],
  },
];

const Projects = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.project-card');
      
      cards.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse',
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={containerRef} className="py-24 md:py-32 bg-[#050505]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6" data-aos="fade-up">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Works</span></h2>
            <p className="text-gray-400 text-lg max-w-xl">A selection of my recent projects focusing on UI/UX, performance, and modern web technologies.</p>
          </div>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:text-primary transition-colors pb-2 border-b border-white/20 hover:border-primary">
            View full archive <ExternalLink size={16} />
          </a>
        </div>

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-20 items-center`}
            >
              <div className="w-full lg:w-1/2 relative group rounded-2xl overflow-hidden aspect-[4/3]">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="flex gap-3 mb-6 flex-wrap">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 text-xs font-semibold rounded-full border border-white/10 bg-white/5 text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold mb-6">{project.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">{project.description}</p>
                
                <div className="flex items-center gap-6">
                  <a href="#" className="flex items-center gap-2 text-white hover:text-primary transition-colors font-medium">
                    View Project <ExternalLink size={18} />
                  </a>
                  <a href="#" className="flex items-center gap-2 text-primary hover:text-white transition-colors font-medium">
                    Case Study
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

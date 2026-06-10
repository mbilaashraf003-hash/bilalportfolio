import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Code2, Briefcase, User } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray('.about-animate');
      
      gsap.from(elements, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="about" className="py-32 relative bg-[#050505] overflow-hidden">
       {/* Background accent */}
       <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none"></div>

       <div className="container mx-auto px-6 md:px-12 relative z-10">
         <div className="mb-16 text-center about-animate">
           <span className="inline-block py-1 px-3 rounded-full border border-primary/30 bg-primary/10 text-primary font-bold tracking-widest uppercase text-xs mb-4 shadow-[0_0_10px_rgba(244,196,0,0.2)]">
             Discover
           </span>
           <h2 className="text-4xl md:text-5xl font-bold font-display text-white">About <span className="italic text-primary">Me</span></h2>
         </div>

         <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            {/* Left: Image & Intro */}
            <div className="w-full lg:w-1/3 flex flex-col gap-8 about-animate">
               <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none"></div>
                 <img src="/images/bilal.jpg" alt="Bilal Ashraf" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute bottom-6 left-6 z-20">
                    <h3 className="text-2xl font-bold font-display text-white mb-1">Bilal Ashraf</h3>
                    <p className="text-primary font-medium text-sm">Digital Creator & Developer</p>
                 </div>
               </div>
               <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-md shadow-xl">
                 <h4 className="flex items-center gap-3 text-xl font-bold text-white mb-4"><User className="text-primary" /> Introduction</h4>
                 <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                   I bridge the gap between creative storytelling and technical execution. With a passion for AI-driven content and flawless web experiences, I help brands stand out in a crowded digital landscape.
                 </p>
               </div>
            </div>

            {/* Right: Edu, Skills, Exp */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Experience */}
                  <div className="about-animate p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-md hover:border-primary/30 transition-colors group shadow-xl">
                     <h4 className="flex items-center gap-3 text-xl font-bold text-white mb-6"><Briefcase className="text-primary" /> Experience</h4>
                     <div className="flex flex-col gap-6">
                        <div className="border-l-2 border-white/10 pl-4 group-hover:border-primary transition-colors">
                           <h5 className="text-lg font-bold text-white">Freelance Video Editor & Dev</h5>
                           <span className="text-primary text-sm font-medium">2022 - Present</span>
                           <p className="text-gray-400 text-sm mt-2">Creating viral content and developing high-converting websites for international clients.</p>
                        </div>
                        <div className="border-l-2 border-white/10 pl-4 group-hover:border-primary transition-colors">
                           <h5 className="text-lg font-bold text-white">Content Creator</h5>
                           <span className="text-primary text-sm font-medium">2020 - 2022</span>
                           <p className="text-gray-400 text-sm mt-2">Produced engaging YouTube and TikTok content focused on tech and lifestyle.</p>
                        </div>
                     </div>
                  </div>

                  {/* Education */}
                  <div className="about-animate p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-md hover:border-primary/30 transition-colors group shadow-xl">
                     <h4 className="flex items-center gap-3 text-xl font-bold text-white mb-6"><GraduationCap className="text-primary" /> Education</h4>
                     <div className="flex flex-col gap-5">
                        <div className="border-l-2 border-white/10 pl-4 group-hover:border-primary transition-colors">
                           <h5 className="text-lg font-bold text-white">BS English</h5>
                           <span className="text-primary text-sm font-medium">Completed</span>
                        </div>
                        <div className="border-l-2 border-white/10 pl-4 group-hover:border-primary transition-colors">
                           <h5 className="text-lg font-bold text-white">FA (Information Technology)</h5>
                           <span className="text-primary text-sm font-medium">Completed</span>
                        </div>
                        <div className="border-l-2 border-white/10 pl-4 group-hover:border-primary transition-colors">
                           <h5 className="text-lg font-bold text-white">Matric</h5>
                           <span className="text-primary text-sm font-medium">Completed</span>
                        </div>
                        <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                           My educational background combines technology, communication and digital literacy, helping me create effective digital content, websites and online experiences.
                        </p>
                     </div>
                  </div>
               </div>

               {/* Skills */}
               <div className="about-animate p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-md hover:border-primary/30 transition-colors shadow-xl">
                  <h4 className="flex items-center gap-3 text-xl font-bold text-white mb-6"><Code2 className="text-primary" /> Core Skills</h4>
                  <div className="flex flex-wrap gap-3">
                     {['Premiere Pro', 'After Effects', 'AI Video Gen', 'React', 'Tailwind CSS', 'GSAP', 'Next.js', 'UI/UX Design', 'Content Strategy', 'Figma'].map((skill, i) => (
                       <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm hover:bg-primary/20 hover:text-primary hover:border-primary/30 transition-all cursor-default shadow-sm">
                         {skill}
                       </span>
                     ))}
                  </div>
               </div>
            </div>
         </div>
       </div>
    </section>
  );
};

export default About;

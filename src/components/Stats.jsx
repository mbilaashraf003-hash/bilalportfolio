import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the cards coming up
      gsap.from('.stat-card', {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });

      // Animate the numbers counting up
      const stats = gsap.utils.toArray('.stat-value');
      stats.forEach((stat) => {
        const targetStr = stat.getAttribute('data-target');
        const hasPlus = targetStr.includes('+');
        const hasK = targetStr.includes('K');
        const hasPercent = targetStr.includes('%');
        
        const targetValue = parseInt(targetStr.replace(/\D/g, ''), 10);
        const proxy = { val: 0 };

        gsap.to(proxy, {
          val: targetValue,
          duration: 2.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: stat,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          },
          onUpdate: function() {
            stat.innerHTML = Math.ceil(proxy.val) + 
              (hasK ? 'K' : '') + 
              (hasPercent ? '%' : '') + 
              (hasPlus ? '+' : '');
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-12 md:py-20 relative bg-[#050505] z-20 border-b border-white/5">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '50+', label: 'Videos Edited' },
            { value: '10+', label: 'Web Projects' },
            { value: '100K+', label: 'Content Views' },
            { value: '100%', label: 'Client Focus' },
          ].map((stat, i) => (
            <div 
              key={i} 
              className="stat-card p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-xl text-center hover:border-primary/30 transition-all duration-500 group shadow-[0_10px_40px_rgba(0,0,0,0.5)] hover:-translate-y-2 hover:bg-white/[0.04]"
            >
              <h4 
                className="stat-value text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-3 font-display group-hover:scale-110 transition-transform duration-500 inline-block"
                data-target={stat.value}
              >
                0
              </h4>
              <p className="text-gray-400 font-semibold uppercase tracking-widest text-xs md:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

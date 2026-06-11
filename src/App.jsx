import React, { useEffect } from 'react';
import Lenis from 'lenis';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 50,
    });

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen flex flex-col bg-black text-white overflow-hidden">
      <Navbar />
      <main className="flex-grow w-full">
        <Portfolio />
        <Hero />
        <Welcome />
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;

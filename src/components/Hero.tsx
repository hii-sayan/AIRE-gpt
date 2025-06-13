import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { ScrollAnimatedElement } from './ScrollAnimations';
import ParticleSystem from './ParticleSystem';

const Hero = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  useEffect(() => {
    if (prefersReducedMotion) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = glowRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      
      glowRef.current.style.setProperty('--x', `${x}px`);
      glowRef.current.style.setProperty('--y', `${y}px`);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [prefersReducedMotion]);
  
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      ref={glowRef}
    >
      {/* 3D Particle System - Only show if motion is not reduced */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 z-10">
          <ParticleSystem particleCount={60} />
        </div>
      )}

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className={`absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-[100px] opacity-20 ${!prefersReducedMotion ? 'animate-pulse' : ''}`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-600 rounded-full filter blur-[100px] opacity-20 ${!prefersReducedMotion ? 'animate-pulse' : ''}`} style={{animationDelay: '1s'}}></div>
        <div className={`absolute top-[40%] right-[30%] w-48 h-48 bg-cyan-400 rounded-full filter blur-[100px] opacity-10 ${!prefersReducedMotion ? 'animate-pulse' : ''}`} style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Interactive glow effect */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
          <div className="w-[40vw] h-[40vw] absolute opacity-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-[80px] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out" style={{left: 'var(--x)', top: 'var(--y)'}}></div>
        </div>
      )}
      
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimatedElement 
            className="inline-block px-4 py-1 bg-gray-800 bg-opacity-70 rounded-full mb-6 backdrop-blur-sm border border-gray-700"
            animation="fadeIn"
            delay={200}
          >
            <p className="text-sm font-medium text-blue-400">The Future of Web4 Technology</p>
          </ScrollAnimatedElement>
          
          <ScrollAnimatedElement 
            as="h1" 
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            animation="fadeUp"
            delay={400}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              AIRE GPT
            </span>
            <br />
            <span>Redefining Digital Experiences</span>
          </ScrollAnimatedElement>
          
          <ScrollAnimatedElement 
            as="p" 
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            animation="fadeUp"
            delay={600}
          >
            A revolutionary web4 platform combining blockchain, AI, and decentralized applications to create a seamless ecosystem for the next generation of digital interactions.
          </ScrollAnimatedElement>
          
          <ScrollAnimatedElement 
            className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
            animation="fadeUp"
            delay={800}
          >
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 text-white font-medium flex items-center justify-center group hover:scale-105">
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
            </button>
            <a href="#whitepaper" className="px-8 py-3 border border-gray-600 hover:border-blue-500 rounded-md bg-gray-800 bg-opacity-50 backdrop-blur-sm hover:bg-opacity-70 transition-all duration-300 text-white font-medium hover:scale-105">
              View Whitepaper
            </a>
          </ScrollAnimatedElement>
        </div>
        
        {/* Stats section */}
        <ScrollAnimatedElement 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto"
          animation="fadeUp"
          delay={1000}
        >
          {[
            { value: '$12M+', label: 'Total Raised' },
            { value: '25K+', label: 'Community Members' },
            { value: '6', label: 'Integrated Products' },
            { value: '95%', label: 'Token Staked' }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="text-center backdrop-blur-sm bg-gray-800 bg-opacity-30 p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">{stat.value}</p>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </ScrollAnimatedElement>
      </div>
    </section>
  );
};

export default Hero;
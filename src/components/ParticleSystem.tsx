import React, { useRef, useEffect, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  opacity: number;
  color: string;
  originalX: number;
  originalY: number;
  originalZ: number;
}

interface ParticleSystemProps {
  particleCount?: number;
  className?: string;
}

const ParticleSystem: React.FC<ParticleSystemProps> = ({ 
  particleCount = 150, 
  className = "" 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const scrollRef = useRef(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Colors for particles
  const colors = [
    'rgba(59, 130, 246, 0.8)',   // Blue
    'rgba(147, 51, 234, 0.8)',   // Purple
    'rgba(6, 182, 212, 0.8)',    // Cyan
    'rgba(168, 85, 247, 0.8)',   // Violet
    'rgba(34, 197, 94, 0.8)',    // Green
  ];

  // Initialize particles
  const initParticles = (width: number, height: number) => {
    const particles: Particle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const z = Math.random() * 1000;
      
      particles.push({
        x,
        y,
        z,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        vz: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        originalX: x,
        originalY: y,
        originalZ: z,
      });
    }
    
    particlesRef.current = particles;
  };

  // Handle mouse movement
  const handleMouseMove = (event: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };

  // Handle scroll
  const handleScroll = () => {
    scrollRef.current = window.scrollY;
  };

  // Resize handler
  const handleResize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const { offsetWidth, offsetHeight } = canvas.parentElement || canvas;
    setDimensions({ width: offsetWidth, height: offsetHeight });
    
    canvas.width = offsetWidth * window.devicePixelRatio;
    canvas.height = offsetHeight * window.devicePixelRatio;
    canvas.style.width = `${offsetWidth}px`;
    canvas.style.height = `${offsetHeight}px`;
    
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }
    
    initParticles(offsetWidth, offsetHeight);
  };

  // Animation loop
  const animate = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const { width, height } = dimensions;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Update and draw particles
    particlesRef.current.forEach((particle, index) => {
      // Mouse interaction
      const mouseDistance = Math.sqrt(
        Math.pow(particle.x - mouseRef.current.x, 2) + 
        Math.pow(particle.y - mouseRef.current.y, 2)
      );
      
      const mouseInfluence = Math.max(0, 150 - mouseDistance) / 150;
      const mouseForceX = (mouseRef.current.x - particle.x) * mouseInfluence * 0.02;
      const mouseForceY = (mouseRef.current.y - particle.y) * mouseInfluence * 0.02;
      
      // Scroll influence
      const scrollInfluence = scrollRef.current * 0.001;
      
      // Update position with forces
      particle.vx += mouseForceX;
      particle.vy += mouseForceY;
      particle.vz += scrollInfluence;
      
      // Apply some damping
      particle.vx *= 0.98;
      particle.vy *= 0.98;
      particle.vz *= 0.98;
      
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.z += particle.vz;
      
      // Gentle drift back to original position
      const returnForce = 0.005;
      particle.vx += (particle.originalX - particle.x) * returnForce;
      particle.vy += (particle.originalY - particle.y) * returnForce;
      particle.vz += (particle.originalZ - particle.z) * returnForce;
      
      // Wrap around edges
      if (particle.x < 0) particle.x = width;
      if (particle.x > width) particle.x = 0;
      if (particle.y < 0) particle.y = height;
      if (particle.y > height) particle.y = 0;
      if (particle.z < 0) particle.z = 1000;
      if (particle.z > 1000) particle.z = 0;
      
      // Calculate 3D projection
      const perspective = 800;
      const projectedX = particle.x + (particle.x - width / 2) * (particle.z / perspective) * 0.1;
      const projectedY = particle.y + (particle.y - height / 2) * (particle.z / perspective) * 0.1;
      const scale = 1 - particle.z / 1000 * 0.5;
      const finalSize = particle.size * scale;
      const finalOpacity = particle.opacity * scale;
      
      // Draw particle
      ctx.save();
      ctx.globalAlpha = finalOpacity;
      ctx.fillStyle = particle.color;
      ctx.shadowBlur = 10;
      ctx.shadowColor = particle.color;
      
      ctx.beginPath();
      ctx.arc(projectedX, projectedY, finalSize, 0, Math.PI * 2);
      ctx.fill();
      
      // Add glow effect for nearby particles
      if (mouseInfluence > 0.3) {
        ctx.shadowBlur = 20;
        ctx.globalAlpha = mouseInfluence * 0.5;
        ctx.beginPath();
        ctx.arc(projectedX, projectedY, finalSize * 2, 0, Math.PI * 2);
        ctx.fill();
      }
      
      ctx.restore();
      
      // Draw connections between nearby particles
      particlesRef.current.slice(index + 1).forEach(otherParticle => {
        const distance = Math.sqrt(
          Math.pow(particle.x - otherParticle.x, 2) + 
          Math.pow(particle.y - otherParticle.y, 2) + 
          Math.pow(particle.z - otherParticle.z, 2) * 0.1
        );
        
        if (distance < 100) {
          const otherProjectedX = otherParticle.x + (otherParticle.x - width / 2) * (otherParticle.z / perspective) * 0.1;
          const otherProjectedY = otherParticle.y + (otherParticle.y - height / 2) * (otherParticle.z / perspective) * 0.1;
          
          ctx.save();
          ctx.globalAlpha = (1 - distance / 100) * 0.2;
          ctx.strokeStyle = 'rgba(59, 130, 246, 0.5)';
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(projectedX, projectedY);
          ctx.lineTo(otherProjectedX, otherProjectedY);
          ctx.stroke();
          ctx.restore();
        }
      });
    });
    
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    handleResize();
    
    // Event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    // Start animation
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions.width, dimensions.height]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ 
        background: 'transparent',
        zIndex: 1
      }}
    />
  );
};

export default ParticleSystem;
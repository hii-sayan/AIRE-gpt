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
  particleCount = 80, 
  className = "" 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const scrollRef = useRef(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // More subtle colors for particles
  const colors = [
    'rgba(59, 130, 246, 0.3)',   // Blue - more transparent
    'rgba(147, 51, 234, 0.25)',  // Purple - more transparent
    'rgba(6, 182, 212, 0.2)',    // Cyan - more transparent
    'rgba(168, 85, 247, 0.25)',  // Violet - more transparent
    'rgba(34, 197, 94, 0.2)',    // Green - more transparent
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
        vx: (Math.random() - 0.5) * 0.1, // Much slower initial velocity
        vy: (Math.random() - 0.5) * 0.1, // Much slower initial velocity
        vz: (Math.random() - 0.5) * 0.05, // Much slower z velocity
        size: Math.random() * 2 + 0.5, // Smaller particles
        opacity: Math.random() * 0.4 + 0.1, // More subtle opacity
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
      // Much more subtle mouse interaction
      const mouseDistance = Math.sqrt(
        Math.pow(particle.x - mouseRef.current.x, 2) + 
        Math.pow(particle.y - mouseRef.current.y, 2)
      );
      
      const mouseInfluence = Math.max(0, 200 - mouseDistance) / 200;
      const mouseForceX = (mouseRef.current.x - particle.x) * mouseInfluence * 0.003; // Much weaker force
      const mouseForceY = (mouseRef.current.y - particle.y) * mouseInfluence * 0.003; // Much weaker force
      
      // Very subtle scroll influence
      const scrollInfluence = scrollRef.current * 0.0002; // Much weaker scroll effect
      
      // Update position with forces
      particle.vx += mouseForceX;
      particle.vy += mouseForceY;
      particle.vz += scrollInfluence;
      
      // Apply stronger damping for slower movement
      particle.vx *= 0.95;
      particle.vy *= 0.95;
      particle.vz *= 0.95;
      
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.z += particle.vz;
      
      // Very gentle drift back to original position
      const returnForce = 0.001; // Much weaker return force
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
      
      // Calculate 3D projection with less dramatic effect
      const perspective = 1200; // Increased for more subtle 3D effect
      const projectedX = particle.x + (particle.x - width / 2) * (particle.z / perspective) * 0.05; // Reduced 3D effect
      const projectedY = particle.y + (particle.y - height / 2) * (particle.z / perspective) * 0.05; // Reduced 3D effect
      const scale = 1 - particle.z / 1000 * 0.3; // Less dramatic scaling
      const finalSize = particle.size * scale;
      const finalOpacity = particle.opacity * scale * 0.6; // Even more subtle
      
      // Draw particle with subtle glow
      ctx.save();
      ctx.globalAlpha = finalOpacity;
      ctx.fillStyle = particle.color;
      ctx.shadowBlur = 5; // Reduced glow
      ctx.shadowColor = particle.color;
      
      ctx.beginPath();
      ctx.arc(projectedX, projectedY, finalSize, 0, Math.PI * 2);
      ctx.fill();
      
      // Very subtle glow effect for nearby particles
      if (mouseInfluence > 0.5) {
        ctx.shadowBlur = 8;
        ctx.globalAlpha = mouseInfluence * 0.2; // Much more subtle
        ctx.beginPath();
        ctx.arc(projectedX, projectedY, finalSize * 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
      
      ctx.restore();
      
      // Draw very subtle connections between nearby particles
      particlesRef.current.slice(index + 1).forEach(otherParticle => {
        const distance = Math.sqrt(
          Math.pow(particle.x - otherParticle.x, 2) + 
          Math.pow(particle.y - otherParticle.y, 2) + 
          Math.pow(particle.z - otherParticle.z, 2) * 0.1
        );
        
        if (distance < 80) { // Shorter connection distance
          const otherProjectedX = otherParticle.x + (otherParticle.x - width / 2) * (otherParticle.z / perspective) * 0.05;
          const otherProjectedY = otherParticle.y + (otherParticle.y - height / 2) * (otherParticle.z / perspective) * 0.05;
          
          ctx.save();
          ctx.globalAlpha = (1 - distance / 80) * 0.08; // Much more subtle connections
          ctx.strokeStyle = 'rgba(59, 130, 246, 0.3)';
          ctx.lineWidth = 0.3; // Thinner lines
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
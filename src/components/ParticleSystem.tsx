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
  phase: number;
  amplitude: number;
  frequency: number;
}

interface ParticleSystemProps {
  particleCount?: number;
  className?: string;
}

const ParticleSystem: React.FC<ParticleSystemProps> = ({ 
  particleCount = 60, 
  className = "" 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const scrollRef = useRef(0);
  const timeRef = useRef(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Subtle, soft colors with low opacity
  const colors = [
    'rgba(59, 130, 246, 0.4)',   // Soft blue
    'rgba(147, 51, 234, 0.35)',  // Soft purple
    'rgba(6, 182, 212, 0.3)',    // Soft cyan
    'rgba(168, 85, 247, 0.35)',  // Soft violet
    'rgba(34, 197, 94, 0.3)',    // Soft green
  ];

  // Easing function for smooth transitions
  const easeInOutSine = (t: number): number => {
    return -(Math.cos(Math.PI * t) - 1) / 2;
  };

  // Initialize particles with gentle movement parameters
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
        vx: 0,
        vy: 0,
        vz: 0,
        size: Math.random() * 3 + 2, // 2-5px size range
        opacity: Math.random() * 0.3 + 0.3, // 0.3-0.6 opacity range
        color: colors[Math.floor(Math.random() * colors.length)],
        originalX: x,
        originalY: y,
        originalZ: z,
        phase: Math.random() * Math.PI * 2, // Random starting phase
        amplitude: Math.random() * 25 + 15, // 15-40px movement amplitude (within 50px max)
        frequency: 0.0005 + Math.random() * 0.0003, // Very slow frequency for 8-12 second cycles
      });
    }
    
    particlesRef.current = particles;
  };

  // Handle mouse movement for subtle interaction
  const handleMouseMove = (event: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };

  // Handle scroll for gentle depth changes
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

  // Animation loop with subtle movements
  const animate = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const { width, height } = dimensions;
    timeRef.current += 16; // Approximate 60fps timing
    
    // Clear canvas with slight trail effect for smoother appearance
    ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
    ctx.fillRect(0, 0, width, height);
    ctx.clearRect(0, 0, width, height);
    
    // Update and draw particles
    particlesRef.current.forEach((particle, index) => {
      // Gentle sinusoidal movement
      const time = timeRef.current * particle.frequency;
      const horizontalOffset = Math.sin(time + particle.phase) * particle.amplitude;
      const verticalOffset = Math.cos(time + particle.phase * 1.3) * particle.amplitude * 0.7;
      const depthOffset = Math.sin(time * 0.5 + particle.phase) * 200;
      
      // Apply easing to the movement
      const easedHorizontal = horizontalOffset * easeInOutSine((Math.sin(time) + 1) / 2);
      const easedVertical = verticalOffset * easeInOutSine((Math.cos(time) + 1) / 2);
      
      // Update positions with gentle movement
      particle.x = particle.originalX + easedHorizontal;
      particle.y = particle.originalY + easedVertical;
      particle.z = particle.originalZ + depthOffset;
      
      // Very subtle mouse interaction (much weaker than before)
      const mouseDistance = Math.sqrt(
        Math.pow(particle.x - mouseRef.current.x, 2) + 
        Math.pow(particle.y - mouseRef.current.y, 2)
      );
      
      if (mouseDistance < 100) {
        const mouseInfluence = (100 - mouseDistance) / 100 * 0.1; // Very weak influence
        const mouseForceX = (mouseRef.current.x - particle.x) * mouseInfluence * 0.001;
        const mouseForceY = (mouseRef.current.y - particle.y) * mouseInfluence * 0.001;
        
        particle.x += mouseForceX;
        particle.y += mouseForceY;
      }
      
      // Gentle scroll influence
      const scrollInfluence = scrollRef.current * 0.00005;
      particle.z += scrollInfluence;
      
      // Wrap particles that go out of bounds
      if (particle.x < -50) particle.x = width + 50;
      if (particle.x > width + 50) particle.x = -50;
      if (particle.y < -50) particle.y = height + 50;
      if (particle.y > height + 50) particle.y = -50;
      if (particle.z < 0) particle.z = 1000;
      if (particle.z > 1000) particle.z = 0;
      
      // Calculate 3D projection with subtle depth
      const perspective = 1500;
      const projectedX = particle.x + (particle.x - width / 2) * (particle.z / perspective) * 0.02;
      const projectedY = particle.y + (particle.y - height / 2) * (particle.z / perspective) * 0.02;
      const scale = 1 - particle.z / 1000 * 0.2;
      const finalSize = particle.size * scale;
      const finalOpacity = particle.opacity * scale * 0.8;
      
      // Draw particle with soft edges and gradient
      ctx.save();
      ctx.globalAlpha = finalOpacity;
      
      // Create radial gradient for soft edges
      const gradient = ctx.createRadialGradient(
        projectedX, projectedY, 0,
        projectedX, projectedY, finalSize * 2
      );
      gradient.addColorStop(0, particle.color);
      gradient.addColorStop(0.7, particle.color.replace(/[\d\.]+\)$/g, '0.1)'));
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(projectedX, projectedY, finalSize * 2, 0, Math.PI * 2);
      ctx.fill();
      
      // Add subtle inner glow
      ctx.globalAlpha = finalOpacity * 0.8;
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(projectedX, projectedY, finalSize * 0.6, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
      
      // Draw very subtle connections between nearby particles
      particlesRef.current.slice(index + 1).forEach(otherParticle => {
        const distance = Math.sqrt(
          Math.pow(particle.x - otherParticle.x, 2) + 
          Math.pow(particle.y - otherParticle.y, 2)
        );
        
        if (distance < 120) {
          const otherProjectedX = otherParticle.x + (otherParticle.x - width / 2) * (otherParticle.z / perspective) * 0.02;
          const otherProjectedY = otherParticle.y + (otherParticle.y - height / 2) * (otherParticle.z / perspective) * 0.02;
          
          ctx.save();
          ctx.globalAlpha = (1 - distance / 120) * 0.05; // Very subtle connections
          ctx.strokeStyle = 'rgba(59, 130, 246, 0.2)';
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
import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  const {
    threshold = 0.1,
    rootMargin = '50px',
    triggerOnce = true
  } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { elementRef, isVisible };
};

interface ScrollAnimatedElementProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  animation?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scale';
  as?: keyof JSX.IntrinsicElements;
}

export const ScrollAnimatedElement: React.FC<ScrollAnimatedElementProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 600,
  animation = 'fadeUp',
  as: Component = 'div'
}) => {
  const { elementRef, isVisible } = useScrollAnimation();

  const getAnimationClasses = () => {
    const baseClasses = `transition-all ease-out`;
    const durationClass = `duration-${duration}`;
    
    switch (animation) {
      case 'fadeUp':
        return `${baseClasses} ${durationClass} ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`;
      case 'fadeIn':
        return `${baseClasses} ${durationClass} ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`;
      case 'slideLeft':
        return `${baseClasses} ${durationClass} ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
        }`;
      case 'slideRight':
        return `${baseClasses} ${durationClass} ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
        }`;
      case 'scale':
        return `${baseClasses} ${durationClass} ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`;
      default:
        return `${baseClasses} ${durationClass}`;
    }
  };

  return (
    <Component
      ref={elementRef}
      className={`${getAnimationClasses()} ${className}`}
      style={{ 
        transitionDelay: isVisible ? `${delay}ms` : '0ms',
        transitionDuration: `${duration}ms`
      }}
    >
      {children}
    </Component>
  );
};
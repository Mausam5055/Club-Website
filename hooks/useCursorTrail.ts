
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface TrailDot {
  x: number;
  y: number;
  element: HTMLDivElement;
}

export const useCursorTrail = (trailLength: number = 8) => {
  const trailDotsRef = useRef<TrailDot[]>([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationId = useRef<number>();

  useEffect(() => {
    // Check if device supports hover (desktop only)
    const hasHover = window.matchMedia('(hover: hover)').matches;
    if (!hasHover) return;

    // Create trail dots
    const createTrailDots = () => {
      const dots: TrailDot[] = [];
      
      for (let i = 0; i < trailLength; i++) {
        const dot = document.createElement('div');
        dot.className = `fixed pointer-events-none z-[9998] w-1 h-1 bg-blue-400 rounded-full opacity-0 mix-blend-mode-difference`;
        dot.style.willChange = 'transform, opacity';
        document.body.appendChild(dot);
        
        dots.push({
          x: 0,
          y: 0,
          element: dot
        });
      }
      
      return dots;
    };

    trailDotsRef.current = createTrailDots();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    // Animation loop
    const animateTrail = () => {
      const dots = trailDotsRef.current;
      
      // Update first dot to mouse position
      if (dots.length > 0) {
        dots[0].x = mousePosition.current.x;
        dots[0].y = mousePosition.current.y;
      }

      // Update remaining dots to follow
      for (let i = 1; i < dots.length; i++) {
        const dx = dots[i - 1].x - dots[i].x;
        const dy = dots[i - 1].y - dots[i].y;
        
        dots[i].x += dx * 0.3;
        dots[i].y += dy * 0.3;
      }

      // Apply positions with GSAP for smooth rendering
      dots.forEach((dot, index) => {
        const opacity = Math.max(0, 1 - (index / dots.length));
        const scale = Math.max(0.2, 1 - (index / dots.length));
        
        gsap.set(dot.element, {
          x: dot.x - 2,
          y: dot.y - 2,
          opacity: opacity * 0.6,
          scale: scale,
          force3D: true
        });
      });

      animationId.current = requestAnimationFrame(animateTrail);
    };

    // Start animation
    document.addEventListener('mousemove', handleMouseMove);
    animateTrail();

    // Show trail on mouse enter
    const handleMouseEnter = () => {
      trailDotsRef.current.forEach(dot => {
        gsap.to(dot.element, {
          opacity: 0.6,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    };

    // Hide trail on mouse leave
    const handleMouseLeave = () => {
      trailDotsRef.current.forEach(dot => {
        gsap.to(dot.element, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    };

    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      
      if (animationId.current) {
        cancelAnimationFrame(animationId.current);
      }
      
      trailDotsRef.current.forEach(dot => {
        if (dot.element.parentNode) {
          dot.element.parentNode.removeChild(dot.element);
        }
      });
    };
  }, [trailLength]);

  return null;
};

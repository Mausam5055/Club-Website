
'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useCursorTrail } from '../../hooks/useCursorTrail';

interface CursorState {
  x: number;
  y: number;
  isVisible: boolean;
  isHovering: boolean;
  isClicking: boolean;
  cursorType: 'default' | 'hover' | 'text' | 'link' | 'drag';
}

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  
  // Initialize cursor trail
  useCursorTrail(6);
  const [cursorState, setCursorState] = useState<CursorState>({
    x: 0,
    y: 0,
    isVisible: false,
    isHovering: false,
    isClicking: false,
    cursorType: 'default'
  });

  useEffect(() => {
    // Check if device supports hover (desktop)
    const hasHover = window.matchMedia('(hover: hover)').matches;
    if (!hasHover) return;

    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    const cursorRing = cursorRingRef.current;

    if (!cursor || !cursorDot || !cursorRing) return;

    // Hide default cursor
    document.documentElement.style.cursor = 'none';
    document.body.style.cursor = 'none';

    // Initialize cursor visibility
    gsap.set([cursorDot, cursorRing], {
      opacity: 1,
      scale: 1
    });

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      setCursorState(prev => ({ ...prev, x, y, isVisible: true }));

      // Smooth cursor movement with GSAP
      gsap.to(cursorDot, {
        x: x - 4,
        y: y - 4,
        duration: 0.1,
        ease: "power2.out"
      });

      gsap.to(cursorRing, {
        x: x - 20,
        y: y - 20,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    // Mouse enter/leave handlers
    const handleMouseEnter = () => {
      setCursorState(prev => ({ ...prev, isVisible: true }));
      gsap.to([cursorDot, cursorRing], {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "back.out(1.7)"
      });
    };

    const handleMouseLeave = () => {
      setCursorState(prev => ({ ...prev, isVisible: false }));
      gsap.to([cursorDot, cursorRing], {
        opacity: 0.7,
        scale: 0.8,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    // Mouse down/up handlers
    const handleMouseDown = () => {
      setCursorState(prev => ({ ...prev, isClicking: true }));
      gsap.to(cursorRing, {
        scale: 0.8,
        duration: 0.1,
        ease: "power2.out"
      });
    };

    const handleMouseUp = () => {
      setCursorState(prev => ({ ...prev, isClicking: false }));
      gsap.to(cursorRing, {
        scale: 1,
        duration: 0.2,
        ease: "back.out(1.7)"
      });
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
    
    const handleElementHover = () => {
      setCursorState(prev => ({ ...prev, isHovering: true, cursorType: 'hover' }));
      gsap.to(cursorRing, {
        scale: 1.5,
        borderWidth: 1,
        duration: 0.3,
        ease: "power2.out"
      });
      gsap.to(cursorDot, {
        scale: 0.5,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleElementLeave = () => {
      setCursorState(prev => ({ ...prev, isHovering: false, cursorType: 'default' }));
      gsap.to(cursorRing, {
        scale: 1,
        borderWidth: 2,
        duration: 0.3,
        ease: "power2.out"
      });
      gsap.to(cursorDot, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    // Add hover listeners to interactive elements
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleElementHover);
      el.addEventListener('mouseleave', handleElementLeave);
    });

    // Text selection handler
    const handleTextSelection = () => {
      const selection = window.getSelection();
      if (selection && selection.toString().length > 0) {
        setCursorState(prev => ({ ...prev, cursorType: 'text' }));
        gsap.to(cursorRing, {
          scale: 0.8,
          borderColor: '#3b82f6',
          duration: 0.2,
          ease: "power2.out"
        });
      } else {
        setCursorState(prev => ({ ...prev, cursorType: 'default' }));
        gsap.to(cursorRing, {
          scale: 1,
          borderColor: '#6b7280',
          duration: 0.2,
          ease: "power2.out"
        });
      }
    };

    document.addEventListener('selectionchange', handleTextSelection);

    // Cleanup
    return () => {
      document.documentElement.style.cursor = 'auto';
      document.body.style.cursor = 'auto';
      
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('selectionchange', handleTextSelection);

      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleElementHover);
        el.removeEventListener('mouseleave', handleElementLeave);
      });
    };
  }, []);

  // Don't render on mobile devices
  useEffect(() => {
    const hasHover = window.matchMedia('(hover: hover)').matches;
    if (!hasHover) {
      document.documentElement.style.cursor = 'auto';
      document.body.style.cursor = 'auto';
    }
  }, []);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && !window.matchMedia('(hover: hover)').matches) {
    return null;
  }

  return (
    <div 
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[99999]"
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 99999,
        mixBlendMode: 'difference'
      }}
    >
      {/* Cursor Dot */}
      <div
        ref={cursorDotRef}
        className="absolute w-2 h-2 bg-white rounded-full transform-gpu"
        style={{
          transform: 'translate3d(0, 0, 0)',
          willChange: 'transform, opacity, scale',
          opacity: 1,
          backgroundColor: '#ffffff'
        }}
      />
      
      {/* Cursor Ring */}
      <div
        ref={cursorRingRef}
        className="absolute w-10 h-10 border-2 border-white rounded-full transform-gpu"
        style={{
          transform: 'translate3d(0, 0, 0)',
          willChange: 'transform, opacity, scale, border-color',
          opacity: 1,
          borderColor: '#ffffff'
        }}
      />
    </div>
  );
}

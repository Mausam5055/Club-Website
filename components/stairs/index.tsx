import React from 'react';
import { motion, Variants } from 'framer-motion';
import { opacity, expand } from './anim';
import { useStairs } from './StairsContext';

interface StairsProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

export default function Stairs({ children, backgroundColor }: StairsProps) {
  const { isTransitioning } = useStairs();

  const nbOfColumns = 5;

  // Create animation variants with delay calculated directly
  const createExpandVariant = (delay: number): Variants => ({
    initial: { top: 0 },
    enter: { 
      top: "100vh",
      transition: {
        duration: 0.4,
        delay: delay,
        ease: [0.215, 0.61, 0.355, 1]
      },
      transitionEnd: { height: "0", top: "0" }
    },
    exit: {
      height: "100vh",
      transition: {
        duration: 0.4,
        delay: delay,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }
  });

  return (
    <div className="page stairs" style={{ backgroundColor, position: 'relative' }}>
      {isTransitioning && (
        <>
          <motion.div 
            initial="initial"
            animate="enter"
            exit="exit"
            variants={opacity}
            className="transition-background"
            style={{ position: 'fixed', width: '100%', height: '100vh', backgroundColor: 'black', zIndex: 9999, pointerEvents: 'none', top: 0, left: 0 }}
          />
          <div className="transition-container" style={{ position: 'fixed', width: '100vw', height: '100vh', display: 'flex', left: 0, top: 0, pointerEvents: 'none', zIndex: 9999 }}>
            {
              [...Array(nbOfColumns)].map((_, i) => {
                const delay = 0.05 * (nbOfColumns - i);
                return (
                  <motion.div 
                    key={i}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    variants={createExpandVariant(delay)}
                    style={{ position: 'relative', height: '100%', width: '100%', backgroundColor: 'black', zIndex: 9999 }}
                  />
                );
              })
            }
          </div>
        </>
      )}
      <div style={{ position: 'relative', zIndex: 1000 }}>
        {children}
      </div>
    </div>
  );
}
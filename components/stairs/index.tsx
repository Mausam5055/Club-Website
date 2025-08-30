import React from 'react';
import { motion } from 'framer-motion';
import { opacity, expand } from './anim';
import { useStairs } from './StairsContext';

interface StairsProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

export default function Stairs({ children, backgroundColor }: StairsProps) {
  const { isTransitioning } = useStairs();

  const anim = (variants: any, custom: any = null) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      custom,
      variants
    };
  };

  const nbOfColumns = 5;

  return (
    <div className="page stairs" style={{ backgroundColor, position: 'relative' }}>
      {isTransitioning && (
        <>
          <motion.div 
            {...anim(opacity)} 
            className="transition-background"
            style={{ position: 'fixed', width: '100%', height: '100vh', backgroundColor: 'black', zIndex: 9998, pointerEvents: 'none', top: 0, left: 0 }}
          />
          <div className="transition-container" style={{ position: 'fixed', width: '100vw', height: '100vh', display: 'flex', left: 0, top: 0, pointerEvents: 'none', zIndex: 9998 }}>
            {
              [...Array(nbOfColumns)].map((_, i) => {
                return (
                  <motion.div 
                    key={i} 
                    {...anim(expand, nbOfColumns - i)} 
                    style={{ position: 'relative', height: '100%', width: '100%', backgroundColor: 'black', zIndex: 9998 }}
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
'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface StairsContextType {
  isTransitioning: boolean;
  startTransition: () => void;
  endTransition: () => void;
}

const StairsContext = createContext<StairsContextType | undefined>(undefined);

export function StairsProvider({ children }: { children: ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const startTransition = () => {
    setIsTransitioning(true);
  };

  const endTransition = () => {
    setIsTransitioning(false);
  };

  return (
    <StairsContext.Provider value={{ isTransitioning, startTransition, endTransition }}>
      {children}
    </StairsContext.Provider>
  );
}

export function useStairs() {
  const context = useContext(StairsContext);
  if (context === undefined) {
    throw new Error('useStairs must be used within a StairsProvider');
  }
  return context;
}
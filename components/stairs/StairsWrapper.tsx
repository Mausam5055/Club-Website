'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Stairs from './index';
import { useStairs } from './StairsContext';

interface StairsWrapperProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

export default function StairsWrapper({ children, backgroundColor }: StairsWrapperProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { isTransitioning, startTransition, endTransition } = useStairs();
  const [displayChildren, setDisplayChildren] = useState(children);

  // Create a string representation of the current route
  const currentRoute = `${pathname}?${searchParams?.toString() || ''}`;

  useEffect(() => {
    // Check if this is a page refresh by looking at sessionStorage
    let prevRoute: string | null = null;
    let isPageRefresh = false;
    
    if (typeof window !== 'undefined') {
      try {
        prevRoute = sessionStorage.getItem('lastRoute');
        isPageRefresh = sessionStorage.getItem('isPageRefresh') === 'true';
        
        // Save current route to sessionStorage
        sessionStorage.setItem('lastRoute', currentRoute);
        sessionStorage.setItem('isPageRefresh', 'true');
      } catch (e) {
        // Ignore errors in sessionStorage
      }
    }
    
    // Trigger transition if:
    // 1. The route actually changed (navigation between pages), or
    // 2. This is a page refresh and we want to show the transition
    if ((prevRoute !== null && currentRoute !== prevRoute) || isPageRefresh) {
      // Start transition
      startTransition();
      
      // Update children after a delay to allow transition to complete
      const timer = setTimeout(() => {
        setDisplayChildren(children);
        endTransition();
      }, 600); // This should match the duration of your stairs animation
      
      // Reset the page refresh flag after a short delay
      const resetTimer = setTimeout(() => {
        if (typeof window !== 'undefined') {
          try {
            sessionStorage.setItem('isPageRefresh', 'false');
          } catch (e) {
            // Ignore errors in sessionStorage
          }
        }
      }, 100);
      
      return () => {
        clearTimeout(timer);
        clearTimeout(resetTimer);
      };
    } else {
      // If this is the very first load, just update the children
      setDisplayChildren(children);
      
      // Set the initial route in sessionStorage
      if (typeof window !== 'undefined' && prevRoute === null) {
        try {
          sessionStorage.setItem('lastRoute', currentRoute);
          sessionStorage.setItem('isPageRefresh', 'false');
        } catch (e) {
          // Ignore errors in sessionStorage
        }
      }
    }
  }, [currentRoute, children, startTransition, endTransition]);

  return (
    <Stairs backgroundColor={backgroundColor}>
      {displayChildren}
    </Stairs>
  );
}
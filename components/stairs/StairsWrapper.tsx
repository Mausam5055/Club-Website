'use client';

import React, { useEffect, useState, useRef } from 'react';
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
  const prevPathname = useRef<string | null>(null);
  const prevSearchParams = useRef<string | null>(null);

  // Create a string representation of the current route
  const currentRoute = `${pathname}?${searchParams?.toString() || ''}`;

  useEffect(() => {
    // Create a string representation of the previous route
    const prevRoute = prevPathname.current ? `${prevPathname.current}?${prevSearchParams.current || ''}` : null;
    
    // Only trigger transition if the route actually changed
    if (prevRoute === null || currentRoute !== prevRoute) {
      // Update the ref values
      prevPathname.current = pathname;
      prevSearchParams.current = searchParams?.toString() || '';
      
      // Start transition
      startTransition();
      
      // Update children after a delay to allow transition to complete
      const timer = setTimeout(() => {
        setDisplayChildren(children);
        endTransition();
      }, 600); // This should match the duration of your stairs animation
      
      return () => clearTimeout(timer);
    } else {
      // If route didn't change, just update the children
      setDisplayChildren(children);
    }
  }, [currentRoute, children, pathname, searchParams, startTransition, endTransition]);

  return (
    <Stairs backgroundColor={backgroundColor}>
      {displayChildren}
    </Stairs>
  );
}
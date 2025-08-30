# Stairs Page Transition Implementation

## Overview
This document describes the implementation of the stairs page transition animation for the Club Website. The transition creates a staircase effect using black bars that move vertically when navigating between pages.

## Components Created

### 1. StairsContext.tsx
- Created a context to manage the transition state globally
- Provides `startTransition()` and `endTransition()` functions
- Tracks `isTransitioning` state

### 2. index.tsx (Stairs Component)
- Main component that renders the stairs animation
- Uses Framer Motion for animations
- Conditionally renders based on `isTransitioning` state
- Uses the `expand` and `opacity` animations from anim.js

### 3. anim.js
- Defines the animation variants for the stairs effect
- `expand`: Controls the vertical movement of the black bars
- `opacity`: Controls the background fade effect

### 4. StairsWrapper.tsx
- Wrapper component that handles page transitions
- Detects route changes using `usePathname()` and `useSearchParams()`
- Triggers transitions when navigating between pages

## Integration Points

### 1. Providers Integration
- Updated `app/providers/providers.tsx` to include `StairsProvider`
- Ensures the context is available throughout the application

### 2. Layout Integration
- Updated `app/layout.tsx` to wrap all pages with `StairsWrapper`
- This ensures all page transitions use the stairs animation

### 3. Navbar Integration
- Updated `components/navbar/navbar2.tsx` to trigger transitions
- Added `handleNavigation()` function to start transitions before navigation
- Added test links to navigation menu

## Styling
- Added CSS classes to `styles/globals.css` for the stairs transition
- Defined styles for `.transition-container` and `.transition-background`
- Ensured proper z-index stacking for visibility

## Animation Timing
- Transition duration: 600ms total
- Bar animation: 400ms per bar with staggered delays
- Delay between transition start and page content change: 600ms

## Testing
- Created test pages to verify the transition works correctly
- Tested navigation between different pages
- Verified the animation plays in both directions

## Usage
The stairs transition will automatically play when navigating between pages using the navbar. The transition consists of:
1. Black background fade in
2. Five black bars moving vertically from top to bottom
3. New page content appearing after the animation completes

## Files Modified
- `app/layout.tsx`
- `app/providers/providers.tsx`
- `components/navbar/navbar2.tsx`
- `styles/globals.css`
- `app/test/page.tsx`

## Files Created
- `components/stairs/anim.js`
- `components/stairs/index.tsx`
- `components/stairs/StairsContext.tsx`
- `components/stairs/StairsWrapper.tsx`
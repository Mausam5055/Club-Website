"use client";
import React, { useEffect, useRef, useState, ReactNode } from "react";
import HTMLFlipBook from "react-pageflip";
interface PageProps {
  children: ReactNode;
  className?: string;
  number?: number;
}

interface MyBookProps {}
const Page = React.forwardRef<HTMLDivElement, PageProps>(({ children, className = "", number }, ref) => (
  <div className={`relative ${className} book-page`} ref={ref}>
    <div className="absolute inset-0 bg-white dark:bg-gray-800 shadow-lg">
      <div className="absolute left-0 top-0 w-full h-full bg-paper-texture opacity-10"></div>
      <div className="relative z-10 h-full p-2 sm:p-4 md:p-6 flex flex-col">
        {children}
      </div>
    </div>
  </div>
));

Page.displayName = 'Page';

export default function MyBook(props: MyBookProps) {
  const bookRef = useRef<any>(null);
  const [dimensions, setDimensions] = useState({ width: 400, height: 520 });

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const containerHeight = width < 1024 ? height * 0.45 : height * 0.6;

      // Calculate width based on height for aspect ratio
      const baseHeight = Math.min(containerHeight, 520);
      const baseWidth = Math.floor(baseHeight / 1.3);
      const pageWidth = Math.min(baseWidth, 400);

      const newDimensions =
        width < 640
          ? { width: Math.min(pageWidth, 300) * 2, height: Math.min(baseHeight, 420) }
          : width < 768
          ? { width: Math.min(pageWidth, width - 80) * 2, height: baseHeight }
          : { width: pageWidth * 2, height: baseHeight };

      setDimensions(newDimensions);
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        bookRef.current?.pageFlip()?.flipNext();
      } else if (e.key === "ArrowLeft") {
        bookRef.current?.pageFlip()?.flipPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <HTMLFlipBook
        ref={bookRef}
        width={dimensions.width / 2} // Single page width
        height={dimensions.height}
        size="fixed"
        minWidth={480}
        maxWidth={800}
        minHeight={380}
        maxHeight={520}
        drawShadow={true}
        flippingTime={1000}
        usePortrait={false}
        startZIndex={20}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        className="book-content"
        startPage={0}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={40}
        showPageCorners={true}
        style={{ width: dimensions.width, height: dimensions.height }}
        disableFlipByClick={false}
        autoSize={false}
      >
       <Page className="book-cover relative overflow-hidden" number={0}>
          <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600">
            <div className="book-pattern absolute inset-0 opacity-20"></div>
          </div>
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-white p-2 sm:p-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4 text-center tracking-wider">
              Club Events
            </h1>
            <div className="w-12 sm:w-16 h-0.5 bg-white mb-2 sm:mb-4 rounded-full opacity-75"></div>
          </div>
        </Page>

        {/* Content Pages */}
        <Page number={1}>
          <div className="h-full flex flex-col p-2 sm:p-3">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3 text-red-500 dark:text-red-400">
              Past Events
            </h2>
            <div className="prose dark:prose-invert">
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm md:text-base">
                <li>Workshop on MATLAB Basics</li>
                <li>Introduction to Simulink</li>
                <li>Technical Paper Writing</li>
              </ul>
            </div>
            <div className="mt-auto text-right text-[10px] sm:text-xs text-gray-500">1</div>
          </div>
        </Page>

        <Page number={2}>
          <div className="h-full flex flex-col p-2 sm:p-3">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3 text-red-500 dark:text-red-400">
              Upcoming Events
            </h2>
            <div className="prose dark:prose-invert">
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm md:text-base">
                <li>Advanced MATLAB Programming</li>
                <li>Research Paper Workshop</li>
                <li>Project Showcase</li>
              </ul>
            </div>
            <div className="mt-auto text-right text-[10px] sm:text-xs text-gray-500">2</div>
          </div>
        </Page>
        <Page number={3}>
          <div className="h-full flex flex-col p-2 sm:p-3">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3 text-red-500 dark:text-red-400">
              Upcoming Events
            </h2>
            <div className="prose dark:prose-invert">
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm md:text-base">
                <li>Advanced MATLAB Programming</li>
                <li>Research Paper Workshop</li>
                <li>Project Showcase</li>
              </ul>
            </div>
            <div className="mt-auto text-right text-[10px] sm:text-xs text-gray-500">3</div>
          </div>
        </Page>
        <Page number={4}>
          <div className="h-full flex flex-col p-2 sm:p-3">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3 text-red-500 dark:text-red-400">
              Upcoming Events
            </h2>
            <div className="prose dark:prose-invert">
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm md:text-base">
                <li>Advanced MATLAB Programming</li>
                <li>Research Paper Workshop</li>
                <li>Project Showcase</li>
              </ul>
            </div>
            <div className="mt-auto text-right text-[10px] sm:text-xs text-gray-500">4</div>
          </div>
        </Page>

        {/* Back Cover */}
        <Page className="book-cover" number={5}>
          <div className="absolute inset-0 bg-gradient-to-bl from-red-600 to-red-500">
            <div className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay"></div>
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-white">
              <div className="text-3xl font-bold">Thank You</div>
            </div>
          </div>
        </Page>
      </HTMLFlipBook>
    </div>
  );
}

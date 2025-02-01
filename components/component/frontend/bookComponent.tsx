"use client";
import React, { useEffect, useRef, useState, ReactNode } from "react";
import HTMLFlipBook from "react-pageflip";

// Define the MyBookProps interface
interface MyBookProps {
  // Add any props if needed, or leave empty if no props are used
}

interface PageProps {
  children: ReactNode;
  className?: string;
  number?: number;
}

type PageType = 'cover' | 'content' | 'backcover';

interface PageContent {
  type: PageType;
  title: string;
  subtitle?: string;
  items?: string[];
}

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
  const [dimensions, setDimensions] = useState({ width: 300, height: 420 });

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      let baseHeight, baseWidth, pageWidth;
      
      if (width < 640) {
        baseHeight = Math.min(height * 0.4, 420);
        baseWidth = Math.floor(baseHeight * 0.65);
        pageWidth = Math.min(baseWidth, 260);
      } else if (width < 768) {
        baseHeight = Math.min(height * 0.45, 460);
        baseWidth = Math.floor(baseHeight * 0.68);
        pageWidth = Math.min(baseWidth, 300);
      } else {
        baseHeight = Math.min(height * 0.55, 500);
        baseWidth = Math.floor(baseHeight * 0.7);
        pageWidth = Math.min(baseWidth, 320);
      }

      setDimensions({
        width: pageWidth * 2,
        height: baseHeight
      });
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

  const pages: PageContent[] = [
    {
      type: 'cover',
      title: 'Club Events',
      subtitle: 'Explore our activities'
    },
    {
      type: 'content',
      title: "Recent Highlights",
      items: [
        "Advanced MATLAB Workshop Series (Spring 2024)",
        "Technical Paper Writing Workshop with IEEE",
        "Simulink Project Competition",
        "Research Methodology Seminar"
      ]
    },
    {
      type: 'content',
      title: "Upcoming Events",
      items: [
        "Advanced MATLAB Programming Workshop",
        "LaTeX Document Preparation Session",
        "Technical Paper Writing Masterclass",
        "Project Showcase Event"
      ]
    },
    {
      type: 'backcover',
      title: 'Thank You',
      subtitle: 'For exploring our events'
    }
  ];

  const renderPage = (page: PageContent, index: number) => {
    const coverStyles = "absolute inset-0 bg-gradient-to-br from-red-400 via-red-500 to-red-600";
    const coverContent = "relative z-10 h-full flex flex-col justify-center items-center text-white p-4 sm:p-6";

    if (page.type === 'content') {
      return (
        <div className="h-full flex flex-col p-3 sm:p-4">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 text-red-500 dark:text-red-400 truncate">
            {page.title}
          </h2>
          <div className="prose dark:prose-invert flex-grow overflow-y-auto">
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              {page.items?.map((item, idx) => (
                <li key={idx} className="line-clamp-2">{item}</li>
              ))}
            </ul>
          </div>
          <div className="mt-2 text-right text-xs sm:text-sm text-gray-500">{index}</div>
        </div>
      );
    }

    return (
      <div className={coverStyles}>
        <div className="book-pattern absolute inset-0 opacity-20"></div>
        <div className={coverContent}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center tracking-wider animate-fade-in">
            {page.title}
          </h1>
          <div className="w-16 sm:w-20 h-1 bg-white mb-4 sm:mb-6 rounded-full opacity-75"></div>
          {page.subtitle && (
            <p className="text-sm sm:text-base text-center opacity-90">{page.subtitle}</p>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden px-2 sm:px-0">
      <HTMLFlipBook
        ref={bookRef}
        width={dimensions.width / 2}
        height={dimensions.height}
        size="stretch"
        minWidth={200}
        maxWidth={340}
        minHeight={380}
        maxHeight={500}
        drawShadow={true}
        flippingTime={800}
        usePortrait={true}
        startZIndex={20}
        maxShadowOpacity={0.3}
        showCover={true}
        mobileScrollSupport={true}
        className="book-content"
        // Add missing required props
        startPage={0}
        autoSize={true}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={0}
        showPageCorners={true}
        disableFlipByClick={false}
        style={{
          position: 'relative',
          width: dimensions.width,
          height: dimensions.height,
          touchAction: 'none'
        }}
      >
        {pages.map((page, index) => (
          <Page 
            number={index}
            key={`page-${index}`}
            className={`${page.type === 'content' ? 'page-content' : 'book-cover'} relative overflow-hidden ${page.type === 'backcover' ? 'back-cover' : ''}`}
          >
            {renderPage(page, index)}
          </Page>
        ))}
      </HTMLFlipBook>
    </div>
  );
}

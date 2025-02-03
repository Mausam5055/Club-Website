"use client";
import Image from "next/image";
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
  image?: string; // Add the image property
  description?: string; // Add the description property
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
      title: "Inaugral Event",
items: [
  "1. The Linpack Club hosted its inaugural event titled Embarking on the Basics of MATLAB: A Primer to Unlocking Its Potential.",
  "2. Event Started with distribution of unique hashed event ticket through college mail id’s to registered student.",
  "3. The event featured an engaging workshop on MATLAB, designed to provide participants with a comprehensive understanding of the software.",
  "4. The workshop included hands-on sessions and quizzes to explore new technologies and enhance participants' skills.",
  "5. Ended with Prize distribution and unique participation certification to all."
],
      image: "/images/hero-image-2.jpg",
    },
    {
      type: 'content',
      title: "VIT GOT TALLENT -I",
items: [
  `Event has been started by providing Everyone with event unique has codes tickets through everyones mail ids.
On the day of event music system has been installed and all participants had been provided with event details.
Blind Fold Race (Round 1) 
Each team has one blindfolded member.
The blindfolded member follows instructions from their partner to reach a destination, overcoming hurdles.
The team that reaches the destination first wins. More instructions will be given by anchors.`,

  `Pop the Balloons (Round 2):
Teams of two members.
One team member inflates balloons, while the other pops them by sitting on them.
Scores are based on the number of balloons popped.`,

  `Karaoke Battle (Round 3):
Features Word Play, where teams sing spontaneously with a given word.
Artist Impersonation: Solo challenge to perform a song by a randomly drawn artist.
Guess the Song
Any Task can be on your luck.`,

  `Lip Sync Battle (Round 4):
Teams of two.
One member wears noise-canceling headphones (can’t hear external sounds).
The other member imitates a given movie name, dialogue (2-5 words), or actor/actress name through lip movements.
Points awarded if the guesser gets it right. It will be appreciable if you guys bring your own. Else we will try to give to 10 competing team at a time.`,

  `Face Painting (Round 5):
Teams of two.
One member paints an attractive pattern on the other’s face.
The most impressive and attractive look wins.
Time limit for completion.
Participants bring their own makeup/painting tools for safety.`,
],
      image: "/images/event2.jpg",
    },
    {
      type: 'content',
      title: "MatlabVerse A NextWave Hackathon",
      items: [
        "The Linpack Club hosted a hackathon titled MATLABVerse: A NextWave Hackathon, which was open to all students.",
        "The event aimed to provide students with a platform to showcase their skills and creativity in MATLAB programming.",
        "Participants were required to submit their projects, which were evaluated by a panel of judges.",
        "The hackathon featured a range of projects, including image processing, data analysis, and machine learning applications.",
        "The winners were awarded prizes and certificates for their outstanding projects."
      ],
      image: "/images/hero-image.jpg",
    },
    {
      type: 'content',
      title: "Upcoming Events(VIT GOT TALLENT -II)",
      items: [
        "The Linpack Club is organizing a second edition of VIT GOT TALLENT, a talent show open to all students.",
        "The event will feature a range of competitions, including singing, dancing, acting, and more.",
        "Participants will have the opportunity to showcase their talents and compete for prizes and recognition.",
        "The event will be held on the VIT campus, with a panel of judges evaluating the performances.",
        "The winners will be awarded prizes and certificates for their outstanding performances."
      ],
      image: "/images/water.jpg",
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
        <div className="h-full flex flex-col bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      {/* Full-width Image at the Top (1/4 Page Height) */}
      {page.image && (
        <div className="w-full h-1/2 relative">
          <Image
            src={page.image}
            alt={page.title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
      )}

      {/* Content Section */}
      <div className="flex flex-col flex-grow p-4 sm:p-6 overflow-y-auto">
        {/* Title */}
        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-red-500 dark:text-red-400">
          {page.title}
        </h2>

        {/* Description (Styled like a Book) */}
        {page.description && (
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
            {page.description}
          </p>
        )}

        {/* List Items */}
        {page.items && (
          <ul className="mt-4 list-disc space-y-2 sm:space-y-3 text-sm sm:text-base pl-5 text-gray-700 dark:text-gray-300">
            {page.items.map((item, idx) => (
              <li key={idx} className="line-clamp-3">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Index (Bottom Right) */}
      <div className="p-3 text-right text-xs sm:text-sm text-gray-500 dark:text-gray-400">
        {index}
      </div>
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

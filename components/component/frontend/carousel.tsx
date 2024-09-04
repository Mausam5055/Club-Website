"use client"
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface Card {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link:string;
}

interface CarouselProps {
  cards: Card[];
}

const Carousel: React.FC<CarouselProps> = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(6);
  useEffect(() => {
    updateCardsPerSlide();
    window.addEventListener('resize', updateCardsPerSlide);
    return () => window.removeEventListener('resize', updateCardsPerSlide);
  }, []);

  if (!cards || cards.length === 0) {
    return <p>No cards available</p>;
  }

  const updateCardsPerSlide = () => {
    if (window.innerWidth >= 1280) {
      setCardsPerSlide(6);
    } else if (window.innerWidth >= 1024) {
      setCardsPerSlide(4);
    } else if (window.innerWidth >= 640) {
      setCardsPerSlide(2);
    } else {
      setCardsPerSlide(1);
    }
  };

 

  const totalSlides = Math.ceil(cards.length / cardsPerSlide);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="relative w-full overflow-hidden p-2">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {Array.from({ length: totalSlides }).map((_, slideIndex) => (
          <div key={slideIndex} className={`w-full flex-shrink-0 grid gap-4 p-6 ${cardsPerSlide === 1 ? 'grid-cols-1' : 'grid-cols-3 grid-rows-2'}`}>
            {cards.slice(slideIndex * cardsPerSlide, slideIndex * cardsPerSlide + cardsPerSlide).map((card) => (
              <div key={card.id} className="w-full h-[50vh] p-4 bg-white rounded-md shadow-md flex flex-col gap-y-2">
                <a href={card.link}>
                <Image
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                  width={1400}
                  height={1200}
                />
                </a>
                <h3 className="text-lg font-bold">{card.title}</h3>
                <p className="text-sm">{card.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-transparent text-black p-2 rounded-md"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-transparent text-black p-2 rounded-md"
      >
        <ArrowRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Carousel;




// "use client"
// import { ArrowLeft, ArrowRight } from 'lucide-react';
// import Image from 'next/image';
// import React, { useEffect, useState } from 'react';

// interface Card {
//   id: number;
//   title: string;
//   description: string;
//   imageUrl: string;
// }

// interface CarouselProps {
//   cards: Card[];
// }

// const Carousel: React.FC<CarouselProps> = ({ cards }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [cardsPerSlide, setCardsPerSlide] = useState(6);

//   if (!cards || cards.length === 0) {
//     return <p>No cards available</p>;
//   }

//   const updateCardsPerSlide = () => {
//     if (window.innerWidth >= 1280) {
//       setCardsPerSlide(6);
//     } else if (window.innerWidth >= 1024) {
//       setCardsPerSlide(4);
//     } else if (window.innerWidth >= 640) {
//       setCardsPerSlide(2);
//     } else {
//       setCardsPerSlide(1);
//     }
//   };

//   useEffect(() => {
//     updateCardsPerSlide();
//     window.addEventListener('resize', updateCardsPerSlide);
//     return () => window.removeEventListener('resize', updateCardsPerSlide);
//   }, []);

//   const totalSlides = Math.ceil(cards.length / cardsPerSlide);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
//   };

//   return (
//     <div className="relative w-full overflow-hidden p-2">
//       <div
//         className="flex transition-transform duration-500 ease-in-out"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {Array.from({ length: totalSlides }).map((_, slideIndex) => (
//           <div key={slideIndex} className="w-full flex-shrink-0 grid grid-cols-3 grid-rows-2 gap-4 p-6">
//             {cards.slice(slideIndex * cardsPerSlide, slideIndex * cardsPerSlide + cardsPerSlide).map((card) => (
//               <div key={card.id} className="w-full h-[50vh] p-4 bg-white rounded-md shadow-md flex flex-col gap-y-2">
//                 <Image
//                   src={card.imageUrl}
//                   alt={card.title}
//                   className="w-full h-48 object-cover rounded-md mb-4"
//                   width={1400}
//                   height={1200}
//                 />
//                 <h3 className="text-lg font-bold">{card.title}</h3>
//                 <p className="text-sm">{card.description}</p>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-transparent text-black p-2 rounded-md"
//       >
//         <ArrowLeft className="w-6 h-6" />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-transparent text-black p-2 rounded-md"
//       >
//         <ArrowRight className="w-6 h-6" />
//       </button>
//     </div>
//   );
// };

// export default Carousel;






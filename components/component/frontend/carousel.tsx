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
    <div className="relative w-full">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ 
            transform: `translateX(-${currentIndex * 100}%)`,
            willChange: 'transform'
          }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div 
              key={slideIndex} 
              className={`w-full flex-shrink-0 grid gap-4 p-6 ${
                cardsPerSlide === 1 ? 'grid-cols-1' : 'grid-cols-3 grid-rows-2'
              }`}
            >
              {cards.slice(slideIndex * cardsPerSlide, slideIndex * cardsPerSlide + cardsPerSlide).map((card) => (
                <div 
                  key={card.id} 
                  className="bg-white dark:bg-slate-800 w-full h-[50vh] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <a href={card.link} className="block h-full">
                    <div className="relative h-[55%] overflow-hidden group">
                      <Image
                        src={card.imageUrl}
                        alt={card.title}
                        className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
                        width={1400}
                        height={1200}
                      />
                    </div>
                    <div className="p-4 h-[45%] transform transition-transform duration-300">
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{card.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-4">{card.description}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white/60 dark:from-slate-900/60 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white/60 dark:from-slate-900/60 to-transparent pointer-events-none" />
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -left-2 transform -translate-y-1/2 bg-white/90 dark:bg-slate-800/90 text-gray-800 dark:text-white p-3 rounded-r-xl shadow-lg hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 hover:scale-110 z-20"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -right-2 transform -translate-y-1/2 bg-white/90 dark:bg-slate-800/90 text-gray-800 dark:text-white p-3 rounded-l-xl shadow-lg hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 hover:scale-110 z-20"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;






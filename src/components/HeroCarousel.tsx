import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Slide {
  src: string;
  alt: string;
  label: string;
}

const slides: Slide[] = [
  {
    src: '/images/skymirr-next-gen-antennas.jpg',
    alt: 'SkyMirr next-generation antenna technology',
    label: 'Next-generation antennas',
  },
  {
    src: '/images/skymirr-antennas-slider.jpeg',
    alt: 'SkyMirr advanced antenna product portfolio',
    label: 'Advanced antenna platforms',
  },
  {
    src: '/images/skymirr-sky5g-slider.jpeg',
    alt: 'SkyMirr Sky5G wireless connectivity solutions',
    label: 'Sky5G connectivity',
  },
];

export const HeroCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  return (
    <div
      className="absolute inset-0 w-full h-full bg-transparent"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05, filter: 'blur(8px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 0.98, filter: 'blur(4px)' }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={slides[currentIndex].src}
            alt={slides[currentIndex].alt}
            className="w-full h-full object-contain object-center bg-transparent"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </AnimatePresence>



      {/* Subtle indicator bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-white/20 w-full z-20 flex">
        {slides.map((slide, idx) => (
          <div key={slide.label} className="h-full flex-1 relative">
            {currentIndex === idx && (
              <motion.div
                layoutId="activeSlideIndicator"
                className="absolute inset-0 bg-accent"
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

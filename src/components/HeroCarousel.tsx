import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
    }, 5500);

    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  return (
    <div
      className="relative rounded-[22px] bg-surface-glass p-3 shadow-xl backdrop-blur-2xl ring-1 ring-border"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative overflow-hidden rounded-[16px] bg-surface">
        <div
          className="relative"
          role="region"
          aria-roledescription="carousel"
          aria-label="SkyMirr technology highlights"
        >
          <div className="overflow-hidden">
            <div
              className="flex ml-0 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slides.map((slide, idx) => (
                <div
                  key={slide.src}
                  role="group"
                  aria-roledescription="slide"
                  className="min-w-0 shrink-0 grow-0 basis-full relative pl-0"
                >
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    width={1920}
                    height={688}
                    className="w-full h-auto object-contain bg-surface rounded-xl"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-5 right-5 font-mono text-[10px] text-brand-foreground/80 sm:bottom-7 sm:right-7">
                    0{idx + 1} / 0{slides.length}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top-right Navigation Controls */}
        <div className="absolute right-4 top-4 flex gap-2 z-10">
          <button
            onClick={prevSlide}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 w-9 rounded-full bg-surface-glass backdrop-blur-md"
            type="button"
            aria-label="Previous image"
          >
            <ChevronLeft className="size-4" aria-hidden="true" />
          </button>
          <button
            onClick={nextSlide}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 w-9 rounded-full bg-surface-glass backdrop-blur-md"
            type="button"
            aria-label="Next image"
          >
            <ChevronRight className="size-4" aria-hidden="true" />
          </button>
        </div>

        {/* Bottom Center Indicator Dots */}
        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2 sm:bottom-7 z-10">
          {slides.map((slide, idx) => {
            const isActive = currentIndex === idx;
            return (
              <button
                key={slide.label}
                onClick={() => setCurrentIndex(idx)}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring size-5 rounded-full p-0 hover:bg-transparent"
                type="button"
                aria-label={`Show ${slide.label}`}
                aria-current={isActive ? 'true' : undefined}
              >
                <span
                  className={`block h-1.5 rounded-full bg-brand-foreground transition-all duration-300 ${
                    isActive ? 'w-5' : 'w-1.5 opacity-60'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Status Pill */}
      <div className="mt-3 flex flex-col gap-2 rounded-[12px] bg-surface-glass px-4 py-3 ring-1 ring-border sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="size-2 rounded-full bg-signal skm-breathe" />
          <span className="text-sm font-medium text-brand-deep">
            Engineered for reliable connectivity
          </span>
        </div>
        <span className="font-mono text-[10px] uppercase text-muted-foreground">
          LTE · 5G · Wi-Fi 7
        </span>
      </div>
    </div>
  );
};

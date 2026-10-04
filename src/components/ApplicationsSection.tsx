import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, ChevronLeft, ChevronRight } from 'lucide-react';

interface ApplicationsSectionProps {
  onNavigate?: (page: string) => void;
}

export function ApplicationsSection({ onNavigate }: ApplicationsSectionProps) {
  const applications = [
    {
      id: 'industrial',
      title: 'INDUSTRIAL & ENERGY',
      image: '/images/app_industrial.jpg',
    },
    {
      id: 'residential',
      title: 'RETAIL & RESIDENTIAL',
      image: '/images/app_retail.jpg',
    },
    {
      id: 'logistics',
      title: 'FLEET & LOGISTICS',
      image: '/images/app_fleet.jpg',
    },
    {
      id: 'medical',
      title: 'MEDICAL & HEALTHCARE',
      image: '/images/app_medical.jpg',
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.clientWidth >= 768 ? current.clientWidth / 2 : current.clientWidth * 0.8;
      current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="applications" className="pt-24 pb-4 bg-gradient-to-b from-white to-blue-50/50 relative border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header Section (Left Aligned to match HomePage Hardware Portfolio) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand/10 mb-6">
              <Activity className="size-4 text-brand" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
                Deployment Scenarios
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-deep tracking-tight leading-[1.1]">
              Engineered for <br className="hidden md:block"/>
              <span className="text-muted-foreground/60">any environment.</span>
            </h2>
            
            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              We develop and manufacture advanced RF technology-based products that solve real-world problems. From cost-effective broadband to precision medical telemetry.
            </p>
          </div>
          
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden sm:flex items-center gap-2">
              <button 
                onClick={() => scroll('left')} 
                className="inline-flex items-center justify-center h-12 w-12 rounded-full border border-border bg-white text-brand-deep hover:bg-brand hover:text-white transition-colors shadow-sm cursor-pointer"
                aria-label="Scroll left"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button 
                onClick={() => scroll('right')} 
                className="inline-flex items-center justify-center h-12 w-12 rounded-full border border-border bg-white text-brand-deep hover:bg-brand hover:text-white transition-colors shadow-sm cursor-pointer"
                aria-label="Scroll right"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Slider / Scroll Container Wrapper */}
        <div className="relative">
          {/* Mobile Overlay Arrows (Hidden on Desktop) */}
          <button 
            onClick={() => scroll('left')} 
            className="absolute left-0 top-[225px] -translate-y-1/2 z-20 sm:hidden inline-flex items-center justify-center h-12 w-12 rounded-full border border-border bg-white/95 backdrop-blur-md text-brand-deep shadow-xl"
            aria-label="Scroll left"
          >
            <ChevronLeft className="size-6" />
          </button>
          <button 
            onClick={() => scroll('right')} 
            className="absolute right-0 top-[225px] -translate-y-1/2 z-20 sm:hidden inline-flex items-center justify-center h-12 w-12 rounded-full border border-border bg-white/95 backdrop-blur-md text-brand-deep shadow-xl"
            aria-label="Scroll right"
          >
            <ChevronRight className="size-6" />
          </button>

          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 hide-scrollbar -mx-6 px-6 lg:-mx-12 lg:px-12 scroll-smooth"
          >
          {applications.map((app, idx) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, type: 'spring', bounce: 0.2 }}
              className="group relative rounded-sm overflow-hidden bg-paper border border-border h-[450px] min-w-[300px] sm:min-w-[350px] md:min-w-[400px] flex-1 shrink-0 snap-center sm:snap-start"
            >
              <div className="absolute inset-0 bg-brand-deep">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/95 via-brand-deep/20 to-transparent"></div>
              
              {/* Title Text */}
              <div className="absolute bottom-8 left-6 right-6">
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand mb-2 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Explore Application
                </p>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {app.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}

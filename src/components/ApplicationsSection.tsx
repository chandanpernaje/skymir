import { motion } from 'framer-motion';
import { ArrowRight, Activity } from 'lucide-react';

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

  return (
    <section id="applications" className="py-24 bg-background relative border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header Section (Left Aligned to match HomePage Hardware Portfolio) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-brand/10 mb-6">
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
          
          {onNavigate && (
            <button
              onClick={() => onNavigate('applications')}
              className="group inline-flex items-center justify-center gap-2 bg-white px-6 py-3 text-sm font-bold text-brand-deep shadow-sm ring-1 ring-border transition-all hover:bg-brand hover:text-white rounded-sm shrink-0"
            >
              View All Applications
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </button>
          )}
        </div>

        {/* Horizontal Slider / Scroll Container */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 hide-scrollbar -mx-6 px-6 lg:-mx-12 lg:px-12">
          {applications.map((app, idx) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, type: 'spring', bounce: 0.2 }}
              onClick={() => onNavigate ? onNavigate('applications') : null}
              className="group relative rounded-md overflow-hidden cursor-pointer bg-paper border border-border hover:border-brand transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-[450px] min-w-[300px] sm:min-w-[350px] md:min-w-[400px] flex-1 shrink-0 snap-center sm:snap-start"
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
    </section>
  );
}

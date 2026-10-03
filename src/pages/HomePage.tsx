import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronRight,
  ArrowRight,
  Router as RouterIcon,
  Sparkles,
  Cpu,
  Truck,
  HeartPulse,
  CheckCircle2,
  Globe,
  Radio,
  Zap,
  Activity,
  ShieldCheck,
  Wifi
} from 'lucide-react';
import { HeroCarousel } from '../components/HeroCarousel';
import { ApplicationsSection } from '../components/ApplicationsSection';
import { MulcatDeepDive } from '../components/MulcatDeepDive';
import type { RoutePath } from '../types';

interface HomePageProps {
  onNavigate: (path: RoutePath) => void;
}

const partners = [
  { name: 'Digi-Key', logo: '/images/partners/digikey.jpg' },
  { name: 'Amazon', logo: '/images/partners/amazon.jpg' },
  { name: 'Walmart', logo: '/images/partners/walmart.jpg' },
  { name: 'B&H Photo Video', logo: '/images/partners/bhphoto.jpg' },
  { name: 'Verizon', logo: '/images/partners/verizon.jpg' },
  { name: 'T-Mobile', logo: '/images/partners/tmobile.jpg' },
];

const solutions = [
  {
    id: 'retail',
    icon: Globe,
    title: 'Smart Retail & POS',
    subtitle: 'Zero-Downtime Storefront',
    description: 'Avoid fiber construction delays with instant-on 5G primary connectivity. Maintain continuous checkout processing.',
    impact: '100% Checkout Uptime',
  },
  {
    id: 'industrial',
    icon: Cpu,
    title: 'Industrial IoT',
    subtitle: 'Ruggedized Remote Telemetry',
    description: 'IP67 weatherproof antennas designed for substations, oil rigs, solar farms, and noisy metallic environments.',
    impact: '-40°C to +85°C Operating',
  },
  {
    id: 'transit',
    icon: Truck,
    title: 'Fleet & Transit',
    subtitle: 'Vehicular Broadband',
    description: 'Low-profile, vandal-resistant puck and MIMO modules providing continuous real-time video streaming.',
    impact: 'SAE J1455 Certified',
  },
  {
    id: 'medical',
    icon: HeartPulse,
    title: 'Medical Devices',
    subtitle: 'Precision Medical NFC',
    description: 'Biocompatible flexible substrate antennas for continuous glucose monitoring and secure hospital asset tracking.',
    impact: 'ISO 10993 Compliant',
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 90, damping: 20 } }
};

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [activeSolution, setActiveSolution] = useState(0);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: RoutePath) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <main className="bg-background text-foreground selection:bg-brand selection:text-brand-foreground overflow-hidden">
      {/* 
        ========================================
        HERO SECTION 
        ========================================
      */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-10 overflow-hidden" style={{background: 'linear-gradient(135deg, #F8FAFC 0%, #F0F4FF 50%, #EEF2FF 100%)'}}>
        {/* Dynamic Abstract Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
           <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full blur-[120px] mix-blend-multiply animate-float" style={{background: 'rgba(29,78,216,0.12)'}} />
           <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full blur-[130px] mix-blend-multiply animate-float" style={{background: 'rgba(59,130,246,0.10)', animationDelay: '3s', animationDuration: '10s'}} />
           <div className="absolute top-[30%] right-[20%] w-[30vw] h-[30vw] rounded-full blur-[100px] mix-blend-multiply animate-float" style={{background: 'rgba(234,88,12,0.06)', animationDelay: '1.5s'}} />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[40vh] grid-bg opacity-40" />
           {/* Tech scan line */}
           <div className="scan-line" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-[1400px] items-center gap-8 lg:gap-16 px-4 sm:px-6 py-6 sm:py-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-12">
          <motion.div variants={staggerContainer} initial="hidden" animate="show" className="relative">
            <motion.h1 variants={fadeUp} className="max-w-[12ch] text-balance text-5xl font-bold leading-[1.05] tracking-tight text-brand-deep sm:text-7xl lg:text-[5.5rem]">
              Signal <br/>
              <span className="text-brand font-bold">without limits.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-6 md:mt-8 max-w-[46ch] text-pretty text-base md:text-lg leading-relaxed text-muted-foreground lg:text-xl">
              SkyMirr engineers premium enterprise wireless solutions. Experience unparalleled reliability with our proprietary <strong className="font-semibold text-brand-deep">MuLCAT®</strong> technology, designed for the world's most challenging environments.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 md:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
              <a
                className="btn-shimmer group relative inline-flex items-center justify-center gap-3 bg-accent px-6 sm:px-8 py-3.5 sm:py-4 font-bold text-white transition-all hover:bg-brand hover:shadow-lg hover:shadow-brand/20 hover:-translate-y-0.5"
                href="/products"
                onClick={(e) => handleNav(e, '/products')}
              >
                <span className="relative z-10">Explore Hardware</span>
                <ChevronRight className="size-5 relative z-10 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                className="group inline-flex items-center justify-center gap-2 bg-white px-6 sm:px-8 py-3.5 sm:py-4 font-bold text-brand-deep ring-1 ring-border transition-all hover:bg-paper hover:text-brand hover:ring-brand hover:-translate-y-0.5 hover:shadow-md"
                href="/technology"
                onClick={(e) => handleNav(e, '/technology')}
              >
                <Sparkles className="size-4 text-brand group-hover:rotate-12 transition-transform" />
                Discover MuLCAT®
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} 
            className="relative z-10 w-full mt-4 lg:mt-0"
          >
            <div className="relative rounded-[32px] p-2 bg-white/40 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] ring-1 ring-border backdrop-blur-xl">
               <HeroCarousel />
            </div>
            
            {/* Decorative orbit line behind carousel */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-brand/10 -z-10 hidden lg:block animate-[spin_60s_linear_infinite]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] rounded-full border border-brand-bright/10 -z-10 hidden lg:block animate-[spin_90s_linear_infinite_reverse]" />
          </motion.div>
        </div>
      </section>

      {/* 
        ========================================
        PARTNERS STRIP
        ========================================
      */}
      <section className="py-16 md:py-24 bg-background overflow-hidden">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-center font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-12">
            Deploying with global industry leaders
          </p>
          
          <div className="relative flex w-max animate-marquee items-center group/marquee hover:[animation-play-state:paused]">
            {[...partners, ...partners, ...partners].map((partner, idx) => (
              <div key={`${partner.name}-${idx}`} className="flex justify-center px-4 sm:px-6">
                <div className="flex items-center justify-center p-6 bg-white shadow-sm ring-1 ring-border transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:ring-brand rounded-sm w-[160px] h-[100px] sm:w-[200px] sm:h-[120px]">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-12 w-auto object-contain transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ========================================
        HARDWARE SHOWCASE 
        ========================================
      */}
      <section className="relative py-24 lg:py-32 bg-paper-2 rounded-t-[40px] md:rounded-t-[80px]">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <motion.div 
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20"
          >
            <div className="max-w-2xl">
              <motion.div variants={fadeUp} className="badge-glow inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-brand/10 border border-brand/20 mb-6">
                <span className="ping-dot"><span className="w-2 h-2 rounded-full bg-brand block" /></span>
                <Radio className="size-4 text-brand" />
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">Hardware Portfolio</span>
              </motion.div>
              <motion.div variants={fadeUp} className="accent-line mb-6" />
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-deep tracking-tight leading-[1.1]">
                Purpose-built <br className="hidden md:block"/>
                <span className="text-muted-foreground/60">wireless platforms.</span>
              </motion.h2>
            </div>
            <motion.a
              variants={fadeUp}
              href="/products"
              onClick={(e) => handleNav(e, '/products')}
              className="group inline-flex items-center justify-center gap-2 bg-white px-6 py-3 text-sm font-bold text-brand-deep shadow-sm ring-1 ring-border transition-all hover:bg-brand hover:text-white"
            >
              View Full Lineup
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </motion.div>

          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'TAMP Series',
                cat: 'Broadband & Wi-Fi',
                desc: '4G LTE, 5G Sub-6 MIMO, Wi-Fi 6E and Wi-Fi 7 external antenna solutions.',
                img: '/images/products/tamp161.png'
              },
              {
                title: 'Sky5G Router',
                cat: 'MuLCAT® Connectivity',
                desc: 'Industrial 5G connectivity with AT&T Network Certification.',
                img: '/images/skymirr-router.jpg',
                featured: true
              },
              {
                title: 'TAEP & MAEP',
                cat: 'Medical & Embedded',
                desc: 'Specialized internal antenna platforms for compact medical devices.',
                img: '/images/products/taep162.png'
              }
            ].map((product, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15, type: 'spring' as const, bounce: 0.2 }}
                onClick={() => onNavigate('/products')}
                className={`card-glow group cursor-pointer overflow-hidden rounded-sm ${
                  product.featured
                  ? 'bg-brand/5 ring-1 ring-brand/30'
                  : 'bg-white shadow-sm ring-1 ring-border'
                }`}
              >
                {/* Image area — fixed aspect ratio, fills the full card width */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-paper">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="absolute inset-0 w-full h-full object-contain p-4 sm:p-6 transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Category badge overlaid top-left */}
                  <span className="absolute top-3 left-3 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-accent bg-white/90 px-2 py-1 rounded-sm shadow-sm">
                    {product.cat}
                  </span>
                </div>

                {/* Text content below image */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-xl font-extrabold text-brand-deep group-hover:text-brand transition-colors">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground font-medium">
                    {product.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-brand opacity-0 group-hover:opacity-100 transition-opacity">
                    View products <ChevronRight className="size-3.5" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ========================================
        4. APPLICATIONS SECTION
        ========================================
      */}
      <ApplicationsSection onNavigate={onNavigate} />

      {/* 
        ========================================
        5. DISCOVER SKYMIRR / VIDEO SECTION
        ========================================
      */}
      <MulcatDeepDive onNavigate={onNavigate} />

      {/* 
        ========================================
        INTERACTIVE SOLUTIONS - Per-card accent colors
        ========================================
      */}
      <section className="relative py-24 lg:py-32" style={{background: 'linear-gradient(180deg, #ffffff 0%, #F0F4FF 100%)'}}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-brand/10 border border-brand/20 mb-6">
              <span className="ping-dot"><span className="w-2 h-2 rounded-full bg-brand block" /></span>
              <Zap className="size-3.5 text-brand" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">Industry Solutions</span>
            </div>
            <div className="flex justify-center mb-6"><div className="accent-line" /></div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-deep tracking-tight">
              Engineered for <span className="text-brand">Demanding Deployments</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether connecting a smart retail storefront or a remote industrial site, SkyMirr hardware provides zero-compromise connectivity.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            {solutions.map((item, idx) => {
              const Icon = item.icon;
              const isActive = activeSolution === idx;
              // Per-card accent colors: Blue, Orange, Teal, Violet
              const accents = [
                { bg: '#1D4ED8', light: '#EFF6FF', text: '#1D4ED8', border: '#BFDBFE' },
                { bg: '#EA580C', light: '#FFF7ED', text: '#EA580C', border: '#FED7AA' },
                { bg: '#0D9488', light: '#F0FDFA', text: '#0D9488', border: '#99F6E4' },
                { bg: '#7C3AED', light: '#F5F3FF', text: '#7C3AED', border: '#DDD6FE' },
              ];
              const accent = accents[idx % accents.length];
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12, duration: 0.5 }}
                  onClick={() => setActiveSolution(idx)}
                  style={isActive ? {background: accent.bg, borderColor: accent.bg} : {}}
                  className={`group relative cursor-pointer overflow-hidden p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border ${
                    isActive
                    ? 'shadow-lg text-white'
                    : 'bg-white border-border hover:border-opacity-50 shadow-sm'
                  }`}
                >
                  {/* Top accent bar */}
                  {!isActive && <div className="absolute top-0 left-0 right-0 h-1" style={{background: accent.bg}} />}
                  
                  <div
                    className={`mb-8 inline-flex p-4 transition-all duration-300`}
                    style={isActive ? {background: 'rgba(255,255,255,0.2)', color: 'white'} : {background: accent.light, color: accent.text}}
                  >
                    <Icon className="size-7" />
                  </div>
                  <h3 className={`text-xl font-extrabold mb-3 transition-colors ${isActive ? 'text-white' : 'text-brand-deep'}`}>
                    {item.title}
                  </h3>
                  <p
                    className={`text-sm font-bold uppercase tracking-wider mb-4 transition-colors`}
                    style={isActive ? {color: 'rgba(255,255,255,0.8)'} : {color: accent.text}}
                  >
                    {item.subtitle}
                  </p>
                  <p className={`text-sm leading-relaxed transition-colors ${isActive ? 'text-white/90' : 'text-muted-foreground'}`}>
                    {item.description}
                  </p>
                  <div className={`mt-8 pt-6 border-t flex items-center gap-2 transition-colors ${isActive ? 'border-white/20' : 'border-border'}`}>
                    <CheckCircle2
                      className="size-5"
                      style={isActive ? {color: 'white'} : {color: accent.text}}
                    />
                    <span
                      className={`font-mono text-[11px] font-bold uppercase tracking-wider`}
                      style={isActive ? {color: 'white'} : {color: accent.bg}}
                    >
                      {item.impact}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 
        ========================================
        PREMIUM CTA SECTION - Radisys/Peplink inspired
        ========================================
      */}
      <section className="relative py-32 overflow-hidden" style={{background: 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 45%, #1D4ED8 100%)'}}>
        {/* Diagonal stripe overlay */}
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px'}} />
        {/* Glowing orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20" style={{background: '#3B82F6'}} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-15" style={{background: '#EA580C'}} />
        
        <div className="relative mx-auto max-w-5xl px-6 text-center z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-white/20 bg-white/5">
              <span className="w-2 h-2 rounded-full bg-signal block animate-pulse" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-white/70">Ready to Connect</span>
            </div>
            <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl leading-[1.05]">
              Elevate your <br className="hidden sm:block"/>
              <span className="text-[#FB923C]">connectivity.</span>
            </h2>
            <p className="mt-8 text-xl text-white/70 max-w-2xl mx-auto font-medium">
              Partner with SkyMirr for custom RF design, system-level consulting, and enterprise-grade wireless hardware deployment.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                className="btn-shimmer w-full sm:w-auto bg-accent px-10 py-5 text-base font-bold text-white transition-all hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5"
                href="/contact"
                onClick={(e) => handleNav(e, '/contact')}
              >
                Start a Project
              </a>
              <a
                className="w-full sm:w-auto bg-white/10 px-10 py-5 text-base font-bold text-white ring-1 ring-white/20 transition-all hover:bg-white hover:text-brand-deep hover:-translate-y-0.5"
                href="/design-services"
                onClick={(e) => handleNav(e, '/design-services')}
              >
                View Design Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

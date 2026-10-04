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
        HERO CAROUSEL SECTION (TOP)
        ========================================
      */}
      <section className="relative pt-16 sm:pt-20 bg-background">
        <div className="w-full">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} 
            className="relative w-full aspect-[16/9] sm:aspect-[21/9] lg:aspect-[2.5/1] overflow-hidden bg-transparent border-b border-border"
          >
             <HeroCarousel />
          </motion.div>
        </div>
      </section>

      {/* 
        ========================================
        HERO TEXT SECTION (BOTTOM)
        ========================================
      */}
      <section className="relative pb-24 overflow-hidden bg-background border-b border-border z-10">
        {/* Abstract Top Grid */}
        <div className="absolute inset-0 z-0 bg-[url('/images/grid.svg')] bg-center opacity-[0.03]" />

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 lg:px-12 flex flex-col items-center text-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="show" className="max-w-4xl mx-auto flex flex-col items-center">
            
            <motion.div variants={fadeUp} className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-brand/10 text-brand font-mono text-[11px] font-bold uppercase tracking-widest rounded-full border border-brand/20">
              <span className="w-2 h-2 rounded-full bg-signal block animate-pulse" />
              Enterprise Wireless Systems
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-balance text-6xl font-extrabold leading-[1.05] tracking-tight text-brand-deep sm:text-7xl lg:text-[5.5rem]">
              Signal <br className="hidden sm:block"/>
              <span className="text-brand">without limits.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-8 text-pretty text-lg md:text-xl leading-relaxed text-muted-foreground font-medium max-w-2xl">
              SkyMirr engineers premium enterprise wireless solutions. Experience unparalleled reliability with our proprietary <strong className="font-extrabold text-brand-deep">MuLCAT®</strong> technology, designed for the world's most challenging environments.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                className="group relative inline-flex items-center justify-center gap-3 bg-brand px-8 py-4 font-bold text-white transition-all hover:bg-brand-bright hover:shadow-lg rounded-sm"
                href="/products"
                onClick={(e) => handleNav(e, '/products')}
              >
                Explore Hardware
                <ChevronRight className="size-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                className="group inline-flex items-center justify-center gap-2 bg-transparent px-8 py-4 font-bold text-brand-deep ring-2 ring-brand/30 transition-all hover:ring-brand hover:bg-brand/5 rounded-sm"
                href="/technology"
                onClick={(e) => handleNav(e, '/technology')}
              >
                <Sparkles className="size-4 text-brand transition-transform group-hover:rotate-12" />
                Discover MuLCAT®
              </a>
            </motion.div>
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
          <p className="text-left font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-12 px-6 lg:px-12">
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
      <section className="relative py-24 lg:py-32 bg-paper-2 border-t border-border">
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

          <div className="grid gap-4 sm:gap-8 lg:grid-cols-3">
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
                className={`card-glow group cursor-pointer p-1 sm:p-1.5 ${
                  product.featured 
                  ? 'bg-white ring-2 ring-brand rounded-sm shadow-md' 
                  : 'bg-white shadow-sm ring-1 ring-border rounded-sm hover:shadow-lg hover:ring-brand/40'
                }`}
              >
                <div className={`h-full flex flex-row sm:flex-col p-3 sm:p-8 transition-colors ${product.featured ? 'bg-transparent' : 'bg-transparent'}`}>
                  {/* Image Left on Mobile, Top on Desktop */}
                  <div className="w-[100px] shrink-0 sm:w-full">
                    <div className="relative h-full w-full aspect-square sm:aspect-[4/3] overflow-hidden bg-paper">
                      <img src={product.img} alt={product.title} className="absolute inset-0 w-full h-full object-contain p-2 sm:p-8" />
                    </div>
                  </div>
                  
                  {/* Content Right on Mobile, Bottom on Desktop */}
                  <div className="flex flex-col flex-1 justify-center pl-4 sm:pl-0 sm:pt-8">
                    <p className="font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                      {product.cat}
                    </p>
                    <h3 className="mt-1 sm:mt-2 text-lg sm:text-2xl font-extrabold text-brand-deep">{product.title}</h3>
                    <p className="hidden sm:block mt-2.5 sm:mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground font-medium">
                      {product.desc}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ========================================
        NEW ANIMATED METRICS SECTION
        ========================================
      */}
      <section className="relative py-20 bg-brand-deep text-white border-y border-white/10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] opacity-10 bg-brand" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[80px] opacity-10 bg-brand-bright" />
          <div className="absolute inset-0 opacity-[0.03] bg-[url('/images/grid.svg')] bg-center" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8 lg:divide-x lg:divide-white/10">
            {[
              { label: 'Network Reliability', value: '99.99', suffix: '%' },
              { label: 'Global Deployments', value: '50', suffix: '+' },
              { label: 'Operating Range', value: '-40', suffix: ' to +85°C' },
              { label: 'Continuous Uptime', value: '100', suffix: '%' }
            ].map((metric, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, type: 'spring' }}
                className={`flex flex-col items-start text-left ${idx % 2 !== 0 ? '' : ''} ${idx !== 0 ? 'lg:pl-8' : ''}`}
              >
                <div className="flex items-baseline gap-1 text-brand-bright mb-2">
                  <span className="text-6xl lg:text-7xl font-extrabold tracking-tighter">{metric.value}</span>
                  <span className="text-3xl lg:text-4xl font-bold">{metric.suffix}</span>
                </div>
                <p className="text-xs lg:text-sm font-semibold text-white/60 uppercase tracking-widest">{metric.label}</p>
              </motion.div>
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
          <div className="text-left mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-brand/10 border border-brand/20 mb-6">
              <span className="ping-dot"><span className="w-2 h-2 rounded-full bg-brand block" /></span>
              <Zap className="size-3.5 text-brand" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">Industry Solutions</span>
            </div>
            <div className="flex justify-start mb-6"><div className="accent-line" /></div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-deep tracking-tight">
              Engineered for <span className="text-brand">Demanding Deployments</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Whether connecting a smart retail storefront or a remote industrial site, SkyMirr hardware provides zero-compromise connectivity.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            {solutions.map((item, idx) => {
              const Icon = item.icon;
              const isActive = activeSolution === idx;
              // Per-card accent colors: matching corporate blues
              const accents = [
                { bg: '#0284C7', light: '#F0F9FF', text: '#0284C7', border: '#BAE6FD' },
                { bg: '#0369A1', light: '#E0F2FE', text: '#0369A1', border: '#7DD3FC' },
                { bg: '#075985', light: '#F0F9FF', text: '#075985', border: '#BAE6FD' },
                { bg: '#0C4A6E', light: '#E0F2FE', text: '#0C4A6E', border: '#7DD3FC' },
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
                  className={`group relative cursor-pointer overflow-hidden p-8 transition-all duration-300 hover:-translate-y-1 border rounded-sm ${
                    isActive
                    ? 'shadow-xl text-white'
                    : 'bg-white border-border hover:border-brand shadow-sm hover:shadow-md'
                  }`}
                >
                  {/* Top accent bar */}
                  {!isActive && <div className="absolute top-0 left-0 right-0 h-1" style={{background: accent.bg}} />}
                  
                  <div
                    className={`mb-8 inline-flex p-4 transition-all duration-300 rounded-sm`}
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


      {/* 
        ========================================
        NEW CTA: TAKE A CLOSER LOOK
        ========================================
      */}
      <section className="relative py-16 bg-paper-2 border-t border-border overflow-hidden">
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }}
            className="bg-white rounded-sm border border-border shadow-sm p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-12"
          >
            
            {/* Left Content */}
            <div className="md:w-1/2 text-center md:text-left space-y-6 order-2 md:order-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-deep tracking-tight uppercase">
                Take a closer look....
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground font-medium max-w-md mx-auto md:mx-0">
                Explore our full portfolio of enterprise wireless hardware and custom high-performance antenna solutions.
              </p>
              <div className="pt-4">
                <a
                  href="/products"
                  onClick={(e) => handleNav(e, '/products')}
                  className="inline-flex items-center justify-center gap-3 bg-brand px-8 py-4 text-sm font-bold text-white transition-all hover:bg-brand-bright rounded-sm hover:shadow-lg w-full sm:w-auto"
                >
                  SEE OUR AVAILABLE PRODUCTS
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </div>

            {/* Right Image (Antennas) */}
            <div className="md:w-1/2 w-full flex justify-center order-1 md:order-2 mb-8 md:mb-0">
              <img 
                src="/images/our-products.png" 
                alt="Available Products" 
                className="w-full h-[200px] sm:h-[300px] object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500" 
              />
            </div>

          </motion.div>
        </div>
      </section>

      {/* 
        ========================================
        PREMIUM CTA & GLOBAL PRESENCE
        ========================================
      */}
      <section className="relative py-24 lg:py-32 overflow-hidden" style={{background: 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 45%, #1D4ED8 100%)'}}>
        {/* Diagonal stripe overlay */}
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px'}} />
        {/* Glowing orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20" style={{background: '#0284C7'}} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-15" style={{background: '#38BDF8'}} />
        
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12 z-10 flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left: Elevate Connectivity */}
          <div className="lg:w-1/2">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-xl text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-white/20 bg-white/5 rounded-sm">
                <span className="w-2 h-2 rounded-full bg-signal block animate-pulse" />
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-white/90">Ready to Connect</span>
              </div>
              <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl leading-[1.05]">
                Elevate your <br className="hidden sm:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-bright to-accent">connectivity.</span>
              </h2>
              <p className="mt-8 text-xl text-white/70 font-medium">
                Partner with SkyMirr for custom RF design, system-level consulting, and enterprise-grade wireless hardware deployment.
              </p>
              <div className="mt-12 flex flex-col sm:flex-row items-start justify-start gap-4">
                <a
                  className="w-full sm:w-auto bg-brand px-10 py-5 text-sm font-bold text-white transition-all hover:bg-brand-bright rounded-sm hover:shadow-lg"
                  href="/contact"
                  onClick={(e) => handleNav(e, '/contact')}
                >
                  START A PROJECT
                </a>
                <a
                  className="w-full sm:w-auto bg-white/10 px-10 py-5 text-sm font-bold text-white ring-1 ring-white/20 transition-all hover:bg-white hover:text-brand-deep rounded-sm"
                  href="/design-services"
                  onClick={(e) => handleNav(e, '/design-services')}
                >
                  VIEW DESIGN SERVICES
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: Global Scale Card */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, x: 40 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative p-8 sm:p-12 rounded-sm border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-brand-bright/20 text-brand-bright font-mono text-[10px] font-bold uppercase tracking-widest mb-6">
                <Globe className="size-3.5" />
                Worldwide Deployments
              </div>
              
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">
                Global Scale.<br/>
                <span className="text-brand-bright">Local Reliability.</span>
              </h3>
              
              <p className="text-base text-white/70 font-medium leading-relaxed mb-10">
                SkyMirr technology powers mission-critical network deployments across the most demanding RF environments on Earth.
              </p>
              
              <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent mb-8" />
              
              <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="ping-dot"><span className="w-2 h-2 rounded-full bg-signal block" /></span>
                    <div className="text-3xl sm:text-4xl font-extrabold text-white">10,000<span className="text-brand-bright">+</span></div>
                  </div>
                  <div className="text-xs font-bold text-white/60 uppercase tracking-widest ml-4">Active Endpoints</div>
                </div>
                
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">50<span className="text-brand-bright">+</span></div>
                  <div className="text-xs font-bold text-white/60 uppercase tracking-widest">Countries</div>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </section>
    </main>
  );
};

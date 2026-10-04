import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Activity, ShieldCheck, Zap } from 'lucide-react';
import { SKYMIRR_DATA } from '../data/skymirrData';
import type { RoutePath } from '../types';

interface MulcatDeepDiveProps {
  onNavigate?: (path: RoutePath) => void;
}

export function MulcatDeepDive({ onNavigate }: MulcatDeepDiveProps = {}) {
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Detect when the video container scrolls into the viewport
  const isInView = useInView(containerRef, { margin: "-20% 0px" });

  const videoSrc = '/videos/Discover_SkyMirr.mp4';
  const videoPoster = '/images/discover-skymirr.jpg';

  // Auto-play / pause based on scroll position!
  useEffect(() => {
    if (!videoRef.current) return;
    
    // When the component comes into view, automatically play the video (must be muted for browser policy)
    if (isInView && !isVideoModalOpen) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => setIsVideoPlaying(true)).catch(e => console.log("Autoplay prevented:", e));
      }
    } else {
      // Pause it when it leaves the screen to save resources
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
  }, [isInView, isVideoModalOpen]);

  const handlePlayToggle = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsVideoPlaying(true);
      } else {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      }
    }
  };

  const handleOpenModal = () => {
    if (videoRef.current && !videoRef.current.paused) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
    setIsVideoModalOpen(true);
  };

  const handleCloseModal = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
    setIsVideoModalOpen(false);
  };

  return (
    <section id="technology" className="py-16 lg:py-20 bg-paper-2 relative overflow-hidden font-sans border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Column: Creative Apple-Style Typography */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-brand/10 border border-brand/20 text-brand text-xs font-mono font-bold tracking-widest uppercase shadow-sm">
              <Zap className="w-3.5 h-3.5 text-brand" />
              <span>Discover SkyMirr</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-deep tracking-tight leading-[1.1]">
              The <span className="text-brand">MuLCAT®</span><br/> Advantage.
            </h2>
            
            <div className="relative pl-6 border-l-2 border-brand rounded-none">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {SKYMIRR_DATA.mulcatTechnology.lead}{' '}
                <strong className="text-slate-900 font-bold">{SKYMIRR_DATA.mulcatTechnology.mechanism}</strong>
              </p>
            </div>

            {/* Creative Clean Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="p-6 bg-white border border-border shadow-sm hover:shadow-md transition-shadow group rounded-sm">
                <div className="w-10 h-10 bg-paper flex items-center justify-center text-brand mb-4 group-hover:bg-brand group-hover:text-white transition-all duration-200">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-brand-deep text-lg mb-1">Verified Performance</h4>
                <p className="text-sm text-muted-foreground">Tested in our Songdo 3D Anechoic Facility.</p>
              </div>
              
              <div className="p-6 bg-white border border-border shadow-sm hover:shadow-md transition-shadow group rounded-sm">
                <div className="w-10 h-10 bg-paper flex items-center justify-center text-brand mb-4 group-hover:bg-brand group-hover:text-white transition-all duration-200">
                  <Activity className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-brand-deep text-lg mb-1">10x Usable Bandwidth</h4>
                <p className="text-sm text-muted-foreground">Broadband multi-resonance without costly circuitry.</p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate?.('/technology')}
                className="font-bold text-blue-600 hover:text-blue-800 uppercase tracking-wider text-sm flex items-center gap-2 group transition-colors"
              >
                Read Full Whitepaper
                <span className="w-6 h-px bg-blue-600 group-hover:w-10 transition-all duration-300" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Interactive Video Player */}
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative bg-brand-deep border border-border overflow-hidden shadow-sm group aspect-[4/3] sm:aspect-[16/10] rounded-sm"
          >
            <video 
              ref={videoRef}
              src={videoSrc}
              poster={videoPoster}
              controls
              muted
              playsInline
              loop
              preload="metadata"
              controlsList="nodownload"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Optional Overlay Gradient to make it look premium */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

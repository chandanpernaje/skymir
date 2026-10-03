import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ShieldCheck, Target, Zap, Building2, MapPin, Globe2, Activity, Users } from 'lucide-react';
import type { RoutePath } from '../types';
import { teamMembers } from '../data/teamData';
import { SKYMIRR_DATA } from '../data/skymirrData';

interface AboutPageProps {
  onNavigate: (path: RoutePath) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const [teamCategory, setTeamCategory] = useState<'all' | 'executive' | 'advisory'>('all');

  const filteredTeam = teamMembers.filter((m) =>
    teamCategory === 'all' ? true : m.category === teamCategory
  );

  return (
    <main className="bg-background font-sans selection:bg-brand selection:text-white">
      
      {/* 1. HERO - MATCHES HOME PAGE */}
      <section className="relative min-h-[50vh] flex items-center pt-28 pb-12 overflow-hidden border-b border-border bg-background">
        <div className="absolute inset-0 z-0 pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[40vh] bg-[url('/images/grid.svg')] bg-center opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-brand/10 mb-6">
              <Building2 className="size-4 text-brand" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
                Company Overview
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.05] text-brand-deep">
              Pioneering The <br />
              <span className="text-brand font-bold">
                RF Frontier.
              </span>
            </h1>
            
            <p className="mt-6 md:mt-8 max-w-[46ch] text-pretty text-base md:text-lg leading-relaxed text-muted-foreground lg:text-xl">
              {SKYMIRR_DATA.company.mission}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. CORPORATE MANIFESTO */}
      <section className="py-24 bg-white relative border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-deep tracking-tight leading-[1.1]">
                A Legacy of <br/><span className="text-brand">Innovation.</span>
              </h2>
              <div className="w-20 h-1 bg-brand" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded by industry veterans from Taoglas and Samsung Electronics, SkyMirr was established with a singular vision: to solve the physical limitations of modern telecommunications through advanced electromagnetic engineering. 
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our patented MuLCAT® technology is not just an incremental improvement—it is a fundamental reinvention of how RF signals are propagated, captured, and controlled.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative aspect-square sm:aspect-[4/3] rounded-sm bg-paper overflow-hidden ring-1 ring-border shadow-sm group"
            >
              <img 
                src="/images/enterprise_facility.jpg" 
                alt="SkyMirr Lab" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/90 via-brand-deep/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="inline-block px-3 py-1 bg-brand text-white text-[10px] font-mono uppercase tracking-widest font-bold mb-3 rounded-sm">
                  Incheon, South Korea
                </div>
                <h3 className="text-2xl font-bold text-white">Songdo Bio-IT Complex</h3>
                <p className="text-white/80 text-sm mt-2">State-of-the-art 3D RF Anechoic Chamber & Advanced Measurement Suite.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. FAST FACTS GRID */}
      <section className="py-24 bg-paper-2 border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white p-8 rounded-sm border border-border shadow-sm flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300 hover:border-brand group">
              <div className="w-12 h-12 bg-brand/10 text-brand flex items-center justify-center mb-6 rounded-sm group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                <Globe2 className="w-6 h-6" />
              </div>
              <h4 className="text-3xl font-bold text-brand-deep font-mono mb-2">2021</h4>
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Year Founded</p>
            </div>

            <div className="bg-white p-8 rounded-sm border border-border shadow-sm flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300 hover:border-brand group">
              <div className="w-12 h-12 bg-brand/10 text-brand flex items-center justify-center mb-6 rounded-sm group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                <Activity className="w-6 h-6" />
              </div>
              <h4 className="text-3xl font-bold text-brand-deep font-mono mb-2">35+</h4>
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Patents Held</p>
            </div>

            <div className="bg-white p-8 rounded-sm border border-border shadow-sm flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300 hover:border-brand group">
              <div className="w-12 h-12 bg-brand/10 text-brand flex items-center justify-center mb-6 rounded-sm group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                <Target className="w-6 h-6" />
              </div>
              <h4 className="text-3xl font-bold text-brand-deep font-mono mb-2">CES '26</h4>
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Innovation Honoree</p>
            </div>

            <div className="bg-white p-8 rounded-sm border border-border shadow-sm flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300 hover:border-brand group">
              <div className="w-12 h-12 bg-brand/10 text-brand flex items-center justify-center mb-6 rounded-sm group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-3xl font-bold text-brand-deep font-mono mb-2">Tier-1</h4>
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Carrier Certified</p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. GLOBAL PRESENCE - LIGHT MATCH */}
      <section className="py-24 bg-paper border-b border-border text-foreground relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
           <div className="text-center max-w-3xl mx-auto mb-16">
             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-brand/10 mb-6">
                <Globe2 className="size-4 text-brand" />
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">Global Operations</span>
             </div>
             <h2 className="text-3xl sm:text-5xl font-bold mb-6 tracking-tight text-brand-deep">Supporting worldwide infrastructure.</h2>
             <p className="text-muted-foreground text-lg font-medium">Delivering innovation from our strategic telecommunications hubs.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             
             <div className="bg-white border border-border p-10 rounded-sm shadow-sm hover-gradient-border transition-all duration-300">
               <div className="w-12 h-12 bg-brand/10 rounded-sm flex items-center justify-center text-brand mb-6">
                 <MapPin className="w-6 h-6" />
               </div>
               <h3 className="text-2xl font-bold mb-2 text-brand-deep">United States HQ</h3>
               <p className="text-muted-foreground mb-6">Corporate Headquarters, Sales, and Executive Operations.</p>
               <address className="not-italic text-sm text-brand font-mono leading-loose font-bold">
                 SkyMirr Technologies, Inc.<br/>
                 930 S. Harbor City Blvd, Suite 403<br/>
                 Melbourne, FL 32901<br/>
                 USA
               </address>
             </div>

             <div className="bg-white border border-border p-10 rounded-sm shadow-sm hover-gradient-border transition-all duration-300">
               <div className="w-12 h-12 bg-brand/10 rounded-sm flex items-center justify-center text-brand mb-6">
                 <MapPin className="w-6 h-6" />
               </div>
               <h3 className="text-2xl font-bold mb-2 text-brand-deep">South Korea R&amp;D</h3>
               <p className="text-muted-foreground mb-6">Advanced Electromagnetic Research and Development Facility.</p>
               <address className="not-italic text-sm text-brand font-mono leading-loose font-bold">
                 Songdo Bio-IT Complex<br/>
                 Incheon<br/>
                 South Korea
               </address>
             </div>

           </div>
        </div>
      </section>

      {/* 5. LEADERSHIP & ADVISORY BOARD */}
      <section className="bg-white py-24 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Users className="size-4 text-brand" />
                <p className="font-mono text-[10px] uppercase text-brand font-bold tracking-widest">
                  Leadership &amp; Governance
                </p>
              </div>
              <h2 className="text-3xl font-bold text-brand-deep sm:text-4xl tracking-tight">
                The Minds Behind SkyMirr
              </h2>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-1.5 p-1 bg-paper rounded-sm border border-border">
              <button
                onClick={() => setTeamCategory('all')}
                className={`px-4 py-2 text-xs rounded-sm transition-all duration-200 cursor-pointer uppercase tracking-wider font-bold ${
                  teamCategory === 'all'
                    ? 'bg-brand text-white shadow-sm'
                    : 'text-muted-foreground hover:text-brand'
                }`}
              >
                All Leaders
              </button>
              <button
                onClick={() => setTeamCategory('executive')}
                className={`px-4 py-2 text-xs rounded-sm transition-all duration-200 cursor-pointer uppercase tracking-wider font-bold ${
                  teamCategory === 'executive'
                    ? 'bg-brand text-white shadow-sm'
                    : 'text-muted-foreground hover:text-brand'
                }`}
              >
                Executive
              </button>
              <button
                onClick={() => setTeamCategory('advisory')}
                className={`px-4 py-2 text-xs rounded-sm transition-all duration-200 cursor-pointer uppercase tracking-wider font-bold ${
                  teamCategory === 'advisory'
                    ? 'bg-brand text-white shadow-sm'
                    : 'text-muted-foreground hover:text-brand'
                }`}
              >
                Advisory
              </button>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredTeam.map((member) => (
              <div
                key={member.name}
                className="group rounded-sm bg-white p-6 border border-border shadow-sm hover-gradient-border flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  <div className="aspect-[4/5] w-full overflow-hidden rounded-sm bg-paper-2 mb-5 relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="absolute inset-0 h-full w-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-500"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = '/images/team/eric-jo.png';
                      }}
                    />
                  </div>
                  <span className="font-mono text-[9px] uppercase text-brand font-bold tracking-widest">
                    {member.category === 'executive' ? 'Executive Officer' : 'Board & Advisory'}
                  </span>
                  <h3 className="mt-1.5 text-xl font-bold text-brand-deep">{member.name}</h3>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mt-1 mb-4">{member.role}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground border-t border-border pt-4">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

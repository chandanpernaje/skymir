import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import type { RoutePath } from '../types';

interface FooterProps {
  onNavigate: (path: RoutePath) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: RoutePath) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <footer style={{background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 60%, #0F172A 100%)'}}>
      {/* Top colored accent bar */}
      <div className="h-[3px] w-full" style={{background: 'linear-gradient(90deg, #1D4ED8 0%, #3B82F6 40%, #0D9488 70%, #7C3AED 100%)'}} />

      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
        {/* Main footer grid */}
        <div className="grid gap-12 py-16 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* Brand Column */}
          <div>
            <a
              className="group flex items-center gap-3 mb-6"
              aria-label="SkyMirr home"
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
            >
              <img
                src="/images/skymirr-logo-footer.png"
                alt="SkyMirr"
                width={1828}
                height={448}
                className="w-[160px] h-auto object-contain brightness-0 invert"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/images/skymirr-logo.png';
                }}
              />
            </a>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              Technology to improve quality of life through high-performance wireless connectivity powered by patented MuLCAT® physics.
            </p>

            {/* Color-coded contact info */}
            <div className="mt-8 space-y-3">
              <a href="mailto:sales@skymirr.com" className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors group">
                <span className="w-8 h-8 flex items-center justify-center rounded-sm" style={{background: 'rgba(29,78,216,0.2)'}}>
                  <Mail className="size-4 text-blue-400" />
                </span>
                sales@skymirr.com
              </a>
              <a href="tel:+13213931039" className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors group">
                <span className="w-8 h-8 flex items-center justify-center rounded-sm" style={{background: 'rgba(13,148,136,0.2)'}}>
                  <Phone className="size-4 text-teal-400" />
                </span>
                321-393-1039
              </a>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <span className="w-8 h-8 flex items-center justify-center rounded-sm" style={{background: 'rgba(124,58,237,0.2)'}}>
                  <MapPin className="size-4 text-violet-400" />
                </span>
                Melbourne, Florida, USA
              </div>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest font-bold mb-5" style={{color: '#3B82F6'}}>Products</p>
            <nav className="grid gap-3">
              {[
                { label: 'All Products', path: '/products' },
                { label: 'MuLCAT® Technology', path: '/technology' },
                { label: 'TAMP Series', path: '/products' },
                { label: 'Sky5G Router', path: '/products' },
              ].map((item) => (
                <a
                  key={item.label}
                  className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group brand-underline"
                  href={item.path}
                  onClick={(e) => handleLinkClick(e, item.path as RoutePath)}
                >
                  <ArrowRight className="size-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all duration-200" />
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Services Column */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest font-bold mb-5" style={{color: '#0D9488'}}>Services</p>
            <nav className="grid gap-3">
              {[
                { label: 'Design Services', path: '/design-services' },
                { label: 'Engineering', path: '/engineering' },
                { label: 'Applications', path: '/applications' },
                { label: 'Latest News', path: '/latest' },
              ].map((item) => (
                <a
                  key={item.label}
                  className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group brand-underline"
                  href={item.path}
                  onClick={(e) => handleLinkClick(e, item.path as RoutePath)}
                >
                  <ArrowRight className="size-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all duration-200" />
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Company Column */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest font-bold mb-5" style={{color: '#7C3AED'}}>Company</p>
            <nav className="grid gap-3">
              {[
                { label: 'About SkyMirr', path: '/about' },
                { label: 'Our Team', path: '/about' },
                { label: 'Contact Us', path: '/contact' },
              ].map((item) => (
                <a
                  key={item.label}
                  className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group brand-underline"
                  href={item.path}
                  onClick={(e) => handleLinkClick(e, item.path as RoutePath)}
                >
                  <ArrowRight className="size-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all duration-200" />
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="/contact"
                onClick={(e) => handleLinkClick(e, '/contact')}
                className="btn-shimmer inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
                style={{background: '#1D4ED8'}}
              >
                Talk to us
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-3 px-5 py-5 font-mono text-[10px] uppercase sm:px-6 lg:px-10" style={{color: 'rgba(255,255,255,0.3)'}}>
          <span>© 2026 SkyMirr Technologies, Inc. All Rights Reserved.</span>
          <span className="text-blue-400/60">When it has to connect, it has to be SkyMirr.</span>
        </div>
      </div>
    </footer>
  );
};

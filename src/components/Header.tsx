import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Menu, Mail, X } from 'lucide-react';
import type { RoutePath } from '../types';

interface HeaderProps {
  currentPath: RoutePath;
  onNavigate: (path: RoutePath) => void;
}

const navItems: { label: string; href: RoutePath }[] = [
  { label: 'Products', href: '/products' },
  { label: 'Technology', href: '/technology' },
  { label: 'Design services', href: '/design-services' },
  { label: 'Engineering', href: '/engineering' },
  { label: 'Latest', href: '/latest' },
  { label: 'About', href: '/about' },
];

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileRef = useRef<HTMLDivElement>(null);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: RoutePath) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (mobileRef.current && !mobileRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.addEventListener('click', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [mobileMenuOpen]);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 bg-white border-b border-border shadow-sm`}>
      {/* Colored top accent bar */}
      <div className="h-[3px] w-full" style={{background: 'linear-gradient(90deg, #1D4ED8 0%, #3B82F6 40%, #0D9488 70%, #7C3AED 100%)'}} />
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 lg:px-12 py-3">
        {/* Brand Logo */}
        <a
          className="group flex items-center gap-3"
          aria-label="SkyMirr home"
          href="/"
          onClick={(e) => handleLinkClick(e, '/')}
        >
          <img
            src="/images/skymirr-logo.png"
            alt="SkyMirr"
            width={1828}
            height={448}
            className="w-[140px] h-auto object-contain sm:w-[180px] lg:w-[200px]"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive = currentPath === item.href;
            return (
              <a
                key={item.href}
                className={`relative px-4 py-2 text-sm font-semibold transition-all duration-200 uppercase tracking-wide rounded-sm brand-underline ${
                  isActive
                    ? 'text-brand'
                    : 'text-slate-700 hover:text-brand'
                }`}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
                {isActive && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-brand rounded-full" />}
              </a>
            );
          })}
        </nav>

        {/* Right Action / Mobile menu trigger */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <a
              className="btn-shimmer group inline-flex items-center gap-2 bg-brand px-6 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-brand-deep hover:-translate-y-0.5 hover:shadow-md rounded-sm uppercase tracking-wide"
              href="/contact"
              onClick={(e) => handleLinkClick(e, '/contact')}
            >
              Talk to us
              <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>

          {/* Mobile menu dropdown */}
          <div className="relative lg:hidden" ref={mobileRef}>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="grid size-11 cursor-pointer place-items-center rounded-sm bg-paper text-brand-deep transition-colors hover:bg-border"
              aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
            >
              {mobileMenuOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>

            {mobileMenuOpen && (
              <nav
                className="absolute right-0 top-14 w-64 rounded-sm border border-border p-3 shadow-xl animate-in fade-in zoom-in-95 duration-200 z-50 bg-white"
                aria-label="Mobile navigation"
              >
                {navItems.map((item) => {
                  const isActive = currentPath === item.href;
                  return (
                    <a
                      key={item.href}
                      className={`block rounded-sm px-4 py-3 text-sm font-semibold transition-colors ${
                        isActive ? 'bg-brand/10 text-brand font-bold' : 'text-slate-700 hover:bg-paper hover:text-brand'
                      }`}
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  );
                })}
                <a
                  className="mt-2 flex items-center justify-center gap-2 rounded-sm bg-brand px-4 py-3 text-sm font-bold uppercase tracking-wide text-white transition-all hover:bg-brand-deep"
                  href="/contact"
                  onClick={(e) => handleLinkClick(e, '/contact')}
                >
                  <Mail className="size-4" aria-hidden="true" />
                  Contact SkyMirr
                </a>
              </nav>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

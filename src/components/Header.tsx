import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Menu, Mail, X, Search } from 'lucide-react';
import type { RoutePath } from '../types';
import { productsData } from '../data/productsData';
import type { ProductSpec } from '../types';

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
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<ProductSpec[]>([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const mobileRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const mobileSearchInputRef = useRef<HTMLInputElement>(null);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: RoutePath) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(path);
  };

  // Search logic — searches name, category, subtitle, description
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim().length < 2) { setSearchResults([]); return; }
    const q = query.toLowerCase();
    setSearchResults(
      productsData.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      )
    );
  };

  const handleResultClick = () => {
    setSearchQuery('');
    setSearchResults([]);
    setSearchOpen(false);
    setMobileSearchOpen(false);
    setMobileMenuOpen(false);
    onNavigate('/products');
  };

  const clearSearch = () => { setSearchQuery(''); setSearchResults([]); };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile nav on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (mobileRef.current && !mobileRef.current.contains(e.target as Node)) setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [mobileMenuOpen]);

  // Close desktop search on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
        clearSearch();
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  // Auto-focus inputs
  useEffect(() => { if (searchOpen) setTimeout(() => searchInputRef.current?.focus(), 50); }, [searchOpen]);
  useEffect(() => { if (mobileSearchOpen) setTimeout(() => mobileSearchInputRef.current?.focus(), 50); }, [mobileSearchOpen]);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 bg-gray-100 border-b border-border shadow-sm`}>
      {/* Colored top accent bar */}
      <div className="h-[3px] w-full" style={{background: 'linear-gradient(90deg, #1D4ED8 0%, #3B82F6 40%, #0D9488 70%, #7C3AED 100%)'}} />

      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 lg:px-12 py-3 gap-3">

        {/* Brand Logo */}
        <a
          className="group flex items-center gap-3 flex-shrink-0"
          aria-label="SkyMirr home"
          href="/"
          onClick={(e) => handleLinkClick(e, '/')}
        >
          <img
            src="/images/skymirr-logo.png"
            alt="SkyMirr"
            width={1828}
            height={448}
            className="w-[120px] h-auto object-contain sm:w-[160px] lg:w-[180px]"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-0.5 lg:flex flex-1 justify-center" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive = currentPath === item.href;
            return (
              <a
                key={item.href}
                className={`relative px-3 py-2 text-sm font-semibold transition-all duration-200 uppercase tracking-wide rounded-sm brand-underline ${
                  isActive ? 'text-brand' : 'text-slate-700 hover:text-brand'
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

        {/* Right side actions */}
        <div className="flex items-center gap-2 flex-shrink-0">

          {/* ── Desktop Search ── */}
          <div ref={searchRef} className="hidden lg:block relative">
            {!searchOpen ? (
              <button
                id="desktop-search-toggle"
                aria-label="Search products"
                onClick={() => setSearchOpen(true)}
                className="grid size-10 cursor-pointer place-items-center rounded-sm bg-white border border-gray-200 text-slate-500 hover:text-brand hover:border-brand transition-all duration-200 shadow-sm"
              >
                <Search className="size-4" />
              </button>
            ) : (
              <div className="flex items-center gap-2 bg-white border border-brand rounded-sm px-3 py-2 shadow-md w-64">
                <Search className="size-4 text-brand flex-shrink-0" />
                <input
                  ref={searchInputRef}
                  id="desktop-product-search"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Search products…"
                  className="flex-1 bg-transparent text-sm text-slate-800 placeholder-slate-400 outline-none"
                  aria-label="Search products"
                />
                <button onClick={() => { setSearchOpen(false); clearSearch(); }} aria-label="Close search" className="text-slate-400 hover:text-slate-600 transition-colors">
                  <X className="size-4" />
                </button>
              </div>
            )}

            {/* Desktop results dropdown */}
            {searchOpen && searchQuery.length >= 2 && (
              <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-sm border border-gray-200 shadow-2xl z-50 overflow-hidden">
                {searchResults.length > 0 ? (
                  <>
                    <p className="px-4 py-2 text-[11px] font-semibold text-slate-400 uppercase tracking-widest border-b border-gray-100">
                      {searchResults.length} product{searchResults.length !== 1 ? 's' : ''} found
                    </p>
                    <ul>
                      {searchResults.map((product) => (
                        <li key={product.id}>
                          <button
                            onClick={handleResultClick}
                            className="w-full flex items-start gap-3 px-4 py-3 hover:bg-blue-50 transition-colors text-left group border-b border-gray-50 last:border-0"
                          >
                            <img src={product.image} alt={product.name} className="w-10 h-10 object-contain rounded bg-gray-50 border border-gray-100 flex-shrink-0 mt-0.5" />
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-bold text-slate-800 group-hover:text-brand truncate">{product.name}</p>
                              <p className="text-xs text-slate-500 truncate">{product.categoryLabel}</p>
                            </div>
                            <ChevronRight className="size-4 text-slate-300 group-hover:text-brand flex-shrink-0 mt-1" />
                          </button>
                        </li>
                      ))}
                    </ul>
                    <div className="border-t border-gray-100 px-4 py-2.5">
                      <button onClick={handleResultClick} className="text-xs font-semibold text-brand hover:underline">View all products →</button>
                    </div>
                  </>
                ) : (
                  <div className="px-4 py-6 text-center">
                    <Search className="size-8 text-slate-200 mx-auto mb-2" />
                    <p className="text-sm text-slate-500">No products found for "<span className="font-semibold text-slate-700">{searchQuery}</span>"</p>
                    <button onClick={handleResultClick} className="mt-2 text-xs text-brand hover:underline">Browse all products →</button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden sm:block">
            <a
              className="btn-shimmer group inline-flex items-center gap-2 bg-brand px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-brand-deep hover:-translate-y-0.5 hover:shadow-md rounded-sm uppercase tracking-wide"
              href="/contact"
              onClick={(e) => handleLinkClick(e, '/contact')}
            >
              Talk to us
              <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>

          {/* ── Mobile Search Toggle ── */}
          <button
            id="mobile-search-toggle"
            aria-label={mobileSearchOpen ? 'Close search' : 'Search products'}
            onClick={() => { setMobileSearchOpen(!mobileSearchOpen); setMobileMenuOpen(false); }}
            className="lg:hidden grid size-10 cursor-pointer place-items-center rounded-sm bg-white border border-gray-200 text-slate-500 hover:text-brand hover:border-brand transition-all"
          >
            {mobileSearchOpen ? <X className="size-5" /> : <Search className="size-5" />}
          </button>

          {/* Mobile hamburger menu */}
          <div className="relative lg:hidden" ref={mobileRef}>
            <button
              type="button"
              onClick={() => { setMobileMenuOpen(!mobileMenuOpen); setMobileSearchOpen(false); }}
              className="grid size-10 cursor-pointer place-items-center rounded-sm bg-paper text-brand-deep transition-colors hover:bg-border"
              aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>

            {mobileMenuOpen && (
              <nav
                className="absolute right-0 top-14 w-64 rounded-sm border border-border p-3 shadow-xl animate-in fade-in zoom-in-95 duration-200 z-50 bg-gray-100"
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

      {/* ── Mobile Search Panel (slides in below header) ── */}
      {mobileSearchOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-gray-100 px-4 py-3 animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center gap-2 bg-white border border-brand rounded-sm px-3 py-2.5 shadow-sm">
            <Search className="size-4 text-brand flex-shrink-0" />
            <input
              ref={mobileSearchInputRef}
              id="mobile-product-search"
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search products…"
              className="flex-1 bg-transparent text-sm text-slate-800 placeholder-slate-400 outline-none"
              aria-label="Search products"
            />
            {searchQuery && (
              <button onClick={clearSearch} aria-label="Clear" className="text-slate-400 hover:text-slate-600">
                <X className="size-4" />
              </button>
            )}
          </div>

          {/* Mobile search results */}
          {searchQuery.length >= 2 && (
            <div className="mt-2 bg-white rounded-sm border border-gray-200 shadow-lg overflow-hidden">
              {searchResults.length > 0 ? (
                <>
                  <p className="px-4 py-2 text-[11px] font-semibold text-slate-400 uppercase tracking-widest border-b border-gray-100">
                    {searchResults.length} product{searchResults.length !== 1 ? 's' : ''} found
                  </p>
                  <ul>
                    {searchResults.map((product) => (
                      <li key={product.id}>
                        <button
                          onClick={handleResultClick}
                          className="w-full flex items-start gap-3 px-4 py-3 hover:bg-blue-50 transition-colors text-left group border-b border-gray-50 last:border-0"
                        >
                          <img src={product.image} alt={product.name} className="w-10 h-10 object-contain rounded bg-gray-50 border border-gray-100 flex-shrink-0 mt-0.5" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold text-slate-800 group-hover:text-brand truncate">{product.name}</p>
                            <p className="text-xs text-slate-500 truncate">{product.categoryLabel}</p>
                          </div>
                          <ChevronRight className="size-4 text-slate-300 group-hover:text-brand flex-shrink-0 mt-1" />
                        </button>
                      </li>
                    ))}
                  </ul>
                  <div className="px-4 py-2 border-t border-gray-100">
                    <button onClick={handleResultClick} className="text-xs font-semibold text-brand hover:underline">View all products →</button>
                  </div>
                </>
              ) : (
                <div className="px-4 py-5 text-center">
                  <Search className="size-7 text-slate-200 mx-auto mb-2" />
                  <p className="text-sm text-slate-500">No results for "<span className="font-semibold text-slate-700">{searchQuery}</span>"</p>
                  <button onClick={handleResultClick} className="mt-1 text-xs text-brand hover:underline">Browse all products →</button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </header>
  );
};

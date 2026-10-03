import React from 'react';
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
    <footer className="border-t border-border bg-paper">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-12 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr] lg:px-10">
        <div>
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
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Technology to improve quality of life through high-performance wireless connectivity.
          </p>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase text-brand">Explore</p>
          <nav className="mt-4 grid gap-3">
            <a
              className="text-sm text-muted-foreground hover:text-brand"
              href="/products"
              onClick={(e) => handleLinkClick(e, '/products')}
            >
              Products
            </a>
            <a
              className="text-sm text-muted-foreground hover:text-brand"
              href="/technology"
              onClick={(e) => handleLinkClick(e, '/technology')}
            >
              MuLCAT® Technology
            </a>
            <a
              className="text-sm text-muted-foreground hover:text-brand"
              href="/design-services"
              onClick={(e) => handleLinkClick(e, '/design-services')}
            >
              Design services
            </a>
            <a
              className="text-sm text-muted-foreground hover:text-brand"
              href="/engineering"
              onClick={(e) => handleLinkClick(e, '/engineering')}
            >
              Engineering
            </a>
            <a
              className="text-sm text-muted-foreground hover:text-brand"
              href="/about"
              onClick={(e) => handleLinkClick(e, '/about')}
            >
              About &amp; Team
            </a>
          </nav>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase text-brand">Connect</p>
          <div className="mt-4 grid gap-3 text-sm text-muted-foreground">
            <a href="mailto:sales@skymirr.com" className="hover:text-brand">
              sales@skymirr.com
            </a>
            <a href="tel:+13213931039" className="hover:text-brand">
              321-393-1039
            </a>
            <span>Melbourne, Florida, USA</span>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-3 px-5 py-5 font-mono text-[10px] uppercase text-muted-foreground sm:px-6 lg:px-10">
          <span>© 2026 SkyMirr, Inc. All Rights Reserved.</span>
          <span>When it has to connect, it has to be SkyMirr.</span>
        </div>
      </div>
    </footer>
  );
};

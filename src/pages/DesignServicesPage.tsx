import React from 'react';
import { ChevronRight, Check } from 'lucide-react';
import type { RoutePath } from '../types';

interface DesignServicesPageProps {
  onNavigate: (path: RoutePath) => void;
}

const serviceCapabilities = [
  'Custom antenna architecture',
  'Antenna tuning and matching',
  'System-level RF consulting',
  'Prototype evaluation',
  'Design-for-manufacturing support',
  'Performance troubleshooting',
];

export const DesignServicesPage: React.FC<DesignServicesPageProps> = ({ onNavigate }) => {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: RoutePath) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <main>
      <section className="border-b border-border bg-sky-100">
        <div className="mx-auto max-w-[1400px] px-5 pt-28 pb-16 sm:px-6 sm:pt-32 sm:pb-20 lg:px-10 lg:pt-36 lg:pb-24">
          <p className="font-mono text-[11px] uppercase text-brand font-bold tracking-widest">Design services</p>
          <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[1.04] text-brand-deep sm:text-5xl lg:text-6xl">
            RF expertise, built into <span className="text-brand">your product.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            SkyMirr helps product teams move from wireless requirements to a production-ready antenna system with focused, practical engineering support.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 py-16 sm:px-6 lg:grid-cols-2 lg:px-10 lg:py-24">
          <img
            src="/images/skymirr-engineering.jpg"
            alt="SkyMirr RF engineering laboratory"
            width={1024}
            height={720}
            className="aspect-[4/3] w-full rounded-sm object-cover shadow-sm"
          />

          <div>
            <p className="font-mono text-[10px] uppercase text-brand font-bold tracking-widest">From concept to production</p>
            <h2 className="mt-4 text-3xl font-semibold text-brand-deep">
              Rapid, system-level collaboration.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Wireless performance depends on the complete product environment. Our design process considers antenna placement, enclosure materials, surrounding electronics, target bands, and manufacturing constraints together.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {serviceCapabilities.map((capability) => (
                <div
                  key={capability}
                  className="flex items-center gap-3 rounded-sm bg-surface px-4 py-3 text-sm text-brand-deep ring-1 ring-border shadow-sm hover-gradient-border cursor-default"
                >
                  <Check className="size-4 shrink-0 text-brand" aria-hidden="true" />
                  {capability}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                className="inline-flex min-h-11 items-center gap-2 rounded-md bg-brand py-2 pl-2 pr-4 text-sm font-bold text-white shadow-sm ring-1 ring-brand/30 transition-colors hover:bg-brand-deep"
                href="/contact"
                onClick={(e) => handleNav(e, '/contact')}
              >
                <span className="grid size-7 place-items-center bg-white/20 rounded-sm">
                  <ChevronRight className="size-4" aria-hidden="true" />
                </span>
                Discuss your design
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

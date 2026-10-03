import React from 'react';
import { ChevronRight } from 'lucide-react';
import type { RoutePath } from '../types';

interface EngineeringPageProps {
  onNavigate: (path: RoutePath) => void;
}

export const EngineeringPage: React.FC<EngineeringPageProps> = ({ onNavigate }) => {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: RoutePath) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <main>
      <section className="border-b border-border bg-hero-wash">
        <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
          <p className="font-mono text-[11px] uppercase text-brand">Engineering &amp; operation</p>
          <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[1.04] text-brand-deep sm:text-5xl lg:text-6xl">
            A direct path from RF research to production.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            SkyMirr combines antenna expertise, advanced testing, and scalable manufacturing to support reliable wireless products.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-6 lg:px-10 lg:py-24">
          <img
            src="/images/skymirr-engineering.jpg"
            alt="RF engineer working in an anechoic test chamber"
            width={1024}
            height={720}
            className="aspect-[16/7] w-full rounded-[18px] object-cover shadow-lg"
          />

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="border-l border-brand-bright/40 pl-6">
              <p className="font-mono text-[10px] uppercase text-brand">Incheon, Korea</p>
              <h2 className="mt-3 text-2xl font-semibold text-brand-deep">Research &amp; development</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                A focused RF engineering operation for antenna architecture, tuning, validation, and advanced wireless development.
              </p>
            </div>

            <div className="border-l border-brand-bright/40 pl-6">
              <p className="font-mono text-[10px] uppercase text-brand">Vietnam</p>
              <h2 className="mt-3 text-2xl font-semibold text-brand-deep">Mass production</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Scalable manufacturing support built to carry validated designs into reliable volume production.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <a
              className="inline-flex min-h-11 items-center gap-2 rounded-[10px] bg-brand py-2 pl-2 pr-4 text-sm font-semibold text-brand-foreground shadow-sm ring-1 ring-brand/30 transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              href="/contact"
              onClick={(e) => handleNav(e, '/contact')}
            >
              <span className="grid size-7 place-items-center rounded-[7px] bg-brand-foreground/15">
                <ChevronRight className="size-4" aria-hidden="true" />
              </span>
              Work with SkyMirr
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

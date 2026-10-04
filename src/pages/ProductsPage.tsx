import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, FileText, Search, SlidersHorizontal } from 'lucide-react';
import type { RoutePath, ProductSpec } from '../types';
import { productsData } from '../data/productsData';
import { ProductSpecsModal } from '../components/ProductSpecsModal';

interface ProductsPageProps {
  onNavigate: (path: RoutePath) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSpecProduct, setActiveSpecProduct] = useState<ProductSpec | null>(null);

  const categories = [
    { id: 'all', label: 'All Products', count: productsData.length },
    {
      id: 'antennas',
      label: 'Broadband Antennas',
      count: productsData.filter((p) => p.category === 'antennas').length,
    },
    {
      id: 'routers',
      label: '5G Routers & Gateways',
      count: productsData.filter((p) => p.category === 'routers').length,
    },
    {
      id: 'embedded',
      label: 'Embedded & Medical NFC',
      count: productsData.filter((p) => p.category === 'embedded').length,
    },
    {
      id: 'trackers',
      label: 'Custom Platforms',
      count: productsData.filter((p) => p.category === 'trackers').length,
    },
  ];

  const filteredProducts = productsData.filter((product) => {
    const matchesCategory =
      selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.frequencyRange.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main>
      {/* Product Hero */}
      <section className="border-b border-border bg-sky-100">
        <div className="mx-auto max-w-[1400px] px-5 pt-28 pb-16 sm:px-6 sm:pt-32 sm:pb-20 lg:px-10 lg:pt-36 lg:pb-24">
          <p className="font-mono text-[11px] uppercase text-brand">Product portfolio</p>
          <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[1.04] text-brand-deep sm:text-5xl lg:text-6xl">
            Wireless hardware engineered around the signal.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Explore SkyMirr’s antenna modules, connected router platforms, and embedded wireless technologies tested in world-class anechoic facilities.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="mx-auto max-w-[1400px] px-5 pt-10 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-b border-border pb-6">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-surface rounded-md ring-1 ring-border overflow-x-auto whitespace-nowrap hide-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-medium rounded-sm transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-brand text-brand-foreground shadow-sm font-semibold'
                    : 'text-muted-foreground hover:text-brand'
                }`}
              >
                {cat.label} ({cat.count})
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search band, model, or specs..."
              className="w-full rounded-md bg-surface pl-9 pr-4 py-2 text-xs ring-1 ring-border focus:ring-1 focus:ring-brand focus:outline-none placeholder:text-muted-foreground"
            />
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="mx-auto max-w-[1400px] px-4 py-8 sm:px-6 sm:py-12 lg:px-10">
        <motion.div layout className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <motion.article
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              key={product.id}
              className="group flex flex-col justify-between rounded-md bg-surface p-3 sm:p-6 shadow-sm ring-1 ring-border hover-gradient-border"
            >
              <div className="relative z-10">
                <div className="relative overflow-hidden rounded-sm bg-paper-2 aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-contain p-2 sm:p-4"
                  />
                  <span className="hidden sm:block absolute top-3 right-3 font-mono text-[9px] uppercase bg-paper/90 px-2 py-0.5 text-muted-foreground ring-1 ring-border shadow-xs">
                    {product.connector.split(',')[0]}
                  </span>
                </div>

                <div className="mt-3 sm:mt-5 flex items-center justify-between">
                  <p className="font-mono text-[8px] sm:text-[10px] uppercase text-brand font-bold tracking-wider line-clamp-1">
                    {product.categoryLabel}
                  </p>
                  <span className="hidden sm:block font-mono text-[10px] text-signal font-medium">
                    Gain: {product.peakGain.split('/')[0].trim()}
                  </span>
                </div>

                <h2 className="mt-1 sm:mt-2 text-sm sm:text-2xl font-bold text-brand-deep leading-tight line-clamp-1 sm:line-clamp-none">{product.name}</h2>
                <p className="text-[9px] sm:text-xs font-medium text-brand mt-0.5 line-clamp-1 sm:line-clamp-none">{product.subtitle}</p>
                <p className="hidden sm:block mt-3 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>

                {/* Specs Pill List (Hidden on Mobile) */}
                <div className="hidden sm:block mt-4 rounded-[10px] bg-paper p-3 text-[11px] font-mono text-muted-foreground space-y-1">
                  <div className="truncate">
                    <span className="text-brand-deep font-semibold">Bands:</span> {product.frequencyRange}
                  </div>
                  <div className="truncate">
                    <span className="text-brand-deep font-semibold">Size:</span> {product.dimensions}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-3 sm:mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 border-t border-border pt-2 sm:pt-4">
                <button
                  type="button"
                  onClick={() => setActiveSpecProduct(product)}
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:underline cursor-pointer"
                >
                  <SlidersHorizontal className="size-3.5" />
                  View Full Specifications
                </button>

                <button
                  type="button"
                  onClick={() => setActiveSpecProduct(product)}
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-[6px] sm:rounded-[8px] bg-brand/10 px-2 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-medium text-brand hover:bg-brand hover:text-brand-foreground transition-colors cursor-pointer"
                >
                  <FileText className="size-3 sm:size-3.5" />
                  <span className="sm:hidden">Specs</span>
                  <span className="hidden sm:inline">Datasheet</span>
                </button>
              </div>
            </motion.article>
          ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-base font-semibold text-brand-deep">No matching products found</p>
            <p className="text-xs text-muted-foreground mt-1">
              Try adjusting your search criteria or view all products.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 text-xs font-semibold text-brand underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        )}
      </section>

      {/* Custom RF Configuration Banner */}
      <section className="border-t border-border bg-sky-100">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-6 px-5 py-14 sm:px-6 md:flex-row md:items-center lg:px-10">
          <div>
            <h2 className="text-2xl font-semibold text-brand-deep">Need a custom configuration?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Our RF engineering team can help tune and simulate the ideal antenna system for your enclosure.
            </p>
          </div>
          <a
            className="inline-flex min-h-11 items-center gap-2 rounded-md bg-brand py-2 pl-2 pr-4 text-sm font-bold text-white shadow-sm ring-1 ring-brand/30 transition-colors hover:bg-brand-deep"
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/contact');
            }}
          >
            <span className="grid size-7 place-items-center bg-white/20 rounded-sm">
              <ChevronRight className="size-4" aria-hidden="true" />
            </span>
            Talk to engineering
          </a>
        </div>
      </section>

      {/* Specifications Modal */}
      <ProductSpecsModal
        product={activeSpecProduct}
        onClose={() => setActiveSpecProduct(null)}
        onNavigate={onNavigate}
      />
    </main>
  );
};

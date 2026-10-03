import React, { useEffect } from 'react';
import { X, Check, Download, Send, ShieldCheck, Cpu } from 'lucide-react';
import type { ProductSpec, RoutePath } from '../types';

interface ProductSpecsModalProps {
  product: ProductSpec | null;
  onClose: () => void;
  onNavigate: (path: RoutePath) => void;
}

export const ProductSpecsModal: React.FC<ProductSpecsModalProps> = ({
  product,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const handleSampleRequest = () => {
    onClose();
    onNavigate('/contact');
  };

  const handleDownloadSheet = () => {
    // Generate clean technical specification text file download
    const content = `SKYMIRR ENGINEERING SPECIFICATION SHEET
=============================================
Product: ${product.name}
Subtitle: ${product.subtitle}
Category: ${product.categoryLabel}

ELECTRICAL SPECIFICATIONS:
- Frequency Range: ${product.frequencyRange}
- Peak Gain: ${product.peakGain}
- Polarization: ${product.polarization}
- Impedance: ${product.impedance}
- VSWR: ${product.vswr}
- Radiation Efficiency: ${product.efficiency}

MECHANICAL & ENVIRONMENTAL:
- Dimensions: ${product.dimensions}
- Connector / Cable: ${product.connector}
- Operating Temperature: ${product.operatingTemp}

CERTIFICATIONS & STANDARDS:
${product.certifications.map((c) => `- ${c}`).join('\n')}

KEY APPLICATIONS:
${product.keyApplications.map((a) => `- ${a}`).join('\n')}

SkyMirr, Inc. | Melbourne, FL, USA | Incheon, Korea
Official Web: https://skymirr.com
Sales & RF Inquiries: sales@skymirr.com | 321-393-1039
=============================================`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `SkyMirr_${product.id}_Specification_Sheet.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[20px] bg-paper p-6 sm:p-8 shadow-2xl ring-1 ring-border"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 grid size-9 place-items-center rounded-full bg-surface-glass text-muted-foreground ring-1 ring-border transition-colors hover:bg-surface hover:text-brand"
          aria-label="Close specification dialog"
        >
          <X className="size-4" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 border-b border-border pb-6">
          <div className="size-20 shrink-0 rounded-[12px] bg-surface-glass p-2 ring-1 ring-border grid place-items-center overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase text-brand tracking-wider">
              {product.categoryLabel}
            </span>
            <h2 className="text-2xl font-bold text-brand-deep sm:text-3xl">{product.name}</h2>
            <p className="text-xs text-muted-foreground mt-0.5">{product.subtitle}</p>
          </div>
        </div>

        {/* Description */}
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{product.description}</p>

        {/* Technical Parameters Table */}
        <div className="mt-6 rounded-[14px] bg-surface-glass p-4 ring-1 ring-border">
          <div className="flex items-center gap-2 mb-3">
            <Cpu className="size-4 text-brand-bright" />
            <h3 className="font-mono text-xs uppercase tracking-wide text-brand-deep font-semibold">
              RF &amp; Physical Specifications
            </h3>
          </div>

          <div className="divide-y divide-border text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-3 py-2.5">
              <span className="font-medium text-brand-deep">Frequency Range</span>
              <span className="sm:col-span-2 font-mono text-muted-foreground">
                {product.frequencyRange}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 py-2.5">
              <span className="font-medium text-brand-deep">Peak Gain</span>
              <span className="sm:col-span-2 font-mono text-muted-foreground">{product.peakGain}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 py-2.5">
              <span className="font-medium text-brand-deep">Polarization</span>
              <span className="sm:col-span-2 text-muted-foreground">{product.polarization}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 py-2.5">
              <span className="font-medium text-brand-deep">Impedance &amp; VSWR</span>
              <span className="sm:col-span-2 font-mono text-muted-foreground">
                {product.impedance} | {product.vswr}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 py-2.5">
              <span className="font-medium text-brand-deep">Efficiency</span>
              <span className="sm:col-span-2 text-muted-foreground">{product.efficiency}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 py-2.5">
              <span className="font-medium text-brand-deep">Dimensions</span>
              <span className="sm:col-span-2 font-mono text-muted-foreground">{product.dimensions}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 py-2.5">
              <span className="font-medium text-brand-deep">Connector / Termination</span>
              <span className="sm:col-span-2 text-muted-foreground">{product.connector}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 py-2.5">
              <span className="font-medium text-brand-deep">Operating Temp &amp; Ingress</span>
              <span className="sm:col-span-2 text-muted-foreground">{product.operatingTemp}</span>
            </div>
          </div>
        </div>

        {/* Certifications & Applications */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-[12px] bg-surface-glass p-4 ring-1 ring-border">
            <div className="flex items-center gap-2 mb-2.5">
              <ShieldCheck className="size-4 text-brand-bright" />
              <h4 className="font-mono text-[10px] uppercase text-brand font-semibold">
                Certifications &amp; Compliance
              </h4>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {product.certifications.map((c) => (
                <span
                  key={c}
                  className="rounded-[6px] bg-paper px-2.5 py-1 font-mono text-[11px] text-brand-deep ring-1 ring-border"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[12px] bg-surface-glass p-4 ring-1 ring-border">
            <h4 className="font-mono text-[10px] uppercase text-brand font-semibold mb-2.5">
              Recommended Applications
            </h4>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              {product.keyApplications.map((app) => (
                <li key={app} className="flex items-center gap-2">
                  <Check className="size-3.5 text-signal shrink-0" />
                  <span>{app}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Controls */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
          <button
            onClick={handleDownloadSheet}
            className="inline-flex items-center gap-2 rounded-[10px] bg-surface-glass px-4 py-2.5 text-xs font-semibold text-brand ring-1 ring-border transition-colors hover:bg-surface"
          >
            <Download className="size-3.5" />
            Download Spec Summary (.txt)
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="rounded-[10px] px-4 py-2.5 text-xs font-medium text-muted-foreground hover:text-brand"
            >
              Close
            </button>
            <button
              onClick={handleSampleRequest}
              className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-4 py-2.5 text-xs font-semibold text-brand-foreground shadow-sm ring-1 ring-brand/30 transition-transform duration-200 hover:-translate-y-0.5"
            >
              <Send className="size-3.5" />
              Request Engineering Sample
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

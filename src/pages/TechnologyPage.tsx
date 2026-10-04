import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Zap, Shield, Activity, Layers, Radio, CheckCircle2 } from 'lucide-react';
import type { RoutePath } from '../types';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 70, damping: 20 } }
};

const slideFromLeft = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 60, damping: 20 } }
};

const slideFromRight = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 60, damping: 20 } }
};

interface TechnologyPageProps {
  onNavigate: (path: RoutePath) => void;
}

export const TechnologyPage: React.FC<TechnologyPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'mulcat' | 'carrier' | 'mesh'>('mulcat');

  return (
    <main>
      {/* Hero */}
      <section className="border-b border-border bg-sky-100 overflow-hidden">
        <motion.div variants={staggerContainer} initial="hidden" animate="show" className="mx-auto max-w-[1400px] px-5 pt-28 pb-16 sm:px-6 sm:pt-32 sm:pb-20 lg:px-10 lg:pt-36 lg:pb-24">
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 rounded-sm bg-surface px-3 py-1.5 font-mono text-[10px] uppercase text-brand shadow-sm ring-1 ring-border">
            <span className="size-1.5 bg-signal" />
            Proprietary RF Physics
          </motion.span>
          <motion.h1 variants={fadeUp} className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[1.04] text-brand-deep sm:text-5xl lg:text-6xl">
            MuLCAT®: Multi-Layer Coupling Controlled Antenna Technology.
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Developed after decades of antenna and electromagnetics innovation, MuLCAT® solves the fundamental physical barrier of mutual coupling in multi-band 5G and IoT hardware.
          </motion.p>
        </motion.div>
      </section>

      {/* Interactive Technology Tabs */}
      <section className="mx-auto max-w-[1400px] px-5 py-12 sm:px-6 lg:px-10">
        <div className="flex flex-wrap gap-2 border-b border-border pb-4">
          <button
            onClick={() => setActiveTab('mulcat')}
            className={`rounded-sm px-5 py-2.5 text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'mulcat'
                ? 'bg-brand text-white shadow-sm'
                : 'bg-surface text-muted-foreground hover:text-brand ring-1 ring-border'
            }`}
          >
            What is MuLCAT®?
          </button>
          <button
            onClick={() => setActiveTab('carrier')}
            className={`rounded-sm px-5 py-2.5 text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'carrier'
                ? 'bg-brand text-white shadow-sm'
                : 'bg-surface text-muted-foreground hover:text-brand ring-1 ring-border'
            }`}
          >
            Carrier-Certified Performance
          </button>
          <button
            onClick={() => setActiveTab('mesh')}
            className={`rounded-sm px-5 py-2.5 text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'mesh'
                ? 'bg-brand text-white shadow-sm'
                : 'bg-surface text-muted-foreground hover:text-brand ring-1 ring-border'
            }`}
          >
            Mesh &amp; Failover Architecture
          </button>
        </div>

        {/* Tab 1: MuLCAT */}
        {activeTab === 'mulcat' && (
          <div className="mt-10 grid gap-10 lg:grid-cols-2 items-center overflow-hidden">
            <motion.div variants={slideFromLeft} initial="hidden" animate="show">
              <p className="font-mono text-[10px] uppercase text-accent font-bold tracking-widest">The Electromagnetics Barrier</p>
              <h2 className="mt-3 text-3xl font-semibold text-brand-deep">
                Why Traditional Multi-Antenna Arrays Fail
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                As modern devices squeeze more radios (5G Sub-6, Wi-Fi 7, GNSS, Bluetooth) into compact metallic enclosures, adjacent radiating elements destructively interfere. This mutual coupling causes:
              </p>

              <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-accent" />
                  Severe RF power dissipation and battery drain
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-accent" />
                  Signal dropouts at cell tower fringes
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-accent" />
                  Degraded MIMO spatial diversity and lower data speeds
                </li>
              </ul>

              <h3 className="mt-8 text-xl font-semibold text-brand-deep">The SkyMirr Solution</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                MuLCAT® employs a proprietary multi-layer electromagnetic decoupled substrate. It cancels destructive near-field cross-coupling without requiring bulky physical isolation barriers.
              </p>
            </motion.div>

            {/* Performance Benchmark Box */}
            <motion.div variants={slideFromRight} initial="hidden" animate="show" className="rounded-md bg-surface p-6 sm:p-8 ring-1 ring-border shadow-sm hover-gradient-border">
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <span className="font-mono text-[11px] uppercase text-brand font-semibold">
                  Lab Measured Benchmark
                </span>
                <span className="rounded-full bg-signal/20 px-2.5 py-0.5 font-mono text-[10px] text-brand-deep">
                  Anechoic Chamber Validated
                </span>
              </div>

              <div className="mt-6 space-y-5">
                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="font-medium text-brand-deep">Radiation Efficiency (Sub-6)</span>
                    <span className="font-mono font-bold text-accent">&gt; 76%</span>
                  </div>
                  <div className="h-2 w-full rounded-sm bg-paper overflow-hidden ring-1 ring-border">
                    <div className="h-full bg-brand" style={{ width: '76%' }} />
                  </div>
                  <span className="text-[10px] text-muted-foreground">Industry standard: 45–52%</span>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="font-medium text-brand-deep">Port-to-Port Isolation</span>
                    <span className="font-mono font-bold text-brand">&gt; 22 dB</span>
                  </div>
                  <div className="h-2 w-full rounded-sm bg-paper overflow-hidden ring-1 ring-border">
                    <div className="h-full bg-brand" style={{ width: '88%' }} />
                  </div>
                  <span className="text-[10px] text-muted-foreground">Industry standard: 10–12 dB</span>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="font-medium text-brand-deep">Weak-Signal Fringe Throughput</span>
                    <span className="font-mono font-bold text-brand">+140% Gain</span>
                  </div>
                  <div className="h-2 w-full rounded-sm bg-paper overflow-hidden ring-1 ring-border">
                    <div className="h-full bg-brand" style={{ width: '92%' }} />
                  </div>
                  <span className="text-[10px] text-muted-foreground">Maintains video stream &amp; POS transactions</span>
                </div>
              </div>

              <div className="mt-8 rounded-sm bg-paper p-4 text-xs text-muted-foreground ring-1 ring-border">
                <div className="flex items-center gap-2 text-brand-deep font-semibold mb-1">
                  <Zap className="size-4 text-brand" />
                  Real-World Advantage
                </div>
                Devices powered by MuLCAT® stay reliably connected in remote warehouses, moving trains, and basements where competitor devices lose carrier handshake.
              </div>
            </motion.div>
          </div>
        )}

        {/* Tab 2: Carrier Certifications */}
        {activeTab === 'carrier' && (
          <div className="mt-10 grid gap-10 lg:grid-cols-2 items-center overflow-hidden">
            <motion.div variants={slideFromLeft} initial="hidden" animate="show">
              <p className="font-mono text-[10px] uppercase text-accent font-bold tracking-widest">Tier-1 Cellular Compliance</p>
              <h2 className="mt-3 text-3xl font-semibold text-brand-deep">
                Official AT&amp;T Network Certification
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                SkyMirr’s Sky5G Router (TCPA-117) has attained official AT&amp;T Network Certification, validating compliance with the carrier’s strict radio performance, safety, and security benchmarks.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[10px] bg-surface-glass p-3 ring-1 ring-border hover-gradient-border">
                  <CheckCircle2 className="size-4 text-accent mb-1" />
                  <div className="font-semibold text-xs text-brand-deep">Plug-and-Play Carrier SIMs</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">Instant provisioning on AT&amp;T, Verizon, T-Mobile</div>
                </div>
                <div className="rounded-[10px] bg-surface-glass p-3 ring-1 ring-border hover-gradient-border">
                  <Shield className="size-4 text-accent mb-1" />
                  <div className="font-semibold text-xs text-brand-deep">PTCRB &amp; FCC Approved</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">Complies with North American and European regulatory bodies</div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={slideFromRight} initial="hidden" animate="show" className="rounded-md bg-surface p-6 sm:p-8 ring-1 ring-border hover-gradient-border shadow-sm">
              <h3 className="text-lg font-semibold text-brand-deep">Major Carrier Compatibility</h3>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="rounded-sm bg-paper p-4 text-center ring-1 ring-border transition-colors hover:bg-brand/5">
                  <div className="font-bold text-sm text-brand-deep">AT&amp;T</div>
                  <div className="text-[10px] font-mono text-signal mt-1">CERTIFIED</div>
                </div>
                <div className="rounded-sm bg-paper p-4 text-center ring-1 ring-border transition-colors hover:bg-brand/5">
                  <div className="font-bold text-sm text-brand-deep">Verizon</div>
                  <div className="text-[10px] font-mono text-muted-foreground mt-1">COMPATIBLE</div>
                </div>
                <div className="rounded-sm bg-paper p-4 text-center ring-1 ring-border transition-colors hover:bg-brand/5">
                  <div className="font-bold text-sm text-brand-deep">T-Mobile</div>
                  <div className="text-[10px] font-mono text-muted-foreground mt-1">COMPATIBLE</div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Tab 3: Mesh & Failover */}
        {activeTab === 'mesh' && (
          <div className="mt-10 grid gap-10 lg:grid-cols-2 items-center overflow-hidden">
            <motion.div variants={slideFromLeft} initial="hidden" animate="show">
              <p className="font-mono text-[10px] uppercase text-accent font-bold tracking-widest">Mission-Critical Resilience</p>
              <h2 className="mt-3 text-3xl font-semibold text-brand-deep">
                Zero-Downtime Dual-SIM Failover &amp; Mesh
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                In retail stores, financial branches, and industrial plants, fiber cuts cause catastrophic losses. SkyMirr routers monitor active wireline connections continuously and automatically switch to 5G Sub-6 within 20 milliseconds upon detection of degradation.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3 rounded-sm bg-surface p-3.5 ring-1 ring-border hover-gradient-border shadow-sm">
                  <Layers className="size-4 text-brand shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-xs text-brand-deep">Mesh Expansion</span>
                    <p className="text-[11px] text-muted-foreground">Easily daisy-chain multiple Sky5G nodes to cover up to 50,000 sq ft warehouses without cabling.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-sm bg-surface p-3.5 ring-1 ring-border hover-gradient-border shadow-sm">
                  <Radio className="size-4 text-brand shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-xs text-brand-deep">Automatic Carrier Fallback</span>
                    <p className="text-[11px] text-muted-foreground">Dual Nano-SIM architecture enables automatic failover between primary carrier and backup provider.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={slideFromRight} initial="hidden" animate="show" className="rounded-md bg-surface p-6 sm:p-8 ring-1 ring-border text-center hover-gradient-border shadow-sm">
              <img
                src="/images/skymirr-router.jpg"
                alt="Sky5G Router with Failover"
                className="mx-auto aspect-[16/10] w-full max-w-sm rounded-sm object-cover shadow-sm mb-4"
              />
              <p className="font-mono text-[10px] uppercase text-brand font-semibold">TCPA-117 CPE Gateway</p>
              <h3 className="text-lg font-semibold text-brand-deep mt-1">Autonomous Failover Router</h3>
            </motion.div>
          </div>
        )}
      </section>

      {/* Customer Success Scenario from skymirr.com */}
      <section className="border-t border-border bg-sky-100 overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-6 lg:px-10 lg:py-20">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="rounded-md bg-surface p-6 sm:p-10 ring-1 ring-border shadow-sm hover-gradient-border">
            <div className="flex items-center gap-2 mb-3">
              <Activity className="size-4 text-brand" />
              <span className="font-mono text-[10px] uppercase text-brand font-semibold">
                Customer Success Scenario
              </span>
            </div>
            <h2 className="text-2xl font-bold text-brand-deep sm:text-3xl">
              Retail Expansion Without Connectivity Delays
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-3xl">
              A national retailer was opening ten new store locations simultaneously. Wireline fiber installation delays threatened POS checkout readiness, inventory synchronization, and scheduled grand openings.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              <div className="rounded-sm bg-paper p-4 ring-1 ring-border hover:shadow-sm transition-shadow">
                <div className="text-xl font-bold text-brand font-mono">10 / 10</div>
                <div className="text-xs text-brand-deep font-semibold mt-1">Stores Launched On Time</div>
                <div className="text-[11px] text-muted-foreground mt-0.5">Zero postponement of retail grand openings</div>
              </div>
              <div className="rounded-sm bg-paper p-4 ring-1 ring-border hover:shadow-sm transition-shadow">
                <div className="text-xl font-bold text-brand font-mono">100%</div>
                <div className="text-xs text-brand-deep font-semibold mt-1">POS &amp; Inventory Uptime</div>
                <div className="text-[11px] text-muted-foreground mt-0.5">Continuous transactions via MuLCAT® 5G</div>
              </div>
              <div className="rounded-sm bg-paper p-4 ring-1 ring-border hover:shadow-sm transition-shadow">
                <div className="text-xl font-bold text-brand font-mono">-42%</div>
                <div className="text-xs text-brand-deep font-semibold mt-1">Deployment Cost Savings</div>
                <div className="text-[11px] text-muted-foreground mt-0.5">Eliminated expedited fiber construction fees</div>
              </div>
              <div className="rounded-sm bg-paper p-4 ring-1 ring-border hover:shadow-sm transition-shadow">
                <div className="text-xl font-bold text-brand font-mono">&lt; 20ms</div>
                <div className="text-xs text-brand-deep font-semibold mt-1">Failover Switchover</div>
                <div className="text-[11px] text-muted-foreground mt-0.5">Permanent wireline backup gateway</div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/products"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/products');
                }}
                className="inline-flex min-h-11 items-center gap-2 rounded-md bg-brand py-2 pl-2 pr-4 text-sm font-bold text-white shadow-sm ring-1 ring-brand/30 transition-colors hover:bg-brand-deep"
              >
                <span className="grid size-7 place-items-center bg-white/20 rounded-sm">
                  <ChevronRight className="size-4" />
                </span>
                Explore Sky5G Routers
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

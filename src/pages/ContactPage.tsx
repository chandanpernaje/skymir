import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Download, HelpCircle } from 'lucide-react';
import { productsData } from '../data/productsData';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 70, damping: 20 } }
};

const slideFromRight = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 60, damping: 20 } }
};

const slideFromLeft = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 60, damping: 20 } }
};

export const ContactPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sales' | 'firmware'>('sales');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    productInterest: 'tamp-161',
    frequency: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  // Firmware request form
  const [firmwareData, setFirmwareData] = useState({
    name: '',
    email: '',
    serialNumber: '',
    carrier: 'AT&T',
  });
  const [firmwareSubmitted, setFirmwareSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  const handleFirmwareSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firmwareData.email) return;
    setFirmwareSubmitted(true);
  };

  return (
    <main>
      <section className="border-b border-border bg-hero-wash">
        <motion.div variants={staggerContainer} initial="hidden" animate="show" className="mx-auto max-w-[1400px] px-5 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
          <motion.p variants={fadeUp} className="font-mono text-[11px] uppercase text-brand font-bold tracking-widest">Contact</motion.p>
          <motion.h1 variants={fadeUp} className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[1.04] text-brand-deep sm:text-5xl lg:text-6xl">
            Let’s solve the <span className="text-brand">signal problem.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Tell us what you are building, the frequencies you need, and where the product will operate. Our RF team will help identify the next step.
          </motion.p>
        </motion.div>
      </section>

      <section className="overflow-hidden">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-10 lg:py-24">
          {/* Left Office & Corporate Card */}
          <motion.div variants={slideFromLeft} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="flex flex-col justify-between rounded-md bg-brand-deep p-7 text-white sm:p-9 shadow-sm hover-gradient-border order-1">
            <div className="relative z-10">
              <MapPin className="size-6 text-brand-bright" aria-hidden="true" />
              <p className="mt-6 font-mono text-[10px] uppercase text-signal">
                United States Headquarters
              </p>
              <h2 className="mt-3 text-2xl font-semibold">SkyMirr, Inc.</h2>
              <address className="mt-4 not-italic text-sm leading-7 text-brand-foreground/75">
                930 S. Harbor City Blvd
                <br />
                Suite 403
                <br />
                Melbourne, FL 32901
                <br />
                United States
              </address>

              <div className="mt-8 border-t border-white/15 pt-6 text-xs text-white/80 space-y-2">
                <div className="font-bold text-brand-bright uppercase tracking-wider text-[10px]">
                  International Operations
                </div>
                <div>
                  <span className="font-semibold text-white">R&amp;D Hub:</span> Songdo Techno Park, Incheon, South Korea
                </div>
                <div>
                  <span className="font-semibold text-white">Manufacturing:</span> Binh Duong Precision Industrial Zone, Vietnam
                </div>
              </div>
            </div>

            <p className="relative z-10 mt-12 text-sm text-white/70">
              When it has to connect, it has to be SkyMirr.
            </p>
          </motion.div>

          <motion.div variants={slideFromRight} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="rounded-[20px] bg-surface-glass p-6 ring-1 ring-border sm:p-8 order-2">
            {/* Form Mode Selector */}
            <div className="flex items-center gap-2 border-b border-border pb-4 mb-6">
              <button
                type="button"
                onClick={() => setActiveTab('sales')}
                className={`px-3.5 py-1.5 text-xs rounded-sm transition-colors cursor-pointer ${
                  activeTab === 'sales'
                    ? 'bg-brand text-white font-bold shadow-sm'
                    : 'text-muted-foreground font-medium hover:text-brand bg-surface'
                }`}
              >
                Engineering &amp; Sales Inquiry
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('firmware')}
                className={`px-3.5 py-1.5 text-xs rounded-sm transition-colors cursor-pointer ${
                  activeTab === 'firmware'
                    ? 'bg-brand text-white font-bold shadow-sm'
                    : 'text-muted-foreground font-medium hover:text-brand bg-surface'
                }`}
              >
                Download Latest Firmware
              </button>
            </div>

            {activeTab === 'sales' ? (
              <>
                <h2 className="text-2xl font-semibold text-brand-deep">Start a conversation</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  For product selection, design services, evaluation samples, or distributor partnership enquiries, contact SkyMirr directly.
                </p>

                <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="mt-6 grid gap-3 sm:grid-cols-3">
                  <motion.a
                    variants={fadeUp}
                    href="mailto:sales@skymirr.com"
                    className="flex flex-col rounded-[12px] bg-paper p-3.5 ring-1 ring-border transition-colors hover:bg-paper-2"
                  >
                    <span className="font-mono text-[9px] uppercase text-muted-foreground">
                      Sales email
                    </span>
                    <span className="mt-1 text-xs font-bold text-brand-deep truncate">
                      sales@skymirr.com
                    </span>
                  </motion.a>

                  <motion.a
                    variants={fadeUp}
                    href="tel:+13213931039"
                    className="flex flex-col rounded-[12px] bg-paper p-3.5 ring-1 ring-border transition-colors hover:bg-paper-2"
                  >
                    <span className="font-mono text-[9px] uppercase text-muted-foreground">
                      Sales line
                    </span>
                    <span className="mt-1 text-xs font-bold text-brand-deep">
                      321-393-1039
                    </span>
                  </motion.a>

                  <motion.a
                    variants={fadeUp}
                    href="tel:+13216103477"
                    className="flex flex-col rounded-[12px] bg-paper p-3.5 ring-1 ring-border transition-colors hover:bg-paper-2"
                  >
                    <span className="font-mono text-[9px] uppercase text-muted-foreground">
                      Corporate
                    </span>
                    <span className="mt-1 text-xs font-bold text-brand-deep">
                      321-610-3477
                    </span>
                  </motion.a>
                </motion.div>

                {/* Form */}
                <div className="mt-8 border-t border-border pt-6">
                  {submitted ? (
                    <div className="flex items-start gap-3 rounded-[12px] bg-signal/15 p-4 text-brand-deep ring-1 ring-signal/30">
                      <CheckCircle2 className="size-5 text-brand shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold">Thank you for contacting SkyMirr</p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          An RF systems engineer will review your requirements and reach out to {formData.email} within 1 business day.
                        </p>
                        <button
                          type="button"
                          onClick={() => {
                            setSubmitted(false);
                            setFormData({
                              name: '',
                              email: '',
                              company: '',
                              productInterest: 'tamp-161',
                              frequency: '',
                              message: '',
                            });
                          }}
                          className="mt-3 text-xs font-semibold text-brand hover:underline"
                        >
                          Send another inquiry
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="grid gap-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label htmlFor="name" className="block font-mono text-[10px] uppercase text-muted-foreground mb-1">
                            Full Name *
                          </label>
                          <input
                            id="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Engineering Contact"
                            className="w-full rounded-[10px] bg-paper px-3.5 py-2.5 text-xs ring-1 ring-border focus:ring-2 focus:ring-brand focus:outline-none"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block font-mono text-[10px] uppercase text-muted-foreground mb-1">
                            Work Email *
                          </label>
                          <input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="engineer@company.com"
                            className="w-full rounded-[10px] bg-paper px-3.5 py-2.5 text-xs ring-1 ring-border focus:ring-2 focus:ring-brand focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label htmlFor="company" className="block font-mono text-[10px] uppercase text-muted-foreground mb-1">
                            Company / Organization
                          </label>
                          <input
                            id="company"
                            type="text"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder="Organization name"
                            className="w-full rounded-[10px] bg-paper px-3.5 py-2.5 text-xs ring-1 ring-border focus:ring-2 focus:ring-brand focus:outline-none"
                          />
                        </div>
                        <div>
                          <label htmlFor="productInterest" className="block font-mono text-[10px] uppercase text-muted-foreground mb-1">
                            Product or Service Interest
                          </label>
                          <select
                            id="productInterest"
                            value={formData.productInterest}
                            onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                            className="w-full rounded-[10px] bg-paper px-3 py-2.5 text-xs ring-1 ring-border focus:ring-2 focus:ring-brand focus:outline-none"
                          >
                            {productsData.map((p) => (
                              <option key={p.id} value={p.id}>
                                {p.name} ({p.categoryLabel})
                              </option>
                            ))}
                            <option value="custom">Custom RF Architecture &amp; Consulting</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block font-mono text-[10px] uppercase text-muted-foreground mb-1">
                          Application / RF Target Specifications
                        </label>
                        <textarea
                          id="message"
                          rows={3}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Frequencies required, target enclosure dimensions, carrier requirements, sample request quantities..."
                          className="w-full rounded-[10px] bg-paper px-3.5 py-2.5 text-xs ring-1 ring-border focus:ring-2 focus:ring-brand focus:outline-none resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-brand py-2.5 px-5 text-xs font-bold text-white shadow-sm ring-1 ring-brand/30 transition-colors hover:bg-brand-deep cursor-pointer"
                      >
                        <Send className="size-3.5" />
                        Send RF Specification Inquiry
                      </button>
                    </form>
                  )}
                </div>
              </>
            ) : (
              /* Firmware Portal */
              <div>
                <div className="flex items-center gap-2 text-brand mb-2">
                  <Download className="size-4" />
                  <h2 className="text-xl font-semibold text-brand-deep">Sky5G Firmware Portal</h2>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Enter your device serial number and email to receive the latest carrier-certified firmware package (Version 4.2.8 with MuLCAT® 5G CA enhancement).
                </p>

                {firmwareSubmitted ? (
                  <div className="mt-6 rounded-[12px] bg-signal/15 p-4 text-brand-deep ring-1 ring-signal/30 text-xs">
                    <p className="font-semibold">Firmware Package Dispatched</p>
                    <p className="mt-1 text-muted-foreground">
                      An encrypted download token and release notes have been sent to {firmwareData.email}.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFirmwareSubmit} className="mt-6 space-y-4">
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-muted-foreground mb-1">
                        Device Model &amp; Serial (S/N)
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. TCPA117-26A-009412"
                        value={firmwareData.serialNumber}
                        onChange={(e) => setFirmwareData({ ...firmwareData, serialNumber: e.target.value })}
                        className="w-full rounded-[10px] bg-paper px-3.5 py-2 text-xs ring-1 ring-border focus:ring-2 focus:ring-brand focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-muted-foreground mb-1">
                        Registered Administrator Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="admin@enterprise.com"
                        value={firmwareData.email}
                        onChange={(e) => setFirmwareData({ ...firmwareData, email: e.target.value })}
                        className="w-full rounded-[10px] bg-paper px-3.5 py-2 text-xs ring-1 ring-border focus:ring-2 focus:ring-brand focus:outline-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-sm bg-brand py-2.5 px-4 text-xs font-bold text-white shadow-sm ring-1 ring-brand/30 transition-colors hover:bg-brand-deep cursor-pointer"
                    >
                      <Download className="size-3.5" />
                      Verify Device &amp; Download Firmware
                    </button>
                  </form>
                )}
              </div>
            )}
          </motion.div>

        </div>
      </section>
    </main>
  );
};

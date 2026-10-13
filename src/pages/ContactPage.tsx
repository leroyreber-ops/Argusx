import React, { useState } from 'react';
import { COMPANY, NAVIGATION } from '../data/company';
import { PAGES_DATA } from '../data/pagesData';
import { SEOHead } from '../components/SEOHead';
import { PageHero } from '../components/PageHero';
import { ExpandableContent } from '../components/ExpandableContent';
import { FAQAccordion } from '../components/FAQAccordion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  Send,
  Building,
  ShieldCheck,
  AlertCircle,
  Truck,
  Box,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const page = PAGES_DATA.contact;

  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceInterest: 'IT Procurement & Deployment',
    message: '',
    spamAnswer: '',
    smsConsent: false,
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const contactFaqs = [
    {
      question: 'What happens after I submit this contact form?',
      answer: 'Your inquiry is received directly by our operations team in Fort Worth. A technical account manager reviews your equipment scope and reaches out via email or phone within one business day to discuss specifications, timelines, or quote requirements.',
    },
    {
      question: 'Can I visit or ship hardware to the Fort Worth facility?',
      answer: 'Yes. Equipment shipments and authorized client visits take place at our main facility: 14951 Kingsport Rd, Suite 200, Fort Worth, TX 76155. For security and inventory control, please coordinate with our logistics team prior to equipment drop-off.',
    },
    {
      question: 'Do you offer emergency or weekend support?',
      answer: 'Clients enrolled in our enterprise Complete Care and managed services SLA agreements have designated escalation contacts and emergency engineer dispatch protocols.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Form validation
    if (!form.name.trim() || !form.email.trim() || !form.company.trim()) {
      setErrorMessage('Please fill out your Name, Company, and Email.');
      return;
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // Verify spam answer (13 minus 6 = 7)
    if (form.spamAnswer.trim() !== '7') {
      setErrorMessage('Security challenge incorrect: What is 13 minus 6? Please enter 7.');
      return;
    }

    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
    }, 600);
  };

  return (
    <div>
      <SEOHead
        title={page.metaTitle}
        description={page.metaDescription}
        canonical={page.canonical}
        breadcrumbs={page.breadcrumbs}
      />

      {/* Cinematic Hero Background */}
      <PageHero
        kicker="Direct Engineer Consultation & Custom Quotes"
        title="Discuss Your Hardware Lifecycle and Support Needs"
        subtitle="Connect with our Fort Worth engineering team for hardware procurement, depot repair programs, managed services, or certified asset disposition quotes."
        backgroundImage="/assets/images/argus_fort_worth_facility_exterior_1791868131290.jpg"
        imageAlt="Modern commercial corporate facility and logistics depot of Argus IT Services in Fort Worth, Texas during sunset"
        breadcrumbs={page.breadcrumbs}
        primaryCtaText="Start Consultation"
        primaryCtaLink="#contact-form"
        secondaryCtaText="Call (469) 471-0035"
        secondaryCtaLink={`tel:${COMPANY.phoneRaw}`}
        trustMarkers={[
          { title: '(469) 471-0035', subtitle: 'Direct Phone' },
          { title: 'Fort Worth Hub', subtitle: '14951 Kingsport Rd' },
          { title: '1-Day Response', subtitle: 'Technical Evaluation' },
        ]}
      />

      {/* Contact Section: Form & Direct Contact Cards */}
      <section id="contact-form" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Contact Details, Facility Information & Image 2 (Support Operations Desk) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
                <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                  Direct Contact Information
                </h2>

                <div className="space-y-5 text-sm text-slate-700">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#213f9a] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Phone
                      </div>
                      <a
                        href={`tel:${COMPANY.phoneRaw}`}
                        className="text-base font-bold text-slate-900 hover:text-[#213f9a] transition-colors"
                      >
                        {COMPANY.phone}
                      </a>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Monday – Friday, 8:00 AM – 5:00 PM CT
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#213f9a] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Email
                      </div>
                      <a
                        href={`mailto:${COMPANY.email}`}
                        className="text-base font-bold text-slate-900 hover:text-[#213f9a] transition-colors"
                      >
                        {COMPANY.email}
                      </a>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Direct sales and client service inquiries
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#213f9a] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Facility & Staging Depot
                      </div>
                      <div className="text-sm font-semibold text-slate-900 mt-0.5">
                        {COMPANY.address.street}
                      </div>
                      <div className="text-sm text-slate-600">
                        {COMPANY.address.city}, {COMPANY.address.state} {COMPANY.address.zip}
                      </div>
                      <p className="text-xs text-slate-500 mt-1">
                        Centrally located in the DFW metroplex near DFW International Airport.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image 2: Dedicated Client Support Desk & Operations Dispatch */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-900 group">
                <img
                  src="/assets/images/argus_dispatch_customer_support_1791868132055.jpg"
                  alt="Argus IT Services customer operations coordinator managing technical dispatches and client requests"
                  className="w-full h-52 object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="p-4 bg-slate-900 text-white">
                  <div className="text-xs font-mono text-blue-300">Operations Dispatch Desk</div>
                  <div className="text-sm font-semibold">Live support coordinators managing technician dispatch and depot tickets</div>
                </div>
              </div>

              {/* What Happens Next Card */}
              <div className="bg-[#213f9a] text-white p-8 rounded-2xl shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-200 uppercase tracking-wider">
                  <Clock className="w-4 h-4 text-blue-300" />
                  <span>Our Response Standard</span>
                </div>
                <h3 className="text-lg font-bold">What happens after you reach out?</h3>
                <ul className="text-xs text-blue-100 space-y-2.5 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-300 mt-0.5 shrink-0" />
                    <span>Your inquiry is assigned directly to an operations specialist in Fort Worth.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-300 mt-0.5 shrink-0" />
                    <span>We review your hardware models, fleet volume, and timeframe.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-300 mt-0.5 shrink-0" />
                    <span>You receive a clear scope or quote without sales pressure.</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Right Column: Interactive Consultation & Quote Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
                
                {status === 'success' ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-green-50 text-green-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Thank You. Your Inquiry Has Been Received.
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      We have routed your details to our technical team in Fort Worth. A representative will contact you at <strong>{form.email}</strong> to review your IT requirements.
                    </p>
                    <div className="pt-6">
                      <button
                        type="button"
                        onClick={() => {
                          setStatus('idle');
                          setForm({
                            name: '',
                            company: '',
                            email: '',
                            phone: '',
                            serviceInterest: 'IT Procurement & Deployment',
                            message: '',
                            spamAnswer: '',
                            smsConsent: false,
                          });
                        }}
                        className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="border-b border-slate-100 pb-4">
                      <h3 className="text-xl font-bold text-slate-900">
                        Request a Consultation or Quote
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        Please provide your details below. Fields marked with an asterisk (*) are required.
                      </p>
                    </div>

                    {errorMessage && (
                      <div className="p-4 rounded-lg bg-red-50 border border-red-200 flex items-center gap-3 text-xs font-semibold text-red-700">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          Your Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="First and Last Name"
                          className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:border-[#213f9a] focus:ring-1 focus:ring-[#213f9a]"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-company" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          Company / Organization *
                        </label>
                        <input
                          id="contact-company"
                          type="text"
                          required
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          placeholder="Company Name"
                          className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:border-[#213f9a] focus:ring-1 focus:ring-[#213f9a]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          Business Email *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:border-[#213f9a] focus:ring-1 focus:ring-[#213f9a]"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          Phone Number (Optional)
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="(469) 000-0000"
                          className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:border-[#213f9a] focus:ring-1 focus:ring-[#213f9a]"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-interest" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Primary Service Interest
                      </label>
                      <select
                        id="contact-interest"
                        value={form.serviceInterest}
                        onChange={(e) => setForm({ ...form, serviceInterest: e.target.value })}
                        className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:border-[#213f9a] focus:ring-1 focus:ring-[#213f9a]"
                      >
                        <option>IT Procurement & Deployment</option>
                        <option>Managed IT Services (Monitoring & Patching)</option>
                        <option>Depot Repair & Advance Hardware Exchange</option>
                        <option>IT Asset Disposition & Secure Data Destruction</option>
                        <option>IT Staffing & Project Relocations</option>
                        <option>Enterprise Fleet Lifecycle Solutions</option>
                        <option>Small & Midsize Business Solutions</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        How can we help? (Project Scope, Device Count, Timelines)
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us about the equipment types, number of endpoints, or upcoming rollout milestones."
                        className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:border-[#213f9a] focus:ring-1 focus:ring-[#213f9a]"
                      />
                    </div>

                    {/* Anti-Spam Security Challenge from verified source */}
                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                      <label htmlFor="contact-spam" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Security Verification: What is 13 minus 6? *
                      </label>
                      <div className="flex items-center gap-3">
                        <input
                          id="contact-spam"
                          type="text"
                          required
                          value={form.spamAnswer}
                          onChange={(e) => setForm({ ...form, spamAnswer: e.target.value })}
                          placeholder="Answer (e.g. 7)"
                          className="w-32 px-4 py-2 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:border-[#213f9a] focus:ring-1 focus:ring-[#213f9a] font-mono"
                        />
                        <span className="text-xs text-slate-500">
                          (Spam prevention challenge)
                        </span>
                      </div>
                    </div>

                    {/* SMS Disclaimer from verified source */}
                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-600 space-y-2">
                      <div className="font-bold text-slate-800 uppercase tracking-wider text-[11px]">
                        SMS Disclaimer
                      </div>
                      <p className="leading-relaxed text-slate-500 text-[11px]">
                        By providing my phone number to &ldquo;Argus IT Services,&rdquo; I agree and acknowledge that Argus may send text messages to my wireless phone number for project updates and service notifications. Message frequency will vary, and message and data rates may apply. If you need assistance, reply &ldquo;HELP&rdquo;. You can opt out at any time by replying &ldquo;STOP&rdquo;.
                      </p>
                      <label className="flex items-start gap-2.5 pt-1 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={form.smsConsent}
                          onChange={(e) => setForm({ ...form, smsConsent: e.target.checked })}
                          className="mt-0.5 rounded text-[#213f9a] focus:ring-[#213f9a]"
                        />
                        <span className="text-slate-700 font-medium text-xs">
                          I agree to receive communications regarding my service request.
                        </span>
                      </label>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full sm:w-auto px-8 py-3.5 bg-[#213f9a] hover:bg-blue-800 text-white font-bold text-sm rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        <span>{status === 'submitting' ? 'Submitting...' : 'Send Inquiry'}</span>
                        <Send className="w-4 h-4" />
                      </button>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Facility Shipping Protocols & RMA Ingestion Instructions with Image 3 (Freight Hub & Logistics Bay) */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-8">
            <div className="lg:col-span-7">
              <div className="text-xs font-bold text-[#213f9a] uppercase tracking-wider mb-2">
                Logistics & Receiving Hub
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Fort Worth Depot Shipping Guidelines & Intake Protocols
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Instructions for shipping equipment pallets, advance exchange RMA returns, and scheduled facility visits. Our 14951 Kingsport Rd facility features full tractor-trailer dock bays and real-time package scanning.
              </p>
            </div>

            {/* Image 3: Freight Logistics Bay and Nationwide Shipping Docks */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-900 group">
                <img
                  src="/assets/images/logistics_freight_dispatch_hub_1791868130650.jpg"
                  alt="Modern commercial logistics freight bay at Argus IT Services with express delivery trucks at dock bays and palletized cargo"
                  className="w-full h-52 object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="p-4 bg-slate-900 text-white">
                  <div className="text-xs font-mono text-blue-300">Nationwide Freight Bays</div>
                  <div className="text-sm font-semibold">14951 Kingsport Rd dock-high receiving and carrier logistics hub</div>
                </div>
              </div>
            </div>
          </div>

          <ExpandableContent
            previewHeight="max-h-64"
            expandLabel="Read Full Facility Shipping Instructions & Intake Protocols"
            collapseLabel="Read Less"
          >
            <div className="space-y-6 text-sm text-slate-700 leading-relaxed bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <div>
                <h4 className="font-bold text-slate-900 text-base mb-2">
                  1. Pallet Ingestion & Freight Dock Access
                </h4>
                <p>
                  Our Fort Worth depot at 14951 Kingsport Rd Suite 200 features dedicated commercial dock-high freight bays capable of handling standard 53-foot tractor trailers. For bulk equipment refreshes or large-scale ITAD returns, please ensure bills-of-lading (BOL) specify Argus RMA numbers. Freight deliveries are accepted between 8:30 AM and 4:30 PM Central Time, Monday through Friday.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-2">
                  2. Courier & Parcel Return Procedures
                </h4>
                <p>
                  Individual laptop returns and field swap-outs should utilize the pre-paid protective shipping boxes provided under our Complete Care Advance Exchange program. Do not ship loose components without antistatic shielding. Every returned parcel is scanned into our barcoded receiving bay within two hours of carrier delivery.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-2">
                  3. Client Facility Visits & Audit Walk-Throughs
                </h4>
                <p>
                  Due to chain-of-custody requirements for our banking and healthcare client data cages, facility tours and on-site audit inspections require 48 hours advance notice and photo ID registration upon entry.
                </p>
              </div>
            </div>
          </ExpandableContent>
        </div>
      </section>

      <FAQAccordion items={contactFaqs} />
    </div>
  );
};

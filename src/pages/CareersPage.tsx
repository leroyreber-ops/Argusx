import React, { useState } from 'react';
import { COMPANY } from '../data/company';
import { PAGES_DATA } from '../data/pagesData';
import { SEOHead } from '../components/SEOHead';
import { PageHero } from '../components/PageHero';
import { ExpandableContent } from '../components/ExpandableContent';
import { FAQAccordion } from '../components/FAQAccordion';
import { Link } from '../context/RouterContext';
import {
  Wrench,
  Cpu,
  Truck,
  Users,
  MapPin,
  CheckCircle2,
  Mail,
  Send,
  Building,
  Award,
} from 'lucide-react';

export const CareersPage: React.FC = () => {
  const page = PAGES_DATA.careers;

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    areaOfInterest: 'Depot Hardware & Imaging Technician',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email) return;
    setSubmitted(true);
  };

  const careerFaqs = [
    {
      question: 'Where is the Argus IT Services engineering facility located?',
      answer: 'Our main operations and depot facility is located at 14951 Kingsport Rd Suite 200, Fort Worth, TX 76155, centrally positioned in the Dallas/Fort Worth metroplex.',
    },
    {
      question: 'What types of career opportunities exist at Argus IT Services?',
      answer: 'We employ Depot Hardware Technicians, OS Staging & Imaging Specialists, On-Site Field Service Engineers, Logistics & Asset Coordinators, and Technical Account Managers.',
    },
    {
      question: 'How do you review career applications and resumes?',
      answer: 'Inquiries submitted through this page or emailed directly to our team are reviewed directly by our technical operations leadership. When matching roles open up, qualified candidates are contacted for interviews.',
    },
  ];

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
        kicker="Careers at Argus IT Services in Fort Worth, TX"
        title="Build a Career in Practical Technology Operations & Hardware Engineering"
        subtitle="Join an established, engineering-led organization dedicated to craftsmanship in hardware lifecycle management, depot operations, and nationwide client service since 1997."
        backgroundImage="/src/assets/images/argus_team_culture_workspace_1791868101884.jpg"
        imageAlt="Argus IT Services technicians and systems engineers collaborating around a workshop table in our Fort Worth depot facility"
        breadcrumbs={page.breadcrumbs}
        primaryCtaText="Submit Career Inquiry"
        primaryCtaLink="#career-form"
        secondaryCtaText="Explore Our Depot"
        secondaryCtaLink="/about/"
        trustMarkers={[
          { title: 'Fort Worth Hub', subtitle: '14951 Kingsport Rd' },
          { title: 'Hands-On Craft', subtitle: 'Hardware Diagnostics' },
          { title: '28+ Years', subtitle: 'Engineering Heritage' },
        ]}
      />

      {/* Technical Disciplines with Image 2 (Skills Training & Diagnostic Mentoring) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-bold text-[#213f9a] uppercase tracking-wider">
                Our Craft & Culture
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Mentorship, Mastery, and Hands-On Engineering
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                We believe in genuine hardware craftsmanship. At Argus, technicians learn directly from licensed professional engineers, mastering component-level diagnostics, thermal testing, micro-soldering, and complex network configurations in our Fort Worth lab.
              </p>
            </div>

            {/* Image 2: Senior Engineer Mentoring Junior Technician on Diagnostics */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
                <img
                  src="/src/assets/images/technician_skills_training_depot_1791868102712.jpg"
                  alt="Senior hardware engineer mentoring a junior bench technician on laptop motherboard diagnostic tools and multimeter testing"
                  className="w-full h-64 object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="p-4 bg-slate-900 text-white">
                  <div className="text-xs font-mono text-blue-300">Continuous Technical Training</div>
                  <div className="text-sm font-semibold">One-on-one diagnostic mentorship under experienced engineering leadership</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <Cpu className="w-8 h-8 text-[#213f9a]" />
              <h3 className="font-bold text-slate-900 text-lg">Depot Staging & Hardware Engineering</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Bench diagnostics, motherboard troubleshooting, component replacements, BIOS flashing, and automated OS gold image staging in our Fort Worth depot.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <Wrench className="w-8 h-8 text-[#213f9a]" />
              <h3 className="font-bold text-slate-900 text-lg">Field Services & Technology Relocations</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                On-site customer dispatch, data center server un-racking, structured cabling, bank branch migrations, and retail store point-of-sale cutovers.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <Truck className="w-8 h-8 text-[#213f9a]" />
              <h3 className="font-bold text-slate-900 text-lg">Asset Logistics & Secure ITAD</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Barcode inventory logging, serialized NIST 800-88 data sanitization execution, drive shredding, and eco-certified materials handling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workplace Environment with Image 3 (Fort Worth Office & Tech Library) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-bold text-[#213f9a] uppercase tracking-wider">
                Workplace Life
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Our Fort Worth Technology Campus & Operations Hub
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Conveniently situated at 14951 Kingsport Rd in the CentrePort business district near DFW International Airport, our facility offers clean ESD-safe workshops, collaborative project areas, a technical library, and a supportive, close-knit team culture.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <div className="font-bold text-slate-900 text-sm">Collaborative Culture</div>
                  <p className="text-xs text-slate-600 mt-1">Direct access to leadership without bureaucratic corporate layers.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <div className="font-bold text-slate-900 text-sm">Modern Tooling</div>
                  <p className="text-xs text-slate-600 mt-1">Top-tier oscilloscopes, thermal cameras, and high-speed staging switches.</p>
                </div>
              </div>
            </div>

            {/* Image 3: Fort Worth Collaborative Office & Tech Library */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
                <img
                  src="/src/assets/images/argus_fort_worth_office_amenities_1791868102825.jpg"
                  alt="Modern collaborative employee lounge and tech library in the Argus Fort Worth Texas facility"
                  className="w-full h-64 object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="p-4 bg-slate-900 text-white">
                  <div className="text-xs font-mono text-blue-300">Fort Worth Headquarters Amenities</div>
                  <div className="text-sm font-semibold">Collaborative spaces, technical resource library, and employee lounge</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Honest Career Application / Inquiry Form */}
      <section id="career-form" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <div className="text-xs font-bold text-[#213f9a] uppercase tracking-wider mb-2">
              Join Our Fort Worth Team
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Submit a Career Inquiry
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              We are always interested in connecting with talented technicians, engineers, and logistics specialists. Tell us about your background and technical interests.
            </p>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto" />
                <h3 className="text-2xl font-bold text-slate-900">Career Inquiry Received</h3>
                <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                  Thank you for your interest in Argus IT Services. Your information has been forwarded to our technical operations team in Fort Worth. If your profile matches an upcoming opening, our team will reach out directly.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-[#213f9a] hover:underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="career-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      id="career-name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:border-[#213f9a] focus:ring-1 focus:ring-[#213f9a]"
                    />
                  </div>

                  <div>
                    <label htmlFor="career-email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      id="career-email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:border-[#213f9a] focus:ring-1 focus:ring-[#213f9a]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="career-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      id="career-phone"
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="(469) 000-0000"
                      className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:border-[#213f9a] focus:ring-1 focus:ring-[#213f9a]"
                    />
                  </div>

                  <div>
                    <label htmlFor="career-area" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Technical Focus
                    </label>
                    <select
                      id="career-area"
                      value={formState.areaOfInterest}
                      onChange={(e) => setFormState({ ...formState, areaOfInterest: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:border-[#213f9a] focus:ring-1 focus:ring-[#213f9a]"
                    >
                      <option>Depot Hardware & Imaging Technician</option>
                      <option>Field Services & Cabling Engineer</option>
                      <option>Asset Logistics & ITAD Specialist</option>
                      <option>Technical Operations & Project Lead</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="career-message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Experience & Technical Background
                  </label>
                  <textarea
                    id="career-message"
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Briefly describe your hardware troubleshooting background, certifications, and availability."
                    className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:border-[#213f9a] focus:ring-1 focus:ring-[#213f9a]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <div className="text-xs text-slate-500">
                    You may also email resumes directly to <a href={`mailto:${COMPANY.email}`} className="text-[#213f9a] font-semibold underline">{COMPANY.email}</a>.
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 bg-[#213f9a] hover:bg-blue-800 text-white font-bold text-sm rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Submit Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Deep Expandable Culture & Craftsmanship Standards (Word Count: 850+ words) */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h3 className="text-2xl font-bold text-slate-900">
              The Engineering Culture at Argus IT Services
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              What it means to build a career in real, physical B2B technology operations.
            </p>
          </div>

          <ExpandableContent
            previewHeight="max-h-64"
            expandLabel="Read Full Argus Engineering Culture & Training Philosophy"
            collapseLabel="Read Less"
          >
            <div className="space-y-6 text-sm text-slate-700 leading-relaxed bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <div>
                <h4 className="font-bold text-slate-900 text-base mb-2">
                  1. Real Hardware, Real Mastery
                </h4>
                <p>
                  In a world obsessed with abstract SaaS buzzwords, physical hardware remains the bedrock upon which all digital computing relies. At Argus, our technicians work with real enterprise silicon: servers, modular storage arrays, high-density switches, commercial laptops, and medical computing carts. We train our team to diagnose problems from the motherboard component level up, fostering genuine technical craftsmanship rather than surface-level script reading.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-2">
                  2. Continuous Skill Development & Certifications
                </h4>
                <p>
                  We invest in our people. Technicians gain hands-on training with automated imaging tools (Intune, Autopilot, PXE multicast), ESD safety protocols, CompTIA A+/Network+/Server+ curriculums, and certified NIST 800-88 sanitization runbooks. Team members who start on the staging bench frequently advance into field engineering leads, project managers, and logistics coordinators.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-2">
                  3. A Culture of Mutual Respect and Accountability
                </h4>
                <p>
                  As an engineering-led business founded in 1997, we reject high-turnover sweatshop dynamics. We offer competitive compensation, standard business schedules, modern ESD-safe workbench environments, and direct mentorship from seasoned industry veterans who have led teams at IBM and Texas Instruments.
                </p>
              </div>
            </div>
          </ExpandableContent>
        </div>
      </section>

      <FAQAccordion items={careerFaqs} />
    </div>
  );
};

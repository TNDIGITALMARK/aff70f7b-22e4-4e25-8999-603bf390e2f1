'use client';

import React from 'react';
import { CTAButton, ServiceCard, StatCounter, StatCounterPresets } from '@/components/glooper';

const serviceIcons = {
  seo: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <path d="m21 21-4.35-4.35"/>
      <circle cx="11" cy="11" r="3"/>
    </svg>
  ),
  ppc: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="2" x2="12" y2="22"/>
      <path d="l-3-9h6l-3-9"/>
      <circle cx="12" cy="12" r="1"/>
    </svg>
  ),
  analytics: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"/>
      <line x1="12" y1="20" x2="12" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="14"/>
    </svg>
  ),
  content: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14,2 14,8 20,8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
    </svg>
  ),
  social: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  )
};

const processSteps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We begin with comprehensive analysis of your business, competitors, and market opportunities to develop a tailored digital marketing strategy."
  },
  {
    number: "02",
    title: "Implementation & Setup",
    description: "Our team implements campaigns, optimizes your digital presence, and sets up tracking systems to monitor performance."
  },
  {
    number: "03",
    title: "Monitor & Optimize",
    description: "Continuous monitoring, testing, and optimization ensure maximum performance and ROI from your marketing investments."
  },
  {
    number: "04",
    title: "Scale & Grow",
    description: "As results improve, we scale successful strategies and explore new opportunities for sustained growth."
  }
];

export default function ServicesPage() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[hsl(var(--glooper-navy))] to-[hsl(var(--glooper-blue))] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Digital Marketing
            <span className="block text-[hsl(var(--glooper-orange))]">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
            Comprehensive digital marketing solutions designed to drive growth, increase conversions, and maximize your return on investment through data-driven strategies.
          </p>

          <CTAButton
            variant="secondary"
            size="lg"
            onClick={scrollToContact}
            className="bg-[hsl(var(--glooper-orange))] hover:bg-orange-600"
          >
            Get Started Today
          </CTAButton>
        </div>
      </section>

      {/* Core Services */}
      <section className="glooper-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold glooper-heading mb-4">
              Core Services
            </h2>
            <p className="text-lg glooper-text-muted max-w-3xl mx-auto">
              Our comprehensive suite of digital marketing services is designed to cover every aspect of your online presence and drive measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={serviceIcons.seo}
              title="SEO Optimization"
              description="Improve your search engine rankings and drive organic traffic with comprehensive SEO strategies."
              features={[
                "Technical SEO audits",
                "On-page optimization",
                "Keyword research & strategy",
                "Link building campaigns",
                "Local SEO optimization",
                "Performance tracking"
              ]}
            />

            <ServiceCard
              icon={serviceIcons.ppc}
              title="PPC Management"
              description="Maximize ROI with expertly managed pay-per-click campaigns across all major platforms."
              variant="highlighted"
              features={[
                "Google Ads management",
                "Facebook & Instagram ads",
                "LinkedIn advertising",
                "Campaign optimization",
                "A/B testing",
                "Conversion tracking"
              ]}
            />

            <ServiceCard
              icon={serviceIcons.analytics}
              title="Analytics & Consulting"
              description="Data-driven insights and strategic consulting to optimize your marketing performance."
              features={[
                "Google Analytics setup",
                "Custom dashboard creation",
                "Performance reporting",
                "Strategy consulting",
                "Competitive analysis",
                "ROI optimization"
              ]}
            />

            <ServiceCard
              icon={serviceIcons.content}
              title="Content Marketing"
              description="Engage your audience with high-quality, strategic content that drives conversions."
              features={[
                "Content strategy development",
                "Blog writing & management",
                "Video content creation",
                "Infographic design",
                "Content distribution",
                "Performance analysis"
              ]}
            />

            <ServiceCard
              icon={serviceIcons.social}
              title="Social Media Management"
              description="Build brand awareness and engage customers across all social media platforms."
              features={[
                "Social media strategy",
                "Content creation & curation",
                "Community management",
                "Paid social campaigns",
                "Influencer partnerships",
                "Social analytics"
              ]}
            />

            <ServiceCard
              icon={serviceIcons.email}
              title="Email Marketing"
              description="Nurture leads and drive conversions with targeted email marketing campaigns."
              features={[
                "Email strategy & planning",
                "Template design",
                "List segmentation",
                "Automation workflows",
                "A/B testing",
                "Performance tracking"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="glooper-section bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold glooper-heading mb-4">
              Our Proven Process
            </h2>
            <p className="text-lg glooper-text-muted max-w-3xl mx-auto">
              We follow a systematic approach to ensure every campaign delivers optimal results and exceeds your expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-[hsl(var(--glooper-blue))] to-[hsl(var(--glooper-navy))] rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-[hsl(var(--glooper-blue))] to-transparent transform translate-x-0"></div>
                  )}
                </div>

                <h3 className="text-xl font-bold glooper-heading mb-3">
                  {step.title}
                </h3>
                <p className="glooper-text text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Preview */}
      <section className="glooper-section-sm bg-[hsl(var(--glooper-navy))] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Results That Speak Volumes
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Our proven strategies consistently deliver exceptional outcomes across all service areas.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCounter
              value={450}
              {...StatCounterPresets.projects}
              variant="large"
              className="text-white"
            />

            <StatCounter
              value={95}
              suffix="%"
              label="Client Satisfaction"
              variant="large"
              className="text-white"
            />

            <StatCounter
              value={267}
              {...StatCounterPresets.growth}
              variant="large"
              className="text-white"
            />

            <StatCounter
              value={8.3}
              prefix="$"
              suffix="M+"
              label="Revenue Generated"
              variant="large"
              className="text-white"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="glooper-section bg-gradient-to-r from-[hsl(var(--glooper-blue))] to-[hsl(var(--glooper-navy))] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
            Let's create a custom digital marketing strategy that drives real results for your business. Contact us today for a free consultation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton
              variant="secondary"
              size="lg"
              className="bg-[hsl(var(--glooper-orange))] hover:bg-orange-600"
            >
              Get Your Free Consultation
            </CTAButton>

            <div className="text-blue-100">
              or call us at <span className="font-semibold text-white">(555) 123-4567</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
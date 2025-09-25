'use client';

import React from 'react';
import {
  CTAButton,
  ServiceCard,
  TestimonialCard,
  StatCounter,
  StatCounterPresets
} from '@/components/glooper';

export const dynamic = 'force-dynamic';

// Mock data following the specifications
const mockTestimonials = [
  {
    quote: "Glooper Digital transformed our online presence completely. Our conversion rate increased by 340% in just 6 months, and our ROI has been exceptional.",
    author: "Sarah Chen",
    position: "CEO",
    company: "TechStart Solutions",
    rating: 5
  },
  {
    quote: "The data-driven approach and transparent reporting made all the difference. We finally understand our marketing performance and can make informed decisions.",
    author: "Michael Rodriguez",
    position: "Marketing Director",
    company: "GlobalCommerce Inc",
    rating: 5
  },
  {
    quote: "Professional, results-oriented, and incredibly knowledgeable. The team at Glooper Digital consistently delivers beyond expectations.",
    author: "Emma Thompson",
    position: "Founder",
    company: "Boutique Brands Co",
    rating: 5
  }
];

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
  )
};

export default function HomePage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-40 glooper-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/20"></div>

        {/* Enhanced decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[hsl(var(--glooper-accent-orange))]/15 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[hsl(var(--glooper-accent-blue))]/20 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-block px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-[hsl(var(--glooper-accent-navy))] border border-[hsl(var(--glooper-accent-blue))]/30 mb-4">
                🚀 Digital Excellence Redefined
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-[hsl(var(--glooper-accent-navy))]">
                GLOOPER
                <span className="block text-[hsl(var(--glooper-accent-blue))] bg-gradient-to-r from-[hsl(var(--glooper-accent-blue))] to-[hsl(var(--glooper-accent-orange))] bg-clip-text text-transparent">
                  DIGITAL
                </span>
                <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 font-normal text-[hsl(var(--glooper-accent-navy))]/80">
                  Unlocking Digital Excellence
                </span>
              </h1>

              <p className="text-lg md:text-xl glooper-text-light leading-relaxed max-w-xl">
                Transform your business with data-driven digital marketing strategies that deliver measurable results. We specialize in SEO, PPC, and analytics to drive growth and maximize ROI.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton
                  variant="secondary"
                  size="lg"
                  onClick={() => scrollToSection('contact')}
                  className="bg-[hsl(var(--glooper-accent-orange))] hover:bg-[hsl(14_90%_55%)] text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Start Your Project Today
                </CTAButton>

                <CTAButton
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection('services')}
                  className="border-2 border-[hsl(var(--glooper-accent-blue))] text-[hsl(var(--glooper-accent-navy))] bg-white/80 backdrop-blur-sm hover:bg-[hsl(var(--glooper-accent-blue))] hover:text-white shadow-md hover:shadow-lg transition-all duration-300"
                >
                  View Our Services
                </CTAButton>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative lg:pl-8 animate-fade-in-up">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 bg-white/20 backdrop-blur-sm border border-white/30">
                <img
                  src="/generated/glooper-team-hero.jpg"
                  alt="Professional digital marketing team collaborating"
                  className="w-full h-auto object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--glooper-accent-blue))]/20 via-transparent to-[hsl(var(--glooper-accent-orange))]/10"></div>

                {/* Floating stats overlay */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-[hsl(var(--glooper-accent-blue))]/20">
                  <div className="text-2xl font-bold text-[hsl(var(--glooper-accent-navy))]">340%</div>
                  <div className="text-sm text-[hsl(var(--glooper-accent-navy))]/70">ROI Increase</div>
                </div>

                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-[hsl(var(--glooper-accent-orange))]/20">
                  <div className="text-2xl font-bold text-[hsl(var(--glooper-accent-navy))]">250+</div>
                  <div className="text-sm text-[hsl(var(--glooper-accent-navy))]/70">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced floating particles */}
        <div className="absolute top-20 right-10 w-4 h-4 bg-[hsl(var(--glooper-accent-orange))] rounded-full opacity-60 animate-bounce" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-[hsl(var(--glooper-accent-blue))] rounded-full opacity-50 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-5 h-5 bg-[hsl(var(--glooper-accent-orange))] rounded-full opacity-40 animate-bounce" style={{animationDelay: '2s'}}></div>
      </section>

      {/* Services Section */}
      <section id="services" className="glooper-section bg-[hsl(var(--glooper-gray-light))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-[hsl(var(--glooper-accent-blue))]/10 backdrop-blur-sm rounded-full text-sm font-semibold text-[hsl(var(--glooper-accent-blue))] border border-[hsl(var(--glooper-accent-blue))]/20 mb-6">
              What We Offer
            </div>
            <h2 className="text-3xl md:text-4xl font-bold glooper-heading mb-4">
              Our Digital Marketing Services
            </h2>
            <p className="text-lg glooper-text max-w-3xl mx-auto">
              We deliver comprehensive digital marketing solutions tailored to your business needs,
              combining cutting-edge technology with proven strategies to drive measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={serviceIcons.seo}
              title="SEO Optimization"
              description="Drive organic traffic and improve search rankings with our comprehensive SEO strategies. We optimize every aspect of your online presence for maximum visibility."
              features={[
                "Technical SEO audits and optimization",
                "Keyword research and content strategy",
                "Local SEO for geographic targeting",
                "Performance monitoring and reporting"
              ]}
            />

            <ServiceCard
              icon={serviceIcons.ppc}
              title="PPC Management"
              description="Maximize ROI with expertly managed pay-per-click campaigns across Google Ads, Facebook, and other platforms."
              variant="highlighted"
              features={[
                "Campaign setup and optimization",
                "Advanced audience targeting",
                "A/B testing and conversion optimization",
                "Detailed performance analytics"
              ]}
            />

            <ServiceCard
              icon={serviceIcons.analytics}
              title="Business Consulting"
              description="Strategic consulting services to align your digital marketing efforts with broader business objectives and growth targets."
              features={[
                "Data-driven strategy development",
                "Performance tracking and KPI analysis",
                "Competitive analysis and market research",
                "Custom dashboard and reporting"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="glooper-section-sm bg-gradient-to-r from-[hsl(var(--glooper-accent-blue))]/95 via-[hsl(var(--glooper-blue))]/95 to-[hsl(var(--glooper-navy))]/95 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-[hsl(var(--glooper-accent-orange))]/20 rounded-full blur-2xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold text-white border border-white/30 mb-4">
              Our Track Record
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Proven Results That Speak for Themselves
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Our data-driven approach consistently delivers exceptional outcomes for our clients across all industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatCounter
              value={250}
              {...StatCounterPresets.clients}
              variant="large"
              className="text-white"
            />

            <StatCounter
              value={89}
              {...StatCounterPresets.growth}
              variant="large"
              className="text-white"
            />

            <StatCounter
              value={4.2}
              prefix="$"
              suffix="M+"
              label="Revenue Generated"
              variant="large"
              className="text-white"
            />

            <StatCounter
              value={312}
              {...StatCounterPresets.roi}
              variant="large"
              className="text-white"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="glooper-section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-[hsl(var(--glooper-accent-orange))]/10 backdrop-blur-sm rounded-full text-sm font-semibold text-[hsl(var(--glooper-accent-orange))] border border-[hsl(var(--glooper-accent-orange))]/20 mb-6">
              Client Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold glooper-heading mb-4">
              Client Success Stories
            </h2>
            <p className="text-lg glooper-text max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with Glooper Digital.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mockTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                position={testimonial.position}
                company={testimonial.company}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="glooper-section bg-gradient-to-br from-[hsl(var(--glooper-blue))] via-[hsl(var(--glooper-accent-blue))] to-[hsl(var(--glooper-navy))] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
          <div className="absolute top-20 right-20 w-64 h-64 bg-[hsl(var(--glooper-accent-orange))]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold text-white border border-white/30 mb-6">
            Let's Get Started
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Let's discuss how our data-driven digital marketing strategies can help your business achieve exceptional growth and ROI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton
              variant="secondary"
              size="lg"
              className="bg-[hsl(var(--glooper-accent-orange))] hover:bg-[hsl(14_90%_55%)] text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Start Your Project Today
            </CTAButton>

            <div className="text-white/80 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              or call us at <span className="font-semibold text-white">(555) 123-4567</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[hsl(var(--glooper-accent-navy))] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <img
                src="/generated/glooper-digital-logo.png"
                alt="Glooper Digital"
                className="h-10 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-300 mb-6 max-w-md">
                Glooper Digital is a leading digital marketing agency specializing in data-driven strategies that deliver measurable results for businesses of all sizes.
              </p>

              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-[hsl(var(--glooper-accent-blue))] transition-colors">
                  <span className="sr-only">Facebook</span>
                  <div className="w-6 h-6 bg-current"></div>
                </a>
                <a href="#" className="text-gray-300 hover:text-[hsl(var(--glooper-accent-blue))] transition-colors">
                  <span className="sr-only">Twitter</span>
                  <div className="w-6 h-6 bg-current"></div>
                </a>
                <a href="#" className="text-gray-300 hover:text-[hsl(var(--glooper-accent-blue))] transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <div className="w-6 h-6 bg-current"></div>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="/results" className="hover:text-white transition-colors">Results</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4">Contact Us</h3>
              <div className="space-y-2 text-gray-300">
                <p>123 Digital Avenue</p>
                <p>San Francisco, CA 94105</p>
                <p>(555) 123-4567</p>
                <p>hello@glooperdigital.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Glooper Digital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
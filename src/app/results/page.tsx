'use client';

import React from 'react';
import { CTAButton, CaseStudyCard, StatCounter, TestimonialCard } from '@/components/glooper';

const caseStudies = [
  {
    title: "E-commerce Growth Revolution",
    client: "RetailMax Solutions",
    industry: "E-commerce",
    challenge: "RetailMax was struggling with declining organic traffic and poor conversion rates. Their existing SEO strategy wasn't delivering results, and their PPC campaigns were generating high costs with minimal returns.",
    solution: "We implemented a comprehensive SEO overhaul with technical optimization, content strategy, and local SEO. Simultaneously, we restructured their PPC campaigns with advanced audience targeting and conversion optimization.",
    results: [
      { metric: "Organic Traffic", value: "340%", improvement: "increase in 6 months" },
      { metric: "Conversion Rate", value: "156%", improvement: "improvement" },
      { metric: "Revenue Growth", value: "$2.3M", improvement: "additional revenue" },
      { metric: "ROI", value: "450%", improvement: "return on investment" }
    ],
    tags: ["SEO", "PPC", "E-commerce"],
    variant: "featured"
  },
  {
    title: "SaaS Lead Generation Success",
    client: "CloudTech Pro",
    industry: "SaaS Technology",
    challenge: "CloudTech Pro needed to scale their B2B lead generation and improve the quality of leads entering their sales funnel. Their existing marketing efforts lacked cohesion and tracking.",
    solution: "We developed an integrated content marketing and lead nurturing strategy, implemented marketing automation, and optimized their conversion funnel with data-driven insights.",
    results: [
      { metric: "Lead Quality", value: "280%", improvement: "increase in qualified leads" },
      { metric: "Cost per Lead", value: "65%", improvement: "reduction" },
      { metric: "Sales Conversions", value: "190%", improvement: "increase" },
      { metric: "Pipeline Value", value: "$1.8M", improvement: "added to pipeline" }
    ],
    tags: ["Lead Generation", "Content Marketing", "B2B"]
  },
  {
    title: "Local Business Transformation",
    client: "Wellness Center Group",
    industry: "Healthcare & Wellness",
    challenge: "A multi-location wellness center needed to improve local visibility, compete with national chains, and drive more appointments across all locations.",
    solution: "We implemented a comprehensive local SEO strategy, Google My Business optimization, review management, and location-specific content marketing campaigns.",
    results: [
      { metric: "Local Visibility", value: "420%", improvement: "increase in local searches" },
      { metric: "Appointment Bookings", value: "235%", improvement: "increase" },
      { metric: "Review Rating", value: "4.8★", improvement: "average across locations" },
      { metric: "Revenue", value: "$980K", improvement: "additional yearly revenue" }
    ],
    tags: ["Local SEO", "Healthcare", "Multi-location"]
  }
];

const additionalTestimonials = [
  {
    quote: "The results exceeded our wildest expectations. Glooper Digital didn't just improve our metrics—they transformed our entire approach to digital marketing. The ROI has been phenomenal.",
    author: "David Kim",
    position: "CEO",
    company: "RetailMax Solutions",
    rating: 5
  },
  {
    quote: "Working with Glooper Digital was a game-changer for our B2B lead generation. The quality of leads and the systematic approach to nurturing prospects has revolutionized our sales process.",
    author: "Lisa Martinez",
    position: "VP of Marketing",
    company: "CloudTech Pro",
    rating: 5
  },
  {
    quote: "As a multi-location business, we needed someone who understood local SEO at scale. Glooper Digital delivered exceptional results across all our locations.",
    author: "Dr. Robert Johnson",
    position: "Owner",
    company: "Wellness Center Group",
    rating: 5
  }
];

export default function ResultsPage() {
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
            Client Results &
            <span className="block text-[hsl(var(--glooper-orange))]">Case Studies</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover how our data-driven digital marketing strategies have transformed businesses across industries, delivering exceptional growth and measurable ROI.
          </p>

          <CTAButton
            variant="secondary"
            size="lg"
            onClick={scrollToContact}
            className="bg-[hsl(var(--glooper-orange))] hover:bg-orange-600"
          >
            Get Similar Results
          </CTAButton>
        </div>
      </section>

      {/* Overall Results Stats */}
      <section className="glooper-section-sm bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold glooper-heading mb-4">
              Aggregate Client Results
            </h2>
            <p className="text-lg glooper-text-muted max-w-2xl mx-auto">
              Combined performance metrics across all client campaigns demonstrate our consistent ability to deliver exceptional outcomes.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <StatCounter
                value={12.7}
                prefix="$"
                suffix="M+"
                label="Total Revenue Generated"
                variant="large"
              />
            </div>

            <div className="text-center">
              <StatCounter
                value={385}
                suffix="%"
                label="Average Growth Rate"
                variant="large"
              />
            </div>

            <div className="text-center">
              <StatCounter
                value={420}
                suffix="+"
                label="Successful Campaigns"
                variant="large"
              />
            </div>

            <div className="text-center">
              <StatCounter
                value={98}
                suffix="%"
                label="Client Retention Rate"
                variant="large"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="glooper-section bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold glooper-heading mb-4">
              Featured Case Studies
            </h2>
            <p className="text-lg glooper-text-muted max-w-3xl mx-auto">
              Deep dives into our most successful client partnerships, showcasing the strategies, execution, and remarkable results achieved.
            </p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <div key={index} className={index === 0 ? 'lg:scale-105' : ''}>
                <CaseStudyCard
                  title={study.title}
                  client={study.client}
                  industry={study.industry}
                  challenge={study.challenge}
                  solution={study.solution}
                  results={study.results}
                  tags={study.tags}
                  variant={study.variant}
                  className={index === 0 ? 'border-2 border-[hsl(var(--glooper-orange))]' : ''}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Success */}
      <section className="glooper-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold glooper-heading mb-4">
              Success Across Industries
            </h2>
            <p className="text-lg glooper-text-muted max-w-3xl mx-auto">
              Our expertise spans multiple industries, delivering tailored strategies that work for businesses of all sizes and sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[hsl(var(--glooper-blue))] to-[hsl(var(--glooper-navy))] rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-white text-2xl">🛒</div>
              </div>
              <h3 className="text-xl font-bold glooper-heading mb-3">E-commerce</h3>
              <p className="glooper-text-muted mb-4">Driving online sales and customer acquisition</p>
              <div className="text-2xl font-bold text-[hsl(var(--glooper-orange))]">340%</div>
              <div className="text-sm glooper-text-muted">Average revenue increase</div>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[hsl(var(--glooper-blue))] to-[hsl(var(--glooper-navy))] rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-white text-2xl">💻</div>
              </div>
              <h3 className="text-xl font-bold glooper-heading mb-3">SaaS & Tech</h3>
              <p className="glooper-text-muted mb-4">B2B lead generation and customer acquisition</p>
              <div className="text-2xl font-bold text-[hsl(var(--glooper-orange))]">280%</div>
              <div className="text-sm glooper-text-muted">Lead quality improvement</div>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[hsl(var(--glooper-blue))] to-[hsl(var(--glooper-navy))] rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-white text-2xl">🏥</div>
              </div>
              <h3 className="text-xl font-bold glooper-heading mb-3">Healthcare</h3>
              <p className="glooper-text-muted mb-4">Local visibility and patient acquisition</p>
              <div className="text-2xl font-bold text-[hsl(var(--glooper-orange))]">420%</div>
              <div className="text-sm glooper-text-muted">Local search visibility increase</div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="glooper-section bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold glooper-heading mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg glooper-text-muted max-w-3xl mx-auto">
              Hear directly from business leaders who have experienced transformational growth with our digital marketing strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalTestimonials.map((testimonial, index) => (
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
      <section id="contact" className="glooper-section bg-gradient-to-r from-[hsl(var(--glooper-blue))] to-[hsl(var(--glooper-navy))] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
            Let's create a case study with your business as the success story. Our proven strategies are ready to drive exceptional results for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton
              variant="secondary"
              size="lg"
              className="bg-[hsl(var(--glooper-orange))] hover:bg-orange-600"
            >
              Start Your Success Story
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
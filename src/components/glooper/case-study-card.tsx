'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface CaseStudyResult {
  metric: string;
  value: string;
  improvement: string;
}

interface CaseStudyCardProps {
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: CaseStudyResult[];
  image?: string;
  tags?: string[];
  className?: string;
  variant?: 'default' | 'featured';
}

export function CaseStudyCard({
  title,
  client,
  industry,
  challenge,
  solution,
  results,
  image,
  tags,
  className,
  variant = 'default'
}: CaseStudyCardProps) {
  const isFeatured = variant === 'featured';

  return (
    <div
      className={cn(
        'group relative bg-white rounded-xl overflow-hidden transition-all duration-300',
        'hover:transform hover:scale-[1.02] hover:shadow-2xl',
        isFeatured
          ? 'shadow-xl border border-[hsl(var(--glooper-blue))]/20'
          : 'shadow-md border border-gray-200 hover:border-[hsl(var(--glooper-blue))]',
        className
      )}
    >
      {/* Header with image or gradient */}
      <div className={cn(
        'relative h-48 overflow-hidden',
        image
          ? 'bg-gray-100'
          : 'bg-gradient-to-r from-[hsl(var(--glooper-navy))] to-[hsl(var(--glooper-blue))]'
      )}>
        {image ? (
          <img
            src={image}
            alt={`${client} case study`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-2xl font-bold mb-2">{client}</div>
              <div className="text-blue-100">{industry}</div>
            </div>
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Featured badge */}
        {isFeatured && (
          <div className="absolute top-4 right-4 bg-[hsl(var(--glooper-orange))] text-white px-3 py-1 rounded-full text-sm font-semibold">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Title and client */}
        <div>
          <h3 className="text-xl font-bold text-[hsl(var(--glooper-navy))] group-hover:text-[hsl(var(--glooper-blue))] transition-colors duration-300 mb-2">
            {title}
          </h3>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="font-medium">{client}</span>
            <span>•</span>
            <span>{industry}</span>
          </div>
        </div>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-[hsl(var(--glooper-blue))]/10 text-[hsl(var(--glooper-blue))] text-sm rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Challenge & Solution */}
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
            <p className="text-gray-600 text-sm leading-relaxed">{challenge}</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
            <p className="text-gray-600 text-sm leading-relaxed">{solution}</p>
          </div>
        </div>

        {/* Results */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Results</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {results.map((result, index) => (
              <div
                key={index}
                className="text-center p-4 bg-gradient-to-br from-[hsl(var(--glooper-blue))]/5 to-[hsl(var(--glooper-navy))]/5 rounded-lg"
              >
                <div className="text-2xl font-bold text-[hsl(var(--glooper-navy))] mb-1">
                  {result.value}
                </div>
                <div className="text-xs text-gray-600 mb-1">{result.metric}</div>
                <div className="text-xs text-[hsl(var(--glooper-orange))] font-medium">
                  {result.improvement}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="pt-4 border-t border-gray-100">
          <button className="w-full text-[hsl(var(--glooper-blue))] font-semibold py-2 hover:text-[hsl(var(--glooper-navy))] transition-colors duration-300 text-sm">
            View Full Case Study →
          </button>
        </div>
      </div>
    </div>
  );
}
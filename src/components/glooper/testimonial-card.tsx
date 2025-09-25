'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  avatar?: string;
  rating?: number;
  className?: string;
}

export function TestimonialCard({
  quote,
  author,
  position,
  company,
  avatar,
  rating = 5,
  className
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        'group relative bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-md border border-[hsl(var(--glooper-accent-blue))]/20',
        'transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105',
        'hover:border-[hsl(var(--glooper-accent-blue))]/40 hover:bg-white',
        className
      )}
    >
      {/* Quote mark */}
      <div className="absolute -top-4 left-8">
        <div className="w-8 h-8 bg-gradient-to-r from-[hsl(var(--glooper-accent-orange))] to-[hsl(var(--glooper-accent-orange))]/90 rounded-full flex items-center justify-center shadow-lg">
          <svg
            className="w-4 h-4 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
            <path d="M15.583 17.321c-1.03-1.094-1.583-2.321-1.583-4.31 0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
          </svg>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-4 pt-2">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={cn(
              'w-4 h-4',
              i < rating
                ? 'text-[hsl(var(--glooper-accent-orange))] fill-current'
                : 'text-[hsl(var(--glooper-gray-medium))] fill-current'
            )}
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-[hsl(var(--glooper-accent-navy))]/80 italic mb-6 leading-relaxed text-lg font-medium">
        "{quote}"
      </blockquote>

      {/* Author info */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          {avatar ? (
            <img
              src={avatar}
              alt={`${author} avatar`}
              className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
            />
          ) : (
            <div className="w-12 h-12 bg-gradient-to-br from-[hsl(var(--glooper-accent-blue))] to-[hsl(var(--glooper-accent-navy))] rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-semibold text-lg">
                {author.charAt(0)}
              </span>
            </div>
          )}
        </div>

        {/* Author details */}
        <div>
          <h4 className="font-semibold text-[hsl(var(--glooper-accent-navy))] group-hover:text-[hsl(var(--glooper-accent-blue))] transition-colors duration-300">
            {author}
          </h4>
          <p className="text-sm text-[hsl(var(--glooper-accent-navy))]/60">
            {position} at {company}
          </p>
        </div>
      </div>

      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--glooper-accent-blue))]/8 to-[hsl(var(--glooper-accent-orange))]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
}
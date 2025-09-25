'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features?: string[];
  className?: string;
  variant?: 'default' | 'highlighted';
}

export function ServiceCard({
  icon,
  title,
  description,
  features,
  className,
  variant = 'default'
}: ServiceCardProps) {
  const isHighlighted = variant === 'highlighted';

  return (
    <div
      className={cn(
        'group relative p-8 rounded-xl transition-all duration-300 hover:transform hover:scale-105',
        isHighlighted
          ? 'bg-gradient-to-br from-[hsl(var(--glooper-navy))] to-[hsl(var(--glooper-blue))] text-white shadow-xl'
          : 'bg-white border border-gray-200 hover:shadow-xl hover:border-[hsl(var(--glooper-blue))]',
        className
      )}
    >
      {/* Icon */}
      <div className={cn(
        'flex items-center justify-center w-16 h-16 rounded-lg mb-6 transition-all duration-300',
        isHighlighted
          ? 'bg-white/20 text-white group-hover:bg-white/30'
          : 'bg-[hsl(var(--glooper-blue))]/10 text-[hsl(var(--glooper-blue))] group-hover:bg-[hsl(var(--glooper-blue))]/20'
      )}>
        <div className="w-8 h-8">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className={cn(
        'text-xl font-bold mb-4 transition-colors duration-300',
        isHighlighted
          ? 'text-white'
          : 'text-[hsl(var(--glooper-navy))] group-hover:text-[hsl(var(--glooper-blue))]'
      )}>
        {title}
      </h3>

      {/* Description */}
      <p className={cn(
        'mb-6 leading-relaxed',
        isHighlighted
          ? 'text-white/90'
          : 'text-gray-600'
      )}>
        {description}
      </p>

      {/* Features */}
      {features && features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className={cn(
                'w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0',
                isHighlighted
                  ? 'bg-white/20'
                  : 'bg-[hsl(var(--glooper-blue))]/10'
              )}>
                <div className={cn(
                  'w-2 h-2 rounded-full',
                  isHighlighted
                    ? 'bg-white'
                    : 'bg-[hsl(var(--glooper-blue))]'
                )}></div>
              </div>
              <span className={cn(
                'text-sm leading-relaxed',
                isHighlighted
                  ? 'text-white/80'
                  : 'text-gray-600'
              )}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      )}

      {/* Hover overlay effect */}
      {!isHighlighted && (
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--glooper-blue))]/5 to-[hsl(var(--glooper-navy))]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
    </div>
  );
}
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface StatCounterProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  variant?: 'default' | 'large';
}

export function StatCounter({
  value,
  label,
  suffix = '',
  prefix = '',
  duration = 2000,
  className,
  variant = 'default'
}: StatCounterProps) {
  const [currentValue, setCurrentValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (isVisible) {
      let startTime: number;
      const startValue = 0;
      const endValue = value;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        // Ease-out animation
        const easeOutProgress = 1 - Math.pow(1 - progress, 3);
        const newValue = startValue + (endValue - startValue) * easeOutProgress;

        setCurrentValue(Math.floor(newValue));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCurrentValue(endValue);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isVisible, value, duration]);

  const isLarge = variant === 'large';

  return (
    <div
      ref={elementRef}
      className={cn(
        'text-center group transition-all duration-300',
        className
      )}
    >
      {/* Counter value */}
      <div className={cn(
        'font-bold text-[hsl(var(--glooper-navy))] transition-all duration-300 group-hover:text-[hsl(var(--glooper-blue))]',
        isLarge ? 'text-5xl md:text-6xl mb-4' : 'text-3xl md:text-4xl mb-2'
      )}>
        {prefix}
        <span className="tabular-nums">
          {currentValue.toLocaleString()}
        </span>
        {suffix}
      </div>

      {/* Label */}
      <div className={cn(
        'font-medium text-gray-600 transition-colors duration-300 group-hover:text-gray-800',
        isLarge ? 'text-lg md:text-xl' : 'text-sm md:text-base'
      )}>
        {label}
      </div>

      {/* Animated underline */}
      <div className="relative mt-3">
        <div className="w-12 h-1 bg-[hsl(var(--glooper-gray-light))] rounded-full mx-auto">
          <div
            className="h-full bg-gradient-to-r from-[hsl(var(--glooper-blue))] to-[hsl(var(--glooper-orange))] rounded-full transition-all duration-500 group-hover:w-16"
            style={{
              width: isVisible ? '100%' : '0%',
              transitionDelay: isVisible ? '0.5s' : '0s'
            }}
          />
        </div>
      </div>
    </div>
  );
}

// Preset configurations for common stats
export const StatCounterPresets = {
  clients: { suffix: '+', label: 'Happy Clients' },
  projects: { suffix: '+', label: 'Projects Completed' },
  revenue: { prefix: '$', suffix: 'M+', label: 'Revenue Generated' },
  growth: { suffix: '%', label: 'Average Growth' },
  roi: { suffix: '%', label: 'Average ROI' },
  years: { suffix: '+', label: 'Years Experience' },
  team: { suffix: '+', label: 'Team Members' },
  conversions: { suffix: '%', label: 'Conversion Rate' }
};
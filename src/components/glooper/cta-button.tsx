'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
}

export function CTAButton({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className,
  ...props
}: CTAButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed border-0';

  const variants = {
    primary: 'bg-gradient-to-r from-[hsl(var(--glooper-accent-blue))] to-[hsl(var(--glooper-accent-blue))]/90 text-white hover:from-[hsl(var(--glooper-accent-blue))]/90 hover:to-[hsl(var(--glooper-accent-navy))] hover:shadow-xl hover:shadow-[hsl(var(--glooper-accent-blue))]/25 focus:ring-[hsl(var(--glooper-accent-blue))]',
    secondary: 'bg-gradient-to-r from-[hsl(var(--glooper-accent-orange))] to-[hsl(var(--glooper-accent-orange))]/90 text-white hover:from-[hsl(var(--glooper-accent-orange))]/90 hover:to-[hsl(14_90%_55%)] hover:shadow-xl hover:shadow-[hsl(var(--glooper-accent-orange))]/25 focus:ring-[hsl(var(--glooper-accent-orange))]',
    outline: 'bg-white/90 backdrop-blur-sm text-[hsl(var(--glooper-accent-navy))] border-2 border-[hsl(var(--glooper-accent-blue))]/60 hover:bg-[hsl(var(--glooper-accent-blue))] hover:text-white hover:border-[hsl(var(--glooper-accent-blue))] hover:shadow-lg hover:shadow-[hsl(var(--glooper-accent-blue))]/20 focus:ring-[hsl(var(--glooper-accent-blue))]'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-md',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-xl'
  };

  const Component = href ? 'a' : 'button';
  const additionalProps = href ? { href } : {};

  return (
    <Component
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      {...additionalProps}
      {...props}
    >
      {children}
    </Component>
  );
}
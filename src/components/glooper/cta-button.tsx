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
    primary: 'bg-[hsl(var(--glooper-navy))] text-white hover:bg-[hsl(var(--glooper-blue))] hover:shadow-lg hover:shadow-blue-200 focus:ring-blue-500',
    secondary: 'bg-[hsl(var(--glooper-orange))] text-white hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-200 focus:ring-orange-500',
    outline: 'bg-transparent text-[hsl(var(--glooper-navy))] border-2 border-[hsl(var(--glooper-navy))] hover:bg-[hsl(var(--glooper-navy))] hover:text-white focus:ring-blue-500'
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
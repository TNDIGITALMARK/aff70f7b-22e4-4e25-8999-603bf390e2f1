'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { CTAButton } from './cta-button';

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/', id: 'home' },
    { name: 'Services', href: '/services', id: 'services' },
    { name: 'Results', href: '/results', id: 'results' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    if (sectionId.startsWith('#')) {
      const element = document.getElementById(sectionId.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
          : 'bg-transparent',
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <img
              src="/generated/glooper-digital-logo.png"
              alt="Glooper Digital"
              className="h-8 lg:h-10 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.id}>
                {link.href.startsWith('#') ? (
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className={cn(
                      'font-medium transition-all duration-300 hover:text-[hsl(var(--glooper-blue))]',
                      'relative group py-2',
                      isScrolled
                        ? 'text-gray-700 hover:text-[hsl(var(--glooper-blue))]'
                        : 'text-gray-700 hover:text-[hsl(var(--glooper-blue))]'
                    )}
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[hsl(var(--glooper-blue))] transition-all duration-300 group-hover:w-full" />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      'font-medium transition-all duration-300 hover:text-[hsl(var(--glooper-blue))]',
                      'relative group py-2',
                      isScrolled
                        ? 'text-gray-700 hover:text-[hsl(var(--glooper-blue))]'
                        : 'text-gray-700 hover:text-[hsl(var(--glooper-blue))]'
                    )}
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[hsl(var(--glooper-blue))] transition-all duration-300 group-hover:w-full" />
                  </Link>
                )}
              </div>
            ))}

            <CTAButton
              variant="primary"
              size="sm"
              onClick={() => scrollToSection('#contact')}
              className="ml-4"
            >
              Start Your Project
            </CTAButton>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              'md:hidden p-2 rounded-lg transition-colors duration-300',
              'hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--glooper-blue))]',
              isScrolled ? 'text-gray-700' : 'text-gray-700'
            )}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span
                className={cn(
                  'w-full h-0.5 bg-current transition-all duration-300',
                  isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
                )}
              />
              <span
                className={cn(
                  'w-full h-0.5 bg-current transition-all duration-300',
                  isMobileMenuOpen ? 'opacity-0' : ''
                )}
              />
              <span
                className={cn(
                  'w-full h-0.5 bg-current transition-all duration-300',
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
            isMobileMenuOpen
              ? 'max-h-96 opacity-100 pb-6'
              : 'max-h-0 opacity-0'
          )}
        >
          <div className="flex flex-col space-y-4 pt-4">
            {navLinks.map((link) => (
              <div key={`mobile-${link.id}`}>
                {link.href.startsWith('#') ? (
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="block w-full text-left font-medium text-gray-700 hover:text-[hsl(var(--glooper-blue))] transition-colors duration-300 py-2"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="block font-medium text-gray-700 hover:text-[hsl(var(--glooper-blue))] transition-colors duration-300 py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}

            <div className="pt-4">
              <CTAButton
                variant="primary"
                size="sm"
                onClick={() => {
                  scrollToSection('#contact');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full"
              >
                Start Your Project
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
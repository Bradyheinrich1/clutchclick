'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import CalendlyLink from './CalendlyLink';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Services', href: '/services' },
    { name: 'Why Us', href: '/why-us' },
    { name: 'Solution', href: '/solution' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <header className="absolute w-full z-50">
      <nav className="mx-auto flex items-center justify-between px-8 lg:px-12 py-6" aria-label="Global">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center">
            <Image
              src="/clutchclick-whitelogo copy.png"
              alt="ClutchClick"
              width={180}
              height={50}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex items-center gap-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-5 py-2.5 text-base font-medium text-white hover:text-white/90"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <CalendlyLink
            className="strategy-button-shadow flex justify-center items-center px-6 py-2.5 rounded-[99px] bg-white text-black text-base font-medium hover:bg-white/90 transition-colors"
          >
            Get in Touch
          </CalendlyLink>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-white hover:text-white/80"
          >
            <span className="sr-only">Open main menu</span>
            {!isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-600">
          <div className="space-y-1 px-6 pb-4 pt-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-5 py-2.5 text-lg font-medium text-white hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <CalendlyLink
              className="block px-5 py-2.5 mt-3 text-lg font-medium text-white bg-white text-black rounded-[99px] hover:bg-white/90 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Get in Touch
            </CalendlyLink>
          </div>
        </div>
      )}
    </header>
  );
} 
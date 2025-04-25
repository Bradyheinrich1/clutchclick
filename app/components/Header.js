'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

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
      <nav className="mx-auto flex items-center justify-between px-6 py-4" aria-label="Global">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center">
            <Image
              src="/clutchclick-whitelogo copy.png"
              alt="ClutchClick"
              width={140}
              height={40}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex items-center gap-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-white hover:text-white/90 rounded-full bg-white/10"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="rounded-full bg-blue-400/70 px-5 py-2 text-sm font-medium text-white hover:bg-blue-400/60"
          >
            Contact
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
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
        <div className="md:hidden bg-blue-600/95 backdrop-blur-sm">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-base font-medium text-white hover:bg-white/10 rounded-full"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block px-4 py-2 mt-2 text-base font-medium text-white bg-blue-400/70 hover:bg-blue-400/60 rounded-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
} 
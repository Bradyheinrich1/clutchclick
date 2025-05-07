'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import CalendlyLink from './CalendlyLink';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const solutionsTimeout = useRef();
  const solutionsButtonRef = useRef();
  const solutionsMenuRef = useRef();

  const solutions = [
    { name: 'Startups', href: '/solutions/startups', icon: '/startupicon.svg' },
    { name: 'Brands', href: '/solutions/brands', icon: '/EcommerceIcon.svg' },
    { name: 'Local Business', href: '/localbusiness', icon: '/LocalBusinessIcon.svg' },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        solutionsMenuRef.current &&
        !solutionsMenuRef.current.contains(event.target) &&
        solutionsButtonRef.current &&
        !solutionsButtonRef.current.contains(event.target)
      ) {
        setIsSolutionsOpen(false);
      }
    }
    if (isSolutionsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSolutionsOpen]);

  function handleSolutionsKeyDown(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsSolutionsOpen((open) => !open);
    } else if (e.key === 'Escape') {
      setIsSolutionsOpen(false);
    }
  }

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

        {/* Desktop Navigation - right aligned */}
        <div className="hidden md:flex flex-1 justify-end">
          <div className="flex items-center gap-x-2 relative mr-8">
            {/* Solutions Dropdown - best practice wrapper */}
            <div
              className="relative"
              onMouseEnter={() => {
                clearTimeout(solutionsTimeout.current);
                setIsSolutionsOpen(true);
              }}
              onMouseLeave={() => {
                solutionsTimeout.current = setTimeout(() => setIsSolutionsOpen(false), 120);
              }}
            >
              <button
                ref={solutionsButtonRef}
                className="px-5 py-2.5 text-lg font-medium text-white hover:text-white/90 flex items-center gap-1"
                aria-haspopup="menu"
                aria-expanded={isSolutionsOpen}
                aria-controls="solutions-menu"
                type="button"
                tabIndex={0}
                onKeyDown={handleSolutionsKeyDown}
                onClick={() => setIsSolutionsOpen((open) => !open)}
              >
                Solutions
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              {isSolutionsOpen && (
                <div
                  id="solutions-menu"
                  ref={solutionsMenuRef}
                  role="menu"
                  aria-label="Solutions submenu"
                  className="absolute left-1/2 -translate-x-1/2 mt-2 w-[216px] bg-white rounded-md shadow-lg z-50"
                >
                  {solutions.map((item, idx) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-3 px-6 py-3 my-1 text-gray-900 hover:bg-gray-100 text-base"
                      role="menuitem"
                      tabIndex={0}
                      onClick={() => setIsSolutionsOpen(false)}
                      onKeyDown={(e) => {
                        if (e.key === 'Escape') setIsSolutionsOpen(false);
                        if (e.key === 'Tab' && idx === solutions.length - 1) setIsSolutionsOpen(false);
                      }}
                    >
                      <Image src={item.icon} alt="" width={28} height={28} className="shrink-0" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {/* Plans & Pricing */}
            <Link
              href="/pricing"
              className="px-5 py-2.5 text-lg font-medium text-white hover:text-white/90"
            >
              Plans & Pricing
            </Link>
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
            {/* Solutions with sub-links */}
            <div>
              <span className="block px-5 py-2.5 text-lg font-medium text-white">Solutions</span>
              <div className="pl-4">
                {solutions.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-5 py-2 text-base font-medium text-white hover:bg-white/10"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            {/* Plans & Pricing */}
            <Link
              href="/pricing"
              className="block px-5 py-2.5 text-lg font-medium text-white hover:bg-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Plans & Pricing
            </Link>
            <CalendlyLink
              className="block px-5 py-2.5 mt-3 text-lg font-medium text-center bg-white text-black rounded-[99px] hover:bg-white/90 transition-colors"
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
'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden min-h-screen">
      {/* Background SVG */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/clutchclickbg.svg"
          alt="Background pattern"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-32 pb-24 sm:pt-40 sm:pb-32 lg:pt-48 flex flex-col items-center text-center">
        {/* AI Service Pill */}
        <div className="ai-service-pill flex justify-center items-center px-4 py-2 gap-2.5 rounded-[99px] border border-white/10 mb-12 text-lg font-light text-white">
          AI powered marketing service
        </div>

        {/* Main Heading */}
        <h1 className="max-w-4xl text-4xl font-medium tracking-tight text-white sm:text-6xl mb-6">
          We Fill Your Website With Content That Fuels Your Growth And{' '}
          <span className="text-gray-900">Boosts Your Revenue</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-lg leading-8 text-white/90 mb-10">
          AI-enhanced growth marketing to craft content that captivates, converts, and 
          scales your business sustainably with expert precision.
        </p>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="strategy-button-shadow flex justify-center items-center px-6 py-3 gap-2.5 rounded-[99px] bg-white border border-[#78B8F0] text-black text-[18px] font-normal leading-[150%] tracking-[-0.36px] hover:bg-white/90 transition-colors font-[family-name:var(--font-geist-sans)]"
        >
          Let's Talk Strategy
        </Link>
      </div>
    </div>
  );
} 
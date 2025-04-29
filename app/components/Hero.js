'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative isolate md:overflow-hidden overflow-visible md:min-h-screen min-h-[600px] bg-[#2B8AF2]">
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

      <div className="mx-auto max-w-7xl px-6 pt-16 md:pt-20 pb-16 flex flex-col items-center text-center relative z-10">
        {/* AI Service Pill */}
        <div className="ai-service-pill flex justify-center items-center px-8 py-2.5 rounded-[99px] bg-white/20 backdrop-blur-[20px] mt-8 mb-10 text-base font-light text-white">
          Human Crafted, AI-Enhanced
        </div>

        {/* Hero Text with minimal horizontal gap on mobile only */}
        <div className="w-full px-[5px] md:px-0">
          {/* Main Heading */}
          <div className="max-w-full md:max-w-[1200px] mx-auto">
            <h1 className="text-white text-center font-geist text-[42px] md:text-[64px] font-semibold leading-[110%] tracking-[-1.2px] md:tracking-[-2.72px] capitalize mb-8">
              <span className="md:hidden">
                AI-enhanced growth marketing <span className="text-black">for your startup</span>
              </span>
              <span className="hidden md:inline">
                AI-enhanced growth marketing
                <br />
                <span className="text-black">for your startup</span>
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="max-w-full md:max-w-2xl text-[18px] leading-[150%] text-white/90 mb-12 mx-auto">
            Our proven growth marketing SEO strategies leverage fine tuned AI models to assists our writers and growth marketers in authority building and the crafting of content that scales your business sustainably.
          </p>
        </div>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="strategy-button-shadow flex justify-center items-center px-8 py-4 gap-2.5 rounded-[99px] bg-white text-black text-[18px] font-normal leading-[150%] hover:bg-white/90 transition-colors shadow-[0_8px_16px_rgba(0,0,0,0.1)] mb-16"
        >
          Let's Talk Strategy
        </Link>

        {/* Mobile Grey Overlap Section */}
        <div className="block md:hidden absolute left-0 right-0 bottom-[-50px] h-[100px] bg-[#EBEEF1] rounded-t-[32px] z-20" />

        {/* Analytics Dashboard Image */}
        <div className="relative w-full hidden md:block" style={{ height: '340px' }}>
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[-160px] w-[90%] max-w-[1200px] z-30">
            <Image
              src="/herograph.png"
              alt="Analytics dashboard"
              width={1200}
              height={600}
              className="w-full"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
} 
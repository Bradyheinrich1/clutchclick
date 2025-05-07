'use client';

import Link from 'next/link';
import Image from 'next/image';
import CalendlyLink from './CalendlyLink';
import Clients from './Clients';

export default function InnerHero() {
  return (
    <div className="relative isolate md:overflow-hidden overflow-visible min-h-screen bg-[#ebeef1] overflow-hidden">
      {/* Blue bar under header/nav */}
      <div className="w-full h-[64px] md:h-[88px] bg-[#2B8AF2] absolute top-0 left-0 z-0" />

      <div className="mx-auto max-w-7xl w-full px-6 pt-16 md:pt-20 pb-16 flex flex-col md:flex-row items-center justify-center text-left relative z-10 gap-8 h-full min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-88px)]">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-start justify-center w-full mt-[80px]">
          {/* Main Heading */}
          <div className="max-w-full md:max-w-[600px] w-full">
            <h1 className="text-black text-left font-geist text-[36px] md:text-[54px] font-semibold leading-[115%] tracking-[-1px] md:tracking-[-1.5px] mb-4 mt-0">
              Boosting Local Online Presence, <span className="text-[#2B8AF2]">Made Easy</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="max-w-full md:max-w-[480px] text-[18px] leading-[150%] text-black/90 mb-12 text-left">
            Grow your local business's online presence with services engineered for local success. Our proven strategies help you attract more customers, build trust in your community, and stand out from the competition.
          </p>

          {/* CTA Button */}
          <CalendlyLink className="strategy-button-shadow flex justify-center md:justify-start items-center px-8 py-4 gap-2.5 rounded-[99px] bg-white text-black text-[18px] font-normal leading-[150%] hover:bg-white/90 transition-colors shadow-[0_8px_16px_rgba(0,0,0,0.1)]">
            Let's Talk Strategy
          </CalendlyLink>
        </div>

        {/* Right: Hero Image */}
        <div className="flex-1 w-full flex justify-center items-center mt-12 md:mt-0 md:pr-4">
          <div className="w-full max-w-[400px]">
            <img
              src="/placeholder.png"
              alt="Hero placeholder"
              width={400}
              height={400}
              className="rounded-xl object-cover w-full h-auto shadow-lg bg-gray-200"
            />
          </div>
        </div>
      </div>
      <Clients />
    </div>
  );
} 
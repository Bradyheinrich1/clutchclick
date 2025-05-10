'use client';

import Link from 'next/link';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import CalendlyLink from './CalendlyLink';

export default function LocalHero() {
  return (
    <div className="relative isolate md:overflow-hidden overflow-visible bg-[#EBEEF1] -mt-[125px] mb-[50px]">
      <div className="mx-auto max-w-7xl px-6 pt-16 md:pt-20 pb-0 flex flex-col items-center text-center relative z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-0 w-[692px] md:w-[1037px] pointer-events-none select-none">
          <Image
            src="/lastonenewimageraybeams.svg"
            alt=""
            width={1037}
            height={692}
            className="w-full h-auto"
            priority
            draggable={false}
          />
        </div>

        {/* Local Business Pill */}
        <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-6 shadow-lg z-10 mt-[100px]">
          <span className="inline-block w-5 h-5 bg-[#f5f6fa] rounded-full flex items-center justify-center">
            <Image src="/solutionsbulb.svg" alt="Services icon" width={18} height={18} />
          </span>
          <span className="text-[#303133] font-geist text-[15px] font-normal">Local Business Growth</span>
        </div>

        {/* Hero Text with minimal horizontal gap on mobile only */}
        <div className="w-full px-[5px] md:px-0">
          {/* Main Heading */}
          <div className="max-w-full md:max-w-[1200px] mx-auto">
            <h1 className="text-[#303133] text-center font-geist text-[42px] md:text-[70px] font-semibold leading-[110%] tracking-[-1.2px] md:tracking-[-2.72px] capitalize mb-8 z-10 relative">
              Boosting Local Online<br />
              <span className="text-[#2B8AF2]">Presence</span> <span className="text-[#2B8AF2]">Made Easy</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="max-w-full md:max-w-2xl text-[18px] leading-[150%] text-[#303133]/90 mb-12 mx-auto">
            Grow your local business's online presence with services engineered for local success. Our proven strategies help you attract more customers, build trust in your community, and stand out from the competition.
          </p>
        </div>

        {/* CTA Button */}
        <CalendlyLink className="flex justify-center items-center px-8 py-4 gap-2.5 rounded-[99px] bg-[#2B8AF2] text-white text-[18px] font-normal leading-[150%] hover:bg-[#2B8AF2]/90 transition-colors shadow-lg mb-5">
          Let's Talk Strategy
        </CalendlyLink>
      </div>
    </div>
  );
} 
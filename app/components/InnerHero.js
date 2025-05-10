'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function InnerHero() {
  return (
    <div className="relative isolate md:overflow-hidden overflow-visible bg-[#ebeef1] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          opacity: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
          y: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
        }}
        className="mx-auto max-w-7xl w-full px-6 pt-8 md:pt-12 pb-0 flex flex-col md:flex-row items-center justify-center text-left relative z-10 gap-8 h-full md:pl-[40px]"
      >
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-start justify-center w-full">
          {/* Main Heading */}
          <div className="max-w-full md:max-w-[600px] w-full">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-4 shadow-lg">
              <Image
                src="/lostsignalicon.png"
                alt="Info icon"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <span className="text-[#303133] font-geist text-[15px] font-normal">Lost Local Signal</span>
            </div>
            
            <h1 className="text-[42px] font-semibold mb-3 font-geist leading-[106%] tracking-[-1.92px] text-[#303133] md:text-[42px] md:tracking-[-1.92px] text-[32px] tracking-[-1.28px]">
              Is Your Business Getting <span className="text-blue-500">Overlooked Online?</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="font-geist text-[16px] leading-[150%] tracking-[-0.48px] text-[#757880] font-normal mb-8">
            Many local businesses lose customers every day because they're invisible in search, have a poor digital reputation, or simply aren't reaching the right people. Don't let yours be one of them.
          </p>

          {/* Feature List */}
          <div className="space-y-6 mb-8">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 flex items-center justify-center">
                  <Image
                    src="/bulletpointx.png"
                    alt="Feature icon"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-geist text-[18px] font-semibold leading-[150%] tracking-[-0.72px] text-[#303133] mb-1">Low Google Search Ranking</h3>
                <p className="font-geist text-[16px] leading-[150%] tracking-[-0.48px] text-[#757880] font-normal">
                  Your competitors are showing up first—while your business is buried on page two (or worse).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 flex items-center justify-center">
                  <Image
                    src="/bulletpointx.png"
                    alt="Feature icon"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-geist text-[18px] font-semibold leading-[150%] tracking-[-0.72px] text-[#303133] mb-1">Poor Digital Reputation</h3>
                <p className="font-geist text-[16px] leading-[150%] tracking-[-0.48px] text-[#757880] font-normal">
                  Negative reviews or a lack of positive feedback can scare away potential customers before you even get a chance.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 flex items-center justify-center">
                  <Image
                    src="/bulletpointx.png"
                    alt="Feature icon"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-geist text-[18px] font-semibold leading-[150%] tracking-[-0.72px] text-[#303133] mb-1">No Local Visibility</h3>
                <p className="font-geist text-[16px] leading-[150%] tracking-[-0.48px] text-[#757880] font-normal">
                  If your website isn't bringing in new customers, you're missing out on valuable local business.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="flex-1 w-full flex justify-center items-center mt-8 md:mt-0 md:pr-4">
          <img
            src="/localsideimage.png"
            alt="Local business marketing illustration"
            width={300}
            height={300}
            className="rounded-xl object-cover w-full h-auto mt-[70px]"
          />
        </div>
      </motion.div>
    </div>
  );
} 
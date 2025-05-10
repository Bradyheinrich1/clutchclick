"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="mt-6 md:mt-0 py-6 md:py-12 bg-[#ebeef1]">
      <div className="container mx-auto px-6 sm:px-8 md:max-w-[1250px]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{
            opacity: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
            y: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
          }}
          className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-12"
        >
          {/* Left Column - Content */}
          <div className="flex-1 max-w-xl">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-4 shadow-lg">
              <Image
                src="/info.svg"
                alt="Info icon"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <span className="text-[#303133] font-geist text-[15px] font-normal">AI-Powered SEO & Link Building</span>
            </div>
            
            <h2 className="text-[42px] font-semibold mb-3 font-geist leading-[106%] tracking-[-1.92px] text-[#303133] md:text-[42px] md:tracking-[-1.92px] text-[32px] tracking-[-1.28px]">
              A Smarter Way to
              <br />
              <span className="text-blue-500">Grow with SEO</span>
            </h2>
            
            <p className="font-geist text-[16px] leading-[150%] tracking-[-0.48px] text-[#757880] font-normal mb-8">
              At Clutch Click, we blend the speed of AI with the precision of human strategy to
              create scalable SEO content that delivers.
            </p>

            {/* Feature List */}
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <Image
                      src="/Pin.svg"
                      alt="Feature icon"
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-geist text-[18px] font-semibold leading-[150%] tracking-[-0.72px] text-[#303133] mb-1">Intent-Driven Keyword Research</h3>
                  <p className="font-geist text-[16px] leading-[150%] tracking-[-0.48px] text-[#757880] font-normal">
                    We identify high-impact keyword opportunities aligned with your target
                    audience and buying journey.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <Image
                      src="/Pin.svg"
                      alt="Feature icon"
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-geist text-[18px] font-semibold leading-[150%] tracking-[-0.72px] text-[#303133] mb-1">Smart Link Building Campaigns</h3>
                  <p className="font-geist text-[16px] leading-[150%] tracking-[-0.48px] text-[#757880] font-normal">
                    We leverage AI to discover high-value backlink opportunities and execute scalable outreach, ensuring every link supports long-term SEO growth.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <Image
                      src="/Pin.svg"
                      alt="Feature icon"
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-geist text-[18px] font-semibold leading-[150%] tracking-[-0.72px] text-[#303133] mb-1">Built to Scale</h3>
                  <p className="font-geist text-[16px] leading-[150%] tracking-[-0.48px] text-[#757880] font-normal">
                    Our process is 10x more efficient — delivering premium SEO content
                    faster and more affordably than traditional methods.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="w-full md:flex-1 relative flex items-center justify-center pt-8 md:pt-0 md:mt-[40px]">
            <div className="relative w-[calc(100%-20px)] max-w-[900px] md:max-w-[1250px] flex items-center justify-center">
              <Image
                src="/seo icon section.svg"
                alt="SEO Features Illustration"
                width={1250}
                height={1250}
                className="w-full h-auto drop-shadow-2xl"
                style={{
                  filter: 'drop-shadow(0px 25px 40px rgba(0, 0, 0, 0.1))'
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 
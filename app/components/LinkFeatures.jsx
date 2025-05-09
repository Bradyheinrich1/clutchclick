"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';

const LinkFeatures = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-6 md:py-12 bg-[#ebeef1]">
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
          {/* Content Section */}
          <div className="w-full md:flex-1 max-w-xl order-1 md:order-2">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-4 shadow-lg">
              <Image
                src="/linkbuildingicon.svg"
                alt="Link building icon"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <span className="text-[#303133] font-geist text-[15px] font-normal">AI platform mentions & citations</span>
            </div>
            
            <h2 className="text-[42px] font-semibold mb-3 font-geist leading-[106%] tracking-[-1.92px] text-[#303133] md:text-[42px] md:tracking-[-1.92px] text-[32px] tracking-[-1.28px]">
              Get your brand mentioned
              <br />
              by <span className="text-blue-500">
                <TypeAnimation
                  sequence={[
                    'ChatGPT',
                    3000,
                    'Perplexity',
                    3000,
                    'Google AI Overviews',
                    3000,
                    'Microsoft Copilot',
                    3000,
                  ]}
                  wrapper="span"
                  speed={30}
                  repeat={Infinity}
                />
              </span>
            </h2>
            
            <p className="font-geist text-[16px] leading-[150%] tracking-[-0.48px] text-[#757880] font-normal mb-8">
              We don't just create content — we ensure your brand gets mentioned in AI responses.
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
                  <h3 className="font-geist text-[18px] font-semibold leading-[150%] tracking-[-0.72px] text-[#303133] mb-1">AI-Optimized Content Strategy</h3>
                  <p className="font-geist text-[16px] leading-[150%] tracking-[-0.48px] text-[#757880] font-normal">
                    We craft content specifically designed to be cited by AI platforms, ensuring your brand appears in relevant responses.
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
                  <h3 className="font-geist text-[18px] font-semibold leading-[150%] tracking-[-0.72px] text-[#303133] mb-1">Authority Building</h3>
                  <p className="font-geist text-[16px] leading-[150%] tracking-[-0.48px] text-[#757880] font-normal">
                    We establish your brand as a trusted source that AI platforms consistently reference for accurate information.
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
                  <h3 className="font-geist text-[18px] font-semibold leading-[150%] tracking-[-0.72px] text-[#303133] mb-1">Cross-Platform Visibility</h3>
                  <p className="font-geist text-[16px] leading-[150%] tracking-[-0.48px] text-[#757880] font-normal">
                    Our strategies ensure your brand gets mentioned across ChatGPT, Perplexity, Google AI, and Microsoft Copilot.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:flex-1 relative flex items-center justify-center pt-8 md:pt-0 order-2 md:order-1 md:mt-[20px]">
            <div className="relative w-[calc(100%-20px)] max-w-[900px] md:max-w-[1250px] flex items-center justify-center">
              <Image
                src="/AEOserviceIcon.svg"
                alt="Link Building Features Illustration"
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

export default LinkFeatures; 
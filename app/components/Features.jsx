import React from 'react';
import Image from 'next/image';

const Features = () => {
  return (
    <section className="py-16 bg-[#ebeef1]">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row items-start justify-between gap-16">
          {/* Left Column - Content */}
          <div className="flex-1 max-w-xl">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-6 shadow-lg">
              <Image
                src="/info.svg"
                alt="Info icon"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <span className="text-[#303133] font-geist text-[15px] font-normal">How we do it</span>
            </div>
            
            <h2 className="text-[42px] font-semibold mb-5 font-geist leading-[106%] tracking-[-1.92px] text-[#303133] md:text-[42px] md:tracking-[-1.92px] text-[32px] tracking-[-1.28px]">
              A Smarter Way to
              <br />
              <span className="text-blue-500">Grow with SEO</span>
            </h2>
            
            <p className="font-geist text-[16px] leading-[150%] tracking-[-0.48px] text-[#757880] font-normal mb-12">
              At Clutch Click, we blend the speed of AI with the precision of human strategy to
              create scalable SEO content that delivers.
            </p>

            {/* Feature List */}
            <div className="space-y-8">
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
                  <h3 className="font-geist text-[18px] font-semibold leading-[150%] tracking-[-0.72px] text-[#303133] mb-1">Engaging, Authoritative Content</h3>
                  <p className="font-geist text-[16px] leading-[150%] tracking-[-0.48px] text-[#757880] font-normal">
                    AI creates first drafts, but our experts refine every word to ensure
                    clarity, credibility, and performance.
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
          <div className="flex-1 relative flex items-center justify-end pt-12 pl-12">
            <div className="relative w-full max-w-[900px] flex items-center justify-center">
              <Image
                src="/seo icon section.svg"
                alt="SEO Features Illustration"
                width={900}
                height={900}
                className="w-full h-auto drop-shadow-2xl"
                style={{
                  filter: 'drop-shadow(0px 25px 40px rgba(0, 0, 0, 0.1))'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 
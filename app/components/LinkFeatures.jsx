import React from 'react';
import Image from 'next/image';

const LinkFeatures = () => {
  return (
    <section className="py-6 md:py-12 bg-[#ebeef1]">
      <div className="container mx-auto px-6 sm:px-8 md:max-w-[1100px]">
        <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-12">
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
              <span className="text-[#303133] font-geist text-[15px] font-normal">Authority building & link outreach</span>
            </div>
            
            <h2 className="text-[42px] font-semibold mb-3 font-geist leading-[106%] tracking-[-1.92px] text-[#303133] md:text-[42px] md:tracking-[-1.92px] text-[32px] tracking-[-1.28px]">
              AI-Enhanced Link
              <br />
              Building that <span className="text-blue-500">Boosts Rankings</span>
            </h2>
            
            <p className="font-geist text-[16px] leading-[150%] tracking-[-0.48px] text-[#757880] font-normal mb-8">
              We don't just create content — we build authority.
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
                  <h3 className="font-geist text-[18px] font-semibold leading-[150%] tracking-[-0.72px] text-[#303133] mb-1">Smart Opportunity Discovery</h3>
                  <p className="font-geist text-[16px] leading-[150%] tracking-[-0.48px] text-[#757880] font-normal">
                    AI identifies backlink targets with high domain authority and relevance.
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
                  <h3 className="font-geist text-[18px] font-semibold leading-[150%] tracking-[-0.72px] text-[#303133] mb-1">Scalable Outreach Campaigns</h3>
                  <p className="font-geist text-[16px] leading-[150%] tracking-[-0.48px] text-[#757880] font-normal">
                    Our team handles outreach, content placement, and relationship building.
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
                  <h3 className="font-geist text-[18px] font-semibold leading-[150%] tracking-[-0.72px] text-[#303133] mb-1">Zero-Waste Authority Growth</h3>
                  <p className="font-geist text-[16px] leading-[150%] tracking-[-0.48px] text-[#757880] font-normal">
                    Every link we earn is vetted to support long-term SEO performance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:flex-1 relative flex items-center justify-center pt-8 md:pt-0 order-2 md:order-1 md:mt-[60px]">
            <div className="relative w-[calc(100%-20px)] max-w-[900px] md:max-w-[1125px] flex items-center justify-center">
              <Image
                src="/linkbuildinggraphic.svg"
                alt="Link Building Features Illustration"
                width={1125}
                height={1125}
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

export default LinkFeatures; 
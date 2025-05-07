"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const CmsSection = () => {
  const cmsLogos = [
    { name: 'HubSpot', src: '/cmslogos/hubspot_logo.svg.svg', alt: 'HubSpot Logo' },
    { name: 'Framer', src: '/cmslogos/framerlogo.svg', alt: 'Framer Logo' },
    { name: 'WordPress', src: '/cmslogos/wordpresslogo.svg', alt: 'WordPress Logo' },
    { name: 'Webflow', src: '/cmslogos/webflow_logo.svg.svg', alt: 'Webflow Logo' },
    { name: 'Shopify', src: '/cmslogos/shopifylogo.svg', alt: 'Shopify Logo' },
    { name: 'Squarespace', src: '/cmslogos/squarespacelogo.svg', alt: 'Squarespace Logo' },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        opacity: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        y: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
      }}
      className="w-full py-24 bg-[#ebeef1]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1 border border-gray-200">
              <Image
                src="/cmscoinicon.svg"
                alt="CMS icon"
                width={16}
                height={16}
              />
              <span className="text-sm font-medium text-black">CMS</span>
            </div>
          </div>
          <h2 className="text-[42px] font-semibold mb-2 font-geist leading-[106%] tracking-[-1.92px] text-[#303133]">
            We'll Make it Work No Matter
          </h2>
          <div className="text-[42px] font-semibold font-geist leading-[106%] tracking-[-1.92px] text-[#303133]">
            What <span className="text-[#08F]">CMS You Use</span>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#ebeef1] rounded-2xl border border-black overflow-hidden">
            <div className="grid grid-cols-3 divide-x divide-black">
              <div className="py-8 px-6">
                <Image
                  src="/cmslogos/hubspot_logo.svg.svg"
                  alt="HubSpot Logo"
                  width={120}
                  height={30}
                  className="h-6 w-auto mx-auto"
                />
              </div>
              <div className="py-8 px-6">
                <Image
                  src="/cmslogos/framerlogo.svg"
                  alt="Framer Logo"
                  width={120}
                  height={30}
                  className="h-6 w-auto mx-auto"
                />
              </div>
              <div className="py-8 px-6">
                <Image
                  src="/cmslogos/wordpresslogo.svg"
                  alt="WordPress Logo"
                  width={120}
                  height={30}
                  className="h-6 w-auto mx-auto"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 divide-x divide-black border-t border-black">
              <div className="py-8 px-6">
                <Image
                  src="/cmslogos/webflow_logo.svg.svg"
                  alt="Webflow Logo"
                  width={120}
                  height={30}
                  className="h-[18px] w-auto mx-auto"
                />
              </div>
              <div className="py-8 px-6">
                <Image
                  src="/cmslogos/shopifylogo.svg"
                  alt="Shopify Logo"
                  width={120}
                  height={30}
                  className="h-6 w-auto mx-auto"
                />
              </div>
              <div className="py-8 px-6">
                <Image
                  src="/cmslogos/squarespacelogo.svg"
                  alt="Squarespace Logo"
                  width={120}
                  height={30}
                  className="h-[34px] w-auto mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CmsSection; 
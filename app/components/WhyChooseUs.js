"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function WhyChooseUs() {
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
      className="py-12 px-4 bg-[#ebeef1]"
    >
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-4 shadow-lg">
          <Image
            src="/whyusbookmark.svg"
            alt="Why Choose Us icon"
            width={20}
            height={20}
            className="w-5 h-5"
          />
          <span className="text-[#303133] font-geist text-[15px] font-normal">Why Choose Us</span>
        </div>
        
        <h2 className="text-[42px] font-semibold mb-12 font-geist leading-[106%] tracking-[-1.92px] text-[#303133] md:text-[42px] md:tracking-[-1.92px] text-[32px] tracking-[-1.28px]">
          We Make Growth Predictable,
          <br />
          <span className="text-blue-500">Scalable, and Transparent</span>
        </h2>

        {/* Grid of 4 PNGs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Image
            src="/growthslides/aispeed-humanprecision.png"
            alt="AI Speed and Human Precision"
            width={800}
            height={480}
            className="w-full rounded-lg transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl"
          />
          <Image
            src="/growthslides/datadrivenstrat.png"
            alt="Data-Driven Strategy"
            width={800}
            height={480}
            className="w-full rounded-lg transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl"
          />
          <Image
            src="/growthslides/fullvizwhychoose.png"
            alt="Full Visibility"
            width={800}
            height={480}
            className="w-full rounded-lg transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl"
          />
          <Image
            src="/growthslides/builttoscalewithyou.png"
            alt="Built to Scale With You"
            width={800}
            height={480}
            className="w-full rounded-lg transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl"
          />
        </div>
      </div>
    </motion.section>
  );
} 
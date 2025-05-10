"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const solutions = [
  {
    icon: '/startupicon.svg',
    title: 'Managed Website',
    description:
      'A high-performing website for your business—fully managed, secure, and always up to date.',
  },
  {
    icon: '/LocalBusinessIcon.svg',
    title: 'Review Generation',
    description:
      'Automate collecting and displaying customer reviews to build trust and attract more clients.',
  },
  {
    icon: '/EcommerceIcon.svg',
    title: 'Optimized Listings',
    description:
      'Get found everywhere with accurate, standout listings on Google, Yelp, and more.',
  },
  {
    icon: '/EcommerceIcon.svg',
    title: 'Local SEO',
    description:
      'Boost your visibility in local search and maps so nearby customers find you first.',
  },
];

const LocalFeatures = () => {
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
      className="py-16 bg-[#ebeef1]"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col items-center mb-10">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-6 shadow-lg">
            <span className="inline-block w-5 h-5 bg-[#f5f6fa] rounded-full flex items-center justify-center">
              <Image src="/solutionsbulb.svg" alt="Services icon" width={18} height={18} />
            </span>
            <span className="text-[#303133] font-geist text-[15px] font-normal">Local Services</span>
          </div>
          <h2 className="text-[42px] font-semibold mb-2 font-geist leading-[106%] tracking-[-1.92px] text-[#303133] text-center">
            Explore our Services Engineered to<br />
            <span className="text-blue-500">Drive Local Success</span>
          </h2>
          <p className="font-geist text-[16px] leading-[150%] tracking-[-0.48px] text-[#757880] font-normal text-center max-w-2xl mt-4">
            Everything your business needs to stand out, earn trust, and attract more local customers—managed for you.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-4 justify-center items-stretch">
          {solutions.map((sol, idx) => (
            <div key={sol.title} className="flex-1 p-6 flex flex-col items-start text-left min-w-[220px] max-w-[280px] mx-auto bg-white rounded-xl shadow-lg transition-transform transition-shadow duration-300 hover:scale-102 hover:shadow-xl">
              <div className="mb-6">
                <Image src={sol.icon} alt={sol.title + ' icon'} width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="font-geist text-[18px] font-semibold leading-[150%] tracking-[-0.72px] text-[#303133] mb-2">{sol.title}</h3>
              <p className="font-geist text-[15px] leading-[150%] tracking-[-0.48px] text-[#757880] font-normal mb-4">{sol.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default LocalFeatures; 
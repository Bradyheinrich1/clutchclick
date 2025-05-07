'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const clientLogos = [
  { src: '/clientlogos/ladscclogo.png', alt: 'Lads CC Logo' },
  { src: '/clientlogos/wellsoulcclogo.png', alt: 'Wellsoul CC Logo' },
  { src: '/clientlogos/sicclogo.png', alt: 'SICC Logo' },
  { src: '/clientlogos/ridcclogo.png', alt: 'RIDCC Logo' },
  { src: '/clientlogos/csforcclogo.png', alt: 'CSFORCC Logo' },
];

const Clients = () => {
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
      className="w-full bg-[#ebeef1] py-12 flex flex-col items-center"
    >
      <h2 className="text-[#303133] text-center text-xl md:text-2xl font-medium mb-10 font-geist">Trusted by businesses worldwide</h2>
      <div className="relative w-full overflow-hidden">
        {/* Left Fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 md:w-64 z-10" style={{background: 'linear-gradient(to right, #ebeef1 80%, transparent)'}} />
        {/* Right Fade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 md:w-64 z-10" style={{background: 'linear-gradient(to left, #ebeef1 80%, transparent)'}} />
        <div className="marquee flex items-center gap-16 w-max">
          {clientLogos.concat(clientLogos).map((logo, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300"
              style={{ width: 234, height: 78, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <Image src={logo.src} alt={logo.alt} width={221} height={104} style={{ objectFit: 'contain', width: '221px', height: '104px', filter: 'grayscale(1)' }} />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .marquee {
          animation: marquee 32s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </motion.section>
  );
};

export default Clients; 
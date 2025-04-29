import React from 'react';
import Image from 'next/image';

const solutions = [
  {
    icon: '/startupicon.svg',
    title: 'Startup Growth Engine',
    description:
      'Establish authority fast with content that drives leads, investor attention, and brand recognition.',
    link: '#',
    linkText: 'Learn more',
  },
  {
    icon: '/LocalBusinessIcon.svg',
    title: 'Local Business Domination',
    description:
      'Capture your local market with high-performing content that attracts nearby customers',
    link: '#',
    linkText: 'Learn more',
  },
  {
    icon: '/EcommerceIcon.svg',
    title: 'E-Commerce Excellence',
    description:
      'Enhance your product catalogue with optimized descriptions, buyer guides, and SEO-focused content.',
    link: '#',
    linkText: 'Learn more',
  },
];

const Solutions = () => {
  return (
    <section className="py-16 bg-[#ebeef1]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col items-center mb-10">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-6 shadow-lg">
            <span className="inline-block w-5 h-5 bg-[#f5f6fa] rounded-full flex items-center justify-center">
              <Image src="/solutionsbulb.svg" alt="Solutions icon" width={18} height={18} />
            </span>
            <span className="text-[#303133] font-geist text-[15px] font-normal">Solutions</span>
          </div>
          <h2 className="text-[42px] font-semibold mb-2 font-geist leading-[106%] tracking-[-1.92px] text-[#303133] text-center">
            Tailored <span className="text-blue-500">Growth Solutions</span><br />for Your Business
          </h2>
          <p className="font-geist text-[16px] leading-[150%] tracking-[-0.48px] text-[#757880] font-normal text-center max-w-2xl mt-4">
            Whether you're scaling a startup, running a local business, or managing an e-commerce brand — we've got you covered.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-4 justify-center items-stretch">
          {solutions.map((sol, idx) => (
            <div key={sol.title} className="flex-1 p-6 flex flex-col items-start text-left min-w-[220px] max-w-[280px] mx-auto">
              <div className="mb-6">
                <Image src={sol.icon} alt={sol.title + ' icon'} width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="font-geist text-[18px] font-semibold leading-[150%] tracking-[-0.72px] text-[#303133] mb-2">{sol.title}</h3>
              <p className="font-geist text-[15px] leading-[150%] tracking-[-0.48px] text-[#757880] font-normal mb-4">{sol.description}</p>
              <a href={sol.link} className="text-blue-500 font-geist text-[15px] font-medium hover:underline flex items-center gap-1">
                {sol.linkText} <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions; 
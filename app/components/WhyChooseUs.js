import Image from 'next/image';

export default function WhyChooseUs() {
  return (
    <section className="py-12 px-4 bg-[#ebeef1]">
      <div className="max-w-4xl mx-auto text-center">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image
            src="/growthslides/aispeed-humanprecision.png"
            alt="AI Speed and Human Precision"
            width={500}
            height={300}
            className="w-full"
          />
          <Image
            src="/growthslides/datadrivenstrat.png"
            alt="Data-Driven Strategy"
            width={500}
            height={300}
            className="w-full"
          />
          <Image
            src="/growthslides/fullvizwhychoose.png"
            alt="Full Visibility"
            width={500}
            height={300}
            className="w-full"
          />
          <Image
            src="/growthslides/builttoscalewithyou.png"
            alt="Built to Scale With You"
            width={500}
            height={300}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
} 
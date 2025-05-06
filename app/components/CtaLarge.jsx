import Image from 'next/image';
import CalendlyLink from './CalendlyLink';

export default function CtaLarge() {
  return (
    <section className="relative overflow-hidden rounded-[32px] md:rounded-[32px] mx-2 md:mx-8 my-8 md:my-16 shadow-xl">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/ctaSymbols/clutchclickbg.svg"
          alt="CTA Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Floating Silver Icons */}
      <div className="absolute left-8 top-8 md:left-24 md:top-16 z-10" style={{transform: 'rotate(-15deg)'}}>
        <Image src="/ctaSymbols/aiiconsymbol.svg" alt="AI Icon" width={90} height={90} className="drop-shadow-xl cta-icon-mobile cta-icon-tablet cta-icon-desktop" />
      </div>
      <div className="absolute right-8 top-8 md:right-24 md:top-12 z-10" style={{transform: 'rotate(13deg)'}}>
        <Image src="/ctaSymbols/moneysymbolicon.svg" alt="Money Icon" width={90} height={90} className="drop-shadow-xl cta-icon-mobile cta-icon-tablet cta-icon-desktop" />
      </div>
      <div className="absolute left-8 bottom-8 md:left-32 md:bottom-16 z-10" style={{transform: 'rotate(10deg)'}}>
        <Image src="/ctaSymbols/cmsgroupiconsymbol.svg" alt="CMS Icon" width={90} height={90} className="drop-shadow-xl cta-icon-mobile cta-icon-tablet cta-icon-desktop" />
      </div>
      <div className="absolute right-8 bottom-8 md:right-32 md:bottom-16 z-10" style={{transform: 'rotate(-12deg)'}}>
        <Image src="/ctaSymbols/trophyiconsymbol.svg" alt="Trophy Icon" width={90} height={90} className="drop-shadow-xl cta-icon-mobile cta-icon-tablet cta-icon-desktop" />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center text-center px-4 md:px-0 py-24 md:py-32 relative z-20">
        {/* Pill */}
        <div className="ai-service-pill flex justify-center items-center px-8 py-2.5 rounded-[99px] bg-white/20 backdrop-blur-[20px] mb-8 text-base font-light text-white">
          Ai powered marketing service
        </div>
        {/* Headline */}
        <h1 className="text-white text-center font-geist text-[42px] font-semibold leading-[106%] tracking-[-1.92px] md:text-[42px] md:tracking-[-1.92px] text-[32px] tracking-[-1.28px] mb-6">
          Ready To Scale<br />Smarter?
        </h1>
        {/* Subtext */}
        <p className="max-w-xl text-[18px] leading-[150%] text-white/90 mb-10 mx-auto font-geist">
          Let's turn AI and SEO into a growth engine for your business — starting with a free strategy call.
        </p>
        {/* CTA Button */}
        <CalendlyLink className="strategy-button-shadow flex justify-center items-center px-8 py-4 gap-2.5 rounded-[99px] bg-white text-black text-[18px] font-normal leading-[150%] hover:bg-white/90 transition-colors shadow-[0_8px_16px_rgba(0,0,0,0.1)]">
          Let's Talk Strategy
        </CalendlyLink>
      </div>
    </section>
  );
} 
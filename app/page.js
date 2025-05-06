import CtaLarge from './components/CtaLarge';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Features from './components/Features';
import LinkFeatures from './components/LinkFeatures';
import Solutions from './components/Solutions';
import CmsSection from './components/CmsSection';
import WhyChooseUs from './components/WhyChooseUs';

export default function Home() {
  return (
    <div>
      <Hero />
      <Clients />
      <Features />
      <LinkFeatures />
      <Solutions />
      <CmsSection />
      <WhyChooseUs />
      <CtaLarge />
    </div>
  );
}

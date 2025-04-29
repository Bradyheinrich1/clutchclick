import Hero from './components/Hero';
import Features from './components/Features';
import LinkFeatures from './components/LinkFeatures';
import Solutions from './components/Solutions';
import CmsSection from './components/CmsSection';

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <LinkFeatures />
      <Solutions />
      <CmsSection />
    </div>
  );
}

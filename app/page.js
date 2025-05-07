import CtaLarge from './components/CtaLarge';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Features from './components/Features';
import LinkFeatures from './components/LinkFeatures';
import Solutions from './components/Solutions';
import CmsSection from './components/CmsSection';
import WhyChooseUs from './components/WhyChooseUs';

export const metadata = {
  title: 'Clutch Click | Organic Growth Solutions & AI-Enhanced SEO',
  description: 'Expert organic growth solutions powered by AI-SEO, content marketing, and strategic link building. We help startups, brands, and local businesses achieve sustainable growth through data-driven SEO strategies.',
  keywords: 'organic growth solutions, AI-SEO, content marketing, link building, SEO strategy, digital marketing, startup growth, local business marketing, backlink strategy',
  openGraph: {
    title: 'Clutch Click | Organic Growth Solutions & AI-Enhanced SEO',
    description: 'Expert organic growth solutions powered by AI-SEO, content marketing, and strategic link building. We help startups, brands, and local businesses achieve sustainable growth through data-driven SEO strategies.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Clutch Click',
    images: [
      {
        url: '/herograph.png',
        width: 1200,
        height: 600,
        alt: 'Clutch Click Analytics Dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clutch Click | Organic Growth Solutions & AI-Enhanced SEO',
    description: 'Expert organic growth solutions powered by AI-SEO, content marketing, and strategic link building. We help startups, brands, and local businesses achieve sustainable growth through data-driven SEO strategies.',
    images: ['/herograph.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

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

import BundleDeal from 'components/BundleDeal';
import CardCarousel from 'components/CardCarousel';
import Chaga from 'components/Chaga';
import LeftImageSection from 'components/LeftImageSection';
import Matcha from 'components/Matcha';
import Section from 'components/Section';

import Footer from 'components/layout/footer';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <div className="flex flex-col gap-8 px-24 py-8">
      <CardCarousel />
      <Chaga />
      <LeftImageSection />
      <Section />
      <BundleDeal />
      <Matcha />
      <CardCarousel />

      <div>
        <span>YOUR POSITIVE DAILY HABIT</span>
        <span>MÁS QUE CAFÉ</span>
        <span>NEW MINDS, NEW CHOICES</span>
      </div>
      <Footer />
    </div>
  );
}

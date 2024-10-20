import BundleDeal from 'components/sections/BundleDeal';
import CardCarousel from 'components/sections/CardCarousel';
import Chaga from 'components/sections/Chaga';
import LeftImageSection from 'components/sections/LeftImageSection';
import Matcha from 'components/sections/Matcha';
import Section from 'components/sections/Section';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col gap-8 px-24 py-8">
        <CardCarousel />
        <Chaga />
        <LeftImageSection />
        <Section />
        <BundleDeal />
        <Matcha />
        <CardCarousel />
      </div>
    </>
  );
}

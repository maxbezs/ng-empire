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
const cardData = [
  {
    id: 1,
    imageUrl: '//nakedground.coffee/cdn/shop/files/Untitleddesign_1_copy2.png?v=1725202660',
    hoverImageUrl:
      'https://cdn.shopify.com/s/files/1/0785/0233/0701/files/Untitled_design_1_copy_9.png?v=1725299950',
    overlayText: 'Baleric Beans',
    description: '250g Balearic Beans',
    price: 58
  },
  {
    id: 2,
    imageUrl: '//nakedground.coffee/cdn/shop/files/Untitleddesign_1_copy2.png?v=1725202660',
    hoverImageUrl:
      'https://cdn.shopify.com/s/files/1/0785/0233/0701/files/Untitled_design_1_copy_9.png?v=1725299950',
    overlayText: 'Londres Beans',
    description: '250g Londres Beans',
    price: 53
  },
  {
    id: 3,
    imageUrl: '//nakedground.coffee/cdn/shop/files/Untitleddesign_1_copy2.png?v=1725202660',
    hoverImageUrl:
      'https://cdn.shopify.com/s/files/1/0785/0233/0701/files/Untitled_design_1_copy_9.png?v=1725299950',
    overlayText: 'Brasilia Beans',
    description: '250g Brasilia Beans',
    price: 64
  }
];
const mySettings = {
  dots: false,
  infinite: false, // Make infinite scroll conditional based on card count
  slidesToShow: Math.min(1, cardData.length), // Show up to 3 cards, but no more than available
  slidesToScroll: 1
};
export default function HomePage() {
  return (
    <>
      <div className="flex flex-col gap-4 px-4 py-4 sm:gap-8 sm:px-24 sm:py-8">
        <CardCarousel cardData={cardData} sliderSettings={mySettings} />
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

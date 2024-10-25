import BundleDeal from 'components/sections/BundleDeal';
import CardCarousel from 'components/sections/CardCarousel';
import Chaga from 'components/sections/Chaga';
import LeftImageSection from 'components/sections/LeftImageSection';
import Matcha from 'components/sections/Matcha';
import Section from 'components/sections/Section';
import Ticker from 'components/Ticker';

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
    url: '/product/12-pack-of-pods',
    price: 58
  },
  {
    id: 2,
    imageUrl: '//nakedground.coffee/cdn/shop/files/Untitleddesign_1_copy2.png?v=1725202660',
    hoverImageUrl:
      'https://cdn.shopify.com/s/files/1/0785/0233/0701/files/Untitled_design_1_copy_9.png?v=1725299950',
    overlayText: 'Londres Beans',
    description: '250g Londres Beans',
    url: '/product/2-bags',
    price: 53
  },
  {
    id: 3,
    imageUrl: '//nakedground.coffee/cdn/shop/files/Untitleddesign_1_copy2.png?v=1725202660',
    hoverImageUrl:
      'https://cdn.shopify.com/s/files/1/0785/0233/0701/files/Untitled_design_1_copy_9.png?v=1725299950',
    overlayText: 'Brasilia Beans',
    description: '250g Brasilia Beans',
    url: '/product/250g-brasilia-beans',
    price: 64
  }
];
const cardData2 = [
  {
    id: 1,
    imageUrl: 'https://nakedground.coffee/cdn/shop/files/Screenshot2024-08-08at14.23.59.png',
    hoverImageUrl: 'https://nakedground.coffee/cdn/shop/files/IMG_4230.jpg',
    overlayText: '',
    description: 'Limited Edition Baseball Cap',
    url: '/product/limited-edition-baseball-cap',
    price: 24.95
  },
  {
    id: 2,
    imageUrl: 'https://nakedground.coffee/cdn/shop/files/Screenshot2024-08-08at14.20.43.png',
    hoverImageUrl: 'https://nakedground.coffee/cdn/shop/files/Screenshot2024-08-08at14.20.43.png',
    overlayText: '',
    description: 'Large Luxury Cotton  Beach Towel',
    url: '/product/naked-ground-beach-towel',
    price: 124.95
  }
];
const mySettings = {
  dots: false,
  infinite: false, // Make infinite scroll conditional based on card count
  slidesToShow: Math.min(1, cardData.length), // Show up to 3 cards, but no more than available
  slidesToScroll: 1
};
const content = [
  'YOUR POSITIVE DAILY HABIT',
  'MÁS QUE CAFÉ',
  'NEW MINDS, NEW CHOICES',
  'YOUR POSITIVE DAILY HABIT',
  'MÁS QUE CAFÉ',
  'NEW MINDS, NEW CHOICES',
  'YOUR POSITIVE DAILY HABIT',
  'MÁS QUE CAFÉ'
];
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
        <div className="max-w-6xl">
          <CardCarousel cardData={cardData2} sliderSettings={mySettings} />
        </div>
      </div>
      <Ticker content={content} color={'[#92d4ee]'} background={'bg-none'} />
    </>
  );
}

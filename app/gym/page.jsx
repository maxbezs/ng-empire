import Features from 'app/gym/components/Features';
import JoinUs from 'app/gym/components/JoinUs';
import Locations from 'app/gym/components/Locations';
import Main from 'app/gym/components/Main';
import CardCarousel from 'components/sections/CardCarousel';
const page = () => {
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
  const mySettings = {
    dots: false,
    infinite: false, // Make infinite scroll conditional based on card count
    slidesToShow: Math.min(1, cardData.length), // Show up to 3 cards, but no more than available
    slidesToScroll: 1
  };
  return (
    <div>
      <Main />{' '}
      <div className="p-6">
        {' '}
        <CardCarousel cardData={cardData} sliderSettings={mySettings} />
      </div>
      <Features />
      <JoinUs />
      <Locations />
    </div>
  );
};

export default page;

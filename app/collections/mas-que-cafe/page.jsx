import CardCarousel from 'components/sections/CardCarousel';

const page = () => {
  const cardData = [
    {
      id: 1,
      imageUrl:
        'https://nakedground.coffee/cdn/shop/files/1_1bf49dbe-5042-4097-97fe-dbe823eed9e3.png?v=1725809093',
      hoverImageUrl:
        'https://nakedground.coffee/cdn/shop/files/2_cfefa592-94c3-4f72-842b-1e490e1a64ec.png?v=1725809094',
      overlayText: 'Chaga',
      description: 'Siberian Chaga Crystals',
      price: 399
    },
    {
      id: 2,
      imageUrl:
        'https://nakedground.coffee/cdn/shop/files/Untitled_design_1_copy_7.png?v=1725209258',
      hoverImageUrl:
        'https://nakedground.coffee/cdn/shop/files/Untitleddesign_1_copy3.png?v=1725203029',
      overlayText: 'Matcha',
      description: 'Matcha - Japanese Ceremonial Grade 5',
      price: 133
    }
  ];
  const mySettings = {
    dots: true,
    infinite: cardData.length > 1, // Make infinite scroll conditional based on card count
    slidesToShow: Math.min(3, cardData.length), // Show up to 3 cards, but no more than available
    slidesToScroll: 1
  };
  return (
    <div>
      <CardCarousel cardData={cardData} sliderSettings={mySettings} />
    </div>
  );
};

export default page;

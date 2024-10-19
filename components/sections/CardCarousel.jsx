// components/CardCarousel.js
'use client';
import { useRef, useState } from 'react';
import Slider from 'react-slick';

const dummyCardData = [
  {
    id: 1,
    imageUrl: '//nakedground.coffee/cdn/shop/files/Untitleddesign_1_copy2.png?v=1725202660',
    hoverImageUrl:
      'https://cdn.shopify.com/s/files/1/0785/0233/0701/files/Untitled_design_1_copy_9.png?v=1725299950',
    overlayText: 'Baleric Beans',
    description: '250g Balearic Beans',
    price: '58,00 zl'
  },
  {
    id: 2,
    imageUrl: '//nakedground.coffee/cdn/shop/files/Untitleddesign_1_copy2.png?v=1725202660',
    hoverImageUrl:
      'https://cdn.shopify.com/s/files/1/0785/0233/0701/files/Untitled_design_1_copy_9.png?v=1725299950',
    overlayText: 'Londres Beans',
    description: '250g Londres Beans',
    price: '53,00 zl'
  },
  {
    id: 3,
    imageUrl: '//nakedground.coffee/cdn/shop/files/Untitleddesign_1_copy2.png?v=1725202660',
    hoverImageUrl:
      'https://cdn.shopify.com/s/files/1/0785/0233/0701/files/Untitled_design_1_copy_9.png?v=1725299950',
    overlayText: 'Brasilia Beans',
    description: '250g Brasilia Beans',
    price: '64 zl'
  }
];

const CardCarousel = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = dummyCardData.length; // Total number of slides based on the data

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    afterChange: (current) => setCurrentSlide(current)
  };

  return (
    <div className="relative">
      {/* Mobile View: Slider */}
      <div className="block md:hidden">
        <Slider {...settings} ref={sliderRef}>
          {dummyCardData.map((card) => (
            <div
              key={card.id}
              className="group relative rounded-3xl border bg-[#e6e6e6] p-4 shadow"
            >
              <img
                src={card.imageUrl}
                alt={card.description}
                loading="lazy"
                className="h-auto w-full rounded-3xl transition-opacity duration-300 ease-in-out group-hover:opacity-0"
              />
              <img
                src={card.hoverImageUrl}
                alt={`${card.description} Hover`}
                loading="lazy"
                className="absolute left-0 top-0 h-auto w-full rounded-3xl opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
              />
              <div className="absolute left-2 top-2 rounded p-1 text-black">{card.overlayText}</div>
              <div className="mt-4 flex justify-between opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-0">
                <span className="text-lg font-semibold">{card.description}</span>
                <span className="text-lg font-semibold">{card.price}</span>
              </div>
              <button className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-4 transform rounded bg-blue-500 px-4 py-2 font-semibold text-white opacity-0 transition-transform duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                Buy Now
              </button>
            </div>
          ))}
        </Slider>
      </div>

      {/* Desktop View: All Cards in Row */}
      <div className="mx-auto hidden max-w-full md:flex md:justify-center md:gap-10">
        {dummyCardData.map((card) => (
          <div key={card.id} className="group relative rounded-3xl border bg-[#f6efde] p-8 shadow">
            <img
              src={card.imageUrl}
              alt={card.description}
              loading="lazy"
              className="h-auto w-full rounded-3xl transition-opacity duration-300 ease-in-out group-hover:opacity-0"
            />
            <img
              src={card.hoverImageUrl}
              alt={`${card.description} Hover`}
              loading="lazy"
              className="absolute left-0 top-0 h-full w-auto rounded-3xl opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
            />
            <div className="absolute left-0 top-0 rounded p-8 text-3xl font-bold text-black">
              {card.overlayText}
            </div>
            <div className="mt-4 flex justify-between opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-0">
              <span className="text-lg font-semibold">{card.description}</span>
              <span className="text-lg font-semibold">{card.price}</span>
            </div>
            <button className="absolute bottom-4 left-1/2 w-[calc(100%-32px)] -translate-x-1/2 translate-y-full transform rounded-full bg-white py-2 font-bold text-black opacity-0 transition-all duration-300 ease-in-out hover:bg-[#079547] hover:text-white group-hover:translate-y-0 group-hover:opacity-100">
              SHOP NOW
            </button>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => sliderRef.current.slickPrev()}
        className={`absolute left-0 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-md md:hidden ${
          currentSlide === 0 ? 'hidden' : 'block'
        }`}
      >
        &lt;
      </button>
      <button
        onClick={() => sliderRef.current.slickNext()}
        className={`absolute right-0 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-md md:hidden ${
          currentSlide === totalSlides - 1 ? 'hidden' : 'block'
        }`}
      >
        &gt;
      </button>
    </div>
  );
};

export default CardCarousel;

'use client';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useRef, useState } from 'react';
import Slider, { Settings as SliderSettings } from 'react-slick';

interface Card {
  id: number;
  imageUrl: string;
  hoverImageUrl: string;
  overlayText: string;
  description: string;
  price: number;
}

interface CardCarouselProps {
  cardData?: Card[];
  sliderSettings?: SliderSettings;
  mobileCardClass?: string;
  desktopCardClass?: string;
  overlayClass?: string;
}

const CardCarousel: React.FC<CardCarouselProps> = ({
  cardData = [],
  sliderSettings = {},
  mobileCardClass = 'px-1',
  desktopCardClass = 'group relative rounded-3xl border bg-[#f6efde] p-8 shadow min-h-[500px]',
  overlayClass = 'absolute left-0 top-0 rounded p-8 text-3xl font-bold text-black'
}) => {
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = cardData.length;

  const defaultSettings: SliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    afterChange: (current) => setCurrentSlide(current)
  };

  const settings = { ...defaultSettings, ...sliderSettings };

  return (
    <div className="relative">
      {/* Mobile View: Slider */}
      <div className="block md:hidden">
        <Slider {...settings} ref={sliderRef}>
          {cardData.map((card) => (
            <div key={card.id} className={mobileCardClass}>
              <div className="group relative flex flex-col rounded-2xl border bg-[#e6e6e6] p-2 shadow">
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
                <div className="absolute left-2 top-2 rounded p-1 text-2xl font-semibold text-black">
                  {card.overlayText}
                </div>
                <div className="flex-grow" />
                <div className="my-4 flex justify-between">
                  <span className="text-lg font-semibold">{card.description}</span>
                  <span className="text-lg font-semibold">${card.price}</span>
                </div>
                <button className="w-full rounded-full bg-white py-2 font-bold text-black">
                  SHOP NOW
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Desktop View: All Cards in Row */}
      <div className="mx-auto hidden max-w-full px-[500px] md:flex md:justify-center md:gap-10">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="group relative flex aspect-square flex-1 flex-col rounded-3xl border bg-[#f6efde] p-8 shadow"
          >
            <img
              src={card.imageUrl}
              alt={card.description}
              loading="lazy"
              className="absolute left-0 top-0 h-full w-full rounded-3xl object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0"
            />
            <img
              src={card.hoverImageUrl}
              alt={`${card.description} Hover`}
              loading="lazy"
              className="absolute left-0 top-0 h-full w-full rounded-3xl object-cover opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
            />
            <div className="absolute left-0 top-0 rounded p-8 text-3xl font-bold text-black">
              {card.overlayText}
            </div>
            <div className="absolute bottom-0 left-0 h-3/4 w-full rounded-3xl bg-gradient-to-t from-[#ffffff80] to-transparent transition-opacity duration-300 ease-in-out group-hover:opacity-0"></div>
            <div className="flex-grow" />
            <div className="z-10 mt-4 flex justify-between transition-opacity duration-300 ease-in-out group-hover:opacity-0">
              <span className="text-lg font-semibold">{card.description}</span>
              <span className="text-lg font-semibold">${card.price}</span>
            </div>
            <button className="absolute bottom-4 left-1/2 w-[calc(100%-32px)] -translate-x-1/2 translate-y-full transform rounded-full bg-white py-2 font-bold text-black opacity-0 transition-all duration-300 ease-in-out hover:bg-[#079547] hover:text-white group-hover:translate-y-0 group-hover:opacity-100">
              SHOP NOW
            </button>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => sliderRef.current?.slickPrev()}
        className={`absolute left-0 top-1/2 z-10 -ml-2 h-12 w-12 -translate-y-1/2 transform rounded-full bg-[#92d4ee] p-2 text-white shadow-md md:hidden ${
          currentSlide === 0 ? 'hidden' : 'block'
        }`}
      >
        <ChevronLeftIcon className="h-5 w-full" />
      </button>
      <button
        onClick={() => sliderRef.current?.slickNext()}
        className={`absolute right-0 top-1/2 z-10 -mr-2 h-12 w-12 -translate-y-1/2 transform rounded-full bg-[#92d4ee] p-2 text-white shadow-md md:hidden ${
          currentSlide === totalSlides - 1 ? 'hidden' : 'block'
        }`}
      >
        <ChevronRightIcon className="h-5 w-full" />
      </button>
    </div>
  );
};

export default CardCarousel;

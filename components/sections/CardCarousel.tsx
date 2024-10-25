'use client';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useRef, useState } from 'react';
import Slider, { Settings as SliderSettings } from 'react-slick';

interface Card {
  id: number;
  imageUrl: string;
  hoverImageUrl: string;
  overlayText: string;
  description: string;
  price: number;
  url: string;
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
    slidesToScroll: 1, // Ensure it's set to 1
    adaptiveHeight: true,
    arrows: false,
    afterChange: (current) => {
      setCurrentSlide(current);
    }
  };

  const settings = { ...defaultSettings, ...sliderSettings };

  const handlePrev = () => {
    if (sliderRef.current && currentSlide > 0) {
      const newSlide = currentSlide - 1;
      sliderRef.current.slickGoTo(newSlide);
      setCurrentSlide(newSlide);
    }
  };

  const handleNext = () => {
    if (sliderRef.current && currentSlide < totalSlides - 1) {
      const newSlide = currentSlide + 1;
      sliderRef.current.slickGoTo(newSlide);
      setCurrentSlide(newSlide);
    }
  };

  return (
    <div className="relative">
      {/* Mobile View: Slider */}
      <div className="block md:hidden">
        <Slider {...settings} ref={sliderRef}>
          {cardData.map((card) => (
            <Link href={card.url} key={card.id} className={mobileCardClass}>
              <div className="group relative flex flex-col rounded-3xl border bg-[#e6e6e6] shadow">
                <img
                  src={card.imageUrl}
                  alt={card.description}
                  loading="lazy"
                  className="aspect-square h-auto w-full rounded-t-3xl object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                />
                <img
                  src={card.hoverImageUrl}
                  alt={`${card.description} Hover`}
                  loading="lazy"
                  className="absolute left-0 top-0 aspect-square h-auto w-full rounded-t-3xl object-cover opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                />
                <div className="absolute left-2 top-2 rounded p-1 text-2xl font-semibold text-black">
                  {card.overlayText}
                </div>
                <div className="flex-grow" />
                <div className="p-2">
                  <div className="my-4 flex justify-between">
                    <span className="font-semibold sm:text-lg">{card.description}</span>
                    <span className="text-lg font-semibold">£{card.price}</span>
                  </div>
                  <div className="w-full rounded-full bg-white py-2 text-center font-bold text-black">
                    SHOP NOW
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
      {/* Desktop View: All Cards in Row */}
      <div className="mx-auto hidden max-w-full md:flex md:justify-center md:gap-10">
        {cardData.map((card) => (
          <Link
            href={card.url}
            key={card.id}
            className="group relative flex aspect-square flex-1 flex-col rounded-3xl border bg-white p-8 shadow"
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
            <div className="z-10 mt-4 flex justify-between transition-opacity duration-300 ease-in-out group-hover:hidden group-hover:opacity-0">
              <span className="text-lg font-semibold">{card.description}</span>
              <span className="text-lg font-semibold">£{card.price}</span>
            </div>
            <div className="absolute bottom-4 left-1/2 w-[calc(100%-32px)] -translate-x-1/2 translate-y-full transform rounded-full bg-white py-2 text-center font-bold text-black opacity-0 transition-all duration-300 ease-in-out hover:bg-[#079547] hover:text-white group-hover:translate-y-0 group-hover:opacity-100">
              SHOP NOW
            </div>
          </Link>
        ))}
      </div>
      {totalSlides > 1 && (
        <>
          <button
            onClick={handlePrev}
            className={`absolute left-0 top-1/2 z-10 -ml-2 h-12 w-12 -translate-y-1/2 transform rounded-full bg-[#92d4ee] p-2 text-white shadow-md md:hidden ${
              currentSlide === 0 ? 'hidden' : 'block'
            }`}
          >
            <ChevronLeftIcon className="h-5 w-full" />
          </button>
          <button
            onClick={handleNext}
            className={`absolute right-0 top-1/2 z-10 -mr-2 h-12 w-12 -translate-y-1/2 transform rounded-full bg-[#92d4ee] p-2 text-white shadow-md md:hidden ${
              currentSlide === totalSlides - 1 ? 'hidden' : 'block'
            }`}
          >
            <ChevronRightIcon className="h-5 w-full" />
          </button>
        </>
      )}
    </div>
  );
};

export default CardCarousel;

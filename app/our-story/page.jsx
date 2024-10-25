'use client';

import { useState } from 'react';
import CardSlider from '../../components/CardSlider';

const page = () => {
  const [activeSection, setActiveSection] = useState('2022');
  const sectionContent = {
    2022: {
      text: 'In the summer of 22, on the golden shores of Ibiza in a town called Santa Eulària des Riu, our coffee haven was born. Our vision is to spark curiosity. We are people\'s positive daily habit. We are new minds, new choices, we are "Más que café".',
      image:
        'https://nakedground.coffee/cdn/shop/files/Screenshot_20240523-145659_952x_crop_center.png?v=1716490658'
    },
    2023: {
      text: 'In 2023, we expanded our flagship Ibiza store and acquired the venue next door, increasing our seating capacity to 200 right on the beachfront of Santa Eulària des Riu. This ambitious plan represented the necessary steps to cater to our growing audience and loyal customer base.',
      image:
        'https://nakedground.coffee/cdn/shop/files/dry-grass-beach-umbrellas_952x_crop_center.jpg?v=1716327805'
    },
    2024: {
      text: 'In 2024, we launched our direct supply division, providing coffee to several stadiums across the UK, as well as to events and businesses. Subsequently, we acquired a performance gym in Cardiff and are slowly adding our Naked Ground touch. We continue to expand, and with the launch of our online store, we aim to reach millions more customers.',
      image:
        'https://nakedground.coffee/cdn/shop/files/20240530162128870_952x_crop_center.jpg?v=1723064281'
    },
    2025: {
      text: 'In 2025, we aim to add more stadiums and businesses to our customer base. Our plans include refurbishing our performance gym in Cardiff and educating the world on positive daily habits. We will acquire more strategic brand partners and continue serving the best products by the best people with the best positivity in Ibiza.',
      image: 'https://nakedground.coffee/cdn/shop/files/IMG_4230_952x_crop_center.jpg?v=1723126117'
    }
  };
  const teamMembers = [
    {
      name: 'Tom',
      role: 'CO-FOUNDER & Head of Brand and Coffee',
      image:
        'https://nakedground.coffee/cdn/shop/files/Screenshot_2024-08-08_at_14.47.25_91c3db41-e9af-447d-8d78-1b6a5749c365_420x488_crop_center.png?v=1724344110'
    },
    {
      name: 'Sam',
      role: 'Our Strategic Brand Partner',
      image:
        'https://nakedground.coffee/cdn/shop/files/Screenshot_2024-08-22_at_18.29.14_420x488_crop_center.png?v=1724344179'
    },
    {
      name: 'Amy',
      role: 'Head of MÁS QUE CAFÉ and Community',
      image:
        'https://nakedground.coffee/cdn/shop/files/Screenshot_2024-08-22_at_18.38.04_420x488_crop_center.png?v=1724344722'
    },
    {
      name: 'SOON to be announced...',
      role: 'Our Strategic Brand Partner',
      image:
        'https://nakedground.coffee/cdn/shop/files/NG_Logo_7_Colors-04_420x488_crop_center.png?v=1723649887'
    }
  ];
  return (
    <>
      <div className="flex w-full flex-col items-center md:px-24">
        {/* Dynamic Section */}
        <div className="relative w-full text-center md:flex md:flex-row">
          {/* Mobile Version: Background Image with Text Overlay */}
          <div
            className="flex h-[500px] w-full items-center justify-center bg-cover bg-center text-white md:hidden"
            style={{
              backgroundImage: `url(${sectionContent[activeSection]?.image})`
            }}
          >
            <div className="flex h-full flex-col justify-center bg-black bg-opacity-60 px-6 sm:p-6">
              <h2 className="mb-2 text-2xl font-semibold">{activeSection}</h2>
              <p className="mx-auto w-fit max-w-lg">{sectionContent[activeSection]?.text}</p>
            </div>
          </div>

          {/* Desktop Version: Separate Image and Text */}
          <div className="hidden w-full items-center justify-center md:flex md:w-1/2">
            <div className="h-0 w-full md:h-auto" style={{ aspectRatio: '1 / 1' }}>
              <img
                src={sectionContent[activeSection]?.image}
                alt={`Image for ${activeSection}`}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="hidden flex-col justify-center p-6 md:flex md:w-1/2">
            <h2 className="mb-2 text-2xl font-semibold">{activeSection}</h2>
            <p className="mx-auto w-fit max-w-lg">{sectionContent[activeSection]?.text}</p>
          </div>
        </div>

        {/* Buttons to change the active section */}
        <div className="mx-2 flex gap-3 sm:space-x-2">
          {Object.keys(sectionContent).map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`rounded-md py-2 font-medium transition-colors sm:px-4 ${
                activeSection === section ? 'text-gray-500 underline' : 'text-black'
              }`}
            >
              {section}
            </button>
          ))}
        </div>
      </div>
      <CardSlider />
      <div className="hidden bg-gray-50 py-8 sm:block">
        <h2 className="mb-8 text-center text-2xl font-semibold">OUR TEAM</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full p-4 sm:w-1/2 lg:w-[400px]">
              <div className="overflow-hidden rounded-md bg-white shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-[300px] w-full object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="relative flex h-[600px] items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://nakedground.coffee/cdn/shop/files/PXL_20240807_133810764_1920x.jpg?v=1723056491')"
        }}
      >
        {/* Overlay for a darker background effect */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Text content */}
        <div className="relative p-4 text-center text-white">
          <h2 className="text-4xl font-bold sm:text-6xl">GET IN TOUCH</h2>
          <p className="mt-2">
            Click the WhatsApp icon on your screen and get in touch with our team!
          </p>
        </div>
      </div>
    </>
  );
};

export default page;

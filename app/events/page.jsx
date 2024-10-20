'use client';

import { useState } from 'react';

const page = () => {
  const [activeSection, setActiveSection] = useState('TWICKENHAM Stoop');
  const sectionContent = {
    'TWICKENHAM Stoop': {
      text: 'We are proud to have 5 coffee vans at the iconic Twickenham Stoop. With a deep connection to the Harlequins team, it is a true honor for us to serve our finest coffee to 12,000 fans every other weekend. Our commitment to quality and excellence ensures that every cup enhances the vibrant atmosphere of this beloved venue.',
      image:
        'https://nakedground.coffee/cdn/shop/files/20240609124826561_952x_crop_center.jpg?v=1723055298'
    },
    'Brands Hatch': {
      text: `We are thrilled to announce the addition of 6 more coffee vans at the electrifying Brands Hatch.

Brands Hatch offers an incredible day out where families, motorheads, and a diverse crowd can experience the exhilarating thrill of cars racing around the track.

Now, you can elevate your excitement and add even more energy to your day with our specialty coffees, available every weekend.

Join us for an unforgettable experience fueled by the perfect cup of coffee`,
      image:
        'https://nakedground.coffee/cdn/shop/files/20240711093834678_952x_crop_center.jpg?v=1723055299'
    },
    'The Oval': {
      text: `Our connection to cricket is undeniable, and this summer 2024, we are excited to announce our presence at The Oval.

We will be adding our coffee vans to this incredible venue, a place some of our shareholders have called home, and now we can call it home too.

If you're there this summer, come and say hello.`,
      image:
        'https://nakedground.coffee/cdn/shop/files/20240609130349539_952x_crop_center.jpg?v=1723055298'
    },
    Lords: {
      text: `This summer, our coffee cups will grace the legendary Lords, the home of cricket, with the addition of several coffee vans.

We are incredibly excited to be part of this spectacular stadium.

With its rich history, we aim to offer you our rich-tasting coffee blends throughout the summer season.

Join us at Lords for an unforgettable experience, and savor the perfect cup of coffee amidst cricketing greatness`,
      image:
        'https://nakedground.coffee/cdn/shop/files/20240620170043970_952x_crop_center.jpg?v=1723055298'
    }
  };
  return (
    <>
      <div
        className="relative flex h-[200px] items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://nakedground.coffee/cdn/shop/files/20240711090419980_1920x.jpg?v=1723055298')"
        }}
      >
        {/* Overlay for a darker background effect */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Text content */}
        <div className="relative p-4 text-center text-white">
          <h2 className="text-4xl font-bold">
            MILLIONS OF EYES ON THE BRAND, EVERY. SINGLE. WEEK.
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 px-24 py-8">
        <img
          src="https://nakedground.coffee/cdn/shop/files/20240711093836996.jpg?crop=center&height=460&v=1723055298&width=460"
          alt="Image 1"
          className="h-auto w-full"
        />
        <img
          src="https://nakedground.coffee/cdn/shop/files/20240620173024718.jpg?crop=center&height=460&v=1723055298&width=460"
          alt="Image 2"
          className="h-auto w-full"
        />
        <img
          src="https://nakedground.coffee/cdn/shop/files/20240609152730052.jpg?crop=center&height=460&v=1723055299&width=460"
          alt="Image 3"
          className="h-auto w-full"
        />
        <img
          src="https://nakedground.coffee/cdn/shop/files/20240711090419980.jpg?crop=center&height=460&v=1723055298&width=460"
          alt="Image 4"
          className="h-auto w-full"
        />
        <img
          src="https://nakedground.coffee/cdn/shop/files/20240609152805819.jpg?crop=center&height=460&v=1725364774&width=460"
          alt="Image 5"
          className="h-auto w-full"
        />
        <img
          src="https://nakedground.coffee/cdn/shop/files/20240530161120236_1.jpg?crop=center&height=460&v=1723649620&width=460"
          alt="Image 6"
          className="h-auto w-full"
        />
        <img
          src="https://nakedground.coffee/cdn/shop/files/20240530172535108.jpg?crop=center&height=460&v=1723649620&width=460"
          alt="Image 7"
          className="h-auto w-full"
        />
        <img
          src="https://nakedground.coffee/cdn/shop/files/20240530162143384_1.jpg?crop=center&height=460&v=1723649620&width=460"
          alt="Image 8"
          className="h-auto w-full"
        />
      </div>

      <div className="flex w-full flex-col items-center px-24">
        {/* Dynamic Section */}
        <div className="mb-4 flex w-full flex-col text-center md:flex-row">
          {/* Left Section: Image */}
          <div className="flex items-center justify-center md:w-1/2">
            <div className="h-0 w-full md:h-auto md:w-auto" style={{ aspectRatio: '1 / 1' }}>
              <img
                src={sectionContent[activeSection]?.image}
                alt={`Image for ${activeSection}`}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Right Section: Text */}
          <div className="flex flex-col justify-center p-6 md:w-1/2">
            <h2 className="mb-2 text-2xl font-semibold">{activeSection}</h2>
            <p className="mx-auto w-fit max-w-lg">{sectionContent[activeSection]?.text}</p>
          </div>
        </div>

        {/* Buttons to change the active section */}
        <div className="flex space-x-2">
          {Object.keys(sectionContent).map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`rounded-md px-4 py-2 font-medium transition-colors ${
                activeSection === section ? 'text-gray-500 underline' : 'text-black'
              }`}
            >
              {section}
            </button>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-lg rounded-lg p-6">
        <img
          src="https://nakedground.coffee/cdn/shop/articles/screenshot-2024-08-19-at-11.12.51_42fb9156-07d3-4fdc-b6b3-f184fcc2d426_1131x.png?v=1724071161"
          alt="Curran Brothers celebrating"
          className="h-64 w-full rounded-md object-cover"
        />
        <div className="mt-4">
          <p className="text-sm text-gray-500">August 19, 2024 | Troy Cooke</p>
          <h2 className="mt-2 text-2xl font-bold">
            Curran Brothers: Crushing It On the Field and Brewing Wins Off It
          </h2>
          <p className="mt-3 text-gray-700">
            How Sam and Tom Curran Are Winning Big in Cricket and Coffee with Naked Ground. The Oval
            Invincibles once again found joy at Lord's, securing back-to-back titles with a 17-run
            victory over Southern Brave. The game, played under the lights in front of nearly 29,000
            fans, was a show...
          </p>
          <button className="mt-4 rounded bg-gray-800 px-4 py-2 text-white hover:bg-gray-700">
            Learn More &rarr;
          </button>
        </div>
      </div>
    </>
  );
};

export default page;

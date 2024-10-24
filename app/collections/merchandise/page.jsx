import Image from 'next/image';

const page = () => {
  const images = [
    'https://nakedground.coffee/cdn/shop/files/20240807150135733_336x336_crop_center.jpg?v=1723056491',
    'https://nakedground.coffee/cdn/shop/files/20240807150111176_336x336_crop_center.jpg?v=1723056490',
    'https://nakedground.coffee/cdn/shop/files/20240807154849776_336x336_crop_center.jpg?v=1723056491',
    'https://nakedground.coffee/cdn/shop/files/20240807150153163_336x336_crop_center.jpg?v=1723056491',
    'https://nakedground.coffee/cdn/shop/files/20240807150116317_336x336_crop_center.jpg?v=1723056491',
    'https://nakedground.coffee/cdn/shop/files/20240807154054803_336x336_crop_center.jpg?v=1723056491'
  ];
  return (
    <div>
      <div
        className="relative w-full bg-cover bg-center py-8"
        style={{
          backgroundImage:
            "url('https://nakedground.coffee/cdn/shop/files/20240807153657703_1920x.jpg?v=1723056491')"
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative w-full max-w-6xl p-4 sm:mx-auto sm:p-0">
          <h2 className="font-bold uppercase text-white">Mercancia.</h2>
          <div className="flex w-full items-end justify-end align-middle">
            <div className="flex flex-col gap-2 rounded bg-white p-4 sm:p-6">
              <Image
                src={
                  'https://nakedground.coffee/cdn/shop/files/Screenshot2024-08-08at14.23.59_414x.png?v=1723123483'
                }
                alt=""
                width={400}
                height={400}
                className="aspect-square rounded object-cover"
              />
              <h3 className="">Limited Edition Baseball Cap</h3>
              <p className="font-bold">£24.95</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-6">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Gallery image ${index + 1}`} className="h-auto w-full" />
        ))}
      </div>
      <div className="h-28 bg-[#92d4ee]"></div>
      <div
        className="relative w-full bg-cover bg-center py-8"
        style={{
          backgroundImage:
            "url('https://nakedground.coffee/cdn/shop/files/ocean-waves-crashing_1920x.jpg?v=1716406810')"
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative w-full max-w-6xl p-4 sm:mx-auto sm:p-0">
          <h2 className="font-bold uppercase text-white">Luxury Naked Ground Towel</h2>
          <div className="flex w-full items-end justify-end align-middle">
            <div className="flex flex-col gap-2 rounded bg-white p-4 sm:p-6">
              <Image
                src={
                  'https://nakedground.coffee/cdn/shop/files/Screenshot2024-08-08at14.20.43_414x.png?v=1724271966'
                }
                alt=""
                width={400}
                height={400}
                className="aspect-square rounded object-cover"
              />
              <h3 className="">Large Luxury Cotton Naked Ground Beach Towel</h3>
              <p className="font-bold">£124.95</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-4 text-center md:grid-cols-2">
          <div className="rounded-lg p-4">
            <div className="flex flex-col items-center">
              <span className="mx-auto" role="img" aria-label="emoji">
                🌊
              </span>
              <h2 className="text-lg font-bold">Luxurious Balearic Design</h2>
              <p className="mt-2 text-sm">
                Classic Balearic blue and white stripes bring a touch of elegance to your beach day.
              </p>
            </div>
          </div>
          <div className="rounded-lg p-4">
            <div className="flex flex-col items-center">
              <span className="mx-auto" role="img" aria-label="emoji">
                🧵
              </span>
              <h2 className="text-lg font-bold">Premium Quality and Craftsmanship</h2>
              <p className="mt-2 text-sm">
                Made from 100% cotton for exceptional softness and absorbency.
              </p>
            </div>
          </div>
          <div className="rounded-lg p-4">
            <div className="flex flex-col items-center">
              <span className="mx-auto" role="img" aria-label="emoji">
                ✨
              </span>
              <h2 className="text-lg font-bold">Exclusive Naked Ground Embroidery</h2>
              <p className="mt-2 text-sm">
                Features contrasting coffee brown Naked Ground embroidery for a distinctive look.
              </p>
            </div>
          </div>
          <div className="rounded-lg p-4">
            <div className="flex flex-col items-center">
              <span className="mx-auto" role="img" aria-label="emoji">
                📏
              </span>
              <h2 className="text-lg font-bold">Generous Size and Portuguese Heritage</h2>
              <p className="mt-2 text-sm">
                Generously sized at 100x170cm and proudly made in Portugal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

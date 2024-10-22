const page = () => {
  const images = [
    'https://nakedground.coffee/cdn/shop/files/breakfast-croissant-sandwich-cafe_336x336_crop_center.jpg?v=1716328638',
    'https://nakedground.coffee/cdn/shop/files/a-pair-of-acai-bowls_336x336_crop_center.jpg?v=1716320844',
    'https://nakedground.coffee/cdn/shop/files/latte-with-leaf-design_336x336_crop_center.jpg?v=1716322046',
    'https://nakedground.coffee/cdn/shop/files/berries-granola_336x336_crop_center.jpg?v=1716321383',
    'https://nakedground.coffee/cdn/shop/files/fresh-juice-on-cafe-table_336x336_crop_center.jpg?v=1716328450',
    'https://nakedground.coffee/cdn/shop/files/wooden-plate-with-pastry-and-assorted-berries_336x336_crop_center.jpg?v=1716320984'
  ];
  return (
    <>
      <div className="flex w-full flex-col md:flex-row-reverse md:p-8 md:px-24">
        {/* Image Section */}
        <div className="h-96 w-full md:h-auto md:w-1/2">
          <img
            src="https://nakedground.coffee/cdn/shop/files/dry-grass-beach-umbrellas.jpg?v=1716327805&width=900"
            alt="Naked Ground Ibiza"
            className="h-full w-full object-cover sm:rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center p-4 md:w-1/2 md:p-8">
          <h1 className="mb-4 text-2xl font-bold text-black md:text-3xl">Naked Ground Ibiza</h1>
          <p className="mb-4 text-gray-700">
            Edificio Koala, Carrer Ricardo Curtoys Gotarredona, Local 8, 07840 Santa Eulària des
            Riu, Illes Balears, Spain
          </p>
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-black">Opening Hours</h2>
            <p className="text-gray-700">Lunes - Domingo, 09:00 - 17:00</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-black">Enquiries & Bookings</h2>
            <p className="text-gray-700">eliza@nakedground.coffee</p>
          </div>
        </div>
      </div>
      <div className="mx-4 my-8 md:mx-24">
        <div className="relative h-[700px] w-full overflow-hidden rounded-[32px]">
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 h-full w-full object-cover"
            src="https://nakedground.coffee/cdn/shop/videos/c/vp/9f20bf5f89ef4364ac40ced7aca46ea5/9f20bf5f89ef4364ac40ced7aca46ea5.HD-1080p-4.8Mbps-26702584.mp4?v=0"
            alt="Background video"
          ></video>

          {/* Overlay Text */}
          <div className="relative z-10 flex h-full w-full items-center justify-center">
            <p className="max-w-2xl px-4 text-center text-lg font-semibold text-white md:text-xl lg:text-2xl">
              Born on the beach, our brand captures the simple joy of a great coffee by the sea,
              offering a peaceful escape.
            </p>
          </div>

          {/* Background Overlay for better text readability */}
          <div className="absolute inset-0 bg-black opacity-20"></div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:flex">
        {images.slice(0, 6).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="h-auto w-full object-cover"
          />
        ))}
      </div>
    </>
  );
};

export default page;

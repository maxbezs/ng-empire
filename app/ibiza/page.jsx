const page = () => {
  return (
    <>
      <div className="flex w-full flex-col px-24 md:flex-row">
        {/* Left Section: Text */}
        <div className="flex flex-col justify-center p-8 md:w-1/2">
          <h1 className="mb-4 text-3xl font-bold text-black">Naked Ground Ibiza</h1>
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

        {/* Right Section: Image */}
        <div className="h-64 md:h-auto md:w-1/2">
          <img
            src="https://nakedground.coffee/cdn/shop/files/dry-grass-beach-umbrellas.jpg?v=1716327805&width=900"
            alt="Naked Ground Ibiza"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="m-24">
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
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
      </div>{' '}
      <img src="https://cdn.shopify.com/s/files/1/0785/0233/0701/files/sLp7kb.jpg?v=1729411882" />
    </>
  );
};

export default page;

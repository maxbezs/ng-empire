const Matcha = () => {
  return (
    <section>
      <div className="flex flex-col items-center overflow-hidden rounded-2xl bg-white align-middle sm:rounded-3xl">
        <div className="relative h-[250px] w-full overflow-hidden sm:h-[700px]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute left-1/2 top-1/2 min-h-full w-auto min-w-full max-w-none -translate-x-1/2 -translate-y-1/2 transform"
          >
            <source
              src="//nakedground.coffee/cdn/shop/videos/c/vp/f93c692a475b4101868005570bc945ea/f93c692a475b4101868005570bc945ea.HD-1080p-4.8Mbps-34142665.mp4?v=0"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black bg-opacity-50 p-10 text-center text-white">
            <h2 className="text-3xl font-bold sm:text-5xl">Matcha</h2>
            <p className="text-lg sm:text-2xl">
              Introducing, Japanese Ceremonial Grade 5 Matcha, by Naked Ground
            </p>
            <a
              href="/product/matcha-japanese-ceremonial-grade-5"
              className="rounded-full bg-[#079547] px-6 py-2 font-bold sm:px-8 sm:py-4"
            >
              BUY NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Matcha;

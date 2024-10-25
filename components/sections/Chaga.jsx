const Chaga = () => {
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
              src="//nakedground.coffee/cdn/shop/videos/c/vp/0ed0512c745d4fa99b3f1b4423499cc6/0ed0512c745d4fa99b3f1b4423499cc6.HD-1080p-7.2Mbps-34342997.mp4?v=0"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black bg-opacity-50 p-10 text-center text-white">
            <h2 className="text-3xl font-bold sm:text-5xl">Chaga</h2>
            <p className="text-lg sm:text-2xl">
              Introducing Siberian Chaga Crystals by Naked Ground
            </p>
            <a
              href="/product/siberian-chaga-crystals"
              className="rounded-full bg-black px-6 py-2 font-bold sm:px-8 sm:py-4"
            >
              SHOP NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chaga;

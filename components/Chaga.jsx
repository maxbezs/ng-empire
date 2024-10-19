const Chaga = () => {
  return (
    <section>
      <div className="flex flex-col items-center overflow-hidden rounded-3xl bg-white align-middle">
        <div className="relative h-[700px] w-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            className="absolute left-1/2 top-1/2 min-h-full w-auto min-w-full max-w-none -translate-x-1/2 -translate-y-1/2 transform"
          >
            <source
              src="//nakedground.coffee/cdn/shop/videos/c/vp/0ed0512c745d4fa99b3f1b4423499cc6/0ed0512c745d4fa99b3f1b4423499cc6.HD-1080p-7.2Mbps-34342997.mp4?v=0"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black bg-opacity-50 text-white">
            <h1 className="text-5xl font-bold">Chaga</h1>
            <p className="text-2xl">Introducing Siberian Chaga Crystals by Naked Ground</p>
            <a href="#" className="rounded-full bg-black px-8 py-4 font-bold">
              {' '}
              SHOP NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chaga;

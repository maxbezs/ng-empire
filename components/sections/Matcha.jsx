const Matcha = () => {
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
              src="//nakedground.coffee/cdn/shop/videos/c/vp/f93c692a475b4101868005570bc945ea/f93c692a475b4101868005570bc945ea.HD-1080p-4.8Mbps-34142665.mp4?v=0"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black bg-opacity-50 text-white">
            <h1 className="text-5xl font-bold">Matcha</h1>
            <p className="text-2xl">
              Introducing, Japanese Ceremonial Grade 5 Matcha, by Naked Ground
            </p>
            <a href="#" className="rounded-full bg-[#079547] px-8 py-4 font-bold">
              BUY NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Matcha;

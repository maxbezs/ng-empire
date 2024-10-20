const JoinUs = () => {
  return (
    <div>
      <div className="relative h-[700px] w-full">
        <video
          autoPlay
          loop
          muted
          className="absolute left-0 top-0 z-0 h-full w-full object-cover brightness-50"
        >
          <source src="https://static.pexels.com/lib/videos/free-videos.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 flex h-full flex-col items-center justify-center">
          <h1 className="font-poppins text-5xl font-bold text-white sm:text-7xl md:text-9xl">
            JOIN US
          </h1>
          <h2 className="font-poppins sm:text-md text-sm font-bold text-white md:text-xl">
            Now or Never. Start your journey with us.
          </h2>
          <a className="text-primary font-poppins hover:text-primary duration-250 mt-3 w-2/3 transform cursor-pointer rounded-full border-white bg-white p-3 text-center text-2xl font-extrabold transition ease-in-out hover:scale-110 sm:w-1/2">
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;

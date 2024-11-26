import Image from 'next/image';

const JoinUs = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Background Video Section */}
      <div className="py-12 md:h-[700px] md:w-1/2">
        {/* Overlay Content */}
        <div className="flex h-full flex-col items-center justify-center px-4 text-center">
          {/* Heading */}
          <h1 className="text-5xl font-bold sm:text-7xl md:text-9xl">JOIN US</h1>

          {/* Subheading */}
          <h2 className="text-sm font-bold sm:text-base md:text-xl">
            Now or Never. Start your journey with us.
          </h2>

          {/* Call to Action Button */}
          <a
            href="#register"
            className="text-primary duration-250 hover: mt-3 w-2/3 transform cursor-pointer rounded-full border-2 border-transparent bg-[#84d4f4] p-3 text-center text-2xl font-extrabold transition ease-in-out hover:scale-110 hover:border-white hover:bg-transparent sm:w-1/2"
          >
            Register
          </a>

          {/* Supporting Text */}
          <p className="mt-4 text-sm sm:text-base md:text-lg">
            {' '}
            Our flexible plans, expert trainers, and world-class facilities await you.
            <br /> Ready to transform your fitness?
          </p>
        </div>
      </div>
      <div className="h-[700px] md:w-1/2">
        <Image alt="join" src={'/join.jpg'} width={550} height={500} className="object-contain" />
      </div>
    </div>
  );
};

export default JoinUs;

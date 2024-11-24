import Image from 'next/image';
import Link from 'next/link';

const Main = () => {
  return (
    <div className="relative flex flex-col-reverse bg-white px-8 md:flex-row md:px-12">
      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-start justify-center px-8 py-6 text-center md:py-16">
        <h2 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
          Be Yourself, but Stronger!
          <br />
          <span className="text-[#84d4f4]">Embrace Your Power</span>
        </h2>
        <p className="mt-6 max-w-screen-lg text-lg text-gray-700 sm:text-xl md:text-2xl">
          Unlock your potential with our state-of-the-art training facilities, expert trainers, and
          a community that inspires growth.
        </p>
        <Link
          href={'/gym/memberships'}
          className="mx-auto mt-8 rounded-full bg-[#84d4f4] px-6 py-3 text-lg font-bold text-white transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[#92d4ee] sm:px-8 sm:py-4 sm:text-xl"
        >
          Become Member
        </Link>
      </div>
      <div className="relative aspect-square h-auto w-full md:w-1/2">
        <Image src={'/all.jpg'} alt="ng members" fill />
      </div>
    </div>
  );
};

export default Main;

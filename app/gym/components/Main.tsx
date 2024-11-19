const Main = () => {
  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Background Section */}
      <div className="absolute inset-0">
        <div className="bg-secondary h-full w-full opacity-70"></div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-start justify-center px-8 py-16 sm:px-16 md:px-20 lg:px-32">
        <h2 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
          Be Yourself, but Stronger!
          <br />
          <span className="text-blue-500">Embrace Your Power</span>
        </h2>
        <p className="mt-6 text-lg text-gray-700 sm:text-xl md:text-2xl">
          Unlock your potential with our state-of-the-art training facilities, expert trainers, and
          a community that inspires growth.
        </p>
        <button className="mt-8 rounded-full bg-blue-500 px-6 py-3 text-lg font-bold text-white transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-blue-600 sm:px-8 sm:py-4 sm:text-xl">
          Learn More
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-0 top-0 hidden h-48 w-48 rounded-full bg-blue-300 opacity-20 sm:block"></div>
      <div className="absolute bottom-0 left-0 hidden h-64 w-64 rounded-full bg-blue-500 opacity-10 sm:block"></div>
    </div>
  );
};

export default Main;

const JoinUs = () => {
  return (
    <div>
      {/* Background Video Section */}
      <div className="relative h-[700px] w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute left-0 top-0 z-0 h-full w-full object-cover brightness-50"
        >
          <source src="https://static.pexels.com/lib/videos/free-videos.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          {/* Heading */}
          <h1 className="font-poppins text-5xl font-bold text-white sm:text-7xl md:text-9xl">
            JOIN US
          </h1>

          {/* Subheading */}
          <h2 className="font-poppins sm:text-md text-sm font-bold text-white md:text-xl">
            Now or Never. Start your journey with us.
          </h2>

          {/* Call to Action Button */}
          <a
            href="#register"
            className="text-primary duration-250 mt-3 w-2/3 transform cursor-pointer rounded-full border-2 border-transparent bg-white p-3 text-center text-2xl font-extrabold transition ease-in-out hover:scale-110 hover:border-white hover:bg-transparent hover:text-white sm:w-1/2"
          >
            Register
          </a>

          {/* Supporting Text */}
          <p className="sm:text-md mt-4 text-sm text-white md:text-lg">
            Ready to transform your fitness? Our flexible plans, expert trainers, and world-class
            facilities await you.
          </p>
        </div>
      </div>

      {/* Information Section */}
      <div className="bg-primary px-6 py-8 text-center text-white">
        {/* Membership Benefits */}
        <div className="mb-6">
          <h3 className="mb-4 text-3xl font-bold">Membership Benefits</h3>
          <ul className="list-inside list-disc text-lg">
            <li>Unlimited access to all gym facilities</li>
            <li>Personalized training programs</li>
            <li>Free group fitness classes</li>
            <li>Exclusive members-only events</li>
            <li>Discounts on supplements and merchandise</li>
          </ul>
        </div>

        {/* Testimonial */}
        <div>
          <h3 className="mb-4 text-3xl font-bold">What Our Members Say</h3>
          <blockquote className="italic">
            "Joining this gym was the best decision of my life. The trainers are supportive, and the
            facilities are top-notch!" - Sarah T.
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;

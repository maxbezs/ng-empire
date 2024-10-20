const Footer = () => {
  return (
    <footer className="bg-blue-200 py-10 text-black">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-3">
        <div>
          <h3 className="mb-2 text-lg font-semibold">Address</h3>
          <p>UNIT 49</p>
          <p>PORTMANMOOR ROAD</p>
          <p>CARDIFF</p>
          <p>CF24 5HB</p>
        </div>

        <div>
          <h3 className="mb-2 text-lg font-semibold">Opening Hours</h3>
          <p>Reception open / normal membership entry times</p>
          <p>Mon to Fri: 6am - 9pm</p>
          <p>Sat: 8am - 6pm</p>
          <p>Sun: 8am - 5pm</p>
        </div>

        <div>
          <h3 className="mb-2 text-lg font-semibold">About Us</h3>
          <p className="mb-4">Helping you take your fitness to the next level</p>
          <p className="mb-4">
            Naked Ground offers one of the highest specification membership gyms in Cardiff at a
            very competitive price
          </p>
          <p>Naked Ground</p>
          <p>Your Positive Daily Habit</p>
          <p>02922 407418</p>
          <p>hola@nakedground.coffee</p>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4">
        <div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row">
          <p className="text-sm">© Copyright 2024 Naked Ground</p>
          <div className="mt-4 flex space-x-4 md:mt-0">
            <a href="#" className="text-sm hover:text-gray-400">
              Privacy Policy
            </a>
            <a href="#" className="text-sm hover:text-gray-400">
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

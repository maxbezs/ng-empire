const Locations = () => {
  return (
    <div className="bg-secondary grid grid-cols-1 sm:grid-cols-2">
      {/* Map Section */}
      <div className="flex">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3134.6986562321445!2d-3.146941407117449!3d51.4739563527928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e1d8219ad328f%3A0x1e3251ba2964d4cd!2sNaked%20Ground%20Health%20Club!5e0!3m2!1sen!2suk!4v1720099575969!5m2!1sen!2suk"
          className="h-[50vh] w-screen sm:w-[50vw]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Gym Location"
        ></iframe>
      </div>

      {/* Information Section */}
      <div className="relative flex flex-col space-y-6 p-[6vw]">
        {/* Address Section */}
        <div>
          <h3 className="text-primary mb-2 text-lg font-semibold">Address</h3>
          <p className="text-base">UNIT 49</p>
          <p className="text-base">PORTMANMOOR ROAD</p>
          <p className="text-base">CARDIFF</p>
          <p className="text-base">CF24 5HB</p>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-primary mb-2 text-lg font-semibold">Opening Hours</h3>
          <p className="text-base">Reception open / normal membership entry times:</p>
          <p className="text-base">Mon to Fri: 6am - 9pm</p>
          <p className="text-base">Sat: 8am - 6pm</p>
          <p className="text-base">Sun: 8am - 5pm</p>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-primary mb-2 text-lg font-semibold">Contact Us</h3>
          <p className="text-base">
            Phone:{' '}
            <a href="tel:+441234567890" className="text-blue-500">
              +44 1234 567 890
            </a>
          </p>
          <p className="text-base">
            Email:{' '}
            <a href="mailto:info@nakedgroundgym.co.uk" className="text-blue-500">
              info@nakedgroundgym.co.uk
            </a>
          </p>
        </div>

        {/* Accessibility Information */}
        <div>
          <h3 className="text-primary mb-2 text-lg font-semibold">Accessibility</h3>
          <p className="text-base">
            Our facility is wheelchair accessible, with parking available onsite. If you have
            specific needs, please contact us in advance, and we’ll be happy to assist.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Locations;

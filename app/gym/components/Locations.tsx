const Locations = () => {
  return (
    <div className="bg-secondary grid grid-cols-1 sm:grid-cols-2">
      <div className="flex">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3134.6986562321445!2d-3.146941407117449!3d51.4739563527928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e1d8219ad328f%3A0x1e3251ba2964d4cd!2sNaked%20Ground%20Health%20Club!5e0!3m2!1sen!2suk!4v1720099575969!5m2!1sen!2suk"
            className="h-[50vh] w-screen sm:w-[50vw]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="relative flex flex-col p-[6vw]">
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
      </div>
    </div>
  );
};

export default Locations;

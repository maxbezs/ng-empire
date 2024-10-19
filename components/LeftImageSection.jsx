const LeftImageSection = () => {
  return (
    <section>
      <div className="flex overflow-hidden rounded-3xl bg-white align-middle">
        <div className="w-1/2">
          <img src="https://cdn.shopify.com/s/files/1/0785/0233/0701/files/20240609130349539.jpg?v=1723055298&width=1600" />
        </div>
        <div className="flex w-1/2 flex-col justify-end gap-4 bg-[#b6e7ff] p-8 align-bottom">
          <h2 className="text-xl font-bold">LONDRES.</h2>
          <p className="text-lg">
            Our Londres Blend is served at sports stadiums and events across the UK every single
            week to thousands of customers. From the home of Cricket to the home of the mighty
            Harlequins, the Londres blend is now available at your home!
          </p>
          <a href="#" className="w-fit rounded-full bg-black px-8 py-4 font-bold text-white">
            GRAB YOURS
          </a>
        </div>
      </div>
    </section>
  );
};

export default LeftImageSection;

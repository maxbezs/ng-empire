const LeftImageSection = () => {
  return (
    <section>
      <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white align-middle sm:flex-row sm:rounded-3xl">
        <div className="h-full w-full sm:w-1/2">
          <img
            src="https://cdn.shopify.com/s/files/1/0785/0233/0701/files/20240609130349539.jpg?v=1723055298&width=1600"
            className="h-96 w-full object-cover sm:h-full"
          />
        </div>
        <div className="flex w-full flex-col justify-end gap-2 bg-[#b6e7ff] p-4 align-bottom sm:w-1/2 sm:gap-4 sm:p-8">
          <h2 className="text-xl font-bold">LONDRES.</h2>
          <p className="sm:text-lg">
            Our Londres Blend is served at sports stadiums and events across the UK every single
            week to thousands of customers. From the home of Cricket to the home of the mighty
            Harlequins, the Londres blend is now available at your home!
          </p>
          <a
            href="/product/2-bags"
            className="w-fit rounded-full bg-black px-6 py-2 font-bold text-white sm:px-8 sm:py-4"
          >
            GRAB YOURS
          </a>
        </div>
      </div>
    </section>
  );
};

export default LeftImageSection;

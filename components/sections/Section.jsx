const Section = () => {
  return (
    <section>
      <div className="flex flex-col items-center overflow-hidden rounded-2xl bg-white align-middle sm:rounded-3xl">
        <div
          className="relative h-[250px] w-full bg-cover bg-center sm:h-[700px]"
          style={{
            backgroundImage:
              "url('https://nakedground.coffee/cdn/shop/files/Screenshot_2024-08-08_at_10.22.59_2000x.png?v=1723109022')"
          }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center text-white">
            <h2 className="mb-4 text-4xl font-bold sm:text-6xl">YOUR COFFEE</h2>
            <a href="#" className="rounded-full bg-[#92d4ee] px-6 py-2 font-bold sm:px-8 sm:py-4">
              SHOP NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;

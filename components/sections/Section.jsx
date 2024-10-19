const Section = () => {
  return (
    <section>
      <div className="flex flex-col items-center overflow-hidden rounded-3xl bg-white align-middle">
        <div
          className="relative h-[700px] w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://nakedground.coffee/cdn/shop/files/Screenshot_2024-08-08_at_10.22.59_2000x.png?v=1723109022')"
          }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
            <h2 className="mb-4 text-6xl font-bold">YOUR COFFEE</h2>
            <a href="#" className="rounded-full bg-[#92d4ee] px-8 py-4 font-bold">
              SHOP NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;

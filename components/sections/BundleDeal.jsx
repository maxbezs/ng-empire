const BundleDeal = () => {
  return (
    <section>
      <div className="flex flex-col items-center overflow-hidden rounded-3xl bg-white align-middle">
        <div
          className="relative h-[700px] w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://cdn.shopify.com/s/files/1/0785/0233/0701/files/Screenshot_2024-08-10_at_13.50.40.png?v=1723794308')"
          }}
        >
          <div className="absolute inset-0 flex flex-col justify-end bg-black bg-opacity-50 p-8 text-white">
            <h2 className="mb-4 text-4xl font-bold">3 Blend Bundle available for £20</h2>
            <a href="#" className="w-fit rounded-full bg-[#92d4ee] px-8 py-4 font-bold">
              BUY BUNDLE NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BundleDeal;

import FilterList from 'components/layout/search/filter';
import { sorting } from 'lib/constants';
import ChildrenWrapper from '../../search/children-wrapper';

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-4 my-4 flex flex-col gap-8 sm:mx-24 sm:my-8">
      <section>
        <div className="flex flex-col items-center overflow-hidden rounded-2xl bg-white align-middle sm:rounded-3xl">
          <div className="relative h-[250px] w-full overflow-hidden sm:h-[700px]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute left-1/2 top-1/2 min-h-full w-auto min-w-full max-w-none -translate-x-1/2 -translate-y-1/2 transform"
            >
              <source
                src="https://nakedground.coffee/cdn/shop/videos/c/vp/7d885ef746004022a9ef4cc035bed713/7d885ef746004022a9ef4cc035bed713.HD-1080p-4.8Mbps-26702583.mp4?v=0"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
      <h1 className="text-4xl font-bold">Somos café.</h1>
      <div className="flex flex-col gap-8 text-black md:flex-row">
        <div className="order-none flex-none md:order-first md:w-[125px]">
          <FilterList list={sorting} title="Sort by" />
        </div>
        <div className="order-last min-h-screen w-full md:order-last">
          <ChildrenWrapper>{children}</ChildrenWrapper>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-4 text-center md:grid-cols-3">
          <div className="p-4">
            <img
              src="https://nakedground.coffee/cdn/shop/files/Untitled_design_copy_2_108x.png?v=1724335043"
              alt="Balearic"
              className="mx-auto mb-2 h-16"
            />
            <h2 className="text-lg font-bold">BALEARIC</h2>
            <p className="mt-2 text-sm">
              100% Arabica - Latin American mix - Medium dark roast - Caramel and Dark Chocolate - A
              taste of the Balearics
            </p>
          </div>
          <div className="p-4">
            <img
              src="https://nakedground.coffee/cdn/shop/files/Untitled_design_db1aa806-445a-42c3-9f48-801bf5f4f7aa_108x.png?v=1724334690"
              alt="Londres"
              className="mx-auto mb-2 h-16"
            />
            <h2 className="text-lg font-bold">LONDRES</h2>
            <p className="mt-2 text-sm">
              A smooth mix of Arabica and Robusta - Multi-origin - Cocoa and Toffee - Inspired by
              London. Punchy yet balanced.
            </p>
          </div>
          <div className="p-4">
            <img
              src="https://nakedground.coffee/cdn/shop/files/Untitled_design_copy_108x.png?v=1724335022"
              alt="Brasília"
              className="mx-auto mb-2 h-16"
            />
            <h2 className="text-lg font-bold">BRASÍLIA</h2>
            <p className="mt-2 text-sm">
              Medium roast - Made from 100% Arabica beans - Single origin from Brazil - Suits all
              brew methods - An absolute must-try for any drip filter lovers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

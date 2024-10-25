import FilterList from 'components/layout/search/filter';
import CardCarousel from 'components/sections/CardCarousel';
import Ticker from 'components/Ticker';
import { sorting } from 'lib/constants';
import ChildrenWrapper from '../../search/children-wrapper';

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  const cardData = [
    {
      id: 1,
      imageUrl:
        'https://nakedground.coffee/cdn/shop/files/1_1bf49dbe-5042-4097-97fe-dbe823eed9e3.png?v=1725809093',
      hoverImageUrl:
        'https://nakedground.coffee/cdn/shop/files/2_cfefa592-94c3-4f72-842b-1e490e1a64ec.png?v=1725809094',
      overlayText: 'Chaga',
      description: 'Siberian Chaga Crystals',
      url: '/product/siberian-chaga-crystals',
      price: 399
    },
    {
      id: 2,
      imageUrl:
        'https://nakedground.coffee/cdn/shop/files/Untitled_design_1_copy_7.png?v=1725209258',
      hoverImageUrl:
        'https://nakedground.coffee/cdn/shop/files/Untitleddesign_1_copy3.png?v=1725203029',
      overlayText: 'Matcha',
      description: 'Matcha - Japanese Ceremonial Grade 5',
      url: '/product/matcha-japanese-ceremonial-grade-5',
      price: 133
    }
  ];
  const content = [
    'MÁS QUE CAFÉ',
    'MÁS QUE CAFÉ',
    'MÁS QUE CAFÉ',
    'MÁS QUE CAFÉ',
    'MÁS QUE CAFÉ',
    'MÁS QUE CAFÉ',
    'MÁS QUE CAFÉ',
    'MÁS QUE CAFÉ'
  ];
  return (
    <>
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
                  src="https://nakedground.coffee/cdn/shop/videos/c/vp/63e7dfc859d44bdfa77e447dc8a2e5f1/63e7dfc859d44bdfa77e447dc8a2e5f1.HD-1080p-7.2Mbps-34142678.mp4?v=0"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black bg-opacity-30 p-10 text-center text-white">
                <h2 className="text-3xl font-bold sm:text-5xl">Loose-Leaf Tea</h2>
                <p className="text-lg sm:text-2xl">Introducing Loose-Leaf Tea by Naked Ground</p>
                <a
                  href="/product/classic-green"
                  className="rounded-full bg-white px-6 py-2 font-bold text-black sm:px-8 sm:py-4"
                >
                  SHOP NOW
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Ticker content={content} color={'white'} background={'bg-[#92d4ee]'} />
      <div className="mx-4 py-8 sm:mx-auto sm:max-w-7xl">
        <CardCarousel cardData={cardData} />
      </div>
      <Ticker content={content} color={'white'} background={'bg-[#92d4ee]'} />
      <div className="mx-4 my-4 flex flex-col gap-8 sm:mx-24 sm:my-8">
        <h1 className="text-4xl font-bold">Mas Que Cafe.</h1>
        <div className="flex flex-col gap-8 text-black md:flex-row">
          <div className="order-none flex-none md:order-first md:w-[125px]">
            <FilterList list={sorting} title="Sort by" />
          </div>
          <div className="order-last min-h-screen w-full md:order-last">
            <ChildrenWrapper>{children}</ChildrenWrapper>
          </div>
        </div>
      </div>
    </>
  );
}

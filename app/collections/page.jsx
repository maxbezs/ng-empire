import Image from 'next/image';
import Link from 'next/link';

const page = () => {
  return (
    <div className="flex flex-col gap-8 px-3 py-8 sm:px-24">
      <h1 className="text-4xl">All Collections</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
        <Link href="/collections/merchandise">
          <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-blue-200">
            <Image
              src="https://nakedground.coffee/cdn/shop/collections/Screenshot_2024-08-08_at_14.23.59_x585.png?v=1724684619"
              alt=""
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white py-2 text-center">
              Mercancía
            </div>
          </div>
        </Link>
        <Link href="/collections/mas-que-cafe">
          <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-blue-200">
            <Image
              src="https://nakedground.coffee/cdn/shop/collections/Screenshot_2024-08-18_at_14.36.05_x585.png?v=1723990355"
              alt=""
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white py-2 text-center">
              Más Que Café
            </div>
          </div>
        </Link>
        <Link href="/collections/coffee">
          <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-blue-200">
            <Image
              src="https://nakedground.coffee/cdn/shop/collections/Screenshot_5_x585.png?v=1724684585"
              alt=""
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white py-2 text-center">
              Somos café.
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default page;

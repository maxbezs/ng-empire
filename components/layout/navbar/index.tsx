import { ChevronDownIcon } from '@heroicons/react/24/outline';
import CartModal from 'components/cart/modal';
import LogoSquare from 'components/logo-square';
import { getMenu } from 'lib/shopify';
import { Menu } from 'lib/shopify/types';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';
import Search, { SearchSkeleton } from './search';

const { SITE_NAME } = process.env;

export async function Navbar() {
  const menu = await getMenu('main-menu');
  console.log(JSON.stringify(menu));
  const renderSubmenu = (children: Menu[]) => {
    return (
      <ul className="absolute left-0 top-full hidden w-fit min-w-40 rounded-lg border-2 border-white bg-[#92d4ee] p-4 shadow-lg group-hover:block">
        {children.map((subItem) => {
          const updatedSubUrl = subItem.path.replace(
            'https://rouge-technologies.myshopify.com',
            process.env.NEXT_PUBLIC_LOCAL_STORE_URL || ''
          );
          return (
            <li key={subItem.title} className="mb-2">
              <Link href={updatedSubUrl} className="text-white hover:underline">
                {subItem.title}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  };
  return (
    <nav className="relative flex items-center justify-between bg-[#92d4ee] p-4 lg:px-24">
      {/* Mobile Menu - Visible only on small screens */}
      <div className="block flex-none md:hidden">
        <Suspense fallback={null}>
          <MobileMenu menu={menu} />
        </Suspense>
      </div>

      <div className="flex w-full items-center">
        {/* Left section - Links */}
        <div className="hidden w-1/3 md:flex">
          {menu.length ? (
            <ul className="hidden gap-6 md:flex md:items-center">
              {menu.map((item: Menu) => (
                <li key={item.title} className="group relative">
                  <Link
                    href={item.path}
                    prefetch={true}
                    className="flex items-center text-white underline-offset-4 hover:underline"
                  >
                    {item.title}
                    {item.items && item.items.length > 0 && (
                      <ChevronDownIcon className="ml-1 h-4 w-4 text-white" />
                    )}
                  </Link>
                  {item.items && item.items.length > 0 && renderSubmenu(item.items)}
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {/* Center section - Logo */}
        <div className="flex w-full justify-center md:w-1/3">
          <Link href="/" prefetch={true} className="flex items-center justify-center">
            <LogoSquare />
          </Link>
        </div>

        {/* Right section - Search and Cart */}
        <div className="flex w-1/3 items-center justify-end">
          <div className="hidden md:flex">
            <Suspense fallback={<SearchSkeleton />}>
              <Search />
            </Suspense>
          </div>
          <CartModal />
        </div>
      </div>
    </nav>
  );
}

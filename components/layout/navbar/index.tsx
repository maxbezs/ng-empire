'use client';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import CartModal from 'components/cart/modal';
import LogoSquare from 'components/logo-square';
import { Menu } from 'lib/shopify/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname from next/navigation
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';
import Search, { SearchSkeleton } from './search';

const { SITE_NAME } = process.env;
const gymMenu = [
  {
    title: 'Store',
    path: 'https://nakedground.coffee/search/all',
    items: [
      { title: 'COFFEE', path: 'https://nakedground.coffee/search/coffee', items: [] },
      { title: 'MERCHANDISE', path: 'https://nakedground.coffee/search/merchandise', items: [] },
      { title: 'MÁS QUE CAFÉ', path: 'https://nakedground.coffee/mas-que-cafe', items: [] }
    ]
  },
  { title: 'Memberships', path: 'https://nakedground.coffee/gym/memberships', items: [] },
  { title: 'Timetable', path: 'https://nakedground.coffee/gym/timetable', items: [] },
  { title: 'Contact Us', path: 'https://nakedground.coffee/gym/contact-us', items: [] }
];
const shopMenu = [
  {
    title: 'Store',
    path: 'https://nakedground.coffee/search/all',
    items: [
      { title: 'COFFEE', path: 'https://nakedground.coffee/search/coffee', items: [] },
      { title: 'MERCHANDISE', path: 'https://nakedground.coffee/search/merchandise', items: [] },
      { title: 'MÁS QUE CAFÉ', path: 'https://nakedground.coffee/mas-que-cafe', items: [] }
    ]
  },
  { title: 'Our story', path: 'https://nakedground.coffee/our-story', items: [] },
  { title: 'Ibiza', path: 'https://nakedground.coffee/ibiza', items: [] },
  { title: 'Events', path: 'https://nakedground.coffee/events', items: [] },
  { title: 'Health Club', path: 'https://nakedground.coffee/gym', items: [] }
];
export async function Navbar() {
  const pathname = usePathname(); // Get the current path

  // Check if the current path starts with /gym
  const isGymPage = pathname.startsWith('/gym');

  // Use gymMenu if the current page is under /gym, otherwise fetch the default menu
  const menu = isGymPage ? gymMenu : shopMenu;

  const renderSubmenu = (children: Menu[]) => {
    return (
      <ul className="absolute left-0 top-full z-10 hidden w-fit min-w-40 rounded-lg border-2 border-white bg-[#92d4ee] p-4 shadow-lg group-hover:block">
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
              {menu.map((item: Menu) => {
                let updatedUrl = item.path.replace(
                  'https://nakedground.coffee',
                  'http://localhost:3000' || ''
                );
                return (
                  <li key={item.title} className="group relative">
                    <Link
                      href={updatedUrl}
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
                );
              })}
            </ul>
          ) : null}
        </div>

        {/* Center section - Logo */}
        <div className="flex w-full justify-center md:w-1/3">
          <Link href="/" prefetch={true} className="flex items-center justify-center">
            <LogoSquare />
          </Link>
        </div>

        {/* Right section - Conditional rendering based on route */}
        <div className="flex w-1/3 items-center justify-end">
          {isGymPage ? (
            // Gym-specific right section (Account)
            <div className="flex items-center text-white">
              <Link href="/gym/account" className="text-white hover:underline">
                Account
              </Link>
            </div>
          ) : (
            // Default right section (Search and Cart)
            <div className="flex items-center">
              <div className="hidden md:flex">
                <Suspense fallback={<SearchSkeleton />}>
                  <Search />
                </Suspense>
              </div>
              <CartModal />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

import Link from 'next/link';

import FooterMenu from 'components/layout/footer-menu';
import LogoSquare from 'components/logo-square';
import { Suspense } from 'react';
import PaymentsList from '../layout/PaymentsList';
import SocialLinks from '../layout/SocialLinks';

const { COMPANY_NAME, SITE_NAME } = process.env;
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
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  const skeleton = 'w-full h-6 animate-pulse rounded-md bg-neutral-200';
  const menu = shopMenu;
  const copyrightName = COMPANY_NAME || SITE_NAME || '';

  return (
    <footer className="text-sm text-black">
      <div className="mx-auto flex w-full flex-col gap-6 border-t border-[#92D4EE] px-6 py-12 text-sm md:flex-row md:gap-12 md:px-24">
        <div className="flex flex-col justify-center gap-2">
          <Link
            className="flex flex-col items-center justify-center gap-2 text-black sm:items-start sm:justify-start md:pt-1"
            href="/"
          >
            <div className="rounded-full bg-[#92D4EE] p-4">
              <LogoSquare size="sm" />
            </div>
          </Link>
          <div className="flex flex-col text-center sm:text-start">
            <span className="text-center uppercase sm:text-start">{SITE_NAME}</span>
            <span className="font-bold">Más que café</span>
          </div>

          <SocialLinks />
        </div>
        <Suspense
          fallback={
            <div className="flex h-[188px] w-[200px] flex-col gap-2">
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
            </div>
          }
        >
          <FooterMenu menu={menu} />
        </Suspense>
      </div>
      <PaymentsList />
      <div className="border-t border-[#92D4EE] py-6 text-sm">
        <div className="mx-auto flex w-full flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-24">
          <p>
            &copy; {copyrightDate} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

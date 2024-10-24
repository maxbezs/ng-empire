'use client';

import clsx from 'clsx';
import { Menu } from 'lib/shopify/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function FooterMenuItem({ item, isSubmenu = false }: { item: Menu; isSubmenu?: boolean }) {
  const pathname = usePathname();
  const [active, setActive] = useState(pathname === item.path);

  useEffect(() => {
    setActive(pathname === item.path);
  }, [pathname, item.path]);

  return (
    <li>
      <Link
        href={item.path}
        className={clsx(
          'block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block',
          {
            'font-bold md:text-base': !isSubmenu,
            '': active,
            'ml-1 md:text-sm': isSubmenu
          }
        )}
      >
        {item.title}
      </Link>

      {Array.isArray(item.items) && item.items.length > 0 && (
        <ul className="ml-1">
          {item.items.map((child) => (
            <FooterMenuItem key={child.title} item={child} isSubmenu />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function FooterMenu({ menu }: { menu: Menu[] }) {
  if (!menu.length) return null;

  return (
    <nav>
      <ul className="grid sm:grid-cols-5">
        {menu.map((item: Menu) => {
          return <FooterMenuItem key={item.title} item={item} />;
        })}
      </ul>
    </nav>
  );
}

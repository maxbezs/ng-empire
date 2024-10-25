import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function OpenCart({
  className,
  quantity
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="relative flex h-11 w-11 items-center justify-center text-white">
      <ShoppingCartIcon
        className={clsx('h-8 transition-all ease-in-out hover:scale-110', className)}
      />

      {quantity ? (
        <div className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-md bg-white text-sm font-medium text-black">
          {quantity}
        </div>
      ) : null}
    </div>
  );
}

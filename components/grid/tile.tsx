import clsx from 'clsx';
import Price from 'components/price';
import Image from 'next/image';

export function GridTileImage({
  isInteractive = true,
  active,
  label,
  ...props
}: {
  isInteractive?: boolean;
  active?: boolean;
  label?: {
    title: string;
    amount: string;
    currencyCode: string;
    position?: 'bottom' | 'center';
  };
} & React.ComponentProps<typeof Image>) {
  return (
    <>
      <div
        className={clsx(
          'group flex h-full w-full items-center justify-center overflow-hidden rounded-lg'
        )}
      >
        {props.src ? (
          <Image
            className={clsx('relative h-full w-full object-contain', {
              'transition duration-300 ease-in-out group-hover:scale-105': isInteractive
            })}
            width={1000}
            height={1000}
            {...props}
          />
        ) : null}
      </div>
      {label ? (
        <div className="relative flex flex-col">
          <h3 className="mr-4 flex-grow pl-2">{label.title}</h3>
          <Price
            className="w-fit flex-none rounded-full font-bold"
            amount={label.amount}
            currencyCode={label.currencyCode}
          />
        </div>
      ) : null}
    </>
  );
}

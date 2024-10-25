import clsx from 'clsx';
import Image from 'next/image';
import Label from '../label';

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
    <div
      className={clsx(
        'group flex h-fit w-full flex-col items-center justify-center overflow-hidden rounded-md',
        {
          relative: label,
          'border-neutral-200': !active
        }
      )}
    >
      {props.src ? (
        <Image
          className={clsx('relative aspect-square w-full object-cover', {
            'transition duration-300 ease-in-out group-hover:scale-105': isInteractive
          })}
          width={props.width || 800}
          height={props.height || 800}
          {...props}
        />
      ) : null}
      {label ? (
        <div className="mt-2 flex flex-col items-center">
          <Label
            title={label.title}
            amount={label.amount}
            currencyCode={label.currencyCode}
            position={label.position}
          />
        </div>
      ) : null}
    </div>
  );
}

import clsx from 'clsx';
import LogoIcon from './icons/logo';

export default function LogoSquare({ size }: { size?: 'sm' | undefined }) {
  return (
    <LogoIcon
      className={clsx({
        'h-[42px] w-[42px]': !size,
        'h-[30px] w-[30px]': size === 'sm'
      })}
    />
  );
}

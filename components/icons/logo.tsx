import clsx from 'clsx';
import Image from 'next/image';

export default function LogoIcon(props: any) {
  return (
    <div
      aria-label={`Naked Ground logo`}
      {...props}
      className={clsx('fill-black', props.className)}
    >
      <Image
        src={'https://cdn.shopify.com/s/files/1/0785/0233/0701/files/white-wink.png?v=1725632191'}
        alt={`Naked Ground logo`}
        width={85}
        height={85}
      />
    </div>
  );
}

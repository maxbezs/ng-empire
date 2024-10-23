import clsx from 'clsx';
import Price from './price';

const Label = ({
  title,
  amount,
  currencyCode,
  position = 'bottom'
}: {
  title: string;
  amount: string;
  currencyCode: string;
  position?: 'bottom' | 'center';
}) => {
  return (
    <div
      className={clsx('absolute left-0 flex w-full px-4 pb-4 @container/label', {
        'bottom-0': position === 'bottom',
        'top-1/2 -translate-y-1/2 transform': position === 'center'
      })}
    >
      <div className="flex flex-col rounded-lg p-2 font-semibold text-black">
        <h3 className="mb-2">{title}</h3>
        <Price
          className="px-3 py-1"
          amount={amount}
          currencyCode={currencyCode}
          currencyCodeClassName="hidden @[275px]/label:inline"
        />
      </div>
    </div>
  );
};

export default Label;

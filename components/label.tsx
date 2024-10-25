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
    <div className={clsx('flex w-full sm:px-4 sm:pb-4')}>
      <div className="flex flex-col rounded-md p-2 font-semibold text-black">
        <h3 className="mb-2">{title}</h3>
        <Price
          amount={amount}
          currencyCode={currencyCode}
          currencyCodeClassName="hidden @[275px]/label:inline"
        />
      </div>
    </div>
  );
};

export default Label;

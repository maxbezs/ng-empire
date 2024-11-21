import { formatDate } from 'lib/utils';

const PaymentSection = ({ memberData }) => (
  <section className="rounded-lg bg-white p-6 shadow">
    <h2 className="text-lg font-semibold text-gray-800">Payment & Subscription</h2>
    <p className="my-2 text-gray-600">Next billing date: {formatDate(memberData?.end_date)}</p>
    <p className="text-gray-600">Current plan: {memberData.membership}</p>
    <button className="mt-4 rounded bg-blue-500 px-4 py-2 text-white">
      Manage Payment Settings
    </button>
  </section>
);

export default PaymentSection;

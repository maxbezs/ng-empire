'use client';
import { getMemberSubscription } from 'app/gym/account/actions';
import { formatDate } from 'lib/utils';
import { useEffect, useState } from 'react';

function MemberSubscription() {
  const [subscription, setSubscription] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSubscription() {
      try {
        const data = await getMemberSubscription();
        setSubscription(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchSubscription();
  }, []);

  if (loading)
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100 text-gray-700">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100 text-red-500">
        Error: {error}
      </div>
    );

  return (
    <div className="mx-auto max-w-lg rounded-lg bg-white p-6 shadow-lg">
      <h1 className="mb-4 text-2xl font-bold text-gray-800">Member Subscription</h1>
      {subscription ? (
        <div className="space-y-2">
          <p className="text-gray-700">
            <span className="font-semibold">Status:</span> {subscription.status}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Start Date:</span> {formatDate(subscription.startDate)}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">End Date:</span> {formatDate(subscription.endDate)}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Stripe Subscription ID:</span>{' '}
            {subscription.stripeSubscriptionId}
          </p>
        </div>
      ) : (
        <p className="text-gray-600">No subscription data available.</p>
      )}
    </div>
  );
}

export default MemberSubscription;

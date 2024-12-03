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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Member Subscription</h1>
      {subscription ? (
        <div>
          <p>Status: {subscription.status}</p>
          <p>Start Date: {formatDate(subscription.startDate)}</p>
          <p>End Date: {formatDate(subscription.endDate)}</p>
          <p>Stripe Subscription ID: {subscription.stripeSubscriptionId}</p>
        </div>
      ) : (
        <p>No subscription data available.</p>
      )}
    </div>
  );
}

export default MemberSubscription;

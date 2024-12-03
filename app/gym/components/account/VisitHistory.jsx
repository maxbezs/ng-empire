'use client';
import { getVisits } from 'app/gym/account/actions';
import { useEffect, useState } from 'react';

function MemberVisits() {
  const [visits, setVisits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchVisits() {
      try {
        const data = await getVisits();
        setVisits(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchVisits();
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
    <div className="w-full rounded-lg bg-white p-6 shadow-lg">
      <h1 className="mb-4 text-2xl font-bold text-gray-800">Member Visits</h1>
      {visits.length > 0 ? (
        <ul className="space-y-2">
          {visits.map((visit) => (
            <li
              key={visit.id}
              className="rounded-lg border border-gray-200 bg-gray-50 p-4 shadow-md hover:bg-gray-100"
            >
              <p className="text-gray-700">
                <span className="font-semibold">Visit Date:</span>{' '}
                {new Date(visit.visitDate).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No visits recorded.</p>
      )}
    </div>
  );
}

export default MemberVisits;

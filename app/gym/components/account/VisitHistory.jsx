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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Member Visits</h1>
      {visits.length > 0 ? (
        <ul>
          {visits.map((visit) => (
            <li key={visit.id}>
              <p>Visit Date: {new Date(visit.visitDate).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No visits recorded.</p>
      )}
    </div>
  );
}

export default MemberVisits;

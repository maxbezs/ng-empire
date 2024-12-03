'use client';
import { getClassesForMember } from 'app/gym/account/actions';
import { useEffect, useState } from 'react';

function MemberClasses() {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchClasses() {
      try {
        const data = await getClassesForMember();
        setClasses(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchClasses();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Member Classes</h1>
      {classes.length > 0 ? (
        <ul>
          {classes.map((cls) => (
            <li key={cls.id}>
              <h3>{cls.name}</h3>
              <p>{cls.description}</p>
              <p>Trainer ID: {cls.trainerId}</p>
              <p>Schedule Time: {cls.scheduleTime}</p>
              <p>Location: {cls.location}</p>
              <p>Duration: {cls.duration} minutes</p>
              <p>Capacity: {cls.capacity}</p>
              <p>Current Enrollment: {cls.currentEnrollment}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No classes available.</p>
      )}
    </div>
  );
}

export default MemberClasses;

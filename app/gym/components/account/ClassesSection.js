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
    <div className="mx-auto max-w-5xl rounded-lg bg-white p-6 shadow-lg">
      <h1 className="mb-6 text-2xl font-bold text-gray-800">Member Classes</h1>
      {classes.length > 0 ? (
        <ul className="space-y-4">
          {classes.map((cls) => (
            <li
              key={cls.id}
              className="rounded-lg border border-gray-200 bg-gray-50 p-4 shadow-md hover:bg-gray-100"
            >
              <h3 className="mb-2 text-lg font-semibold text-gray-800">{cls.name}</h3>
              <p className="mb-1 text-gray-700">
                <span className="font-semibold">Description:</span> {cls.description}
              </p>
              <p className="mb-1 text-gray-700">
                <span className="font-semibold">Trainer ID:</span> {cls.trainerId}
              </p>
              <p className="mb-1 text-gray-700">
                <span className="font-semibold">Schedule Time:</span> {cls.scheduleTime}
              </p>
              <p className="mb-1 text-gray-700">
                <span className="font-semibold">Location:</span> {cls.location}
              </p>
              <p className="mb-1 text-gray-700">
                <span className="font-semibold">Duration:</span> {cls.duration} minutes
              </p>
              <p className="mb-1 text-gray-700">
                <span className="font-semibold">Capacity:</span> {cls.capacity}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Current Enrollment:</span> {cls.currentEnrollment}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No classes available.</p>
      )}
    </div>
  );
}

export default MemberClasses;

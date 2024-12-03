'use client';
import { checkSessionAction, getPersonalTrainingSessions } from 'app/gym/account/actions';
import { useEffect, useState } from 'react';

function PersonalTrainingSessionSection() {
  const [sessions, setSessions] = useState([]);
  const [memberData, setMemberData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const sessionResult = await checkSessionAction();
        if (sessionResult.valid && sessionResult.memberData) {
          setMemberData(sessionResult.memberData);
          const fetchedSessions = await getPersonalTrainingSessions();
          setSessions(fetchedSessions);
        }
      } catch (error) {
        console.error('Error fetching personal training sessions:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading)
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100 text-gray-700">
        Loading...
      </div>
    );

  if (!memberData)
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100 text-red-500">
        Please log in to view your sessions.
      </div>
    );

  return (
    <div className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-lg">
      <h1 className="mb-4 text-2xl font-bold text-gray-800">Personal Training Sessions</h1>
      {sessions.length > 0 ? (
        <ul className="space-y-2">
          {sessions.map((session) => (
            <li key={session.id} className="rounded-lg bg-gray-100 p-4 shadow-md hover:bg-gray-200">
              <span className="font-medium text-gray-700">{session.date}</span> -{' '}
              <span className="text-gray-600">{session.status}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No sessions available.</p>
      )}
    </div>
  );
}

export default PersonalTrainingSessionSection;

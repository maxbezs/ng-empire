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

  if (loading) return <div>Loading...</div>;
  if (!memberData) return <div>Please log in to view your sessions.</div>;

  return (
    <div>
      <h1>Personal Training Sessions</h1>
      {sessions.length > 0 ? (
        <ul>
          {sessions.map((session) => (
            <li key={session.id}>
              {session.date} - {session.status}
            </li>
          ))}
        </ul>
      ) : (
        <p>No sessions available.</p>
      )}
    </div>
  );
}

export default PersonalTrainingSessionSection;

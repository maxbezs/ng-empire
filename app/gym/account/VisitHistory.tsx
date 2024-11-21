import React from 'react';

type Visit = {
  date: string;
  time: string;
  activity: string;
};

type VisitHistoryProps = {
  visits: Visit[];
};
const visits = [
  { date: '2024-11-19', time: '08:00 AM', activity: 'Cardio' },
  { date: '2024-11-20', time: '10:00 AM', activity: 'Weight Training' },
  { date: '2024-11-21', time: '07:30 PM', activity: 'Yoga' }
];

const VisitHistory: React.FC<VisitHistoryProps> = () => {
  return (
    <div className="col-span-3 rounded-md bg-white p-6 shadow-md">
      <h2 className="mb-4 text-2xl font-semibold">Gym Visit History</h2>
      {visits.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-4 py-2 text-left text-gray-600">Date</th>
                <th className="border border-gray-200 px-4 py-2 text-left text-gray-600">Time</th>
                <th className="border border-gray-200 px-4 py-2 text-left text-gray-600">
                  Activity
                </th>
              </tr>
            </thead>
            <tbody>
              {visits.map((visit, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">{visit.date}</td>
                  <td className="border border-gray-200 px-4 py-2">{visit.time}</td>
                  <td className="border border-gray-200 px-4 py-2">{visit.activity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-600">No visits recorded yet.</p>
      )}
    </div>
  );
};

export default VisitHistory;

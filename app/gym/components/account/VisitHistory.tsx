import React, { useState } from 'react';

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
  { date: '2024-11-21', time: '07:30 PM', activity: 'Yoga' },
  { date: '2024-11-22', time: '09:00 AM', activity: 'Pilates' },
  { date: '2024-11-23', time: '06:00 PM', activity: 'Spin Class' },
  { date: '2024-11-24', time: '08:30 AM', activity: 'Boxing' },
  { date: '2024-11-22', time: '09:00 AM', activity: 'Pilates' },
  { date: '2024-11-23', time: '06:00 PM', activity: 'Spin Class' },
  { date: '2024-11-24', time: '08:30 AM', activity: 'Boxing' },
  { date: '2024-11-22', time: '09:00 AM', activity: 'Pilates' },
  { date: '2024-11-23', time: '06:00 PM', activity: 'Spin Class' },
  { date: '2024-11-24', time: '08:30 AM', activity: 'Boxing' },
  { date: '2024-11-22', time: '09:00 AM', activity: 'Pilates' },
  { date: '2024-11-23', time: '06:00 PM', activity: 'Spin Class' },
  { date: '2024-11-24', time: '08:30 AM', activity: 'Boxing' }
]; // Example visits

const VisitHistory: React.FC<VisitHistoryProps> = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const visitsPerPage = 3;

  // Calculate indices for slicing
  const indexOfLastVisit = currentPage * visitsPerPage;
  const indexOfFirstVisit = indexOfLastVisit - visitsPerPage;
  const currentVisits = visits.slice(indexOfFirstVisit, indexOfLastVisit);

  const totalPages = Math.ceil(visits.length / visitsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="col-span-3 rounded-md bg-white p-6 shadow-md">
      <h2 className="mb-4 text-2xl font-semibold">Gym Visit History</h2>
      {currentVisits.length > 0 ? (
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
              {currentVisits.map((visit, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">{visit.date}</td>
                  <td className="border border-gray-200 px-4 py-2">{visit.time}</td>
                  <td className="border border-gray-200 px-4 py-2">{visit.activity}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Pagination Controls */}
          <div className="mt-4 flex items-center justify-between">
            <button
              className="rounded bg-blue-500 px-4 py-2 text-white disabled:cursor-not-allowed disabled:bg-gray-300"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="text-gray-600">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="rounded bg-blue-500 px-4 py-2 text-white disabled:cursor-not-allowed disabled:bg-gray-300"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <p className="text-gray-600">No visits recorded yet.</p>
      )}
    </div>
  );
};

export default VisitHistory;

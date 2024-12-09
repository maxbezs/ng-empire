'use client';

import { formatDate } from 'lib/utils';
import { useState } from 'react';

const TimetableList = ({ classes, trainers }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);

  const openModal = (classInfo) => {
    setSelectedClass(classInfo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedClass(null);
  };

  // Helper function to find trainer by ID and return full name
  const getTrainerFullName = (trainerId) => {
    const trainer = trainers.find((t) => t.id === trainerId);
    return trainer ? `${trainer.firstName} ${trainer.lastName}` : 'Unknown Trainer';
  };
  function convertTimestampToLocalDateTime(timestamp) {
    // Ensure the timestamp is a number
    const numericTimestamp = Number(timestamp);

    // Convert the timestamp to milliseconds and create a Date object
    const date = new Date(numericTimestamp);

    // Format the date to the user's local time without seconds
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    };
    return date.toLocaleString(undefined, options);
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
        {classes.map((classInfo) => (
          <div key={classInfo.id} className="h-fit rounded-lg bg-white">
            <div className="rounded-t-lg bg-white p-3 text-black">
              <h2 className="text-xl font-bold">{classInfo.name}</h2>
            </div>
            <div className="border-t border-gray-700 p-4">
              <p className="text-black">Time: {formatDate(classInfo.scheduleTime)}</p>
              <p className="mb-1 text-xs text-green-500">Location: {classInfo.location}</p>
              <h3 className="text-lg font-bold">
                Instructor: {getTrainerFullName(classInfo.trainerId)}
              </h3>
              <p className="mb-2 text-sm">Duration: {classInfo.duration} mins</p>
              <p className="text-sm text-green-400">Capacity: {classInfo.capacity}</p>
              <div className="mt-2 flex items-center">
                <button
                  onClick={() => openModal(classInfo)}
                  className="rounded-md bg-[#92d4ee] px-3 py-1 text-white transition hover:bg-blue-700"
                >
                  VIEW DETAIL
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedClass && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-sm rounded-lg bg-white p-6">
            <h2 className="text-xl font-bold">{selectedClass.name}</h2>
            <p>{selectedClass.description}</p>
            <p className="text-black">
              Time: {convertTimestampToLocalDateTime(selectedClass.scheduleTime)}
            </p>
            <p className="mb-1 text-xs text-green-500">Location: {selectedClass.location}</p>
            <h3 className="text-lg font-bold">
              Instructor: {getTrainerFullName(selectedClass.trainerId)}
            </h3>
            <p className="mb-2 text-sm">Duration: {selectedClass.duration} mins</p>
            <p className="text-sm text-green-400">Capacity: {selectedClass.capacity}</p>
            <div className="mt-4 flex justify-between">
              <button
                onClick={closeModal}
                className="rounded-md bg-gray-400 px-4 py-2 text-white hover:bg-gray-500"
              >
                Cancel
              </button>
              <button className="rounded-md bg-[#92d4ee] px-4 py-2 text-white hover:bg-blue-700">
                Book Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimetableList;

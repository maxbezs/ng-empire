'use client';

import { useState } from 'react';

const TimetableList = ({ classes }) => {
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

  const handleBookNow = () => {
    // Handle booking logic here
    console.log('Class booked:', selectedClass);
    closeModal();
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
        {classes.map((classInfo) => (
          <div key={classInfo.id} className="h-fit rounded-lg bg-white">
            <div className="rounded-t-lg bg-white p-3 text-black">
              <h2 className="text-xl font-bold">{classInfo.name}</h2>
              <p>{classInfo.description}</p>
            </div>
            <div className="border-t border-gray-700 p-4">
              <p className="text-black">Time: {classInfo.scheduleTime}</p>
              <p className="mb-1 text-xs text-green-500">Location: {classInfo.location}</p>
              <h3 className="text-lg font-bold">
                Instructor: {classInfo.trainerId.firstName} {classInfo.trainerId.lastName}
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
            <p className="text-black">Time: {selectedClass.scheduleTime}</p>
            <p className="mb-1 text-xs text-green-500">Location: {selectedClass.location}</p>
            <h3 className="text-lg font-bold">
              Instructor: {selectedClass.trainerId.firstName} {selectedClass.trainerId.lastName}
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
              <button
                onClick={handleBookNow}
                className="rounded-md bg-[#92d4ee] px-4 py-2 text-white hover:bg-blue-700"
              >
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

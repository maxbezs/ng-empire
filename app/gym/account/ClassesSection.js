import { useState } from 'react';

const ClassesSection = () => {
  const [classes, setClasses] = useState([
    { id: 1, name: 'Yoga', schedule: 'Monday 7:00 AM' },
    { id: 2, name: 'HIIT', schedule: 'Wednesday 6:00 PM' },
    { id: 3, name: 'Pilates', schedule: 'Friday 8:00 AM' }
  ]);

  const handleCancel = (id) => {
    if (window.confirm('Are you sure you want to cancel this class?')) {
      setClasses((prev) => prev.filter((c) => c.id !== id));
    }
  };

  const handleBookNewClass = () => {
    alert('Redirecting to booking page...'); // Placeholder action
  };

  return (
    <section className="col-span-2 rounded-lg bg-white p-6 shadow">
      <h2 className="mb-4 text-lg font-semibold text-gray-800">Upcoming Classes</h2>
      {classes.length > 0 ? (
        <ul className="space-y-4">
          {classes.map((classItem) => (
            <li
              key={classItem.id}
              className="flex items-center justify-between rounded-lg bg-gray-100 p-4"
            >
              <span className="text-gray-800">{`${classItem.name} - ${classItem.schedule}`}</span>
              <button
                className="text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                onClick={() => handleCancel(classItem.id)}
              >
                Cancel
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No upcoming classes. Book a new class!</p>
      )}
      <button
        className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        onClick={handleBookNewClass}
      >
        Book New Class
      </button>
    </section>
  );
};

export default ClassesSection;

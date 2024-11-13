'use client';

import { useEffect, useState } from 'react';

const Dropdown = ({ label, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="w-full min-w-[300px] rounded bg-blue-300 px-4 py-2 text-left text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label} <span className="float-right">▾</span>
      </button>
      {isOpen && (
        <ul className="absolute left-0 z-10 mt-2 w-full rounded bg-blue-300 shadow-lg">
          {options.map((option, index) => (
            <li
              key={index}
              className="cursor-pointer px-4 py-2 text-white hover:bg-blue-500"
              onClick={() => {
                onSelect(option);
                setIsOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const TimetableFilter = () => {
  const [calendar, setCalendar] = useState('All Calendars');
  const [instructor, setInstructor] = useState('Instructor');
  const [classType, setClassType] = useState('Class');

  const calendarOptions = ['All Calendars', 'Class Timetable', 'Performance'];
  const instructorOptions = [
    'Instructor',
    'Alex Bodin',
    'Chloe Stevens',
    'Dafydd Judd',
    'Ethan Jones',
    'Gemma Bevan',
    'Jon Meades',
    'Lawrence Facey'
  ];
  const classOptions = [
    'Class',
    'Powerlifting',
    'Athletic Conditioning',
    'Athletic Performance',
    'BoxFit',
    'Golden Strong',
    'Perform (Full Body)',
    'Perform (Lower Body)',
    'Perform (Upper Body)',
    'Run Club',
    'S & C',
    'Turf Girl Circuits',
    'Watermelon Bootcamp'
  ];

  return (
    <div className="mb-6 flex gap-4">
      <Dropdown label={calendar} options={calendarOptions} onSelect={setCalendar} />
      <Dropdown label={instructor} options={instructorOptions} onSelect={setInstructor} />
      <Dropdown label={classType} options={classOptions} onSelect={setClassType} />
    </div>
  );
};

const Timetable = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClasses = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://admin-panel-gym.vercel.app/api/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            query: `
              query {
                classes {
                  id
                  name
                  description
                  trainerId {
                    first_name
                    last_name
                  }
                  scheduleTime
                  location
                  duration
                  capacity
                }
              }
            `
          })
        });
        const { data } = await response.json();
        setClasses(data.classes);
      } catch (err) {
        console.error(err);
        setError('Failed to load classes.');
      } finally {
        setLoading(false);
      }
    };

    fetchClasses();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="px-5 py-10 text-black">
      <div className="mx-auto max-w-6xl">
        <h1 className="mx-auto w-fit p-2 text-4xl">Timetable</h1>
        <TimetableFilter />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
          {classes.map((classInfo, index) => (
            <div key={classInfo.id} className="h-fit rounded-lg bg-white">
              <div className="rounded-t-lg bg-white p-3 text-black">
                <h2 className="text-xl font-bold">{classInfo.name}</h2>
                <p>{classInfo.description}</p>
              </div>
              <div className="border-t border-gray-700 p-4">
                <p className="text-black">Time: {classInfo.scheduleTime}</p>
                <p className="mb-1 text-xs text-green-500">Location: {classInfo.location}</p>
                <h3 className="text-lg font-bold">
                  Instructor: {classInfo.trainerId.first_name} {classInfo.trainerId.last_name}
                </h3>
                <p className="mb-2 text-sm">Duration: {classInfo.duration} mins</p>
                <p className="text-sm text-green-400">Capacity: {classInfo.capacity}</p>
                <div className="mt-2 flex items-center">
                  <button className="rounded-md bg-[#92d4ee] px-3 py-1 text-white transition hover:bg-blue-700">
                    VIEW DETAIL
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timetable;

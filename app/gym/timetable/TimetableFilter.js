// app/timetable/TimetableFilter.js

'use client';

import { useState } from 'react';

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

export default TimetableFilter;

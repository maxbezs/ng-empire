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
const Timetable = () => {
  const days = [
    {
      date: 'Sun 20 Oct',
      classes: [
        {
          title: 'POWERLIFTING',
          time: '10:00 AM - 11:00 AM',
          instructor: 'Ethan Jones',
          category: 'Performance',
          status: 'Spaces Available',
          type: 'Class Timetable',
          details: true,
          difficulty: 3
        }
      ]
    },
    {
      date: 'Mon 21 Oct',
      classes: [
        {
          title: 'ATHLETIC PERFORMANCE',
          time: '8:00 AM - 9:00 AM',
          instructor: 'Dafydd Judd',
          category: 'Class Timetable',
          status: 'Spaces Available',
          details: true,
          difficulty: 3
        },
        {
          title: 'S & C',
          time: '6:00 PM - 6:45 PM',
          instructor: 'Alex Bodin',
          category: 'Class Timetable',
          status: 'Spaces Available',
          details: true,
          difficulty: 3
        }
      ]
    },
    {
      date: 'Tue 22 Oct',
      classes: [
        {
          title: 'GOLDEN STRONG',
          time: '10:00 AM - 11:00 AM',
          instructor: 'Dafydd Judd',
          category: 'Class Timetable',
          status: 'Spaces Available',
          details: true,
          difficulty: 2
        },
        {
          title: 'ATHLETIC CONDITIONING',
          time: '6:00 PM - 7:00 PM',
          instructor: 'Alex Bodin',
          category: 'Class Timetable',
          status: 'Spaces Available',
          details: true,
          difficulty: 3
        }
      ]
    },
    {
      date: 'Wed 23 Oct',
      classes: [
        {
          title: 'WATERMELON BOOTCAMP',
          time: '6:00 PM - 6:45 PM',
          instructor: 'Jon Meades',
          category: 'Class Timetable',
          status: 'Spaces Available',
          details: true,
          difficulty: 3
        },
        {
          title: 'RUN CLUB',
          time: '6:30 PM - 7:00 PM',
          instructor: 'Alex Bodin',
          category: 'Class Timetable',
          status: 'Spaces Available',
          details: true,
          difficulty: 2
        }
      ]
    },
    {
      date: 'Thu 24 Oct',
      classes: [
        {
          title: 'GOLDEN STRONG',
          time: '10:00 AM - 11:00 AM',
          instructor: 'Dafydd Judd',
          category: 'Class Timetable',
          status: 'Spaces Available',
          details: true,
          difficulty: 2
        },
        {
          title: 'ATHLETIC CONDITIONING',
          time: '6:00 PM - 7:00 PM',
          instructor: 'Alex Bodin',
          category: 'Class Timetable',
          status: 'Spaces Available',
          details: true,
          difficulty: 3
        },
        {
          title: 'PERFORM (FULL BODY)',
          time: '6:00 PM - 7:00 PM',
          instructor: 'Lawrence Facey',
          category: 'Performance',
          status: 'Spaces Available',
          details: true,
          difficulty: 3
        }
      ]
    }
  ];

  return (
    <div className="px-5 py-10 text-black">
      <div className="mx-auto max-w-6xl">
        <h1 className="mx-auto w-fit p-2 text-4xl">Timetable</h1>
        <TimetableFilter />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
          {days.map((day, index) => (
            <div key={index} className="h-fit rounded-lg bg-white">
              <div className="rounded-t-lg bg-white p-3 text-black">
                <h2 className="text-xl font-bold">{day.date}</h2>
              </div>
              {day.classes.map((classInfo, idx) => (
                <div key={idx} className="border-t border-gray-700 p-4">
                  <p className="text-black">{classInfo.time}</p>
                  <p className="mb-1 text-xs text-green-500">{classInfo.category}</p>
                  <h3 className="text-lg font-bold">{classInfo.title}</h3>
                  <p className="mb-2 text-sm">👤 {classInfo.instructor}</p>
                  <p className="text-sm text-green-400">{classInfo.status}</p>
                  <div className="mt-2 flex items-center">
                    <button className="rounded-md bg-[#92d4ee] px-3 py-1 text-white transition hover:bg-blue-700">
                      {classInfo.details ? 'VIEW DETAIL' : 'BOOK NOW'}
                    </button>
                    <div className="ml-auto text-blue-400">
                      {Array.from({ length: classInfo.difficulty }).map((_, i) => (
                        <span key={i}>⚡</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timetable;

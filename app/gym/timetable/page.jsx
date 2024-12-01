// app/timetable/page.js

import TimetableFilter from './TimetableFilter';
import TimetableList from './TimetableList';
const GRAPHQL_ENDPOINT = 'https://admin-panel-gym.vercel.app/api/graphql';
const fetchClassesData = async () => {
  try {
    const response = await fetch(GRAPHQL_ENDPOINT, {
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
    return data.classes;
  } catch (err) {
    console.error(err);
    return [];
  }
};

const TimetablePage = async () => {
  const classes = await fetchClassesData();

  return (
    <div className="px-5 py-10 text-black">
      <div className="mx-auto max-w-6xl">
        <h1 className="mx-auto w-fit p-2 text-4xl">Timetable</h1>
        <TimetableFilter />
        <TimetableList classes={classes} />
      </div>
    </div>
  );
};

export default TimetablePage;

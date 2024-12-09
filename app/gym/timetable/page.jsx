import TimetableList from './TimetableList';
const GRAPHQL_ENDPOINT = 'https://admin-panel-gym.vercel.app/api/graphql';

// Function to fetch classes data
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
              trainerId
              scheduleTime
              location
              duration
              capacity
              currentEnrollment
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

// Function to fetch trainers data
const fetchTrainersData = async () => {
  try {
    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `
          query GetTrainers {
            trainers {
              id
              firstName
              lastName
              dateOfBirth
              gender
              phone
              email
              bio
              photoUrl
            }
          }
        `
      })
    });
    const { data } = await response.json();
    return data.trainers;
  } catch (err) {
    console.error(err);
    return [];
  }
};

const TimetablePage = async () => {
  try {
    // Fetch classes and trainers data concurrently
    const [classes, trainers] = await Promise.all([fetchClassesData(), fetchTrainersData()]);

    return (
      <div className="px-5 py-10 text-black">
        <div className="mx-auto max-w-6xl">
          <h1 className="mx-auto w-fit p-2 text-4xl">Timetable</h1>
          {/*<TimetableFilter />*/}
          <TimetableList classes={classes} trainers={trainers} />
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return <div>Error loading timetable</div>;
  }
};

export default TimetablePage;

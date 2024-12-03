'use server';

import { fetchMemberData, manageCookies, validateToken } from 'app/api-utils/utils';
const GRAPHQL_ENDPOINT = 'http://localhost:3000/api/graphql';

export async function checkSessionAction() {
  console.log('checkSessionAction: Starting session validation.');
  const cookieManager = await manageCookies();
  const token = cookieManager.get('token');

  if (!token) {
    console.log('checkSessionAction: No token found.');
    return { valid: false, memberData: null };
  }

  try {
    console.log('checkSessionAction: Validating token.');
    await validateToken(token);

    console.log('checkSessionAction: Fetching member data.');
    const memberData = await fetchMemberData(token);

    console.log('checkSessionAction: Session valid. Member data fetched successfully.');
    return { valid: true, memberData };
  } catch (error) {
    if (['TokenExpired', 'InvalidToken'].includes(error.message)) {
      console.error('checkSessionAction: Token invalid or expired. Deleting token.');
      await cookieManager.delete('token');
      return { valid: false, memberData: null };
    }
    console.error('checkSessionAction: Unexpected error:', error);
    throw error;
  }
}
export async function getMemberSubscription() {
  console.log('getMemberSubscription: Initializing subscription fetch.');

  const cookieManager = await manageCookies();
  const token = cookieManager.get('token');

  if (!token) {
    console.error('getMemberSubscription: No token found.');
    throw new Error('Unauthorized: No token provided');
  }

  try {
    console.log('getMemberSubscription: Validating token.');

    // Validate the token and extract the payload
    const decodedToken = await validateToken(token); // Assuming validateToken returns the decoded token

    if (!decodedToken?.id) {
      console.error('getMemberSubscription: Invalid token structure. No ID found.');
      throw new Error('Invalid token');
    }

    const memberId = decodedToken.id;

    console.log('getMemberSubscription: Fetching subscription data for member:', memberId);

    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query GetMemberSubscription($memberId: ID!) {
            memberSubscription(memberId: $memberId) {
              memberId
              stripeSubscriptionId
              status
              startDate
              endDate
            }
          }
        `,
        variables: { memberId }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('getMemberSubscription: Error response:', errorText);
      throw new Error(`Failed to fetch member subscription: ${response.statusText}`);
    }

    const { data } = await response.json();

    if (!data?.memberSubscription) {
      console.error('getMemberSubscription: No subscription data found.');
      throw new Error('No subscription data available');
    }

    console.log('getMemberSubscription: Subscription data fetched successfully.');
    return data.memberSubscription;
  } catch (error) {
    if (['TokenExpired', 'InvalidToken'].includes(error.message)) {
      console.error('getMemberSubscription: Invalid or expired token:', error.message);
      throw new Error('Unauthorized: Invalid or expired token');
    }
    console.error('getMemberSubscription: Unexpected error:', error);
    throw error;
  }
}
export async function getPersonalTrainingSessions() {
  console.log('getPersonalTrainingSessions: Initializing session fetch.');

  const cookieManager = await manageCookies();
  const token = cookieManager.get('token');

  if (!token) {
    console.error('getPersonalTrainingSessions: No token found.');
    throw new Error('Unauthorized: No token provided');
  }

  try {
    console.log('getPersonalTrainingSessions: Validating token.');

    // Validate the token
    const decodedToken = await validateToken(token); // Assuming validateToken returns the decoded token

    if (!decodedToken?.id) {
      console.error('getPersonalTrainingSessions: Invalid token structure. No ID found.');
      throw new Error('Invalid token');
    }

    const memberId = decodedToken.id;

    console.log(
      'getPersonalTrainingSessions: Fetching personal training sessions for member:',
      memberId
    );

    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query GetPersonalTrainingSessions($memberId: ID!) {
            personalTrainingSessions(memberId: $memberId) {
              id
              trainerId
              memberId
              date
              duration
              status
            }
          }
        `,
        variables: { memberId }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('getPersonalTrainingSessions: Error response:', errorText);
      throw new Error(`Failed to fetch personal training sessions: ${response.statusText}`);
    }

    const { data } = await response.json();

    console.log('getPersonalTrainingSessions: Sessions fetched successfully.');
    return data?.personalTrainingSessions || [];
  } catch (error) {
    if (['TokenExpired', 'InvalidToken'].includes(error.message)) {
      console.error('getPersonalTrainingSessions: Invalid or expired token:', error.message);
      throw new Error('Unauthorized: Invalid or expired token');
    }
    console.error('getPersonalTrainingSessions: Unexpected error:', error);
    throw error;
  }
}
export async function loginAction(email, password) {
  console.log('loginAction: Attempting to log in with email:', email);
  console.log(email + password);
  try {
    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          mutation Login($email: String!, $password: String!) {
            login(email: $email, password: $password) {
              token
            }
          }
        `,
        variables: { email: email, password: password }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('loginAction: Error response:', errorText);
      throw new Error(`Login failed: ${response.statusText}`);
    }

    const { data } = await response.json();

    if (!data?.login?.token) {
      console.error('loginAction: Invalid login credentials. No token returned.');
      throw new Error('Invalid login credentials');
    }

    console.log('loginAction: Login successful. Setting token in cookies.');
    const cookieManager = await manageCookies();
    await cookieManager.set('token', data.login.token, { maxAge: 8 * 60 * 60 });

    console.log('loginAction: Fetching member data with the new token.');
    const memberData = await fetchMemberData(data.login.token);

    return { valid: true, memberData };
  } catch (error) {
    console.error('loginAction: Error during login:', error);
    throw error;
  }
}
export async function logoutAction() {
  console.log('logoutAction: Logging out. Deleting token from cookies.');
  const cookieManager = await manageCookies();
  await cookieManager.delete('token');
  return { success: true };
}
export async function getClassesForMember() {
  console.log('getClassesForMember: Initializing class fetch.');

  const cookieManager = await manageCookies();
  const token = cookieManager.get('token');

  if (!token) {
    console.error('getClassesForMember: No token found.');
    throw new Error('Unauthorized: No token provided');
  }

  try {
    console.log('getClassesForMember: Validating token.');

    // Validate the token and extract the payload
    const decodedToken = await validateToken(token); // Assuming validateToken returns the decoded token

    if (!decodedToken?.id) {
      console.error('getClassesForMember: Invalid token structure. No ID found.');
      throw new Error('Invalid token');
    }

    const memberId = decodedToken.id;

    console.log('getClassesForMember: Fetching classes for member:', memberId);

    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query GetClassesForMember($memberId: ID!) {
            classesForMember(memberId: $memberId) {
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
        `,
        variables: { memberId }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('getClassesForMember: Error response:', errorText);
      throw new Error(`Failed to fetch classes for member: ${response.statusText}`);
    }

    const { data } = await response.json();

    if (!data?.classesForMember) {
      console.error('getClassesForMember: No classes found.');
      throw new Error('No classes available');
    }

    console.log('getClassesForMember: Classes fetched successfully.');
    return data.classesForMember;
  } catch (error) {
    if (['TokenExpired', 'InvalidToken'].includes(error.message)) {
      console.error('getClassesForMember: Invalid or expired token:', error.message);
      throw new Error('Unauthorized: Invalid or expired token');
    }
    console.error('getClassesForMember: Unexpected error:', error);
    throw error;
  }
}
export async function getVisits() {
  console.log('getVisits: Initializing visits fetch.');

  const cookieManager = await manageCookies();
  const token = cookieManager.get('token');

  if (!token) {
    console.error('getVisits: No token found.');
    throw new Error('Unauthorized: No token provided');
  }

  try {
    console.log('getVisits: Validating token.');

    // Validate the token and extract the payload
    const decodedToken = await validateToken(token); // Assuming validateToken returns the decoded token

    if (!decodedToken?.id) {
      console.error('getVisits: Invalid token structure. No ID found.');
      throw new Error('Invalid token');
    }

    const memberId = decodedToken.id;

    console.log('getVisits: Fetching visits for member:', memberId);

    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query GetVisits($memberId: ID!) {
            visits(memberId: $memberId) {
              id
              memberId
              visitDate
            }
          }
        `,
        variables: { memberId }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('getVisits: Error response:', errorText);
      throw new Error(`Failed to fetch visits: ${response.statusText}`);
    }

    const { data } = await response.json();

    if (!data?.visits) {
      console.error('getVisits: No visits found.');
      throw new Error('No visit data available');
    }

    console.log('getVisits: Visits fetched successfully.');
    return data.visits;
  } catch (error) {
    if (['TokenExpired', 'InvalidToken'].includes(error.message)) {
      console.error('getVisits: Invalid or expired token:', error.message);
      throw new Error('Unauthorized: Invalid or expired token');
    }
    console.error('getVisits: Unexpected error:', error);
    throw error;
  }
}

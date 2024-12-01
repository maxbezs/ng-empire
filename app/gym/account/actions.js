'use server';

import { fetchMemberData, manageCookies, validateToken } from 'app/api-utils/utils';

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

const GRAPHQL_ENDPOINT = 'https://admin-panel-gym.vercel.app/api/graphql';

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

// actions.js
'use server';
import { fetchMemberData, manageCookies, validateToken } from 'app/api-utils/utils';

export async function checkSessionAction() {
  const cookieManager = await manageCookies();
  const token = cookieManager.get('token');

  if (!token) {
    return { valid: false, memberData: null };
  }

  try {
    validateToken(token);
    const memberData = await fetchMemberData(token);
    return { valid: true, memberData };
  } catch (error) {
    if (['TokenExpired', 'InvalidToken'].includes(error.message)) {
      await cookieManager.delete('token');
      return { valid: false, memberData: null };
    }
    throw error;
  }
}
const GRAPHQL_ENDPOINT = process.env.GRAPHQL_API_URL || 'http://localhost:3000/api/graphql';

export async function loginAction(email, password) {
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
      variables: { email, password }
    })
  });

  const { data } = await response.json();

  if (!data?.login?.token) {
    throw new Error('Invalid login credentials');
  }

  const cookieManager = await manageCookies();
  await cookieManager.set('token', data.login.token, { maxAge: 8 * 60 * 60 });

  const { valid, memberData } = await checkSessionAction();
  return { valid, memberData };
}

export async function logoutAction() {
  const cookieManager = await manageCookies();
  await cookieManager.delete('token');
  return { success: true };
}

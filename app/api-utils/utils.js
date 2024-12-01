'use server';

import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export const manageCookies = async () => {
  const cookieStore = await cookies();

  return {
    get: (name) => {
      const value = cookieStore.get(name)?.value;
      console.log(`manageCookies.get: Retrieving cookie "${name}" - Value:`, value);
      return value;
    },
    set: async (name, value, options) => {
      console.log(
        `manageCookies.set: Setting cookie "${name}" - Value:`,
        value,
        'Options:',
        options
      );
      cookieStore.set(name, value, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
        ...options
      });
    },
    delete: async (name) => {
      console.log(`manageCookies.delete: Deleting cookie "${name}"`);
      cookieStore.delete(name);
    }
  };
};

const SECRET_KEY =
  process.env.JWT_SECRET ||
  (() => {
    console.error('validateToken: JWT_SECRET is not defined');
    throw new Error('JWT_SECRET is not defined');
  })();

const GRAPHQL_ENDPOINT = 'https://admin-panel-gym.vercel.app/api/graphql';

export const fetchMemberData = async (token) => {
  if (!token) {
    console.error('fetchMemberData: No valid token provided. Aborting request.');
    throw new Error('Token is required to fetch member data');
  }

  console.log('fetchMemberData: Fetching member data with token:', token);

  try {
    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query Query($token: String) {
            member(token: $token) {
              firstName
              lastName
              phone
              email
            }
          }
        `,
        variables: { token: token }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('fetchMemberData: Error response:', errorText);
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const responseBody = await response.json();

    console.log('fetchMemberData: Response body:', responseBody);

    const { data, errors } = responseBody;

    if (errors || !data?.member) {
      console.error('fetchMemberData: GraphQL errors:', errors);
      throw new Error(errors?.[0]?.message || 'Member not found');
    }

    console.log('fetchMemberData: Member data retrieved successfully:', data.member);
    return data.member;
  } catch (error) {
    console.error('fetchMemberData: Error occurred:', error);
    throw error;
  }
};

export const createResponse = async (message, status, data = {}) => {
  console.log(
    'createResponse: Creating response with message:',
    message,
    'Status:',
    status,
    'Data:',
    data
  );
  return NextResponse.json({ message, ...data }, { status });
};

export const validateToken = async (token) => {
  console.log('validateToken: Validating token:', token);

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    console.log('validateToken: Token is valid. Decoded payload:', decoded);
    return decoded;
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
      console.error('validateToken: Token has expired');
      throw new Error('TokenExpired');
    }
    if (err instanceof jwt.JsonWebTokenError) {
      console.error('validateToken: Invalid token');
      throw new Error('InvalidToken');
    }
    console.error('validateToken: Unexpected error:', err);
    throw err;
  }
};

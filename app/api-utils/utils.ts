import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export const manageCookies = async () => {
  const cookieStore = await cookies();

  return {
    get: (name: string) => cookieStore.get(name)?.value,
    set: async (name: string, value: any, options: any) => {
      cookieStore.set(name, value, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
        ...options
      });
    },
    delete: async (name: string) => {
      cookieStore.delete(name);
    }
  };
};

const SECRET_KEY =
  process.env.JWT_SECRET ||
  (() => {
    throw new Error('JWT_SECRET is not defined');
  })();
const GRAPHQL_ENDPOINT = process.env.GRAPHQL_API_URL || 'http://localhost:3000/api/graphql';

export const fetchMemberData = async (token: any) => {
  const query = `
      query getMember($token: String) {
        member(token: $token) {
          id
          first_name
          last_name
          phone
          email
          membership
          status
          start_date
          end_date
          role
        }
      }
    `;

  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables: { token } })
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }

  const { data, errors } = await response.json();
  if (errors || !data?.member) {
    throw new Error(errors?.[0]?.message || 'Member not found');
  }

  return data.member;
};

export const createResponse = (
  message: string,
  status: number,
  data: Record<string, any> = {}
): NextResponse => NextResponse.json({ message, ...data }, { status });

export const validateToken = (token: any) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
      throw new Error('TokenExpired');
    }
    if (err instanceof jwt.JsonWebTokenError) {
      throw new Error('InvalidToken');
    }
    throw err;
  }
};

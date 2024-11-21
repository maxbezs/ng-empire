import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

const SECRET_KEY = process.env.JWT_SECRET || 'your_secret_key';

const createResponse = (message, status, data = {}) => {
  return new Response(JSON.stringify({ message, ...data }), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });
};

const clearCookie = async (name) => {
  const cookieStore = await cookies();
  cookieStore.delete(name);
};

const isTokenExpired = (decodedToken) => {
  const currentTime = Math.floor(Date.now() / 1000);
  return decodedToken.exp && decodedToken.exp < currentTime;
};

const fetchMemberData = async (token) => {
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

  const response = await fetch('http://localhost:3000/api/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query, variables: { token } })
  });

  const { data, errors } = await response.json();

  if (errors) {
    throw new Error(errors[0]?.message || 'Failed to fetch member data');
  }

  if (!data?.member) {
    throw new Error('Member not found');
  }

  return data.member;
};

export async function POST(req) {
  let tokenn;
  try {
    const { token } = await req.json();
    tokenn = token;
  } catch {
    tokenn = null;
  }

  if (!tokenn) {
    const cookieStore = await cookies();
    tokenn = cookieStore.get('token')?.value;
  }

  if (!tokenn) {
    return createResponse('No token provided', 400);
  }

  try {
    const decodedToken = jwt.verify(tokenn, SECRET_KEY);

    if (isTokenExpired(decodedToken)) {
      await clearCookie('token');
      return createResponse('Token is expired', 401);
    }

    const memberData = await fetchMemberData(tokenn);

    const cookieStore = await cookies();
    cookieStore.set({
      name: 'token',
      value: tokenn,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      sameSite: 'strict'
    });

    return createResponse('Token is valid', 200, { decodedToken, memberData });
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      await clearCookie('token');
      return createResponse('Token is expired', 401);
    }

    if (err.name === 'JsonWebTokenError') {
      await clearCookie('token');
      return createResponse('Invalid token', 401);
    }

    console.error('Unexpected error in /api/login:', err);
    return createResponse('Internal server error', 500);
  }
}

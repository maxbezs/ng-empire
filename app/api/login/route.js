import { cookies } from 'next/headers';

export async function POST(req) {
  const { token } = await req.json();

  if (!token) {
    return new Response(JSON.stringify({ error: 'Token is required' }), {
      status: 400
    });
  }

  // Set the HTTP-only cookie
  const cookieStore = await cookies();
  cookieStore.set({
    name: 'token',
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    sameSite: 'strict'
  });

  return new Response(JSON.stringify({ message: 'Login successful' }), {
    status: 200
  });
}

import { createResponse, fetchMemberData, manageCookies, validateToken } from 'app/api-utils/utils';

export async function POST(req) {
  const cookieManager = await manageCookies();
  let token;

  // Retrieve token from request body or cookies
  try {
    const body = await req.json();
    token = body.token;
  } catch {
    token = cookieManager.get('token');
  }

  if (!token) {
    return createResponse('No token provided', 400);
  }

  try {
    // Validate the token
    validateToken(token);

    // Fetch member data
    const memberData = await fetchMemberData(token);

    // Set the token cookie
    await cookieManager.set('token', token, { maxAge: 8 * 60 * 60 }); // 8 hours

    return createResponse('Token is valid', 200, { memberData });
  } catch (err) {
    // Handle token errors
    if (err.message === 'TokenExpired') {
      await cookieManager.delete('token');
      return createResponse('Token is expired', 401);
    }
    if (err.message === 'InvalidToken') {
      await cookieManager.delete('token');
      return createResponse('Invalid token', 401);
    }

    // Handle unexpected errors
    console.error('Unexpected error in /api/login:', err);
    return createResponse('Internal server error', 500);
  }
}

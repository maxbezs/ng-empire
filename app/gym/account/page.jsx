'use client';

import { useEffect, useState } from 'react';
import ClassesSection from './ClassesSection';
import Dashboard from './Dashboard';
import Header from './Header';
import LoginForm from './LoginForm';
import NotificationsSection from './NotificationsSection';
import PaymentSection from './PaymentSection';
import PersonalDataSection from './PersonalDataSection';
import QRCodeSection from './QRCodeSection';
import VisitHistory from './VisitHistory';
const GRAPHQL_ENDPOINT =
  process.env.GRAPHQL_API_URL || 'http://localhost:3000/api/graphql';

const checkSession = async () => {
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Session validation failed.');
    }

    const jsonResponse = await response.json();
    return { valid: true, memberData: jsonResponse.memberData };
  } catch (error) {
    if (
      error.message === 'Token is expired' ||
      error.message === 'Invalid token' ||
      error.message === 'No token provided'
    ) {
      console.warn('Session validation failed:', error.message);
    } else {
      console.error('Unexpected error during session check:', error);
    }
    return { valid: false, memberData: null };
  }
};

const AccountPage = () => {
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [memberData, setMemberData] = useState(null);

  useEffect(() => {
    const initializeSession = async () => {
      try {
        setError(null);
        const { valid, memberData } = await checkSession();
        if (valid) {
          setMemberData(memberData);
          setIsLoggedIn(true);
        } else {
          setError('Session expired or invalid. Please log in again.');
        }
      } catch (err) {
        console.error('Error during session initialization:', err);
        setError('An error occurred during session initialization.');
      }
    };

    initializeSession();
  }, []);

  const handleLogin = async (email, password) => {
    setError(null);
    try {
      // Send login mutation to GraphQL
      const loginResponse = await fetch(GRAPHQL_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
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

      const { data } = await loginResponse.json();

      if (!data?.login?.token) {
        throw new Error('Invalid login credentials');
      }

      const token = data.login.token;

      // Set the token in the session
      const cookieResponse = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token })
      });

      const cookieResult = await cookieResponse.json();
      if (cookieResult.message !== 'Token is valid') {
        throw new Error(cookieResult.message);
      }

      // Revalidate session
      const { valid, memberData } = await checkSession();
      if (valid) {
        setMemberData(memberData);
        setIsLoggedIn(true);
      } else {
        throw new Error('Failed to refresh session after login.');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Login failed. Check your credentials and try again.');
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        const error = await response.json();
        console.error('Failed to logout:', error.message);
        throw new Error(error.message);
      }

      console.log('Logout successful.');
      setIsLoggedIn(false);
      setMemberData(null);
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  if (!isLoggedIn) {
    return <LoginForm onLogin={handleLogin} error={error} />;
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      {memberData ? (
        <>
          <Header memberData={memberData} onLogout={handleLogout} />
          <Dashboard>
            <QRCodeSection memberData={memberData} />
            <PaymentSection memberData={memberData} />
            <PersonalDataSection memberData={memberData} />
            <ClassesSection memberData={memberData} />
            <NotificationsSection memberData={memberData} />
            <VisitHistory />
          </Dashboard>
        </>
      ) : (
        <p>Loading member data...</p>
      )}
    </div>
  );
};

export default AccountPage;

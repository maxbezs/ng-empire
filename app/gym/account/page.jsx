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

const checkSession = async () => {
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const jsonResponse = await response.json();

    const { message, memberData } = jsonResponse;

    if (
      message === 'Token is expired' ||
      message === 'Invalid token' ||
      message === 'No token provided'
    ) {
      console.warn('Session validation failed:', message);
      return { valid: false, memberData: null };
    }
    return { valid: true, memberData };
  } catch (error) {
    console.error('Error checking session:', error);
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
          console.warn('Session initialization failed.');
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
      const loginResponse = await fetch('http://localhost:3000/api/graphql', {
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
        console.warn('Invalid login credentials');
        throw new Error('Invalid login credentials');
      }
      const token = data.login.token;
      const cookieResponse = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token })
      });

      const cookieResult = await cookieResponse.json();
      if (cookieResult.message !== 'Token is valid') {
        console.warn('Failed to set token in cookies:', cookieResult.message);
        throw new Error('Failed to set token in cookies.');
      }

      const { valid, memberData } = await checkSession();

      if (valid) {
        setMemberData(memberData);
        setIsLoggedIn(true);
      } else {
        console.warn('Failed to refresh session after login.');
        setError('Failed to refresh session after login.');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Login failed. Check your credentials and try again.');
    }
  };

  const handleLogout = async () => {
    console.log('Logging out...');
    setIsLoggedIn(false);
    setMemberData(null);

    await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ token: '' }) // Clear token on the server
    });

    console.log('Logout complete. State cleared.');
  };

  if (!isLoggedIn) {
    return <LoginForm onLogin={handleLogin} error={error} />;
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      {memberData ? (
        <div>
          <Header memberData={memberData} onLogout={handleLogout} />
          <Dashboard>
            <>
              <QRCodeSection memberData={memberData} />
              <PaymentSection memberData={memberData} />
              <PersonalDataSection memberData={memberData} />
              <ClassesSection memberData={memberData} />
              <NotificationsSection memberData={memberData} />
              <VisitHistory />
            </>
          </Dashboard>
        </div>
      ) : (
        <p>Loading member data...</p>
      )}
    </div>
  );
};

export default AccountPage;

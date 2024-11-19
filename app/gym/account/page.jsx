'use client';

import { useEffect, useState } from 'react';
import ClassesSection from './ClassesSection';
import Dashboard from './Dashboard';
import Header from './Header';
import LoginForm from './LoginForm';
import NotificationsSection from './NotificationsSection';
import PaymentSection from './PaymentSection';
import PersonalDataSection from './PersonalDataSection';
import Profile from './Profile';
import QRCodeSection from './QRCodeSection';

const loginUser = async (token) => {
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ token })
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    return true; // Successful login
  } catch (error) {
    console.error('Login error:', error);
    return false;
  }
};

const login = async (email, password) => {
  try {
    const response = await fetch('http://localhost:3000/api/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `
          mutation Login($email: String!, $password: String!) {
            login(email: $email, password: $password) {
              token
              user {
                id
                email
                role
              }
            }
          }
        `,
        variables: { email, password }
      })
    });

    const { data } = await response.json();
    if (!data?.login) {
      throw new Error('Invalid login response');
    }

    await loginUser(data.login.token);
    return data.login; // Return both token and user data
  } catch (err) {
    console.error('Login error:', err);
    return null;
  }
};

const fetchMemberData = async ({ id, token }) => {
  try {
    const query = `
      query getMember($id: ID, $token: String) {
        member(id: $id, token: $token) {
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
          password
        }
      }
    `;

    const variables = id ? { id } : { token };

    const response = await fetch('http://localhost:3000/api/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query, variables })
    });

    const { data } = await response.json();
    if (!data?.member) {
      throw new Error('Member not found');
    }

    return data.member;
  } catch (err) {
    console.error('Error fetching member data:', err);
    return null;
  }
};

const ProfileWithMemberData = ({ user, token }) => {
  const [memberData, setMemberData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMemberData({ token });
        setMemberData(data);
      } catch (err) {
        setError('Failed to fetch member data');
      }
    };

    fetchData();
  }, [token]);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!memberData) {
    return <p>Loading member data...</p>;
  }

  return <Profile user={user} memberData={memberData} />;
};

const AccountPage = () => {
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const handleLogin = async (email, password) => {
    setError(null);
    const loginData = await login(email, password);

    if (loginData) {
      setUser(loginData.user);
      setToken(loginData.token);
      setIsLoggedIn(true);
    } else {
      setError('Invalid login credentials or access denied.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setToken(null);
  };

  if (!isLoggedIn) {
    return <LoginForm onLogin={handleLogin} error={error} />;
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <Header onLogout={handleLogout} />
      <Dashboard>
        <ProfileWithMemberData user={user} token={token} />
        <QRCodeSection />
        <PaymentSection />
        <ClassesSection />
        <PersonalDataSection />
        <NotificationsSection />
      </Dashboard>
    </div>
  );
};

export default AccountPage;

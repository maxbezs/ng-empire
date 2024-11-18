'use client';

import { useState } from 'react';
import ClassesSection from './ClassesSection';
import Dashboard from './Dashboard';
import Header from './Header';
import LoginForm from './LoginForm';
import NotificationsSection from './NotificationsSection';
import PaymentSection from './PaymentSection';
import PersonalDataSection from './PersonalDataSection';
import Profile from './Profile';
import QRCodeSection from './QRCodeSection';

const login = async (email, password) => {
  try {
    const response = await fetch('https://admin-panel-gym.vercel.app/api/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `
          mutation Login($email: String!, $password: String!) {
            login(email: $email, password: $password) {
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
    return data.login.user;
  } catch (err) {
    console.error(err);
    return null;
  }
};

const AccountPage = () => {
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = async (email, password) => {
    setError(null);
    const userData = await login(email, password);
    if (userData && userData.role === 'admin') {
      setUser({ ...userData, name: 'John Doe', joinDate: 'January 2023' });
      setIsLoggedIn(true);
    } else {
      setError('Access denied: Admins only.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  if (!isLoggedIn) {
    return <LoginForm onLogin={handleLogin} error={error} />;
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <Header onLogout={handleLogout} />
      <Dashboard>
        <Profile user={user} />
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

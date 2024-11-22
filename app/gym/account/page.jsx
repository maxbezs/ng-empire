'use client';
import { useEffect, useState } from 'react';
import Dashboard from './Dashboard';
import LoginForm from './LoginForm';
import { checkSessionAction, logoutAction } from './actions';

export default function AccountPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [memberData, setMemberData] = useState(null);

  useEffect(() => {
    const checkSession = async () => {
      const { valid, memberData } = await checkSessionAction();
      setIsAuthenticated(valid);
      setMemberData(memberData);
    };

    checkSession();
  }, []);

  const handleLogout = async () => {
    await logoutAction();
    setIsAuthenticated(false);
    setMemberData(null);
  };

  const handleLogin = (data) => {
    setIsAuthenticated(true);
    setMemberData(data);
  };

  if (!isAuthenticated) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <Dashboard memberData={memberData} onLogout={handleLogout} />
    </div>
  );
}

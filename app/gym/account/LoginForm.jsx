import Link from 'next/link';
import { useState } from 'react';
import { loginAction } from './actions';

const LoginForm = ({ onLogin }) => {
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      const { valid, memberData } = await loginAction(email, password);
      if (valid) {
        onLogin(memberData);
      }
    } catch (err) {
      setError('Invalid login credentials');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex min-h-96 flex-col items-center justify-center"
      aria-labelledby="login-form-title"
    >
      <h2 id="login-form-title" className="mb-4 text-2xl">
        Login
      </h2>
      {error && (
        <p className="mb-2 text-red-500" role="alert">
          {error}
        </p>
      )}
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        required
        className="mb-3 w-64 rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        required
        className="mb-3 w-64 rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <p className="py-2 text-sm">
        Not member yet?{' '}
        <Link href="/gym/join" className="text-blue-600 underline">
          Become member now!
        </Link>
      </p>
      <button type="submit" className="w-64 rounded bg-blue-600 p-2 text-white hover:bg-blue-700">
        Login
      </button>
    </form>
  );
};

export default LoginForm;

import { useState } from 'react';

const LoginForm = ({ onLogin, error }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="flex min-h-96 flex-col items-center justify-center">
      <h2 className="mb-4 text-2xl">Login</h2>
      {error && <p className="mb-2 text-red-500">{error}</p>}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        className="mb-3 w-64 rounded p-2"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
        className="mb-3 w-64 rounded p-2"
      />
      <button type="submit" className="w-64 rounded bg-blue-600 p-2 text-white hover:bg-blue-700">
        Login
      </button>
    </form>
  );
};

export default LoginForm;

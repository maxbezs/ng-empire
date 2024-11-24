'use client';
import { useState } from 'react';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    membershipType: '',
    duration: '',
    yearOfBirth: ''
  });

  const [error, setError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const validateForm = () => {
    const currentYear = new Date().getFullYear();
    const age = currentYear - formData.yearOfBirth;

    if (age < 16) {
      setError('You must be at least 16 years old to register.');
      return false;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;
    if (!passwordRegex.test(formData.password)) {
      setError(
        'Password must be at least 12 characters long, include upper and lower case letters, a number, and a symbol.'
      );
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return false;
    }

    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted successfully!', formData);
      alert('Registration successful!');
    }
  };

  return (
    <div className="flex min-h-full items-center justify-center bg-gray-100 p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-4xl rounded bg-white p-8 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-700">
          Gym Membership Registration
        </h2>

        {error && <p className="mb-4 text-center text-red-500">{error}</p>}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 w-full rounded border p-2"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Surname</label>
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              className="mt-1 w-full rounded border p-2"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g., +1234567890"
              className="mt-1 w-full rounded border p-2"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full rounded border p-2"
              required
            />
          </div>

          <div className="relative">
            <label className="block text-gray-700">Password</label>
            <input
              type={passwordVisible ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 w-full rounded border p-2"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-2 text-gray-500"
            >
              {passwordVisible ? 'Hide' : 'Show'}
            </button>
            <small className="text-gray-500">
              Password must be 12+ characters, include upper/lower case, number, and symbol.
            </small>
          </div>

          <div>
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type={passwordVisible ? 'text' : 'password'}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-1 w-full rounded border p-2"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Membership Type</label>
            <select
              name="membershipType"
              value={formData.membershipType}
              onChange={handleChange}
              className="mt-1 w-full rounded border p-2"
              required
            >
              <option value="">Select Membership Type</option>
              <option value="basic">Basic</option>
              <option value="premium">Premium</option>
              <option value="vip">VIP</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Duration</label>
            <select
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="mt-1 w-full rounded border p-2"
              required
            >
              <option value="">Select Duration</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Year of Birth</label>
            <input
              type="number"
              name="yearOfBirth"
              value={formData.yearOfBirth}
              onChange={handleChange}
              className="mt-1 w-full rounded border p-2"
              min="1900"
              max={new Date().getFullYear() - 16}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-4 w-full rounded bg-blue-500 p-2 text-white hover:bg-blue-600"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationPage;

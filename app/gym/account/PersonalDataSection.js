'use client';
import { useState } from 'react';

const PersonalDataSection = ({ memberData }) => {
  // Local state for form data
  const [formData, setFormData] = useState({
    email: memberData.email,
    phone: memberData.phone
  });

  // Determine if the form is edited
  const isEdited = formData.email !== memberData.email || formData.phone !== memberData.phone;

  // Handle input changes
  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission (prevent default behavior)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="rounded-lg bg-white p-6 shadow">
      <h2 className="text-lg font-semibold text-gray-800">Personal Data</h2>
      <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm"
          />
        </div>
        {isEdited && (
          <button type="submit" className="rounded bg-blue-500 px-4 py-2 text-white">
            Save Changes
          </button>
        )}
      </form>
    </section>
  );
};

export default PersonalDataSection;

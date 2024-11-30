import React, { useState } from 'react';
import clsx from 'clsx';

interface FormInputProps {
  label: string;
  type?: string;
  placeholder?: string;
  error?: string;
  register: any;
  showPasswordToggle?: boolean; // Optional toggle feature
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  type = 'text',
  placeholder,
  error,
  register,
  showPasswordToggle = false
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <label className="block text-gray-700">{label}</label>
      <div className="relative">
        <input
          {...register}
          type={showPasswordToggle && showPassword ? 'text' : type}
          placeholder={placeholder}
          className={clsx('mt-1 w-full rounded border p-2', error && 'border-red-500')}
        />
        {showPasswordToggle && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        )}
      </div>
      {error && <small className="text-red-500">{error}</small>}
    </div>
  );
};

export default FormInput;

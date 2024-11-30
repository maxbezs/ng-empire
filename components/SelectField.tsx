import clsx from 'clsx';
import React from 'react';

interface SelectFieldProps {
  label: string;
  options: { value: string; label: string }[];
  error?: string;
  register: any;
}

const SelectField: React.FC<SelectFieldProps> = ({ label, options, error, register }) => (
  <div>
    <label className="block text-gray-700">{label}</label>
    <select
      {...register}
      className={clsx('mt-1 w-full rounded border p-2', error && 'border-red-500')}
    >
      <option value="">Select {label}</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
    {error && <small className="text-red-500">{error}</small>}
  </div>
);

export default SelectField;

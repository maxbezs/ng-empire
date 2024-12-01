'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import FormInput from 'components/FormInput';
import SelectField from 'components/SelectField';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';

interface FormData {
  name: string;
  surname: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
  membershipType: string;
  dateOfBirth: Date;
  gender: string;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  surname: Yup.string().required('Surname is required'),
  phone: Yup.string()
    .matches(/^\+?[1-9]\d{1,14}$/, 'Enter a valid phone number')
    .required('Phone is required'),
  email: Yup.string().email('Enter a valid email').required('Email is required'),
  password: Yup.string()
    .min(12, 'Password must be at least 12 characters')
    .matches(/[A-Z]/, 'Password must contain an uppercase letter')
    .matches(/[a-z]/, 'Password must contain a lowercase letter')
    .matches(/\d/, 'Password must contain a number')
    .matches(/[@$!%*?&]/, 'Password must contain a special character')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
  membershipType: Yup.string().required('Select a membership type'),
  dateOfBirth: Yup.date()
    .typeError('Enter a valid date')
    .max(new Date(), 'Date of birth cannot be in the future')
    .required('Date of birth is required'),
  gender: Yup.string().required('Gender is required')
});

const membershipOptions = [
  {
    value: 'STANDARD',
    label: 'Standard Membership',
    priceId: 'price_1QQMz0HlVYFFZza2quYeejNY',
    price: '£34.99 / mth'
  },
  {
    value: 'STANDARD_ANNUAL',
    label: 'Standard Annual Membership',
    priceId: 'price_1QQMz0HlVYFFZza2quYeejNY',
    price: '£349.99'
  },
  {
    value: 'GYM_CLASSES',
    label: 'Gym & Classes Membership',
    priceId: 'price_1QQN01HlVYFFZza2xm0I1Ocr',
    price: '£39.99 / mth'
  },
  {
    value: 'GYM_CLASSES_ANNUAL',
    label: 'Gym & Classes Annual Membership',
    priceId: 'price_1QQN01HlVYFFZza2xm0I1Ocr',
    price: '£399.99'
  },
  {
    value: 'PERFORMANCE',
    label: 'Performance Membership',
    priceId: 'price_1QQN1SHlVYFFZza24TMr3SnJ',
    price: '£59.99 / mth'
  },
  {
    value: 'PERFORMANCE_ANNUAL',
    label: 'Performance Annual Membership',
    priceId: 'price_1QQN1SHlVYFFZza24TMr3SnJ',
    price: '£599.99'
  },
  {
    value: 'KICKSTART',
    label: '90 Day KickStart Program',
    priceId: 'price_1QQN2NHlVYFFZza2eeAxHJ8O',
    price: '£199.99'
  },
  {
    value: 'STUDENT',
    label: 'Student Termly Membership',
    priceId: 'price_1QQN2sHlVYFFZza2nM6psriy',
    price: '£100'
  }
];

const RegistrationPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true);
    setErrorMessage(null);

    try {
      const formattedData = {
        ...data,
        dateOfBirth: new Date(data.dateOfBirth) // Convert to Date
      };

      const selectedMembership = membershipOptions.find(
        (option) => option.value === data.membershipType
      );

      if (!selectedMembership) {
        throw new Error('Membership type not found');
      }
      const GRAPHQL_ENDPOINT = process.env.GRAPHQL_API_URL || 'http://localhost:3000/api/graphql';

      // Step 1: Create the member
      const response = await fetch(GRAPHQL_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: `
            mutation createMember($input: MemberInput!) {
              createMember(input: $input) {
                id
                firstName
                lastName
                phone
                email
              }
            }
          `,
          variables: {
            input: {
              firstName: formattedData.name,
              lastName: formattedData.surname,
              dateOfBirth: formattedData.dateOfBirth.toISOString(),
              gender: formattedData.gender,
              phone: formattedData.phone,
              email: formattedData.email,
              password: formattedData.password
            }
          }
        })
      });

      if (!response.ok) {
        throw new Error('Failed to create member');
      }

      const result = await response.json();

      if (result.errors) {
        throw new Error(result.errors[0]?.message || 'GraphQL error');
      }

      console.log('Member created:', result.data.createMember.id);

      // Step 2: Proceed to checkout
      await handleCheckout(selectedMembership.priceId, result.data.createMember.id);

      alert('Registration successful! Redirecting to checkout...');
    } catch (err: any) {
      console.error('Registration failed:', err);
      setErrorMessage(err.message || 'An unknown error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const handleCheckout = async (priceId: string, token: string) => {
    setLoading(true);
    const GRAPHQL_ENDPOINT = process.env.GRAPHQL_API_URL || 'http://localhost:3000/api/graphql';

    try {
      const response = await fetch(GRAPHQL_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: `
            mutation createCheckoutSession($input: CreateCheckoutSessionInput!) {
              createCheckoutSession(input: $input) {
                sessionId
                url
              }
            }
          `,
          variables: {
            input: {
              priceId, // Ensure this is defined or passed
              token // Ensure this is defined or passed
            }
          }
        })
      });

      const result = await response.json();
      console.log('Full Response:', result);

      if (result?.data?.createCheckoutSession?.url) {
        window.location.href = result.data.createCheckoutSession.url; // Redirect to Stripe Checkout
      } else {
        console.error('Error initiating checkout:', result.errors || 'Unknown error');
      }
    } catch (error: any) {
      console.error('Error initiating checkout:', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-full items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-2xl rounded-lg bg-white p-8 shadow-md"
      >
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-700">
          Register for Membership
        </h2>
        {errorMessage && <p className="mb-4 text-center text-red-500">{errorMessage}</p>}

        <div className="grid gap-4 lg:grid-cols-2">
          <FormInput label="Name" register={register('name')} error={errors.name?.message} />
          <FormInput
            label="Surname"
            register={register('surname')}
            error={errors.surname?.message}
          />
          <FormInput
            label="Phone"
            register={register('phone')}
            placeholder="e.g., +1234567890"
            error={errors.phone?.message}
          />
          <FormInput label="Email" register={register('email')} error={errors.email?.message} />
          <FormInput
            label="Password"
            type="password"
            register={register('password')}
            error={errors.password?.message}
            showPasswordToggle
          />
          <FormInput
            label="Confirm Password"
            type="password"
            register={register('confirmPassword')}
            error={errors.confirmPassword?.message}
            showPasswordToggle
          />
          <SelectField
            label="Gender"
            register={register('gender')}
            error={errors.gender?.message}
            options={[
              { value: 'Male', label: 'Male' },
              { value: 'Female', label: 'Female' }
            ]}
          />
          <SelectField
            label="Membership Type"
            register={register('membershipType')}
            error={errors.membershipType?.message}
            options={membershipOptions.map(({ value, label }) => ({ value, label }))}
          />
          <FormInput
            label="Date of Birth"
            type="date"
            register={register('dateOfBirth')}
            error={errors.dateOfBirth?.message}
          />
        </div>

        <button
          type="submit"
          className={`mt-4 w-full rounded bg-blue-500 p-2 text-white hover:bg-blue-600 ${
            loading ? 'cursor-not-allowed opacity-50' : ''
          }`}
          disabled={loading}
        >
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default RegistrationPage;

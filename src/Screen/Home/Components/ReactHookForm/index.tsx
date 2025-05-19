'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { formSchema, UserFormData } from './schema';

// Default values for the form
const DEFAULT_VALUES: UserFormData = {
  name: 'John Doe',
  phoneNumber: '+1234567890',
  password: '',
  confirmPassword: '',
  note: '',
  location: '',
  profile: '',
};

export default function CustomerRegistrationForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverErrors, setServerErrors] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const onSubmit = async (data: UserFormData) => {
    setIsSubmitting(true);
    setServerErrors([]);

    try {
      const response = await fetch(
        'http://localhost:8080/customer/customer-registration',
        {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: data.name,
            phoneNumber: data.phoneNumber,
            password: data.password,
            note: '',
            location: '',
            profile: '',
          }),
        },
      );

      const result = await response.json();

      if (!response.ok) {
        // Handle array of error messages
        if (Array.isArray(result.message)) {
          setServerErrors(result.message);
          toast.error('Registration failed. Please check the form for errors');
        } else {
          throw new Error(result.message || 'Registration failed');
        }
        return;
      }

      toast.success(result.message || 'Registration successful!');
      reset(DEFAULT_VALUES);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : 'Registration failed',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Form field configuration for cleaner rendering
  const formFields = [
    {
      name: 'name',
      label: 'Full Name',
      type: 'text',
      placeholder: 'John Doe',
    },
    {
      name: 'phoneNumber',
      label: 'Phone Number',
      type: 'text',
      placeholder: '+1 (555) 123-4567',
    },
    {
      name: 'password',
      label: 'Password',
      type: showPassword ? 'text' : 'password',
      placeholder: '••••••••',
    },
    {
      name: 'confirmPassword',
      label: 'Confirm Password',
      type: showPassword ? 'text' : 'password',
      placeholder: '••••••••',
    },
  ];

  return (
    <div className="container pt-10">
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md space-y-4 pb-5"
        >
          {serverErrors.length > 0 && (
            <div className="mb-4 rounded-md border border-red-200 bg-red-50 p-3">
              <p className="mb-1 text-sm font-medium text-red-800">
                Please fix the following errors:
              </p>
              <ul className="list-disc pl-5 text-sm text-red-700">
                {serverErrors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}

          {formFields.map((field) => (
            <div key={field.name} className="mb-4">
              <label htmlFor={field.name} className="mb-1 block font-normal">
                {field.label}
              </label>
              <input
                {...register(field.name as keyof UserFormData)}
                type={field.type}
                className={`h-10 w-full rounded border px-3 py-2 ${
                  errors[field.name as keyof typeof errors]
                    ? 'border-red-500'
                    : 'border-gray-300'
                } bg-transparent focus:ring-1 focus:ring-blue-500 focus:outline-none`}
                placeholder={field.placeholder}
              />
              {errors[field.name as keyof typeof errors] && (
                <p className="mt-1 text-sm text-red-500">
                  {errors[field.name as keyof typeof errors]?.message}
                </p>
              )}
            </div>
          ))}

          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="showPassword" className="ml-2 text-sm">
              Show Password
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`flex h-10 w-full items-center justify-center rounded-md bg-blue-600 px-6 font-medium text-white ${
              isSubmitting
                ? 'cursor-not-allowed opacity-70'
                : 'hover:bg-blue-700'
            }`}
          >
            {isSubmitting ? 'Registering...' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
}

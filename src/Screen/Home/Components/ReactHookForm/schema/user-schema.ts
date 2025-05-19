import { z } from 'zod';

export const formSchema = z
  .object({
    name: z.string().min(1, { message: 'Full name is required' }),
    note: z.string(), // No validation since we'll send empty string
    location: z.string(), // No validation since we'll send empty string
    profile: z.string(), // No validation since we'll send empty string
    phoneNumber: z
      .string()
      .min(1, { message: 'Phone number is required' })
      .regex(/^\+?[0-9\s-]+$/, { message: 'Invalid phone number format' }),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters' })
      .regex(/[A-Z]/, { message: 'Must contain at least one uppercase letter' })
      .regex(/[0-9]/, { message: 'Must contain at least one number' }),
    confirmPassword: z
      .string()
      .min(1, { message: 'Please confirm your password' }),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['confirmPassword'],
        message: 'Passwords do not match',
      });
    }
  });

export type UserFormData = z.infer<typeof formSchema>;

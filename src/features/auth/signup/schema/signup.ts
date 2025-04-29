import { z } from 'zod';

export const signupSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  fullname: z.string().min(1, 'Full name is required'),

  fullname_en: z.string().min(1, 'Full name (English) is required'),

  profile: z.string().min(1, 'Profile is required'),

  phoneNumber: z
    .string()
    .min(1, 'Phone number is required')
    .regex(/^\d+$/, 'Phone number must contain only digits'),

  gender: z.string().min(1, 'Gender is required'),

  nationality: z.string().min(1, 'Nationality is required'),

  national_id: z.string().min(1, 'National ID is required'),

  position_level: z.string().min(1, 'Position level is required'),
});

export type SignupFormValues = z.infer<typeof signupSchema>;

import { z } from 'zod';

export const individualSchema = z.object({
  firstName: z.string().min(3, 'This field is required'),
  lastName: z.string().min(3, 'This field is required'),
  numberInHousehold: z.string().email('Email address is incorrect.'),
  phoneNumber: z.string().min(3, 'This field is required'),
  maritalStatus: z.string().min(3, 'This field is required'),
  landlord: z.string().min(3, 'This field is required'),
  gender: z.string().min(3, 'This field is required'),
});

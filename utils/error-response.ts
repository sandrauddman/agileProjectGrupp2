import { ApiErrorResponse } from '@/app/types';

export const errorResponse = (message: string): ApiErrorResponse => ({
  success: false,
  message,
});

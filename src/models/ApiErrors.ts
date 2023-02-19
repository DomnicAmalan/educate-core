import { PublicError, isPublicError } from '@app/models/PublicError';

export interface ApiErrors {
  errors?: PublicError[];
}

export const isApiErrors = (i: any): i is ApiErrors =>
  i && Array.isArray(i.errors) && i.errors.every(isPublicError);

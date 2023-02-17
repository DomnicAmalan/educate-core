import { isString } from './PrimitiveTypes';

// TODO: Move to lib folder
export type PublicErrorType = 'Server' | 'Unknown';

export type PublicError = {
  type: PublicErrorType;
  message?: string;
  data?: {};
};

export const isPublicError = (i: any): i is PublicError =>
  i && i.type && isString(i.message);
/**
 * Throwable wrapper around array of {@link PublicError} returned by the server.
 */
export class MultiPublicErrors extends Error {
  errors: PublicError[];

  first(
    predicate?: (
      value: PublicError,
      index: number,
      array: PublicError[],
    ) => unknown,
  ): PublicError | undefined {
    if (this.errors.length === 0) {
      return undefined;
    }
    if (!predicate) {
      return this.errors[0];
    }
    const matches = this.errors.filter(predicate);
    return matches.length > 0 ? matches[0] : undefined;
  }

  constructor(errors: PublicError[], msg?: string) {
    super(msg);
    this.errors = errors;
  }
}

// TODO: Move to lib folder

import { ErrorOptions } from '@app/models/ErrorWithCause';
import { PublicError, PublicErrorType } from './PublicError';
export interface PubDataType {
  [key: string | number]: any;
}

const HttpStatus: { [C in PublicErrorType]: number } = {
  Server: 500,
  Unknown: 500,
};

export class ServerPublicError extends Error {
  type: PublicErrorType;
  data?: {};
  cause?: Error;

  httpStatus() {
    return HttpStatus[this.type];
  }

  toPublicError(): PublicError {
    return {
      type: this.type,
      ...(!!this.message ? { message: this.message } : {}),
      ...(!!this.data ? { data: this.data } : {}),
    };
  }

  constructor(args: {
    pubType?: PublicErrorType;
    pubMsg?: string;
    pubData?: PubDataType;
    options?: ErrorOptions;
  }) {
    super(args.pubMsg);
    this.type = args.pubType ?? 'Server';
    this.data = args.pubData;
    this.cause = args.options?.cause;
  }
}

export const publicError = (e: unknown): PublicErrorType =>
  e instanceof ServerPublicError ? e.type : 'Unknown';

import { ApiErrors } from '../ApiErrors';

export interface MutationCreateEmailAddressOtpInput {
  emailAddress: string;
}

export const isMutationCreateEmailAddressOtpInput = (
  i: any,
): i is MutationCreateEmailAddressOtpInput =>
  typeof i === 'object' && i !== null && typeof i.emailAddress === 'string';

export interface MutationCreateEmailAddressOtpResult extends ApiErrors {
  data?: MutationCreateEmailAddressOtpResultData;
}

export interface MutationCreateEmailAddressOtpResultData {
  createEmailAddressOtp: boolean;
}

import { NextApiRequest, NextApiResponse } from 'next';
import {
  isMutationCreateEmailAddressOtpInput,
  MutationCreateEmailAddressOtpResult,
} from '@app/models/api/MutationCreateEmailAddressOtp';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<MutationCreateEmailAddressOtpResult>,
) => {
  const reqBody = req.body;
  if (!isMutationCreateEmailAddressOtpInput(reqBody)) {
    res.status(400).json({
      errors: [
        {
          message: 'Failed to create email address otp',
          type: 'MutationCreateEmailAddressOtpFailed',
        },
      ],
    });
  }
  res.status(200).json({ data: { createEmailAddressOtp: true } });
};

export default handler;

import { withIronSessionApiRoute } from 'iron-session/next';
import { init } from '@paralleldrive/cuid2';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { IronSessionOptions } from 'iron-session';
import { requestLogger } from '../logger/ServerLogger';
import PrivateCfg from '../server/configs/PrivateCfg';

const Logger = requestLogger(__filename);

const length = 32;
const cuid = init({ length });

const { nodeEnv, sessionCookieName, sessionKey } = PrivateCfg;

const sessionOptions: IronSessionOptions = {
  cookieName: sessionCookieName,
  cookieOptions: {
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    secure: nodeEnv === 'production',
  },
  password: sessionKey,
};

/**
 * On any request, automatically set a new Session ID, if not set.
 * Additionally, always add a unique salt to prevent reverse engineering of cookie.
 */
const withAutoSession =
  (handler: NextApiHandler) =>
  async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    // Automatically set a unique request ID for every request.
    const requestId = cuid();

    // if (!req.session.session) {
    //   // Automatically assign a session ID if not exist.
    //   req.session.session = LiteSessionService.createAnonymous(requestId);
    // }
    req.ctx = { requestId };

    try {
      await req.session.save();
    } catch (err) {
      Logger(req.ctx).error(
        { err },
        'Unable to save session. Session is stale.',
      );
      // For now, it's ok to just continue with old salt.
      return;
    }
    await handler(req, res);
  };

export const withSession = (handler: NextApiHandler) =>
  withIronSessionApiRoute(withAutoSession(handler), sessionOptions);

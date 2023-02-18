const nodeEnv = process.env.NODE_ENV;
if (typeof nodeEnv !== 'string' || !nodeEnv) {
  throw Error(
    'Startup failed. Environment variable SESSION_KEY must be a non-empty string.',
  );
}

const sessionCookieName = process.env.SESSION_COOKIE_NAME;
if (typeof sessionCookieName !== 'string' || !sessionCookieName) {
  throw Error(
    'Startup failed. Environment variable SESSION_KEY must be a non-empty string.',
  );
}

const sessionKey = process.env.SESSION_KEY;
if (typeof sessionKey !== 'string' || !sessionKey) {
  throw Error(
    'Startup failed. Environment variable SESSION_KEY must be a non-empty string.',
  );
}

const wsPort = process.env.WS_PORT;
if (typeof wsPort !== 'string' || !wsPort) {
  throw Error(
    'Startup failed. Environment variable WS_PORT must be a non-empty string.',
  );
}

const hostName = process.env.HOSTNAME;
if (typeof hostName !== 'string' || !hostName) {
  throw Error(
    'Startup failed. Environment variable HOSTNAME must be a non-empty string.',
  );
}

const PrivateCfg = {
  hostName,
  nodeEnv,
  sessionCookieName,
  sessionKey,
  wsPort,
};

export default PrivateCfg;

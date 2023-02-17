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
const PrivateCfg = {
  nodeEnv,
  sessionCookieName,
  sessionKey,
};

export default PrivateCfg;

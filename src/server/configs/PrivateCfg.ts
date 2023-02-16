function checkEnv<T extends Record<string, string>>(env: T): T {
  const validatedEnv: Record<string, string> = {};

  for (const [key, value] of Object.entries(env)) {
    if (!process.env[value]) {
      throw new Error(`${value} environment variable is missing.`);
    }

    validatedEnv[key] = process.env[value]!;
  }

  return validatedEnv as T;
}

const PrivateCfg = checkEnv({
  PGSQL_DATABASE: 'PGSQL_DATABASE',
  PGSQL_HOST: 'PGSQL_HOST',
  PGSQL_PASSWORD: 'PGSQL_PASSWORD',
  PGSQL_PORT: 'PGSQL_PORT',
  PGSQL_USER: 'PGSQL_USER',
});

export default PrivateCfg;

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PGSQL_DATABASE: string;
      PGSQL_HOST: string;
      PGSQL_PASSWORD: string;
      PGSQL_PORT: number;
      PGSQL_USER: string;
    }
  }
}

export {};

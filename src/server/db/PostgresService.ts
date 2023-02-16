import {Pool} from 'pg';

let conn;

if (!conn) {
  conn = new Pool({
    database: process.env.PGSQL_DATABASE,
    host: process.env.PGSQL_HOST,
    password: process.env.PGSQL_PASSWORD,
    port: process.env.PGSQL_PORT,
    user: process.env.PGSQL_USER,
  });
}

export default conn;

import { Config } from 'knex';

const config: Config = {
  client: 'postgresql',
  connection: {
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
  },
  pool: {
    min: Number(process.env.DATABASE_POOL_MIN),
    max: Number(process.env.DATABASE_POOL_MAX),
  },
  migrations: {
    directory: './db/migrations',
    tableName: 'knex_migrations',
  },
  seeds: {
    directory: './db/seeds',
  },
};

export default config;

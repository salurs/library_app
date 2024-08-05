import type { Knex } from 'knex';
import dotenv from 'dotenv';
dotenv.config();

console.log('DB_HOST:', process.env.DB_HOST);

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST || '127.0.0.1',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'my_database',
    },
    migrations: {
      directory: './src/database/migrations',
    },
    seeds: {
      directory: './src/database/seeders',
    },
  },
  production: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST || '127.0.0.1',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'my_database',
    },
    migrations: {
      directory: './src/database/migrations',
    },
    seeds: {
      directory: './src/database/seeders',
    },
  },
};

export default config;

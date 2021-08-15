import dbConfig from '@backend/config/db.config';
import { Db } from '@backend/model/db';
import knex from 'knex';

let connection;

export const getDatabaseConnector = () => {
  return (): Db => {
    if (!dbConfig) {
      throw new Error(`Failed to get configuration for env:${process.env.NODE_ENV}`);
    }
    connection = knex(dbConfig);
    return connection;
  };
};

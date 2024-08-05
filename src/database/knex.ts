import knex from 'knex';
import { Model } from 'objection';
import knexConfig from '../../knexfile';

const environment = process.env.NODE_ENV || 'development';
const config = knexConfig[environment];
const connection = knex(config);

Model.knex(connection);

export default connection;

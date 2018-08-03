import { ConnectionOptions } from 'typeorm';

const defaultConnectionOptions: ConnectionOptions = {
  database: 'nuber',
  type: "postgres",
  logging: true,
  synchronize: true,
  entities: ["entities/**/*.*"],
  host: process.env.DB_ENDPOINT || 'localhost',
  username: process.env.DB_USERNAME || 'jeckson',
  password: process.env.DB_PASSWORD || '',
};

export default defaultConnectionOptions;
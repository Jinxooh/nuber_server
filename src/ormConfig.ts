import { ConnectionOptions } from 'typeorm';

const connectionOptions: ConnectionOptions = {
  database: 'nuber',
  type: "postgres",
  logging: true,
  synchronize: true,
  entities: ["entities/**/*.*"],
  host: process.env.DB_ENDPOINT,
  port: 5433,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
};

export default connectionOptions;

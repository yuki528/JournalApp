import 'dotenv/config';
import { DataSource, createConnection } from 'typeorm';
import { User } from '../models/User';
import { JournalEntry } from '../models/JournalEntry';

// DataSource instance for migration purposes
export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [User, JournalEntry],
  synchronize: false, 
  logging: false,
  migrations: ['src/migrations/**/*.ts'],
});

// createConnection for runtime connection
export const connectDB = async () => {
  await createConnection({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [User, JournalEntry],
    synchronize: false, 
    logging: false,
  });
};

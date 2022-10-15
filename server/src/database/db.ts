import { Sequelize } from 'sequelize';
import 'dotenv/config';

export const db = new Sequelize(
  process.env.DATABASE_NAME || '',
  process.env.DATABASE_USER || '',
  process.env.DATABASE_PASSWORD || '',
  {
    dialect: 'postgres',
    host: process.env.DATABASE_HOST,
    port: +(process.env.DATABASE_PORT || 5432),
  }
);

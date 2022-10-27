import { Sequelize } from 'sequelize';
import 'dotenv/config';

export const db = new Sequelize(
  process.env.DATABASE_NAME as string,
  process.env.DATABASE_USER as string,
  process.env.DATABASE_PASSWORD as string,
  {
    dialect: "postgres",
    host: process.env.DATABASE_HOST,
    port: +(process.env.DATABASE_PORT || 5432),
  }
);

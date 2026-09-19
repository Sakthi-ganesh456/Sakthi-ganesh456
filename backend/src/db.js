import mysql from 'mysql2/promise';
import 'dotenv/config';
export const db = mysql.createPool(process.env.DATABASE_URL || 'mysql://root:password@localhost:3306/rural_harvest');

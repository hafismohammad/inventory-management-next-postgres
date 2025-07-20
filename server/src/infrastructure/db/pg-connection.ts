// config/db.ts

import pkg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
  user: process.env.DB_USER,             
  host: process.env.DB_HOST,             
  database: process.env.DB_NAME,     
  password: process.env.DB_PASS,          
  port: Number(process.env.DB_PORT),                    
});



console.log('db log');

(async () => {
  try {
    await pool.connect(); 
    console.log("Connected to Inventory_db");
  } catch (err) {
    console.error("Database connection error:", (err as Error).message);
  }
})();

export default pool;

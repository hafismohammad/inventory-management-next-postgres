// config/db.ts

import pkg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",             
  host: "localhost",             
  database: "Inventory_db",     
  password: "Hafis@764",          
  port: 5432,                    
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
